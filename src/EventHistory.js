import React from "react"

class EventHistory extends React.Component {
  render() {
    return (
      <ul>
        {this.props.attended.map(attended => (
          <li>{attended.title}</li>
        ))}
      </ul>
    )
  }
}

export default EventHistory