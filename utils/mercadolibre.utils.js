/**
 * @param { Object } recordset
 * @param { Object } currencies
 * @returns { Array }
 */
exports.processItems = (
  recordset = {},
  currencies = {}
) => {
  return recordset.results.map((item) => {
    // Here is the conclution on why the reduce is done. (See processCurrencies method)
    // Instead on every iteration search the currency on the original array
    // I lookup on the object created. Which reduce the extra (and nested) complexity of
    // looping the currency array on every iteration of the current map() method.
    const {
      id: currency,
      decimal_places: decimals,
      symbol
    } = currencies[item.currency_id];

    return {
      // Couldn't find any field related to "author" or "name" or "lastname"
      // author: {
      //   name: String
      //   lastname: String
      // },
      id: item.id,
      title: item.title,
      price: {
        amount: item.price,
        currency,
        decimals,
        symbol
      },
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
      // "location" it's not in the example JSON but it's been display on the design
      location: item.address.state_name
    };
  });
};

/**
 * @param { Object } recordset
 * @returns { Array }
 */
exports.processCategories = (recordset = {}) => {
  const [
    categories = null
  ] = recordset.filters.filter(({ id }) => id === 'category');

  // There may not be a Category filter at all because the search is too generic or global
  if (!categories) {
    return [];
  }

  // I know I may consider that "values" can have more than just one element
  // but after running a few search myself, I couldn't find a query where
  // "values" has two or more elements and having no other criteria
  // I will assume that is a one-element array. ¯\_(ツ)_/¯
  const [
    category
  ] = categories.values;

  return category.path_from_root.map(({ name }) => name);
};

/**
 * @param { Array } recordset
 * @returns { Object }
 */
exports.processCurrencies = (recordset = []) => {
  // The reason why I reduce an array to an object it's to be used with a hash-table mindset
  // See processItems method for the usage
  return recordset.reduce((currencies, currency) => {
    currencies[currency.id] = {
      id: currency.id,
      symbol: currency.symbol,
      decimal_places: currency.decimal_places
    };

    return currencies;
  }, {});
};

/**
 * @param { Object } record
 * @param { Object } description
 * @param { Object } currency
 * @returns { Object }
 */
exports.processSingleItem = (
  record = {},
  description = {},
  currency = {},
  category = {}
) => {
  return {
    // Couldn't find any field related to "author" or "name" or "lastname"
    // author: {
    //   name: String
    //   lastname: String
    // },
    item: {
      id: record.id,
      title: record.title,
      price: {
        currency: currency.id,
        amount: record.price,
        decimals: currency.decimal_places,
        symbol: currency.symbol
      },
      picture: record.pictures[0].secure_url,
      condition: record.condition,
      free_shipping: record.shipping.free_shipping,
      sold_quantity: record.sold_quantity,
      description: description.plain_text,
      categories: category.path_from_root.map(({ name }) => name)
    }
  };
};