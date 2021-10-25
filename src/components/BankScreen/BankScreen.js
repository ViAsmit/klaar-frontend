import { Typography } from "@mui/material";
import React from "react";

function BankScreen(props) {
  const bank = props.location.state.bank;
  console.log(bank);
  return (
    <center>
      <div style={{ margin: "20px" }}>
        <br />
        <br />
        <h1>Bank Details</h1>
        <img
          style={{ border: "3px solid black", width: "400px", height: "400px" }}
          src="https://png.pngtree.com/element_our/png_detail/20181229/vector-bank-icon-png_302746.jpg"
          alt="bank"
        />
        <br />
        <br />
        <Typography variant="h5" gutterbottom>
          <b>Bank Id:</b> {bank.bank_id}
        </Typography>
        <Typography variant="h5" gutterbottom>
          <b>Bank Name:</b> {bank.bank_name}
        </Typography>
        <Typography variant="h5" gutterbottom>
          <b>Bank Branch:</b> {bank.branch}
        </Typography>
        <Typography variant="h5" gutterbottom>
          <b>IFSC Code:</b> {bank.ifsc}
        </Typography>
        <Typography variant="h5" gutterbottom>
          <b>Bank Address:</b> {bank.addres}
        </Typography>
        <Typography variant="h5" gutterbottom>
          <b>Bank City:</b> {bank.city}
        </Typography>
        <Typography variant="h5" gutterbottom>
          <b>Bank District:</b> {bank.district}
        </Typography>
        <Typography variant="h5" gutterbottom>
          <b>Bank State:</b> {bank.state}
        </Typography>
      </div>
    </center>
  );
}

export default BankScreen;
