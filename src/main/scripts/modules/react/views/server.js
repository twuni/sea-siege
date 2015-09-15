import View from '../components/view';
import Link from '../components/link';

class ServerView extends View {

  render() {

    let model = this.model;

    if(!model.id) {
      return <section className={this.classNames}/>
    }

    let params = {
      serverId: model.id
    };

    return <section className={this.classNames}>
      <header>
        <h3>{model.displayName}</h3>
      </header>
      <footer>
        <Link to='server.guilds' params={params} label='guilds'/>
        <Link to='server.characters' params={params} label='characters'/>
      </footer>
    </section>

  }

}

export default ServerView;
