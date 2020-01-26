import React, {Component} from 'react';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        let action;
        if(this.props.algorithm === '') {
            action = <div className="alert alert-warning my-auto mx-auto" role="alert"> Select an Algorithm</div>;
        } else {
            action = <button onClick={this.props.sort} type="button" className="btn btn-primary my-auto mx-auto"><i className="fa fa-play"></i>&nbsp;&nbsp;Sort</button>;
        }

        return(
            <div className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Sorting Visualizer</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li onClick={() => this.props.generate()} className="nav-item active">
                            <a className="nav-link" href="#">Generate Random Array<span className="sr-only">(current)</span></a>
                        </li>
                        <li onClick={() => this.props.handleAlgorithm('BubbleSort')} className="nav-item">
                            <a className="nav-link" href="#">BubbleSort</a>
                        </li>
                        <li onClick={() => this.props.handleAlgorithm('MergeSort')}className="nav-item">
                            <a className="nav-link" href="#">MergeSort</a>
                        </li>
                        <li onClick={() => this.props.handleAlgorithm('QuickSort')}className="nav-item">
                            <a className="nav-link" href="#">QuickSort</a>
                        </li>
                    </ul>
                    {action}
                </div>
            </div>
        );
    }
}

export default Navbar;