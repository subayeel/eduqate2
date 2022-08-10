import React from 'react'
import {Section} from "../Global";
import { MobileMenu } from './Navbar.elements';


function SideMenu(props) {
    var state = props.state;
    var setState = props.setState;
    
  return (
    <MobileMenu state={state} setState={setState}>

        <ul>
            <li>Home</li>
            <hr></hr>
            <li>Topics</li>
            <hr></hr>
            <li>Courses</li>
            <hr></hr>
            <li>Misconception</li>
            <hr></hr>
        </ul>
    </MobileMenu>
  )
}

export default SideMenu