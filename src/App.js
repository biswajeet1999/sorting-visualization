import React, {Component} from 'react';
import './App.css';
import Navbar from './Navbar';
import Bar from './Bar';
import BubbleSort from './algorithms/BubbleSort';
import MergeSort from './algorithms/MergeSort'
import QuickSort from './algorithms/QuickSort';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      algorithm: '',
      data: [],
      sorted: false
    };
    this.setAlgorithm = this.setAlgorithm.bind(this);
    this.generateRandomArray = this.generateRandomArray.bind(this);
    this.sort = this.sort.bind(this);
    this.updateArray = this.updateArray.bind(this);
    this.colorReset = this.colorReset.bind(this);
  }

  setAlgorithm(algo) {
    if(this.state.sorted != 'sorting')
    this.setState({algorithm: algo});
  }

  colorReset() {
    for(let i = 0; i < this.state.data.length; i++) {
      document.getElementById(`Bar-${i}`).style.backgroundColor = '#019031';
    }
  }

  generateRandomArray() {
    let newData = [];
    let min = 5;
    let max = 100;
    for(let i = 0; i < 150; i++) {
      newData.push(Math.floor(Math.random() * (max - min) + min));
    }
    this.setState({data: newData, sorted: false, algorithm: ''});
    this.colorReset();
  }
  
  updateArray(newArray) {
    this.setState({data: newArray});
  }

  async sort() {
    this.setState({sorted: 'sorting'});
    if(this.state.algorithm === '') {

    } else if (this.state.algorithm === 'BubbleSort' && !this.state.sorted) {
      await BubbleSort(this.state.data, this.updateArray);
    } else if (this.state.algorithm === 'QuickSort' && !this.state.sorted) {
      await QuickSort(this.state.data, this.updateArray, 0, this.state.data.length - 1)
    } else if (this.state.algorithm === 'MergeSort' && !this.state.sorted) {
      await MergeSort(this.state.data, this.updateArray, 0, this.state.data.length - 1);
      for (let i = 0; i < this.state.data.length; i++) {
        document.getElementById(`Bar-${i}`).style.backgroundColor = '#4834DF';
      }
    }
    this.setState({sorted: true});
  }

  componentDidMount() {
    this.generateRandomArray();
  }

  render() {
    return(
      <div className="App">
        <Navbar handleAlgorithm={this.setAlgorithm} generate = {this.generateRandomArray} sort = {this.sort} algorithm = {this.state.algorithm}/>
        <div className="bar-area">
          {this.state.data.map((data, idx) => {
            return <Bar key={idx} idx={idx} value = {data}/>;
          })}
        </div>
      </div>
    );
  }
}

export default App;
