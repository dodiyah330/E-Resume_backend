
import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
// import { format } from 'date-fns'
import WE_lay_1 from './WE_lay_1';
import WE_lay_2 from './WE_lay_2';
import WE_lay_3 from './WE_lay_3';
import WE_lay_4 from './WE_lay_4';
import WE_lay_5 from './WE_lay_5';
import SelectedLayoutfilter from '../../selectedLayoutfilter/SelectedLayoutfilter';

export default class Workexperience_display extends Component {
    state = {
        personal_id: localStorage.getItem("personal_id"),
    }
    workExperience = []
    WE_layouts = [WE_lay_1, WE_lay_2, WE_lay_3, WE_lay_4, WE_lay_5]

    workexperience = () => {

        Axios.get(`http://localhost:3001/getworkexperience/${this.state.personal_id}`)
            .then(response => {
                this.workexperience = response
                // this.setState({ workexperience: response.data })
            })
            .catch(error => {
                console.log(error);
            })
        return (this.workExperience)
    }

    render() {
        return (
            <>
                {this.WE_layouts.map((item, index) => [
                    <div key={index}>
                        <SelectedLayoutfilter component={item} id={this.WE_layouts.indexOf(item)} selectedLayout={this.props.selectedLayout} workexperience={() => this.props.branch_resume === null ? this.workexperience : this.props.branch_resume()} branch_resume={this.props.branch_resume} />
                    </div>
                ])}
            </>
        )
    }
}
