const _ = require('lodash'),
  daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  keysInObj = (obj, keys) => {
    for (let key of keys) {
      if (!obj.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  };

module.exports = {
  
  types: {
    coordinates: (val) => {
      return _.isObject(val) && _.isNumber(val.lat) && _.isNumber(val.lng);
    },
    hours_of_operation: (val) => {
      return _.isObject(val) && keysInObj(val, daysOfWeek);
    }
  },
  
  attributes: {
    id: {
      type: 'integer',
      required: true
    },
    name: {
      type: 'string',
      required: true
    },
    neighborhood: {
      type: 'string',
      required: true
    },
    photograph: {
      type: 'string',
      required: true
    },
    address: {
      type: 'string',
      required: true
    },
    latlng: {
      type: 'json',
      coordinates: true,
      required: true
    },
    cuisine_type: {
      type: 'string',
      required: true
    },
    operating_hours: {
      type: 'json',
      hours_of_operation: true,
      required: true
    },
    is_favorite: {
      type: 'boolean',
      required: true
    }
  }
  
};
