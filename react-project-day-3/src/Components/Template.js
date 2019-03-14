import React, { Component } from 'react';
import Infobox from './Infobox';
import Navigator from './Navigator';

class Template extends Component {
    constructor() {
        super();

        this.state = {
            index: 1,
        }
    }

    handleClickNext = () => {
        if (this.state.index < 25) {
            this.setState({index: this.state.index+1})
            console.log(`Click increased Counter`)
        } else if (this.state.index = 25) {
            this.setState({index: 1})
            console.log(`Reset Counter`)
        } else {
            console.log(`Click could not increase Counter`)
        }
    }

    handleClickPrev = () => {
        if (this.state.index > 1) {
            this.setState({index: this.state.index-1})
            console.log(`Click decreased Counter`)
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
                    <Infobox />
                    <Navigator number={this.state.index} handleClickPrev={this.handleClickPrev} handleClickNext={this.handleClickNext}/>
                </body>
            </div>
        );
    }
}

export default Template;