import View from '../../components/view';

import IconLink from '../../components/icon-link';
import Link from '../../components/link';

class GameListItemView extends View {

  render() {

    let model = this.model;

    if(!model) {
      return <li className={this.classNames}/>
    }

    return <li className={this.classNames}>
      <Link to={`${this.url}/servers`}>{model.displayName}</Link>
      <span>
        <IconLink to={`${this.url}/servers`} name='cube'/>
      </span>
    </li>

  }

}

export default GameListItemView;
