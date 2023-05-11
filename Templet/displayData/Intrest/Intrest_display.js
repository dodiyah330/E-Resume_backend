import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import Int_lay_1 from './Int_lay_1';
import Int_lay_2 from './Int_lay_2';
import Int_lay_3 from './Int_lay_3';
import Int_lay_4 from './Int_lay_4';
import Int_lay_5 from './Int_lay_5';
import SelectedLayoutfilter from '../../selectedLayoutfilter/SelectedLayoutfilter';

export default class Intrest_display extends Component {
    state = {
        personal_id: localStorage.getItem("personal_id"),
    }
    hobby = ''
    Int_lay = [Int_lay_1, Int_lay_2, Int_lay_3, Int_lay_4, Int_lay_5]

    intrest = () => {

        Axios.get(`http://localhost:3001/getintrest/${this.state.personal_id}`)
            .then(response => {
                this.hobby = response
            })
            .catch(error => {
                console.log(error);
            })
        return (this.hobby)
    }

    render() {
        return (
            <>
                {this.Int_lay.map((item, index) => [
                    <div key={index}>
                        <SelectedLayoutfilter component={item} id={this.Int_lay.indexOf(item)} selectedLayout={this.props.selectedLayout} intrest={() => this.props.branch_resume === null ? this.intrest : this.props.branch_resume()} />
                    </div>
                ])}
            </>
        )
    }
}



