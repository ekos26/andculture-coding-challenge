import React from 'react';

class BreweryDetails extends React.Component {
  render () {
    return (
      <div>
        <h2>Name: {this.props.brewery.name}</h2>
        <h4>Address:</h4>
          <p>{this.props.brewery.street}</p>
          <p>{this.props.brewery.city}</p>
          <p>{this.props.brewery.state}</p>
          <p>{this.props.brewery.postal_code}</p>
        <h5>Longitude: {this.props.brewery.longitude}</h5>
        <h5>Latitude: {this.props.brewery.latitude}</h5>
      </div>
    )
  }
}

export default BreweryDetails;
