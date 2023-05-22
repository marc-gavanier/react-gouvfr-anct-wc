import React, { Component } from 'react';

const urlPermanences = process.env.REACT_APP_API_URL + '/permanences';

class Carte extends Component {
  render() {
    require('@gouvfr-anct/cartographie-nationale/cartographie');
    return (
      <div className="vh-100">
        <fr-mediation-numerique-cartographie source={urlPermanences}/>
      </div>
    );
  }
}

export default Carte;
