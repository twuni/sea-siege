import View from '../../components/view';

import Link from '../../components/link';

class CardListItemView extends View {

  render() {

    let model = this.model;

    if(!model) {
      return <li className={this.classNames}/>
    }

    let params = {
      cardId: model.id
    };

    return <li className={this.classNames}>
      <Link to='card' params={params}>{model.title}</Link>
    </li>

  }

}

export default CardListItemView;
