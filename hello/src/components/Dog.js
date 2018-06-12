import React from 'react';
// import ReactDOM from 'react-dom';

class Dog extends React.Component {
  render() {
    const {
      url,
      ada,
      name
    } = this.props.data;

    return (
      <div className='dog'>
        <div className='dog-card'>
          <img style={{width: '50%'}} className='dog card' src={url} alt={ada} />
          <p>I'm {name}</p>
        </div>
      </div>
    )
  }
}

export default Dog;
