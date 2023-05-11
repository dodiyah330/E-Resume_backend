import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { format } from 'date-fns'


export default class WE_lay_1 extends Component {

    render() {
        return (
            <>
                <div>
                    <div className="fs-5 pt-2 text-capitalize">Workexperience</div>
                    {this.props.workexperience().map((item) => [
                        <ul className="g-3 mx-2 d-flex pt-1" style={{ "paddingTop": "8px" }} key={item.id}>
                            <div className="d-flex flex-column">
                                <div div className="fw-bold text-info">{item.jobTitle}</div>
                                <span className="fw-bold">{item.jobCity}</span>
                                <span className="fw-normal">{item.employer}</span>
                                {this.props.branch_resume === null ?
                                    <span className="fw-normal ">{format(new Date(item.startDate), 'yyyy-MM-dd')} TO {format(new Date(item.endDate), 'yyyy-MM-dd')}</span>
                                    :
                                    <span className="fw-normal"> {item.startDate} TO {item.endDate}</span>
                                }
                                <span className="fw-normal"> {item.discription}</span>
                            </div>
                        </ul>
                    ])
                    }
                </div>
            </>
        )
    }
}
