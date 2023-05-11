import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import Per_det_lay_1 from './Per_det_lay_1';
import Per_det_lay_2 from './Per_det_lay_2';
import Per_det_lay_3 from './Per_det_lay_3';
import Per_det_lay_4 from './Per_det_lay_4';
import Per_det_lay_5 from './Per_det_lay_5';
import SelectedLayoutfilter from '../../selectedLayoutfilter/SelectedLayoutfilter';

export default class Personaldetails_display extends Component {

    state = {
        personal_id: localStorage.getItem("personal_id"),
    }
    personal_details = []


    Per_det_layouts = [Per_det_lay_1, Per_det_lay_2, Per_det_lay_3, Per_det_lay_4, Per_det_lay_5]

    personal_details = () => {

        Axios.get(`http://localhost:3001/getPersonaldetails/${this.state.personal_id}`)
            .then(response => {
                console.log(response)
                this.personal_details = response.data.result
            })

            .catch(error => {
                console.warn(error);
            })
        return (this.state.personal_details)
    }

    render() {
        return (
            <>
                <div>
                    {this.Per_det_layouts.map((item, index) => [
                        <div key={index}>
                            <SelectedLayoutfilter component={item} id={this.Per_det_layouts.indexOf(item)} selectedLayout={this.props.selectedLayout} personal_details={() => this.props.branch_resume === null ? this.personal_details : this.props.branch_resume()} />
                        </div>
                    ])}
                </div>
            </>
        );
    }
}

