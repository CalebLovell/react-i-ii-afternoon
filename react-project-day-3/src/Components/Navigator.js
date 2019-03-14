import React, { Component } from 'react';
import Counter from './Counter'

class Navigator extends Component {
    render() {
        console.log(this.props.number);
        return (
            <div className="Navigator">
                <button onClick={this.props.handleClickPrev}>&lt; Previous</button>
                {/* <div className="Blue-Button">Edit</div>
                <div className="Blue-Button">Delete</div>
                <div className="Blue-Button">New</div> */}
                <button onClick={this.props.handleClickNext}>Next &gt;</button>
                <Counter number={this.props.number}/>
            </div>
        )
    }
}
export default Navigator;