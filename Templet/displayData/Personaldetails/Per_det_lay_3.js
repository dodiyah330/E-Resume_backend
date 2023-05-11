import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Objective_display from '../Objective/Objective_display';

export default class Per_det_lay_3 extends Component {

    render() {
        const { firstname, lastname, email, contact, city, file, linkedin } = this.props.personal_details;

        return (
            <>
                <div className="container">
                    <div className="d-flex flex-wrap col-12 my-2" style={{ "background": "#8bcef7" }}>
                        <div className="d-flex flex-column flex-start col-9">
                            <div className="fs-4 fw-bold d-flex p-1">{firstname} {lastname}</div>
                            <div className="">
                                <Objective_display selectedLayout={this.props.location.state.selectedLayout} branch_resume={this.props.obj_branch_resume}/>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center col-3">
                            <img src={file} className="m-3" width="130px" height="150px" alt="profile pic" />
                        </div>
                    </div>
                    <div className='d-flex flex-wrap p-2 mt-2' style={{ "background": "#c8cecf" }}>

                        <p className="fw-bold col-6">email :<span className="fw-normal p-3">{email}</span></p>

                        <p className="fw-bold col-6">contact :<span className="fw-normal" > {contact}</span>
                        </p>

                        <p className="fw-bold col-6">city :<span className="fw-normal">{city}</span>
                        </p>

                        <p className="fw-bold col-6">linkedIn :<span className="fw-normal"> {linkedin}</span>
                        </p>

                    </div>
                </div>
            </>
        );
    }
}