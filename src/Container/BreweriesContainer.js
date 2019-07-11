import React from 'react';
// import Search from '../Components/Search';
import BreweryCard from '../Components/BreweryCard';
import BreweryDetails from '../Components/BreweryDetails';
import {Route, Switch} from 'react-router-dom';
// import Welcome from '../Components/Welcome';



class BreweriesContainer extends React.Component {

  state = {
    breweries: []
  }

  componentDidMount () {
    fetch("https://api.openbrewerydb.org/breweries")
    .then(res => res.json())
    .then(breweries => this.setState({breweries}))
  }

  renderBreweryDetails = (routerProps) => {
    if (this.state.breweries) {
      const id = parseInt(routerProps.match.params.id);
      const foundBrewery = this.state.breweries.find(breweryObj => breweryObj.id === id);
      return <BreweryDetails brewery={foundBrewery} />
    } else {
      return null
    }
  }

  render () {
    return (
      <div>
        <Switch>
          <Route path='/breweries/:id' render={this.renderBreweryDetails} />
        </Switch>
        <div>
          {this.state.breweries.map(brewery => <BreweryCard key={brewery.id} brewery={brewery}/>)}
        </div>
      </div>
    )
  }
}

export default BreweriesContainer;
