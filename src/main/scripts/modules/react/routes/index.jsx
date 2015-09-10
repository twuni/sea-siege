import Route from '../components/route';
import Link from '../components/link';

class IndexRoute extends Route {

  static get className() {
    return 'index-route';
  }

  render() {
    return <div className={this.classNames}>
      <Link to='cards'/>
      {this.renderChildRoute()}
    </div>
  }

}

export default IndexRoute;
