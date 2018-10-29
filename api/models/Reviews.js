/**
 * Reviews.js
 *
 * @description :: Represents a restaurant review
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  
  attributes: {
    id: {
      type: 'integer',
      required: true
    },
    restaurant_id: {
      type: 'integer',
      required: true
    },
    name: {
      type: 'string',
      required: true
    },
    rating: {
      type: 'integer',
      required: true
    },
    comments: {
      type: 'string',
      required: false
    }
  }
  
};