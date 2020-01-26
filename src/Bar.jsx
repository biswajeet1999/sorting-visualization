import React, {Component} from 'react';

class Bar extends Component {
    render() {
        return(
            <div className={"Bar"} id={`Bar-${this.props.idx}`} style={{height: `${this.props.value}%`}}></div>
        );
    }
}

export default Bar;