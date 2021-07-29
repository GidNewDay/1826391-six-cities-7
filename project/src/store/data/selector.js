import {NameSpace} from '../root-reducer';

export const getOffers = (state) => state[NameSpace.DATA].offers;
export const getIsDataLoaded = (state) => state[NameSpace.DATA].isDataLoaded;
export const getNearbyOffers = (state) => state[NameSpace.DATA].nearby;
export const getComments = (state) => state[NameSpace.DATA].comments;
export const getFavoritesData = (state) => state[NameSpace.DATA].favorites;
