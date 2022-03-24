import React from "react"

//individual events attended
class EventAttended extends React.Component {
  render() {
    return <li>{this.props.attended.title}</li>
  }
}

export default EventAttended