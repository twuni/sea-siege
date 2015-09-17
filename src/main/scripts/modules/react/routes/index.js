import Route from '../components/route';

import Header from '../components/header';
import Icon from '../components/icon';
import Link from '../components/link';

class IndexRoute extends Route {

  render() {
    return <section className={this.classNames}>
      <Link to='index'>
        <Header title={this.t('guild_network')}>
          <img src='/assets/logo.png'/>
        </Header>
      </Link>
      <section>
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
    </section>
  }

}

export default IndexRoute;
