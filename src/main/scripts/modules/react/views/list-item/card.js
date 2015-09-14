import View from '../../components/view';

import Link from '../../components/link';

class CardListItemView extends View {

  render() {
    let model = this.model;
    return <li className={this.classNames}>
      <Link to='card' params={{cardId: model.id}}>{model.title}</Link>
    </li>
  }

}

export default CardListItemView;
