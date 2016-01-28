import React from 'react';
import _ from 'lodash';

import Route from './route';

const {object} = React.PropTypes;

class ModelRoute extends Route {

  static get className() {
    return `${super.className} model-route`;
  }

  static get propTypes() {
    return Route.withPropTypes({
      model: object
    });
  }

  static get modelClass() {
    return undefined;
  }

  static get viewClass() {
    return undefined;
  }

  get model() {
    return (this.state && this.state.model) || (this.props && this.props.model) || {};
  }

  get title() {
    return (this.model && this.model.displayName) || super.title;
  }

  load() {

    let Model = this.constructor.modelClass;
    let params = (this.props && this.props.params);

    if(Model && params) {
      let keyForId = `${_.camelCase(Model.name)}Id`;
      let id = params[keyForId];
      return Model.uniq({id});
    }

    return undefined;

  }

  renderContent() {
    let View = this.constructor.viewClass;
    if(!View) {
      return super.renderContent();
    }
    return <View {...this.criteria} model={this.model}/>
  }

}

export default ModelRoute;
