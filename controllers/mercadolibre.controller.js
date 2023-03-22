// meli services
const mlServices = require('../services/mercadolibre.service');

// util methods
const mlUtils = require('../utils/mercadolibre.utils');

// controllers definition
exports.search = async (req, res) => {
  // query
  const {
    query = '',
    limit = 4
  } = req.query;

  // variables
  let rawRecordset;
  let currencies;

  // fetch recordsets
  try {
    rawRecordset = await mlServices.fetchSearch(
      query,
      limit
    );
  } catch (ex) {
    return res.failure(-1, ex.messsage, 500);
  };

  // fetch currencies
  try {
    currencies = mlUtils.processCurrencies(
      await mlServices.fetchCurrencies()
    );
  } catch(ex) {
    return res.failure(-1, ex.message, 500);
  };

  // process recordset
  const items = mlUtils.processItems(
    rawRecordset,
    currencies
  );

  const categories = mlUtils.processCategories(
    rawRecordset
  );

  return res.success({
    items,
    categories
  }, 200);
};

exports.item = async (req, res) => {
  let rawItem;
  let rawDescription;
  let rawCurrency;

  // query item detail
  try {
    rawItem = await mlServices.fetchItem(
      req.params.id
    );
  } catch(ex) {
    return res.failure(-1, ex.message, 500);
  };

  // query item description
  try {
    rawDescription = await mlServices.fetchItemDescription(
      req.params.id
    );
  } catch(ex) {
    return res.failure(-1, ex.message, 500);
  };

  // query item currency
  try {
    rawCurrency = await mlServices.fetchCurrencies(
      rawItem.currency_id
    );
  } catch(ex) {
    return res.failure(-1, ex.message, 500);
  };

  // process detail
  const item = mlUtils.processSingleItem(
    rawItem,
    rawDescription,
    rawCurrency
  );

  return res.success(item, 200);
};