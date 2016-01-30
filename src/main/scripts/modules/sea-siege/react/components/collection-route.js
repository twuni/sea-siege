import _ from 'lodash';
import React from 'react';

import Route from './route';

const {array} = React.PropTypes;

class CollectionRoute extends Route {

  static get className() {
    return `${super.className} collection-route`;
  }

  static get propTypes() {
    return Route.withPropTypes({
      collection: array
    });
  }

  static get modelClass() {
    return undefined;
  }

  static get viewClass() {
    return undefined;
  }

  get collection() {
    return (this.state && this.state.collection) || (this.props && this.props.collection) || [];
  }

  load() {
    const Model = this.constructor.modelClass;
    if(Model) {
      return Model.find(this.criteria);
    }
    return undefined;
  }

  render() {
    const View = this.constructor.viewClass;
    const {classNames, collection, criteria} = this;
    return <ul className={classNames}>
      {_.compact(_.map(collection, (model) => {
        if(View) {
          return <View key={model.id} {...criteria} model={model}/>
        }
        return undefined;
      }))}
    </ul>
  }

}

export default CollectionRoute;
