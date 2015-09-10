import Index from './routes/index';

import Cards from './routes/cards';
import CardsIndex from './routes/cards/index';

import Card from './routes/card';
import CardView from './routes/card/view';

let Route = ReactRouter.Route;
let DefaultRoute = ReactRouter.DefaultRoute;

export default <Route path='/' handler={Index}>
  <Route name='cards' path='cards' handler={Cards}>
    <DefaultRoute name='cards.index' handler={CardsIndex}/>
    <Route name='card' path=':cardId' handler={Card}>
      <DefaultRoute name='card.view' handler={CardView}/>
    </Route>
  </Route>
</Route>
