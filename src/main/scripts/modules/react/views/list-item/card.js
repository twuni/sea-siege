import View from '../../components/view';

import Link from '../../components/link';

class CardListItemView extends View {

  render() {

    let model = this.model;

    if(!model) {
      return <li className={this.classNames}/>
    }

    return <li className={this.classNames}>
      <Link to={this.url}>{model.title}</Link>
    </li>

  }

}

export default CardListItemView;
