import React from 'react';
// import ReactDOM from 'react-dom';

import randomGreeting from './randomGreeting';

class Greeting extends React.Component {
  render() {
    const greeting = randomGreeting();
    return (

      <div className='greeting'>
        {Salution(greeting)}
      </div>
    )
  }
}

function Salution(greetings) {
  return <p>{greetings}, world </p>
}

export default Greeting;