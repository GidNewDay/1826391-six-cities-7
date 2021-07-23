import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import Main from '../main/main';
import Room from '../offer/offer';
import SignIn from '../login/login';
import Favourites from '../favourites/favourites';
import NotFound from '../notfound/notfound';
import Loading from '../loading/loading';


function App(props) {

  const {authorizationStatus, isDataLoaded} = props;
  const isCheckedAuth = (authStatus) => authStatus === AuthorizationStatus.UNKNOWN;


  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <Loading />
    );
  }

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

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  isDataLoaded: state.isDataLoaded,
});

export {App};
export default connect(mapStateToProps, null)(App);
