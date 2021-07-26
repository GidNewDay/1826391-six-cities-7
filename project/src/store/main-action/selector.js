import {NameSpace} from '../root-reducer';

export const getActiveCity = (state) => state[NameSpace.MAIN].activeCity;
export const getSortVal = (state) => state[NameSpace.MAIN].sortVal;

