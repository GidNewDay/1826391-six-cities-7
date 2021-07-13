const AVATAR_LINK = "https://i.pravatar.cc/80";

const offers = [
  {
    id: 1,
    title: "Canal View Prinsengracht",
    type: "Apartment",
    price: 120,
    bedrooms: 3,
    maxAdults: 4,
    rating: 5,
    city: [{
      location: [{
        latitude: 52.38333,
        longitude: 4.9,
        zoom: 10
      }],
      name: "Amsterdam",
    }],
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    description: "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
    goods: ["Heating", "Kitchen", "Cable TV", "Washing machine", "Coffee machine", "Dishwasher"],
    host: [{
      avatarUrl: `${AVATAR_LINK}`,
      id: 3,
      isPro: true,
      name: "Angelina"
    }],
    previewImage: "img/apartment-small-03.jpg",
    images: ["img/room.jpg", "img/studio-01.jpg", "img/apartment-01.jpg", "img/apartment-02.jpg","img/apartment-03.jpg","img/studio-01.jpg"],
    isFavorite: true,
    isPremium: true,
  },
  {
    id: 2,
    title: "Wood and stone place",
    type: "Private offer",
    price: 80,
    bedrooms: 3,
    maxAdults: 4,
    rating: 4.8,
    city: [{
      location: [{
        latitude: 52.38333,
        longitude: 4.9,
        zoom: 12
      }],
      name: "Amsterdam",
    }],
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    description: "An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.",
    goods: ["Heating", "Kitchen", "Cable TV", "Coffee machine", "Dishwasher"],
    host: [{
      avatarUrl: `${AVATAR_LINK}`,
      id: 3,
      isPro: true,
      name: "Max"
    }],
    previewImage: "img/room-small.jpg",
    images: ["img/apartment-02.jpg", "img/apartment-03.jpg", "img/studio-01.jpg"],
    isFavorite: true,
    isPremium: false,
  },
  {
    id: 3,
    title: "Canal View Prinsengracht",
    type: "Apartment",
    price: 132,
    bedrooms: 3,
    maxAdults: 4.8,
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
      latitude: 50.8565828,
      longitude: 4.3628498,
      zoom: 8
    },
    description: "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Brussels.",
    goods: ["Heating", "Kitchen", "Cable TV", "Washing machine", "Dishwasher"],
    host: [{
      avatarUrl: `${AVATAR_LINK}`,
      id: 3,
      isPro: false,
      name: "Angelina"
    }],
    previewImage: "img/apartment-small-03.jpg",
    images: ["img/apartment-03.jpg", "img/apartment-02.jpg"],
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
    rating: 4.8,
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
      avatarUrl: `${AVATAR_LINK}`,
      id: 3,
      isPro: false,
      name: "Max"
    }],
    previewImage: "img/apartment-small-04.jpg",
    images: ["img/studio-01.jpg", "img/apartment-01.jpg", "img/apartment-03.jpg"],
    isFavorite: true,
    isPremium: true,
  },
  {
    id: 5,
    title: "Beautiful & luxurious studio at great location",
    type: "Apartment",
    price: 120,
    bedrooms: 3,
    maxAdults: 4,
    rating: 5,
    city: [{
      location: [{
        latitude: 52.38333,
        longitude: 4.9,
        zoom: 10
      }],
      name: "Amsterdam",
    }],
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8
    },
    description: "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
    goods: ["Heating", "Kitchen", "Cable TV", "Washing machine", "Coffee machine", "Dishwasher"],
    host: [{
      avatarUrl: `${AVATAR_LINK}`,
      id: 3,
      isPro: true,
      name: "Angelina"
    }],
    previewImage: "img/apartment-small-03.jpg",
    images: ["img/room.jpg", "img/studio-01.jpg", "img/apartment-01.jpg", "img/apartment-02.jpg","img/apartment-03.jpg","img/studio-01.jpg"],
    isFavorite: true,
    isPremium: true,
  },
  {
    id: 6,
    title: "Wood place",
    type: "Private offer",
    price: 80,
    bedrooms: 3,
    maxAdults: 4,
    rating: 4.8,
    city: [{
      location: [{
        latitude: 52.38333,
        longitude: 4.9,
        zoom: 10
      }],
      name: "Amsterdam",
    }],
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8
    },
    description: "An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.",
    goods: ["Heating", "Kitchen", "Cable TV", "Coffee machine", "Dishwasher"],
    host: [{
      avatarUrl: `${AVATAR_LINK}`,
      id: 3,
      isPro: true,
      name: "Max"
    }],
    previewImage: "img/room-small.jpg",
    images: ["img/apartment-02.jpg", "img/apartment-03.jpg", "img/studio-01.jpg"],
    isFavorite: true,
    isPremium: false,
  },
  {
    id: 7,
    title: "Wood place",
    type: "Private offer",
    price: 80,
    bedrooms: 3,
    maxAdults: 4,
    rating: 4.8,
    city: [{
      location: [{
        latitude: 50.8503,
        longitude: 4.3517,
        zoom: 10
      }],
      name: "Brussels",
    }],
    location: {
      latitude: 50.8565828,
      longitude: 4.3628498,
      zoom: 8
    },
    description: "An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.",
    goods: ["Heating", "Kitchen", "Cable TV", "Coffee machine", "Dishwasher"],
    host: [{
      avatarUrl: `${AVATAR_LINK}`,
      id: 3,
      isPro: true,
      name: "Max"
    }],
    previewImage: "img/room-small.jpg",
    images: ["img/apartment-02.jpg", "img/apartment-03.jpg", "img/studio-01.jpg"],
    isFavorite: true,
    isPremium: false,
  },
];

export default offers;
