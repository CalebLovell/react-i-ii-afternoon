import React, { Component } from 'react';
import Data from '../data';

class Infobox extends Component {
    constructor() {
        super();

        this.state = {
            Data
        }
    }

    // inputData() {
    //     let num = 1
    //     for (i=0; 
    // }

    render() {
        return (
            <div className="Infobox">
                <h2>Firstname Lastname</h2>
                <h3>From: </h3>
                <h3>Job Title: </h3>
                <h3>Employer: </h3>
                <br />
                <h3>Favorite Movies: </h3>
                <li>Movie 1</li>
                <li>Movie 2</li>
                <li>Movie 3</li>
            </div>
        )
    }
}

export default Infobox;