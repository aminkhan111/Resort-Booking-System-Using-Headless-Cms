import React, { Component } from 'react'
import items from "./data";
 

const RoomContext = React.createContext();

  class RoomProvider extends Component {

state = {
    // greeting: "hello",
    // name: "john"
};
     
  render() {
    return (
        <RoomContext.Provider value={ {...this.state} }>
            {this.props.children}
        </RoomContext.Provider>
    )
    }
}

const RoomConsumer = RoomContext.Consumer;
export { RoomProvider, RoomConsumer, RoomContext };