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
      unique: true,
      required: false,
      primaryKey: true,
      autoIncrement: true
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