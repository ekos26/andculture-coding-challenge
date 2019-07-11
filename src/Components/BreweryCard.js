import React from 'react';
import {Link} from 'react-router-dom';
// import {Route, Switch} from 'react-router-dom';
// import Welcome from '../Components/Welcome';
// import BreweryDetails from './BreweryDetails';


class BreweryCard extends React.Component {

  // state = {
  //   clicked: false
  // }
  //
  // handleClick = () => {
  //   this.setState({clicked: !this.state.clicked})
  // }

  // showDetails = () => {
  //   return <BreweryDetails brewery={this.props.brewery}/>
  // }


  render () {
    // console.log('card', this.props.brewery);
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
            <Link to={`/breweries/${this.props.brewery.id}`}>
              <button>See Details</button>
            </Link>
        </div>
    )
  }
}

export default BreweryCard;
