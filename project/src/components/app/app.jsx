import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {AppRoute} from "../../const";
import Home from '../home/home';
import Room from "../offer/offer";
import SignIn from "../login/login";
import Favourites from "../favourites/favourites";
import NotFound from "../notfound/notfound";

function App({cardsAmount}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Home cardsAmount={cardsAmount}/>
        </Route>
        <Route exact path={AppRoute.ROOM}>
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

App.propTypes = {
  cardsAmount: PropTypes.number.isRequired,
};

export default App;
