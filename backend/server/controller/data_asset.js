const data_asset = require('../model/data_asset');

exports.createAsset = async (req, res) => {
  const { AssetTag, SerialNumber, InventoryNumber, EvidenceNumber, IMEI, ModelAsset, AssetClass, AssetType, PurchaseOrder, DeliveryOrder, Status, SubStatus, NIK, UserName, AssignedUser, Departement, HostName, Location, City, DeductioStatus, InfoToHRDate, AmountDeductIDR, HistoricalJIRATicket, LastUpdateDate, Comment, Floor, SubArea, Type } = req.body
  try {
    await facility.create({
      AssetTag: AssetTag,
      SerialNumber: SerialNumber,
      InventoryNumber: InventoryNumber,
      EvidenceNumber: EvidenceNumber,
      IMEI: IMEI,
      ModelAsset: ModelAsset,
      AssetClass: AssetClass,
      AssetType: AssetType,
      PurchaseOrder: PurchaseOrder,
      DeliveryOrder: DeliveryOrder,
      Status: Status,
      SubStatus: SubStatus,
      NIK: NIK,
      UserName: UserName,
      AssignedUser: AssignedUser,
      Departement: Departement,
      HostName: HostName,
      Location: Location,
      City: City,
      DeductioStatus: DeductioStatus,
      InfoToHRDate: InfoToHRDate,
      AmountDeductIDR: AmountDeductIDR,
      HistoricalJIRATicket: HistoricalJIRATicket,
      LastUpdateDate: LastUpdateDate,
      Comment: Comment,
      Floor: Floor,
      SubArea: SubArea,
      Type: Type
    })
    res.status(200).json({
      success: true,
      message: 'New data asset added!',
      data: req.body
    })
  } catch (error) {
    res.status(400).json({
      message: error
    })
  }
}

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

exports.editAsset = async (req, res) => {
  const id = req.params.id
  const { AssetTag, SerialNumber, InventoryNumber, EvidenceNumber, IMEI, ModelAsset, AssetClass, AssetType, PurchaseOrder, DeliveryOrder, Status, SubStatus, NIK, UserName, AssignedUser, Departement, HostName, Location, City, DeductioStatus, InfoToHRDate, AmountDeductIDR, HistoricalJIRATicket, LastUpdateDate, Comment, Floor, SubArea, Type } = req.body
  try {
    const updated = await facility.update({
      AssetTag: AssetTag,
      SerialNumber: SerialNumber,
      InventoryNumber: InventoryNumber,
      EvidenceNumber: EvidenceNumber,
      IMEI: IMEI,
      ModelAsset: ModelAsset,
      AssetClass: AssetClass,
      AssetType: AssetType,
      PurchaseOrder: PurchaseOrder,
      DeliveryOrder: DeliveryOrder,
      Status: Status,
      SubStatus: SubStatus,
      NIK: NIK,
      UserName: UserName,
      AssignedUser: AssignedUser,
      Departement: Departement,
      HostName: HostName,
      Location: Location,
      City: City,
      DeductioStatus: DeductioStatus,
      InfoToHRDate: InfoToHRDate,
      AmountDeductIDR: AmountDeductIDR,
      HistoricalJIRATicket: HistoricalJIRATicket,
      LastUpdateDate: LastUpdateDate,
      Comment: Comment,
      Floor: Floor,
      SubArea: SubArea,
      Type: Type
    }, {
      where: {
        id: id
      },
      returning: true,
      plain: true
    })

    res.status(200).json({
      success: true,
      message: 'Facility updated!',
      data: updated
    })
  } catch (error) {
    res.status(400).json({
      message: error
    })
  }
}

exports.deleteAsset = async (req, res) => {
  const id = req.params.id;
  try {
    const deleted = await facility.destroy({
      where: {
        id: id
      },
      returning: true,
      plain: true
    })

    res.status(200).json({
      success: true,
      message: 'data asset deleted!',
      data: deleted
    })
  } catch (error) {
    res.status(400).json({
      message: error
    })
  }
}
