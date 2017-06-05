import React from 'react';

export default class tableRowRace extends React.Component {
  render() {
    return (
     <h2>{this.props.round} {this.props.raceName}</h2>
    )
  }
}
