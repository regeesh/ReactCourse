import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default class App extends React.Component {
  render() {
    return (
      // <div>
      //   <br />
      //   User Name : <input id="username" type="text"></input> <br />
      //   Password : <input id="password" type="password"></input> <br />
      //   <button type="button" onClick={this.login}>
      //     Login
      //   </button>
      // </div>
      <Box
        sx={{
          width: 400,
          height: "auto",
          marginLeft: 50, marginTop:10
        }}
      >
        <TextField
                  style={{ width: 400 }}
                  type="text"
                  name="username"
                  id="username"
                  label="Enter the User Name"
                  variant="outlined"
                  required
                />
                <br /><br />
        <TextField
                  style={{ width: 400 }}
                  type="Password"
                  name="password"
                  id="password"
                  label="Enter the Password"
                  variant="outlined"
                  required
                />
                <br /> <br />
        <Button
          onClick={this.login}
          style={{ textTransform: "none",width:400 }}
          variant="contained"
          size="small"
          color="primary"
        >
          Login
        </Button>
      </Box>
    );
  }

  login = () => {
    var uname = document.getElementById("username");
    var pwd = document.getElementById("password");
    if (uname.value == "" || pwd.value == "") {
      alert("Please enter user name and password");
    }
    if (uname.value != "" && pwd.value != "") {
      alert("Welcome " + uname.value);
    }
  };
}
