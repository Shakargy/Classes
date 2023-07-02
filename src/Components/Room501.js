import React, { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import { red, green } from "@mui/material/colors";

const useStyles = makeStyles((theme) => ({
  computerContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  computer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #000",
    height: 60,
    width: 60,
  },
  downGrid: {
    display: "flex",
    justifyContent: "center",
    marginTop: "60px",
  },
  leftGrid: {
    display: "flex",
    justifyContent: "center",
    marginLeft: "-674px",
  },
  key: {
    fontSize: 14,
    textAlign: "center",
  },
  online: {
    color: red[500],
  },
  offline: {
    color: green[500],
  },
}));

const Room501 = () => {
  const classes = useStyles();
  const [status, setStatus] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/status")
      .then((response) => {
        console.log(response.data);
        setStatus(response.data);
      })
      .catch((error) => {
        console.error("Error fetching status:", error);
      });
  }, []);

  const getColor = (line) => {
    if (status && status.length > 0) {
      if (line.includes("is online")) {
        return classes.online;
      } else if (line.includes("is offline")) {
        return classes.offline;
      }
    }
    return "";
  };

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={2} />

        <Grid
          item
          xs={1}
          sx={{ display: "flex", justifyContent: "center ", mt: 7.5 }}
        >
          <Grid container spacing={1} direction="column-reverse">
            {[...Array(10)].map((_, index) => (
              <Grid
                item
                key={index}
                sx={{
                  border: "1px solid #000",
                  height: 60,
                  width: 60,
                  ml: 48.4,
                }}
              >
                <ImportantDevicesIcon className={getColor(status[index])} />
                <div className={classes.key}>{index + 1}</div>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item xs={7} className={classes.computerContainer}>
          <div className={classes.downGrid}>
            <Grid container spacing={1} direction="row">
              {[...Array(9)].map((_, index) => (
                <Grid item key={index} className={classes.computer}>
                  <ImportantDevicesIcon
                    className={getColor(status[index + 10])}
                  />
                  <div className={classes.key}>{index + 11}</div>
                </Grid>
              ))}
            </Grid>
          </div>
        </Grid>

        <Grid
          item
          xs={1}
          className={`${classes.computerContainer} ${classes.downGrid}`}
        >
          <div className={classes.leftGrid}>
            <Grid container spacing={1} direction="column-reverse">
              {[...Array(10)].map((_, index) => (
                <Grid item key={index} className={classes.computer}>
                  <ImportantDevicesIcon
                    className={getColor(status[index + 19])}
                  />
                  <div className={classes.key}>{29 - index}</div>
                </Grid>
              ))}
            </Grid>
          </div>
        </Grid>

        <Grid item xs={2} />
      </Grid>
    </div>
  );
};

export default Room501;
