import React, { Component } from 'react';

class Counter extends Component {
    render() {
        return (
            <div className="Counter">
                {this.props.number}/25
            </div>
        )
    }
}

export default Counter;