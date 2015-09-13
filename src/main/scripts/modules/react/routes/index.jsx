import Route from '../components/route';
import Link from '../components/link';

class IndexRoute extends Route {

  render() {
    return <div className={this.classNames}>
      <Link to='cards'/>
      {this.renderChildRoute()}
    </div>
  }

}

export default IndexRoute;
