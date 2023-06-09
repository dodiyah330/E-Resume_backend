import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Skl_lay_2 extends Component {

    render() {
        return (
            <>
                <div className=" fw-bold fs-5 text-uppercase" style={{ "paddingTop": "9px" }}>Skills</div>
                <div className="d-flex flex-wrap" style={{ "paddingTop": "9px" }}>
                    {this.props.skills.map((item) => [
                        <div className="row" key={item.id}>
                            <span className="fw-bold d-flex mx-1"> {item.skills}:
                                <span className="fw-normal">{item.level}</span>
                            </span>
                        </div>
                    ])}
                </div>

            </>
        )
    }
}

