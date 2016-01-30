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
    const {props, state} = this;
    return (state && state.model) || (props && props.model) || {};
  }

  get title() {
    const {model} = this;
    return (model && model.displayName) || super.title;
  }

  load() {

    const Model = this.constructor.modelClass;
    const {props} = this;
    const {params} = props || {};

    if(Model && params) {
      const keyForId = `${_.camelCase(Model.name)}Id`;
      const id = params[keyForId];
      return Model.uniq({id});
    }

    return undefined;

  }

  renderContent() {
    const View = this.constructor.viewClass;
    if(!View) {
      return super.renderContent();
    }
    const {criteria, model} = this;
    return <View {...criteria} model={model}/>
  }

}

export default ModelRoute;
