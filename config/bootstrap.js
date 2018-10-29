/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */
const restaurants = require('../assets/data/restaurants'),
  reviews = require('../assets/data/reviews');

module.exports.bootstrap = async (cb) => {
  if (process.env.NODE_ENV === 'production') {
    return cb();
  }
  
  let count = await Restaurants.count();
  if (count > 0) {
    return cb();
  }
  
  // Seed data
  restaurants.forEach(async (restaurant) => {
    restaurant.reviews = reviews.filter(review => { return review.restaurant_id === restaurant.id });
    await Restaurants.create(restaurant);
  });
  cb();
};
