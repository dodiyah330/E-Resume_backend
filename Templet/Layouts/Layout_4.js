import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Intrest_display from '../displayData/Intrest/Intrest_display'
import Personaldetails_display from '../displayData/Personaldetails/Personaldetails_display';
import Qualification_display from '../displayData/Qualification/Qualification_display';
import Referance_display from '../displayData/Referance/Referance_display';
import Skills_display from '../displayData/Skills/Skills_display';
import Workexperience_display from '../displayData/Workexperience/Workexperience_display';

export default class Layout_4 extends Component {

    state = {
        personal_id: localStorage.getItem("personal_id"),
    }
    personaldetails = null
    skills = null
    intrest = null
    objetive = null
    workexperience = null
    qualification = null
    referance = null

    componentDidMount() {
        if (this.props.branch_resume === null) {
            this.personaldetails = this.props.branch_resume
            this.skills = this.props.branch_resume
            this.intrest = this.props.branch_resume
            this.objective = this.props.branch_resume
            this.workexperience = this.props.branch_resume
            this.qualification = this.props.branch_resume
            this.referance = this.props.branch_resume
        }

        else {
            this.personaldetails = this.props.branch_resume.Personaldetails
            this.skills = this.props.branch_resume.Skills
            this.intrest = this.props.branch_resume.Intrest
            this.objective = this.props.branch_resume.objective
            this.workexperience = this.props.branch_resume.Workexperience
            this.qualification = this.props.branch_resume.Qualification
            this.referance = this.props.branch_resume.Referance
        }
    }
    
    render() {

        return (
            <div className="container">
                <div className="d-flex flex-row flex-wrap shadow">
                    <div className="col-12">
                        <Personaldetails_display selectedLayout={this.props.location.state.selectedLayout}  branch_resume={this.personaldetails} obj_branch_resume={this.objetive}/>
                    </div>
                    <div className="d-flex flex-row" >
                        <div className="col-5" style={{ "borderRight": "2px solid black" }}>
                            <Qualification_display selectedLayout={this.props.location.state.selectedLayout}  branch_resume={this.qualification}/>
                            <Skills_display selectedLayout={this.props.location.state.selectedLayout}  branch_resume={this.skills} />
                        </div>
                        <div className="m-2">
                            <Workexperience_display selectedLayout={this.props.location.state.selectedLayout} branch_resume={this.workexperience}/>
                            <Intrest_display selectedLayout={this.props.location.state.selectedLayout} branch_resume={this.intrest}/>
                            <Referance_display selectedLayout={this.props.location.state.selectedLayout}  branch_resume={this.referance}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

