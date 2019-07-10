import React from 'react';
import Search from '../Components/Search';
import BreweryCard from '../Components/BreweryCard';


class BreweriesContainer extends React.Component {
  state = {
    breweries: []
  }

  componentDidMount () {
    fetch("https://api.openbrewerydb.org/breweries")
    .then(res => res.json())
    .then(breweries => this.setState({breweries}))
  }

  render () {
    return (
      <div>
        {this.state.breweries.map(brewery => <BreweryCard key={brewery.id} brewery={brewery}/>)}
      </div>
    )
  }
}

export default BreweriesContainer;
