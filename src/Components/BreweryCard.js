import React from 'react';

class BreweryCard extends React.Component {
  render () {
    return (
      <div>
        <h2>Name: {this.props.brewery.name}</h2>
        <h4>Type: {this.props.brewery.brewery_type}</h4>
        <h4>Address:</h4>
          <p>{this.props.brewery.street}</p>
          <p>{this.props.brewery.city}</p>
          <p>{this.props.brewery.state}</p>
          <p>{this.props.brewery.postal_code}</p>
          <a href={this.props.brewery.website_url}>{this.props.brewery.website_url}</a>
      </div>
    )
  }
}

export default BreweryCard;
