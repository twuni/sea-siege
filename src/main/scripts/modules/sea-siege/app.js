import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';

import router from './react/router';

class App {

  renderTo(outlet) {
    if(typeof(outlet) === 'string') {
      outlet = document.getElementById(outlet);
    }
    render(<Router history={browserHistory} routes={router}/>, outlet);
  }

}

export default App;
