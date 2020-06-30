import React from 'react'
import { connect  } from "react-redux";
import {ConnetedTaskList } from "./TaskList";

export const Dashboard = ( {groups}) => (
    <div>
        <h2>Dashboard</h2>
        {groups.map(group=>( 
           <ConnetedTaskList id={group.id} name={group.name} />
        ))}
    </div>
)

function masStateToProps(state) {
    return {
        groups:state.groups
    }
}

export const ConnectedDashboard = connect(masStateToProps) (Dashboard)