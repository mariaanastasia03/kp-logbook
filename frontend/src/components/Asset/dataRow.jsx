const dataRow = ({ asset }) => {
  return (
    <>
      <tr className="border border-black">
        <td className="border border-black">{asset.id}</td>
        <td className="border border-black">{asset.AssetTag}</td>
        <td className="border border-black">{asset.SerialNumber}</td>
        <td className="border border-black">{asset.InventoryNumber}</td>
        <td className="border border-black">{asset.EvidenceNumber}</td>
        <td className="border border-black">{asset.IMEI}</td>
        <td className="border border-black">{asset.ModelAsset}</td>
        <td className="border border-black">{asset.AssetClass}</td>
        <td className="border border-black">{asset.AssetType}</td>
        <td className="border border-black">{asset.PurchaseOrder}</td>
        <td className="border border-black">{asset.DeliveryOrder}</td>
        <td className="border border-black">{asset.Status}</td>
        <td className="border border-black">{asset.SubStatus}</td>
        <td className="border border-black">{asset.NIK}</td>
        <td className="border border-black">{asset.UserName}</td>
        <td className="border border-black">{asset.AssignedUser}</td>
        <td className="border border-black">{asset.Department}</td>
        <td className="border border-black">{asset.HostName}</td>
        <td className="border border-black">{asset.Location}</td>
        <td className="border border-black">{asset.City}</td>
        <td className="border border-black">{asset.DeductionStatus}</td>
        <td className="border border-black">{asset.InfoToHRDate}</td>
        <td className="border border-black">{asset.AmountDeductIDR}</td>
        <td className="border border-black">{asset.HistoricalJIRATicket}</td>
        <td className="border border-black">{asset.HistoricalUserUsage}</td>
        <td className="border border-black">{asset.LastUpdateDate}</td>
        <td className="border border-black">{asset.Comment}</td>
        <td className="border border-black">{asset.Floor}</td>
        <td className="border border-black">{asset.SubArea}</td>
        <td className="border border-black">{asset.Type}</td>
      </tr>
    </>
  );
};

export default dataRow;
