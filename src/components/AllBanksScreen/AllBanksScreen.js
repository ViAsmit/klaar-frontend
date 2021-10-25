import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import SearchAppBar from "./Appbar.js";
import Stepper from "./Stepper.js";
import BankCard from "./BankCard.js";
import { makeStyles } from "@mui/styles";
import CircularProgress from "@mui/material/CircularProgress";

import { Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  container: {},
}));

function AllBanksScreen() {
  const [banks, setbanks] = useState([]);
  const [page, setpage] = useState(0);
  const [city, setcity] = useState(1);
  const [search, setsearch] = useState("");
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const cityMap = {
      1: "KANPUR",
      2: "LUCKNOW",
      3: "BANGALORE",
      4: "MUMBAI",
      5: "PATNA",
    };
    setloading(true);
    fetch(`https://vast-shore-74260.herokuapp.com/banks?city=${cityMap[city]}`)
      .then((res) => res.json())
      .then(function (data) {
        setbanks(data);
        setloading(false);
      });
  }, [city]);

  const classes = useStyles();

  return (
    <>
      <SearchAppBar
        city={city}
        setcity={setcity}
        search={search}
        setsearch={setsearch}
      />
      <Container classname={classes.container}>
        <br />
        <Typography variant="h4" gutterBottom>
          All Banks
        </Typography>
        {loading && (
          <center>
            <CircularProgress />
          </center>
        )}
        {banks.length > 0 &&
          banks
            .filter(
              (bank) =>
                bank.address.toLowerCase().includes(search.toLowerCase()) ||
                bank.bank_name.toLowerCase().includes(search.toLowerCase()) ||
                bank.ifsc.toLowerCase().includes(search.toLowerCase())
            )
            .slice(15 * page, 15 * (page + 1))
            .map((bank) => <BankCard bank={bank} />)}
        <br />
        <br />
        <center>
          <Stepper
            length={Math.min(Math.ceil(banks.length / 15), 30)}
            page={page}
            setpage={setpage}
          />
        </center>
      </Container>
    </>
  );
}

export default AllBanksScreen;
