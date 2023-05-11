import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import Skl_lay_1 from './Skl_lay_1';
import Skl_lay_2 from './Skl_lay_2';
import Skl_lay_3 from './Skl_lay_3';
import Skl_lay_4 from './Skl_lay_4';
import Skl_lay_5 from './Skl_lay_5';
import SelectedLayoutfilter from '../../selectedLayoutfilter/SelectedLayoutfilter';


export default class Skills_display extends Component {
    state = {
        personal_id: localStorage.getItem("personal_id"),
    }
    skill = []
    Skill_layouts = [Skl_lay_1, Skl_lay_2, Skl_lay_3, Skl_lay_4, Skl_lay_5]
    componentDidMount ()  {
        fetch(`http://localhost:3001/getskills/${this.state.personal_id}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.skill = result
                    // this.setState({
                    //     skills: result
                    // });
                    // console.log(result)
                },

                (error) => {
                    console.log(error)

                }
            )
    }

    // componentDidMount(){
    //     console.log(this.props.branch_resume())
    // }

    // componentDidMount() {

    //     Axios.get(`http://localhost:3001/getskills/${this.state.personal_id}`)
    //         .then(response => {
    //             // this.setState({skills:response.data})
    //             this.skills= response.data
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    //     // console.log(this.state.skills)
    // }

    render() {
        return (
            <>
                {this.Skill_layouts.map((item, index) => [
                    <div key={index}>
                        <SelectedLayoutfilter component={item} id={this.Skill_layouts.indexOf(item)} selectedLayout={this.props.selectedLayout} demo_skills={ this.props.branch_resume()} user_skills= {this.skills} />
                    </div>
                ])}
            </>
        )
    }
}




