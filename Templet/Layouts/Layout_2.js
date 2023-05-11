import React, { createRef } from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Intrest_display from '../displayData/Intrest/Intrest_display'
import Objective_display from '../displayData/Objective/Objective_display';
import Personaldetails_display from '../displayData/Personaldetails/Personaldetails_display';
import Qualification_display from '../displayData/Qualification/Qualification_display';
import Referance_display from '../displayData/Referance/Referance_display';
import Skills_display from '../displayData/Skills/Skills_display';
import Workexperience_display from '../displayData/Workexperience/Workexperience_display';

export default class Layout_2 extends Component {

    state = {
        personal_id: localStorage.getItem("personal_id")
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
                <div className="d-flex flex-row shadow col-12">
                    <div className="container row col-7">
                        <div className="d-flex flex-column justify-content-start" style={{"background":"#cce0d0"}}>
                            
                            <Personaldetails_display selectedLayout={this.props.location.state.selectedLayout}  branch_resume={this.personaldetails}/>
                            <Intrest_display selectedLayout={this.props.location.state.selectedLayout} branch_resume={this.intrest}/>
                            <Skills_display selectedLayout={this.props.location.state.selectedLayout} branch_resume={this.skills}/>
                        </div>
                    </div>

                    <div className="d-flex col-7 flex-column justify-content-lg-start bg-light px-3">
                        <Objective_display selectedLayout={this.props.location.state.selectedLayout} branch_resume={this.objetive}/>
                        <Workexperience_display selectedLayout={this.props.location.state.selectedLayout} branch_resume={this.workexperience} />
                        <Qualification_display selectedLayout={this.props.location.state.selectedLayout} branch_resume={this.qualification}/>
                        <Referance_display selectedLayout={this.props.location.state.selectedLayout} branch_resume={this.referance}/>
                    </div>

                </div>
            </div>
        );
    }
}

