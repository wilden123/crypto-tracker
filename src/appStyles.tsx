import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  app: {
    backgroundColor: "#1d3db2;",
  },
  datagrid: {
    backgroundColor: "white",
  },
  red: {
    color: "red",
  },
  green: {
    color: "green",
  },
  title: {
    marginLeft: "22.5%",
    color: "white",
  },
  media: {
    height: "10%",
  },
  search: {
    marginTop: "10px",
    marginBottom: "10px",
    marginLeft: "22.5%",
  },
  field: {
    backgroundColor: "white",
    borderRadius: "5px",
  },
  table: {
    height: 500,
    width: "55%",
    paddingBottom: "20px",
    marginRight: "auto",
    marginLeft: "auto",
  },
  logo: {
    width: "50%",
  },
}));
