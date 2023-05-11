import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Objective_display from '../Objective/Objective_display';

export default class Per_det_lay_4 extends Component {

    render() {
        const { firstname, lastname, email, contact, city, file, linkedin } = this.props.personal_details;

        return (
            <>
                <div className="container">
                    <div className="d-flex flex-wrap col-12" style={{ "background": `linear-gradient(175deg, #c8cecf 65%, #ffff 0%)` }}>

                        <div className="fs-3 fw-bold d-flex flex-column col-8 justify-content-center text-uppercase px-1">{firstname} {lastname}</div>

                        <img src={file} className="m-2 d-flex justify-content-end rounded-circle" width="120px" height="140px" alt="profile pic" />
                        
                    </div>

                    <div className="d-flex">
                        <div className='col-5 d-flex flex-column' style={{ "borderRight": "2px solid black" }}>

                            <div className="fw-bold fs-5 col-4 pt-1">CONTACT</div>
                            <span className="fw-bold my-1"><span>&#9993;</span><span className="fw-normal ">{email}</span> </span>

                            <span className="fw-bold my-1"><i className="fa fas fa-address-book m-1" aria-hidden="true"></i>
                                <span className="fw-normal" > {contact}</span>
                            </span>

                            <span className="fw-bold my-1"><i className="fa fas fa-map-marker m-1" aria-hidden="true"></i><span className="fw-normal">{city}</span>
                            </span>

                            <span className="fw-bold my-1"><i className="fa fas fa-linkedin m-1" aria-hidden="true"></i><span className="fw-normal"> {linkedin}</span>
                            </span>

                        </div>
                        <div className="">
                            <Objective_display selectedLayout={this.props.location.state.selectedLayout} branch_resume={this.props.obj_branch_resume}/>
                        </div>
                    </div><hr />
                </div>
            </>
        );
    }
}