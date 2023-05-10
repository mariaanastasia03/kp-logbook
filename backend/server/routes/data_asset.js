const express = require('express');
const dataAsset = require('../controller/data_asset');
const route = express.Router();

//mapping router
route.post('/', dataAsset.createAsset);

route.get('/', dataAsset.getAllAsset);

route.put('/:id', dataAsset.editAsset);

route.delete('/:id', dataAsset.deleteAsset);

module.exports = route;
