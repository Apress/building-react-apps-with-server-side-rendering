import React from 'react';
// import '../Resources/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString()
    }
  }

  tick() {
    this.setState(() => {
      return ({
        time: new Date().toLocaleTimeString()
      });
    });
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <div className="jumbotron text-center">
          <h1>Digital Clock with React, Next.js, and Bootstrap</h1>
        </div>
        <div className="text-center">
          <p>Time: {this.state.time}</p>
        </div>
      </div>
    );
  }
}

export default App;
