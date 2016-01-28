import React from 'react';

import Route from '../../components/route';

class AppIndexRoute extends Route {

  render() {
    return <div className={this.classNames}>
      {this.t('site_introduction')}
    </div>
  }

}

export default AppIndexRoute;
