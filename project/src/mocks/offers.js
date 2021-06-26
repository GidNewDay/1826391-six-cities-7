const offers = [
  {
    id: 1,
    title: "Beautiful & luxurious studio at great location",
    type: "Apartment",
    price: 120,
    bedrooms: 3,
    maxAdults: 4,
    rating: 4,
    city: [{
      location: [{
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      }],
      name: "Amsterdam",
    }],
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    description: "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
    goods: ["Heating", "Kitchen", "Cable TV", "Washing machine", "Coffee machine", "Dishwasher"],
    host: [{
      avatarUrl: "img/avatar-angelina.jpg",
      id: 3,
      isPro: true,
      name: "Angelina"
    }],
    previewImage: "img/apartment-small-03.jpg",
    images: ["img/room.jpg", "img/apartment-01.jpg", "img/apartment-02.jpg","img/apartment-03.jpg","img/studio-01.jpg"],
    isFavorite: false,
    isPremium: true,
  },
  {
    id: 2,
    title: "Wood and stone place",
    type: "Private room",
    price: 80,
    bedrooms: 3,
    maxAdults: 4,
    rating: 4,
    city: [{
      location: [{
        latitude: 48.8566,
        longitude: 2.3522,
        zoom: 10
      }],
      name: "Paris",
    }],
    location: {
      latitude: 48.8566,
      longitude: 2.3522,
      zoom: 8
    },
    description: "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Paris.",
    goods: ["Heating", "Kitchen", "Cable TV", "Coffee machine", "Dishwasher"],
    host: [{
      avatarUrl: "img/avatar-max.jpg",
      id: 3,
      isPro: true,
      name: "Max"
    }],
    previewImage: "img/apartment-small-04.jpg",
    images: ["img/apartment-02.jpg", "img/apartment-03.jpg"],
    isFavorite: true,
    isPremium: false,
  },
  {
    id: 3,
    title: "Canal View Prinsengracht",
    type: "Apartment",
    price: 132,
    bedrooms: 3,
    maxAdults: 4,
    rating: 5,
    city: [{
      location: [{
        latitude: 50.8503,
        longitude: 4.3517,
        zoom: 10
      }],
      name: "Brussels",
    }],
    location: {
      latitude: 50.8503,
      longitude: 4.3517,
      zoom: 8
    },
    description: "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Brussels.",
    goods: ["Heating", "Kitchen", "Cable TV", "Washing machine", "Dishwasher"],
    host: [{
      avatarUrl: "img/avatar-angelina.jpg",
      id: 3,
      isPro: true,
      name: "Angelina"
    }],
    previewImage: "img/apartment-small-03.jpg",
    images: ["img/apartment-03.jpg", "img/apartment-04.jpg"],
    isFavorite: false,
    isPremium: false,
  },
  {
    id: 4,
    title: "Nice, cozy, warm big bed apartment",
    type: "Apartment",
    price: 180,
    bedrooms: 3,
    maxAdults: 4,
    rating: 4,
    city: [{
      location: [{
        latitude: 53.5511,
        longitude: 9.9937,
        zoom: 10
      }],
      name: "Hamburg",
    }],
    location: {
      latitude: 53.5511,
      longitude: 9.9937,
      zoom: 8
    },
    description: "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Hamburg.",
    goods: ["Heating", "Kitchen", "Cable TV", "Washing machine", "Dishwasher"],
    host: [{
      avatarUrl: "img/avatar-max.jpg",
      id: 3,
      isPro: true,
      name: "Max"
    }],
    previewImage: "img/apartment-small-04.jpg",
    images: ["img/apartment-01.jpg", "img/apartment-04.jpg"],
    isFavorite: false,
    isPremium: true,
  },
];

export default offers;
