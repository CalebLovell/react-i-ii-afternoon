import React, { Component } from 'react';
import Navigator from './Navigator';
import Data from '../Data';

class Template extends Component {
    constructor() {
        super();

        this.state = {
            Data,
            index: 1
        }
    }

    handleClickNext = () => {
        if (this.state.index < 25) {
            this.setState({ index: this.state.index + 1 })
            console.log(`Click increased Counter`)
        } else if (this.state.index === 25) {
            this.setState({ index: 1 })
            console.log(`Reset Counter!`)
        } else {
            console.log(`Click could not increase Counter`)
        }
    }
    
    handleClickPrev = () => {
        if (this.state.index > 1) {
            this.setState({ index: this.state.index - 1 })
            console.log(`Click decreased Counter`)
        } else if (this.state.index === 1) {
            this.setState({ index: 25 })
            console.log(`Go to end!`)
        } else {
            console.log(`Click could not decrease Counter`)
        }
    }

    render() {
        return (
            <div>
                <header className="App-header">
                    <h1 className="Home">Home</h1>
                </header>
                <body className="Body">
                    <div className="Infobox">
                        <div className="info">
                            <h2>{Data[this.state.index-1].name.first} {Data[this.state.index-1].name.last}</h2>
                            <div className="info-specs-1">
                                <h3>From: {Data[this.state.index-1].country}</h3>
                                <h3>Job Title: {Data[this.state.index-1].title} </h3>
                                <h3>Employer: {Data[this.state.index-1].employer}</h3>
                            </div>
                            <div className="info-specs-2">
                                <h3>Favorite Movies: </h3>
                                <li>{Data[this.state.index-1].favoriteMovies[0]}</li>
                                <li>{Data[this.state.index-1].favoriteMovies[1]}</li>
                                <li>{Data[this.state.index-1].favoriteMovies[2]}</li>
                            </div>
                        </div>
                    </div>
                    <Navigator number={this.state.index} handleClickPrev={this.handleClickPrev} handleClickNext={this.handleClickNext} />
                </body>
            </div>
        );
    }
}

export default Template;