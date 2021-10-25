import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useHistory } from "react-router";

export default function BankCard({ bank }) {
  const history = useHistory();

  return (
    <Card
      onClick={() =>
        history.push({
          pathname: `/banks/${bank.bank_id}`,
          state: {
            bank: bank,
          },
        })
      }
      sx={{
        marginTop: "30px",
        padding: "0px 25px",
        display: "flex",
        height: "170px",
        background: "#DCDCDC",
        justifyContent: "space-between",
      }}
    >
      <CardContent>
        <Typography component="div" variant="h5">
          <b>Name:</b>
          {bank.bank_name}
        </Typography>
        <Typography component="div" variant="h5">
          <b>IFSC:</b>
          {bank.ifsc}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          <b>Branch:</b>
          {bank.branch}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          <b>Address:</b>
          {bank.address + " " + bank.city + " " + bank.state}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://png.pngtree.com/element_our/png_detail/20181229/vector-bank-icon-png_302746.jpg"
        alt="Live from space album cover"
      />
    </Card>
  );
}
