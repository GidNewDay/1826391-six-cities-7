// страница «Room» с подробным описанием предложения по аренде
import React, {useState, useEffect} from 'react';
import Header from '../header/header';
import {useParams} from 'react-router-dom';
import OfferReviewForm from './offer-review-form';
import ReviewList from '../review/reviews-list';
import OffersList from './offers-list';
import OfferDetails from './offer-details';
import Map from '../map/map';
import {useSelector, useDispatch} from 'react-redux';
import NotFound from '../notfound/notfound';
import {fetchCommentList, fetchNearbyList} from '../../store/api-actions';
import {getComments, getNearbyOffers, getOffers} from '../../store/data/selector';
import {getAuthorizationStatus} from '../../store/user/selector';

function Room() {
  const offers = useSelector(getOffers);
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const comments = useSelector(getComments);
  const nearby = useSelector(getNearbyOffers);
  const dispatch = useDispatch();

  const {id} = useParams();
  const offer = offers.find((o) => o.id === parseInt(id, 10));//«Предложение» с текущим ID
  let CITY;
  const nearOffers = [];

  if (offer) {
    CITY = offer.city;

    offers.map((o) => {
      if (o.city.name === offer.city.name && o.id !== parseInt(id, 10)) {
        nearOffers.push(o);
      }
      return true;
    });
  }

  const [activeCard, setActiveCard] = useState({});
  const onCardHover = (cardTitle) => {
    const currentCard = nearOffers.find((point) =>
      point.title === cardTitle,
    );
    setActiveCard(currentCard);
  };

  useEffect(() => {
    dispatch(fetchCommentList(id));
    dispatch(fetchNearbyList(id));
  }, [id, dispatch]);

  return (
    offer === undefined
      ? <NotFound/>
      :
      <div className="page">
        <Header/>
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {offer.images.map((image) => (
                  <div className="property__image-wrapper" key={image}>
                    <img className="property__image" src={image} alt="Studio"/>
                  </div>
                ))}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {/*Детали объявления*/}
                <OfferDetails offer={offer}/>

                <section className="property__reviews reviews">
                  <ReviewList reviews={comments}/>
                  {authorizationStatus === 'AUTH' && <OfferReviewForm/>}
                </section>
              </div>
            </div>
            <section className="property__map map">
              {/*Карта города с метками*/}
              <Map city={CITY} points={nearOffers} activeCard={activeCard}/>
            </section>
          </section>
          {
            nearby &&
            <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">Other places in the neighbourhood</h2>
                <OffersList onCardHover={onCardHover} listType={'near-places__list'} offers={nearby}/>
              </section>
            </div>
          }
        </main>
      </div>
  );
}

export default Room;
