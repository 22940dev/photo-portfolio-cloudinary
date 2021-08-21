import React, { Component } from "react";

import logo from "../assets/logo512.png";

export default class Header extends Component {
    render() {
        return <React.Fragment>
                 <header id="header">
                    <div container>
                    <div className="d-flex flex-row justify-content-center pt-4 pb-4">
                        <img src={logo} width="50px" height="50px"></img>
                            <h1>PHILIP HOANG</h1>
                    </div>
                    </div>
                </header>
            </React.Fragment>
    }
}
