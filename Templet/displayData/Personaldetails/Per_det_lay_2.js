import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Per_det_lay_2 extends Component {

    componentDidMount(){
        console.log(this.props)
    }
    
    render() {
        const { firstname, lastname, email, contact, city, file, linkedin } = this.props.personal_details;

        return (
            <>
                <div className="container mt-1">
                    <div className="container">
                        <pre className="fw-bold fs-4 text-center bg-white" style={{ "width": "420px", "border": "2px solid black", "position": "relative", "text-transform": "uppercase" }}> {firstname} {lastname} </pre>
                    </div>

                    {/* <div className="d-flex justify-content-center">
                        <img src={file} className="m-3" width="130px" height="150px" alt="profile pic" />
                    </div> */}

                    <div className="fw-bold fs-5 text-uppercase">PERSONAL DETAILs</div>

                    <div className='p-1'>
                        <div className="fw-bold p-1">Email :
                            <div className="fw-normal">{email}</div>
                        </div>
                        <div className="fw-bold p-1">Contact :
                            <div className="fw-normal" > {contact}</div>
                        </div>
                        <div className="fw-bold p-1">City :
                            <div className="fw-normal">{city}</div>
                        </div>
                        <div className="fw-bold p-1">LinkedIn :
                            <div className="fw-normal"> {linkedin}</div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

