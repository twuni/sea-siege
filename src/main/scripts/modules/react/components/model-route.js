import Route from './route';

const {object} = React.PropTypes;

class ModelRoute extends Route {

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

  load() {

    let Model = this.constructor.modelClass;
    let params = (this.props && this.props.params);

    if(Model && params) {
      let keyForId = `${_.camelCase(Model.name)}Id`;
      let id = params[keyForId];
      return Model.find({id});
    }

    return undefined;

  }

  render() {

    let View = this.constructor.viewClass;

    if(!View) {
      return <div className={this.classNames}/>
    }

    return <div className={this.classNames}>
      <View model={this.model}/>
    </div>

  }

}

export default ModelRoute;
