import {
  loadOffers,
  loadComments,
  requiredAuthorization,
  logout as closeSession,
  loadNearbyOffers,
  loadFavoriteData,
  setUserData
} from './action';
import {AuthorizationStatus, APIRoute} from '../const';
import {formatJSON} from '../services/format-json';

export const fetchOfferList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(loadOffers(formatJSON(data))))
);

export const fetchCommentList = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${id}`)
    .then(({data}) => dispatch(loadComments(formatJSON(data))))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => {
      dispatch(requiredAuthorization(AuthorizationStatus.AUTH));
      dispatch(setUserData({email: data.email}));
    })
    .catch(() => {})
);

export const login = (userData) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, userData)
    .then(({data}) => localStorage.setItem('token', data.token))
    .then(() => {
      dispatch(requiredAuthorization(AuthorizationStatus.AUTH));
      dispatch(setUserData({email: userData.email}));
    })
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => {
      dispatch(closeSession());
      dispatch(setUserData({}));
    })
);

export const fetchNearbyList = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.OFFERS}/${id}/nearby`)
    .then(({data}) => dispatch(loadNearbyOffers(formatJSON(data))))
);

export const postComment = (id, commentData) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}/${id}`, commentData)
);

export const setFavorite = (id, status) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}/${id}/${status}`)
);

export const fetchFavoritesList = () => (dispatch, _getState, api) => (
  api.get(`${APIRoute.FAVORITE}`)
    .then(({data}) => dispatch(loadFavoriteData(formatJSON(data))))
);
