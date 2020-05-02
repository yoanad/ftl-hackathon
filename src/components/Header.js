import React, { Component } from "react";
import { auth } from "../services/firebase";
import { Link } from "react-router-dom";
import { signOut } from "../helpers/auth";

export default class Header extends Component {
  constructor(props) {
    super(props);
    
    this.signOut = this.signOut.bind(this);

    this.state = {
        authenticated: false
    }
  }

  async componentDidMount() {
    auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({
            authenticated: true,
            loading: false,
          });
        } else {
          this.setState({
            authenticated: false,
            loading: false,
          });
        }
      })
  }

  async signOut() {
    try {
      await signOut();
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    return (
        <div>
            {this.state.authenticated
                ?  <button onClick={ this.signOut}>Signout</button>
                : <span>
                    <Link className="btn btn-primary px-5 mr-3" to="/signup">
                        Create New Account
                    </Link>
                    <br></br>
                    <Link className="btn px-5" to="/login">
                        Login
                    </Link>
                </span>
            }
        </div>
    );
  }
}
