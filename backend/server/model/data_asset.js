const { Sequelize } = require('sequelize');
const db = require('../database/client');

const { DataTypes } = Sequelize;

const data_asset = db.define(
  'data_asset',
  {
    //tulis berdasarkan kolom tabel di postgresql, dari assettag sampe habis
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    AssetTag: {
      type: DataTypes.STRING,
    },
    SerialNumber: {
      type: DataTypes.STRING,
    },
    InventoryNumber: {
      type: DataTypes.STRING,
    },
    EvidenceNumber: {
      type: DataTypes.STRING,
    },
    IMEI: {
      type: DataTypes.STRING,
    },
    ModelAsset: {
      type: DataTypes.STRING,
    },
    AssetClass: {
      type: DataTypes.STRING,
    },
    AssetType: {
      type: DataTypes.STRING,
    },
    PurchaseOrder: {
      type: DataTypes.STRING,
    },
    DeliveryOrder: {
      type: DataTypes.STRING,
    },
    Status: {
      type: DataTypes.STRING,
    },
    SubStatus: {
      type: DataTypes.STRING,
    },
    NIK: {
      type: DataTypes.STRING,
    },
    UserName: {
      type: DataTypes.STRING,
    },
    AssignedUser: {
      type: DataTypes.STRING,
    },
    Department: {
      type: DataTypes.STRING,
    },
    HostName: {
      type: DataTypes.STRING,
    },
    Location: {
      type: DataTypes.STRING,
    },
    City: {
      type: DataTypes.STRING,
    },
    DeductionStatus: {
      type: DataTypes.STRING,
    },
    InfoToHRDate: {
      type: DataTypes.STRING,
    },
    AmountDeductIDR: {
      type: DataTypes.STRING,
    },
    HistoricalJIRATicket: {
      type: DataTypes.STRING,
    },
    HistoricalUserUsage: {
      type: DataTypes.STRING,
    },
    LastUpdateDate: {
      type: DataTypes.STRING,
    },
    Comment: {
      type: DataTypes.STRING,
    },
    Floor: {
      type: DataTypes.STRING,
    },
    SubArea: {
      type: DataTypes.STRING,
    },
    Type: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = data_asset;
