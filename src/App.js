import React from 'react';
import logo from './logo.svg';
import './App.css';
import {data} from './data/data'
import Card from './components/Card'

const colorsToPick = [
  {color: 'blue'},
  {color: 'red'},
  {color: 'yellow'},
  {color: 'green'},
]

class App extends React.Component {
  constructor() {
    super();
    this.state={
      data: data,
      title: '',
      description: '',
      selectedColor: 'blue',
    }
    this.createNewCard = this.createNewCard.bind(this);
  }

  checkSelectedColor = color => {
    this.setState({selectedColor: color})
  }

  updateTitle(value) {
    const adding = document.querySelector('.container-container')
    if (value.length > 0) {
      console.log(value.length);
      this.setState({ show: true })
    } else {
      this.setState({ show: false})
    }

    this.setState({title: value})
  }

  updateDescription(value) {
    this.setState({description: value})
  }

  createNewCard() {
    const newCard = {
        title: this.state.title,
        date: Date.now(),
        description: this.state.description,
        color: this.state.selectedColor
      }

      let newData = this.state.data;
      newData = [newCard,...newData]
      this.setState({data: newData})
  }

  render () {
    return (
    <div className="App">
      <div className='input-wrapper'>
        <input className='input-title' type='text' placeholder='Title' onChange={(event) => this.updateTitle(event.target.value)}/>
        <div className='container-container' style={{ display: this.state.show ? 'block' : 'none'}}>
          <textarea className='input-desc' type='text' placeholder='Description.' onChange={(event) => this.updateDescription(event.target.value)}>

          </textarea>
          <div className='button-container'
          >
            <p>
              {
                colorsToPick.map((color, index) => {
                  const selectedClass = this.state.selectedColor === color.color ? `color-picker select ${color.color}` : `color-picker`
                  return (
                    <a key={index} onClick={() => this.checkSelectedColor(color.color)}>
                      <span className={selectedClass} style={{backgroundColor: color.color}}></span>
                    </a>
                  )
                })
              }
            </p>
            <button className='button' onClick={this.createNewCard}>Create new</button>
          </div>
        </div>
      </div>
      <div  className='card-wrapper'>
      { this.state.data.map((node) => {
        return (
          <Card key={node.date} node={node} color={node.color}/>
        )})
      }
      </div>
    </div>)
  }
}
export default App;
