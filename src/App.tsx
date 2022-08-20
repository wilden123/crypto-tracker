import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useStyles } from "./appStyles";
import TextField from "@mui/material/TextField";
import { DataGrid } from "@mui/x-data-grid";
// import "./styles.tsx";
import axios from "axios";
function App() {
  const [coins, setCoins] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1000&page=1&sparkline=false"
      )
      .then((response) => {
        console.log(response.data);
        setCoins(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setSearch(e.target.value);
  };

  const filterCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const classes = useStyles();

  const columns = [
    {
      field: "image",
      headerName: "Logo",
      renderCell: (params: any) => (
        <img alt="logo" src={params.value} className={classes.logo} />
      ),
    },

    { field: "name", headerName: "Name", width: 100 },
    {
      field: "symbol",
      headerName: "Symbol",
      width: 75,
      renderCell: (params: any) => <span>{params.value.toUpperCase()}</span>,
    },
    {
      field: "current_price",
      headerName: "Price",
      width: 100,
      renderCell: (params: any) => (
        <span>${params.value.toLocaleString()}</span>
      ),
    },
    {
      field: "price_change_percentage_24h",
      headerName: "24%",
      width: 100,
      renderCell: (params: any) => {
        return (
          <span className={params.value < 0 ? classes.red : classes.green}>
            {params.value} %
          </span>
        );
      },
    },
    {
      field: "market_cap",
      headerName: "Market Cap",
      width: 130,
      renderCell: (params: any) => (
        <span>${params.value.toLocaleString()}</span>
      ),
    },
    {
      field: "total_volume",
      headerName: "Volume",
      width: 150,
      renderCell: (params: any) => (
        <span>${params.value.toLocaleString()}</span>
      ),
    },
  ];

  return (
    <div className={classes.app}>
      <h1 className={classes.title}>Search For Any Crypto</h1>
      <div className={classes.search}>
        <TextField
          id="filled-basic"
          label="Search For Any Crypto"
          variant="filled"
          onChange={handleChange}
          className={classes.field}
        />
      </div>
      <div className={classes.table}>
        <DataGrid
          rows={filterCoins}
          columns={columns}
          pageSize={10}
          className={classes.datagrid}
          rowsPerPageOptions={[10]}
        />
      </div>
    </div>
  );
}

export default App;
