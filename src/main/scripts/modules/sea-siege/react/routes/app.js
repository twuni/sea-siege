import React from 'react';

import Route from '../components/route';

import Breadcrumbs from '../components/breadcrumbs';
import Header from '../components/header';
import Icon from '../components/icon';
import Link from '../components/link';

class AppRoute extends Route {

  renderContent() {
    return <section>
      <aside>
        <nav>
          <Link to='/cards'>
            <Icon name='credit-card'/>
            {this.t('cards')}
          </Link>
          <Link to='/games'>
            <Icon name='gamepad'/>
            {this.t('games')}
          </Link>
        </nav>
      </aside>
      <section>
        {this.props.children}
      </section>
    </section>
  }

  renderHeader() {
    return <Header>
      <Link to='/'>
        <h3>{this.t('site_title')}</h3>
        <img src='/assets/logo.png'/>
      </Link>
      <Breadcrumbs routes={this.props.routes}/>
    </Header>
  }

}

export default AppRoute;
