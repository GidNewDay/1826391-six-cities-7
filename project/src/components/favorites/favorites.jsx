// компонент «Избранное» («Favorites»)
import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchFavoritesList} from '../../store/api-actions';
import {getFavoritesData} from '../../store/data/selector';
import FavoriteCard from './favorite-card';
import Header from '../header/header';
import {Link} from 'react-router-dom';

function Favorites() {
  const favorites = useSelector(getFavoritesData);
  const dispatch = useDispatch();
  const [favoriteData, loadFavoriteData] = useState([]);

  useEffect(() => { dispatch(fetchFavoritesList()); }, [dispatch]);

  useEffect(() => {
    if (favorites.length) {
      const cities = [];
      const favoriteList = [];

      favorites.map((item) => {
        if (!cities.includes(item.city.name)) {
          cities.push(item.city.name);
          favoriteList.push({
            city: item.city.name,
            data: [item],
          });
        } else {
          const index = cities.indexOf(item.city.name);
          const data = favoriteList[index].data;
          data.push(item);
        }
        return item;
      });

      loadFavoriteData(favoriteList);
    } else {
      loadFavoriteData([]);
    }
  }, [favorites]);

  return (
    <div className="page">
      <Header/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {
            favoriteData.length > 0 &&
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {favoriteData.map((favorite) => (
                  <li className="favorites__locations-items" key={favorite.city}>
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="/">
                          <span>{favorite.city}</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {favorite.data.map((offer) => (
                        <FavoriteCard offer={offer} key={offer.id}/>
                      ))}
                    </div>
                  </li>),
                )}
              </ul>
            </section>
          }
          {
            favoriteData.length === 0 &&
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
              </div>
            </section>
          }
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
}

export default Favorites;
