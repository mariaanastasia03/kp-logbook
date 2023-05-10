const express = require('express');
const dataAsset = require('../controller/data_asset');
const route = express.Router();

//mapping router
route.post('/', dataAsset.createMapping);

route.get('/', dataAsset.getAllMapping);
route.get('/:category', dataAsset.getMappingByCat);
route.get('/:id', dataAsset.getMappingByID);

route.put('/:id', dataAsset.editMapping);

route.delete('/:id', dataAsset.deleteMapping);

module.exports = route;
