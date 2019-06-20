import React, { Component } from "react";
import socketIOClient from "socket.io-client";
class App extends Component {
  constructor() {
    super();
    this.streamDash = React.createRef();
    this.socket = "";
    this.state = {
      data: {},
      endpoint: "http://schulichracing.com:4001"
    };
  }
  componentDidMount() {
    
    const { endpoint } = this.state;
    this.socket = socketIOClient(endpoint);
  }


  componentDidMount() {    // Fetch the list on first mount
    this.timerID = setInterval(() => this.tick(), 100);
  }

  tick() {
    this.pullData();
    this.forceUpdate(); 
  }

  pullData() {
    socket.on("FromAPI", redis_data => this.setState({ data: redis_data.json() }));
    this.streamDash.current.insertData(this.state.data);
    //this.graphElement.current.pushData(this.state.data);
  }


  render() {
    const { response } = this.state;
    return (
        <div style={{ textAlign: "center" }}>
          {response
              ? <p>
                {response}
              </p>
              : <p>Waiting for data...</p>}
        </div>
    );
  }
}
export default App;