import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
// import { format } from 'date-fns'
import Qua_lay_1 from './Qua_lay_1';
import Qua_lay_2 from './Qua_lay_2';
import Qua_lay_3 from './Qua_lay_3';
import Qua_lay_4 from './Qua_lay_4';
import Qua_lay_5 from './Qua_lay_5';
import SelectedLayoutfilter from '../../selectedLayoutfilter/SelectedLayoutfilter';

export default class Qualification_display extends Component {

    state = {
        personal_id: localStorage.getItem("personal_id"),
    }
    qualification = []
    Qua_layouts = [Qua_lay_1, Qua_lay_2, Qua_lay_3, Qua_lay_4, Qua_lay_5]

    education = () => {

        Axios.get(`http://localhost:3001/getqualification/${this.state.personal_id}`)
            .then(response => {
                this.qualification = response
                console.log(response)
            })
            .catch(error => {
                console.log(error);
            })
        return (this.qualification)
    }


    render() {
        return (
            <>
                {this.Qua_layouts.map((item, index) => [
                    <div key={index}>
                        <SelectedLayoutfilter component={item} id={this.Qua_layouts.indexOf(item)} selectedLayout={this.props.selectedLayout} qualification={() => this.props.branch_resume === null ? this.education : this.props.branch_resume()} branch_resume={this.props.branch_resume} />
                    </div>
                ])}
            </>
        )
    }
}

