// главный компонент App
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
import PrivateRoute from '../private-route/private-route';
import {getAuthorizationStatus} from '../../store/user/selector';
import {getIsDataLoaded} from '../../store/data/selector';

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
        <PrivateRoute
          exact
          path={AppRoute.FAVOURITES}
          render={() => <Favourites/>}
        >
        </PrivateRoute>
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
  authorizationStatus: getAuthorizationStatus(state),
  isDataLoaded: getIsDataLoaded(state),
});

export {App};
export default connect(mapStateToProps, null)(App);
