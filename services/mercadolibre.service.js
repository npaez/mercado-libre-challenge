// modules
const axios = require('axios');

// utils
const {
  URI
} = require('../utils/const.util');

/**
 * services
 * 
 * @param { String } q
 * @returns { Object }
 */
exports.fetchSearch = async (q = '') => {
  if (!q) {
    throw new Error('empty query not allowed');
  }

  try {
    const {
      data: response
    } = await axios.get(`${ URI.MELI_SEARCH }?q=${ q }`);

    return response;
  } catch (ex) {
    throw new Error(ex.message);
  };
};

/**
 * @param { String } currency (optional)
 * @returns { Array | Object }
 */
exports.fetchCurrencies = async (currency = '') => {
  // Since the type of the returned data will depend if currency param isn't an empty string
  // it will be a good consideration to divide this function (in global and specific currency)
  // in order to keep the function pure
  try {
    const {
      data: response
    } = await axios.get(`${ URI.MELI_CURRENCIES }/${ currency }`);

    return response;
  } catch (ex) {
    throw new Error(ex.message);
  };
};

/**
 * @param { String } id
 * @returns { Object }
 */
exports.fetchItem = async (id = '') => {
  if (!id) {
    throw new Error('unknown id');
  }

  try {
    const {
      data: response
    } = await axios.get(`${ URI.MELI_ITEM }/${ id }`);

    return response;
  } catch (ex) {
    throw new Error(ex.message);
  };
};

/**
 * @param { String } id 
 * @returns { Object }
 */
exports.fetchItemDescription = async (id = '') => {
  if (!id) {
    throw new Error('unknown id');
  }

  try {
    const {
      data: response
    } = await axios.get(`${ URI.MELI_ITEM }/${ id }/description`);

    return response;
  } catch (ex) {
    throw new Error(ex.message);
  };
};