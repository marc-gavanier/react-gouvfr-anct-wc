import React, { Component } from 'react';

class Orientation extends Component {
  render() {
    require('@gouvfr-anct/cartographie-nationale/orientation');
    return (
      <div className="vh-100">
        <fr-mediation-numerique-orientation />
      </div>
    );
  }
}

export default Orientation;
