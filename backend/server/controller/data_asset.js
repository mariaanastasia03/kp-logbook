const data_asset = require('../model/data_asset');

exports.getAllAsset = async (req, res) => {
  try {
    const asset = await data_asset.findAll();
    res.status(200).json({
      success: true,
      message: 'Data asset exist!',
      data: asset,
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};
