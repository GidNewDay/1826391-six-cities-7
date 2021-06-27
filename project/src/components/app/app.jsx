import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {AppRoute} from "../../const";
import Main from '../main/main';
import Room from "../room/room";
import SignIn from "../login/login";
import Favourites from "../favourites/favourites";
import NotFound from "../notfound/notfound";
import offerProp from "../room/offer.prop"

function App(props) {
  const {offers} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main
            offers={offers}
          />
        </Route>
        <Route exact path={AppRoute.ROOM}>
          <Room/>
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <SignIn/>
        </Route>
        <Route exact path={AppRoute.FAVOURITES}>
          <Favourites
            offers={offers}
          />
        </Route>
        <Route>
          <NotFound/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.oneOfType([offerProp]).isRequired,
  )
};

export default App;
