import React, { Component } from 'react';

class Coordinateurs extends Component {
  render() {
    require('@gouvfr-anct/cartographie-nationale/coordinateurs');
    // require('@gouvfr-anct/coordinateurs/main.77f65057891c263e');
    // require('@gouvfr-anct/coordinateurs/polyfills.506bee4f0cd2899d');
    // require('@gouvfr-anct/coordinateurs/runtime.664128a9884bc2e4');
    return (
      <div className="vh-100">
        <fr-mediation-numerique-coordinateurs />
      </div>
    );
  }
}

export default Coordinateurs;
