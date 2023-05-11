import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Int_lay_1 extends Component {

   

    render() {
        return (
            <>
                <div className="fs-5 text-capitalize">intrest</div>
                <div className='fw-bold text-capitalize' >Hobby :
                    <span className='fw-normal'>{this.props.intrest()}</span>
                </div><hr />
            </>
        )
    }
}