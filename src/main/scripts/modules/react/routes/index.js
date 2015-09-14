import Route from '../components/route';
import Link from '../components/link';

class IndexRoute extends Route {

  render() {
    return <section className={this.classNames}>
      <header>
        <h3>{this.t('guild_network')}</h3>
      </header>
      <section>
        <aside>
          <nav>
            <Link to='games'/>
            <Link to='cards'/>
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
