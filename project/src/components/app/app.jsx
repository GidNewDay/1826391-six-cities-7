import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import Main from '../main/main';
import Room from '../offer/offer';
import SignIn from '../login/login';
import Favourites from '../favourites/favourites';
import NotFound from '../notfound/notfound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main/>
        </Route>
        <Route exact path={`${AppRoute.ROOM}/:id`}>
          <Room/>
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <SignIn/>
        </Route>
        <Route exact path={AppRoute.FAVOURITES}>
          <Favourites/>
        </Route>
        <Route>
          <NotFound/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
