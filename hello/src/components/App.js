import React from 'react';
// import ReactDOM from 'react-dom';
import Dog from './Dog';
import Greeting from './Greeting';

import randomGreeting from './randomGreeting';
import randomPhoto from './randomPhoto';

import './style.css';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      greeting: 'Hello World',
      photo: {
        url: "https://instagram.fsea1-1.fna.fbcdn.net/vp/8e35f2fd4826a0a61c022f39f5e3c955/5BBD928F/t51.2885-15/e35/32203161_203989477066095_4634933611248746496_n.jpg",
        name: 'Cinco',
        ada: 'Cinco'
      }
    }
  }

  handleClick = () => {
    const greeting = randomGreeting();
    const photo = randomPhoto();
    console.log('I was clicked', greeting);
    this.setState({
      greeting,
      photo
    })
  }

  render() {
    return (
      <div>
        <Greeting message={this.state.greeting} />
        <Dog data={this.state.photo} />
          <button
            className='button'
            onClick={this.handleClick}>
              Change Greeting
          </button>
      </div>
    )
  }
}

export default App;
