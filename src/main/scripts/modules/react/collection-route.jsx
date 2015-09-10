import Route from './route';

class CollectionRoute extends Route {

  static get propTypes() {
    return Route.withPropTypes({
      collection: React.PropTypes.array
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
    if(this.constructor.modelClass) {
      return this.constructor.modelClass.all();
    }
    return undefined;
  }

  render() {
    return <div className={this.classNames}>
      {
        _.compact(_.map(this.collection, (model) => {
          if(this.constructor.viewClass) {
            return <this.constructor.viewClass key={model.id} model={model}/>
          }
          return undefined;
        }))
      }
    </div>
  }

}

export default CollectionRoute;
