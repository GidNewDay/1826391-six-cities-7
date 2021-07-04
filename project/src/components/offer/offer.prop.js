import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  maxAdults: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  city: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number,
    }).isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number,
  }).isRequired,
  description: PropTypes.string,
  goods: PropTypes.array.isRequired,
  host: PropTypes.shape({
    avatarUrl: PropTypes.string,
    id: PropTypes.number.isRequired,
    isPro: PropTypes.bool,
    name: PropTypes.string.isRequired,
  }).isRequired,
  previewImage: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  isPremium: PropTypes.bool.isRequired,
}).isRequired;
