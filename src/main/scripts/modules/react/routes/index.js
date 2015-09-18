import Route from '../components/route';

import Breadcrumbs from '../components/breadcrumbs';
import Header from '../components/header';
import Icon from '../components/icon';
import Link from '../components/link';

class IndexRoute extends Route {

  static get breadcrumb() {
    return '…';
  }

  renderContent() {
    return <section>
      <aside>
        <nav>
          <Link to='cards'>
            <Icon name='credit-card'/>
            {this.t('cards')}
          </Link>
          <Link to='games'>
            <Icon name='gamepad'/>
            {this.t('games')}
          </Link>
        </nav>
      </aside>
      <section>
        {this.renderChildRoute()}
      </section>
    </section>
  }

  renderHeader() {
    return <Header>
      <Link to='index'>
        <h3>{this.t('guild_network')}</h3>
        <img src='/assets/logo.png'/>
      </Link>
      <Breadcrumbs/>
    </Header>
  }

}

export default IndexRoute;
