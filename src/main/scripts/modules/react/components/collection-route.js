import Route from './route';

const {array} = React.PropTypes;

class CollectionRoute extends Route {

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
    let Model = this.constructor.modelClass;
    if(Model) {
      return Model.find(this.criteria);
    }
    return undefined;
  }

  render() {
    let View = this.constructor.viewClass;
    return <ul className={this.classNames}>
      {_.compact(_.map(this.collection, (model) => {
        if(View) {
          return <View key={model.id} model={model}/>
        }
        return undefined;
      }))}
    </ul>
  }

}

export default CollectionRoute;
