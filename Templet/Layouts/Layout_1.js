import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Intrest_display from '../displayData/Intrest/Intrest_display'
import Objective_display from '../displayData/Objective/Objective_display';
import Personaldetails_display from '../displayData/Personaldetails/Personaldetails_display';
import Qualification_display from '../displayData/Qualification/Qualification_display';
import Referance_display from '../displayData/Referance/Referance_display';
import Skills_display from '../displayData/Skills/Skills_display';
import Workexperience_display from '../displayData/Workexperience/Workexperience_display';

export default class Layout_1 extends Component {

    state = {
        personal_id: localStorage.getItem("personal_id"),
        personaldetails: null,
        skills: null,
        intrest: null,
        objetive: null,
        workexperience: null,
        qualification: null,
        referance: null,
    }

    componentDidMount() {

        if (this.props.branch_resume === null) {
            this.setState({
                personaldetails: this.props.branch_resume,
                skills: this.props.branch_resume,
                intrest: this.props.branch_resume,
                objective: this.props.branch_resume,
                workexperience: this.props.branch_resume,
                qualification: this.props.branch_resume,
                referance: this.props.branch_resume,
            })
        }

        else {
            this.setState({
                personaldetails: this.props.branch_resume.Personaldetails,
                skills: this.props.branch_resume.Skills,
                intrest: this.props.branch_resume.Intrest,
                objective: this.props.branch_resume.objective,
                workexperience: this.props.branch_resume.Workexperience,
                qualification: this.props.branch_resume.Qualification,
                referance: this.props.branch_resume.Referance,
            })
        }
        // console.log(this.state.personaldetails)
    }

    render() {

        return (
            <div className="container ">
                <div className="d-flex flex-row shadow pb-5">
                    <div className="container row col-5">
                        <div className="text-white bg-info d-flex flex-column justify-content-start">
                            {/* <Personaldetails_display selectedLayout={this.props.location.state.selectedLayout} branch_resume={() => this.props.branch_resume === null ? this.props.branch_resume : this.props.branch_resume.Personaldetails} /> */}
                            <Skills_display selectedLayout={this.props.location.state.selectedLayout} branch_resume={() => this.props.branch_resume === null ? this.props.branch_resume : this.props.branch_resume.Skills} />
                            {/* <Intrest_display selectedLayout={this.props.location.state.selectedLayout} branch_resume={() => this.props.branch_resume === null ? this.props.branch_resume : this.props.branch_resume.Intrest} /> */}
                        </div>
                    </div>

                    <div className="d-flex flex-column justify-content-lg-start bg-light">
                        {/* <Objective_display selectedLayout={this.props.location.state.selectedLayout} branch_resume={() => this.props.branch_resume === null ? this.props.branch_resume : this.props.branch_resume.objective} />
                        <Workexperience_display selectedLayout={this.props.location.state.selectedLayout} branch_resume={() => this.props.branch_resume === null ? this.props.branch_resume : this.props.branch_resume.Workexperience} />
                        <Qualification_display selectedLayout={this.props.location.state.selectedLayout} branch_resume={() => this.props.branch_resume === null ? this.props.branch_resume : this.props.branch_resume.Qualification} />
                        <Referance_display selectedLayout={this.props.location.state.selectedLayout} branch_resume={() => this.props.branch_resume === null ? this.props.branch_resume : this.props.branch_resume.Referance} /> */}
                    </div>
                </div>
            </div>
        );
    }
}