import React from "react";

export default class App extends React.Component {

  render() {
    return (
      <div>
        <br />
        User Name : <input id="username" type="text"></input> <br />
        Password : <input id="password" type="password"></input> <br />
        <button type="button" onClick={this.login}>
          Login
        </button>
      </div>
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
