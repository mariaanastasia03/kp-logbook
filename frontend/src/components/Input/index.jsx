import { useHandleAdd } from '../../hooks/useHandleAsset';
import { useDataAssetContext } from '../../hooks/useDataAssetContext';
import { useState } from 'react';
import { useDisplayContext } from '../../hooks/useDisplayContext';
export default function Index() {
  const { dispatch } = useDataAssetContext();
  const { notify, isPending, error, setLoading, setError } =
    useDisplayContext();

  const [AssetTag, setAssetTag] = useState('');
  const [SerialNumber, setSerialNumber] = useState('');
  const [InventoryNumber, setInventoryNumber] = useState('');
  const [EvidenceNumber, setEvidenceNumber] = useState('');
  const [IMEI, setIMEI] = useState('');
  const [ModelAsset, setModelAsset] = useState('');
  const [AssetClass, setAssetClass] = useState('');
  const [AssetType, setAssetType] = useState('');
  const [PurchaseOrder, setPurchaseOrder] = useState('');
  const [DeliveryOrder, setDeliveryOrder] = useState('');
  const [Status, setStatus] = useState('');
  const [SubStatus, setSubStatus] = useState('');
  const [NIK, setNIK] = useState('');
  const [UserName, setUserName] = useState('');
  const [AssignedUser, setAssignedUser] = useState('');
  const [Department, setDepartment] = useState('');
  const [HostName, setHostName] = useState('');
  const [Location, setLocation] = useState('');
  const [City, setCity] = useState('');
  const [DeductionStatus, setDeductionStatus] = useState('');
  const [InfoToHRDate, setInfoToHRDate] = useState('');
  const [AmountDeductIDR, setAmountDeductIDR] = useState('');
  const [HistoricalToJIRATicket, setHistoricalToJIRATicket] = useState('');
  const [HistoricalUserUsage, setHistoricalUserUsage] = useState('');
  const [LastUpdateDate, setLastUpdateDate] = useState('');
  const [Comment, setComment] = useState('');
  const [Floor, setFloor] = useState('');
  const [SubArea, setSubArea] = useState('');
  const [Type, setType] = useState('');

  const newTask = {
    AssetTag,
    SerialNumber,
    InventoryNumber,
    EvidenceNumber,
    IMEI,
    ModelAsset,
    AssetClass,
    AssetType,
    PurchaseOrder,
    DeliveryOrder,
    Status,
    SubStatus,
    NIK,
    UserName,
    AssignedUser,
    Department,
    HostName,
    Location,
    City,
    DeductionStatus,
    InfoToHRDate,
    AmountDeductIDR,
    HistoricalToJIRATicket,
    HistoricalUserUsage,
    LastUpdateDate,
    Comment,
    Floor,
    SubArea,
    Type,
  };
  const url = 'http://localhost:3100/api/asset';
  const { handleAdd: handleSubmit } = useHandleAdd({
    url,
    type: 'ADD_ASSETS',
    dispatch,
    data: newTask,
    setLoading,
    setError,
    notify,
  });
  return (
    <div className=" overflow-hidden">
      <div className="mt-24 px-12">
        <div className="mb-3 flex w-full justify-center text-xl font-bold">
          Input Form
        </div>
        <div className="flex w-full flex-col gap-3 rounded-2xl bg-slate-400 p-4">
          <div className="grid grid-cols-12 items-center justify-center gap-2">
            <label className=" text-gray-500 col-span-2">Asset Tag :</label>
            <input
              className="text-gray-500 col-span-10 w-full  rounded-lg bg-white-normal py-1 pl-1 text-base focus:outline-none"
              onChange={(e) => {
                setAssetTag(e.target.value);
              }}
              value={AssetTag}
              required
              type="text"
            />
          </div>
          <div className="grid grid-cols-12 items-center justify-center gap-2">
            <label className=" text-gray-500 col-span-2">Serial Number :</label>
            <input
              className="text-gray-500 col-span-10 w-full  rounded-lg bg-white-normal py-1 pl-1 text-base focus:outline-none"
              onChange={(e) => {
                setSerialNumber(e.target.value);
              }}
              value={SerialNumber}
              required
              type="text"
            />
          </div>
          <div className="grid grid-cols-12 items-center justify-center gap-2">
            <label className=" text-gray-500 col-span-2">
              Inventory Number :
            </label>
            <input
              className="text-gray-500 col-span-10 w-full  rounded-lg bg-white-normal py-1 pl-1 text-base focus:outline-none"
              onChange={(e) => {
                setInventoryNumber(e.target.value);
              }}
              value={InventoryNumber}
              required
              type="text"
            />
          </div>
          <div className="grid grid-cols-12 items-center justify-center gap-2">
            <label className=" text-gray-500 col-span-2">
              Evidence Number :
            </label>
            <input
              className="text-gray-500 col-span-10 w-full  rounded-lg bg-white-normal py-1 pl-1 text-base focus:outline-none"
              onChange={(e) => {
                setEvidenceNumber(e.target.value);
              }}
              value={EvidenceNumber}
              required
              type="text"
            />
          </div>
          <div className="grid grid-cols-12 items-center justify-center gap-2">
            <label className=" text-gray-500 col-span-2">IMEI :</label>
            <input
              className="text-gray-500 col-span-10 w-full  rounded-lg bg-white-normal py-1 pl-1 text-base focus:outline-none"
              onChange={(e) => {
                setIMEI(e.target.value);
              }}
              value={IMEI}
              required
              type="text"
            />
          </div>
          <div className="grid grid-cols-12 items-center justify-center gap-2">
            <label className=" text-gray-500 col-span-2">Model Asset* :</label>
            <input
              className="text-gray-500 col-span-10 w-full  rounded-lg bg-white-normal py-1 pl-1 text-base focus:outline-none"
              onChange={(e) => {
                setModelAsset(e.target.value);
              }}
              value={ModelAsset}
              required
              type="text"
            />
          </div>
          <div className="grid grid-cols-12 items-center justify-center gap-2">
            <label className=" text-gray-500 col-span-2">Asset Class* :</label>
            <input
              className="text-gray-500 col-span-10 w-full  rounded-lg bg-white-normal py-1 pl-1 text-base focus:outline-none"
              onChange={(e) => {
                setAssetClass(e.target.value);
              }}
              value={AssetClass}
              required
              type="text"
            />
          </div>
          <div className="grid grid-cols-12 items-center justify-center gap-2">
            <label className=" text-gray-500 col-span-2">Asset Type :</label>
            <input
              className="text-gray-500 col-span-10 w-full  rounded-lg bg-white-normal py-1 pl-1 text-base focus:outline-none"
              onChange={(e) => {
                setAssetType(e.target.value);
              }}
              value={AssetType}
              required
              type="text"
            />
          </div>
          <div className="grid grid-cols-12 items-center justify-center gap-2">
            <label className=" text-gray-500 col-span-2">
              Purchase Order :
            </label>
            <input
              className="text-gray-500 col-span-10 w-full  rounded-lg bg-white-normal py-1 pl-1 text-base focus:outline-none"
              onChange={(e) => {
                setPurchaseOrder(e.target.value);
              }}
              value={PurchaseOrder}
              required
              type="text"
            />
          </div>
          <div className="grid grid-cols-12 items-center justify-center gap-2">
            <label className=" text-gray-500 col-span-2">
              Delivery order :
            </label>
            <input
              className="text-gray-500 col-span-10 w-full  rounded-lg bg-white-normal py-1 pl-1 text-base focus:outline-none"
              onChange={(e) => {
                setDeliveryOrder(e.target.value);
              }}
              value={DeliveryOrder}
              required
              type="text"
            />
          </div>
          <div className="grid grid-cols-12 items-center justify-center gap-2">
            <label className=" text-gray-500 col-span-2">Status :</label>
            <input
              className="text-gray-500 col-span-4 w-full  rounded-lg bg-white-normal py-1 pl-1 text-base focus:outline-none"
              onChange={(e) => {
                setStatus(e.target.value);
              }}
              value={Status}
              required
              type="text"
            />
            <label className=" text-gray-500 col-span-2 text-right">
              Sub Status :
            </label>
            <input
              className="text-gray-500 col-span-4 w-full  rounded-lg bg-white-normal py-1 pl-1 text-base focus:outline-none"
              onChange={(e) => {
                setSubStatus(e.target.value);
              }}
              value={SubStatus}
              required
              type="text"
            />
          </div>
          <div className="grid grid-cols-12 items-center justify-center gap-2">
            <label className=" text-gray-500 col-span-2">NIK :</label>
            <input
              className="text-gray-500 col-span-10 w-full  rounded-lg bg-white-normal py-1 pl-1 text-base focus:outline-none"
              onChange={(e) => {
                setNIK(e.target.value);
              }}
              value={NIK}
              required
              type="text"
            />
          </div>
          <div className="grid grid-cols-12 items-center justify-center gap-2">
            <label className=" text-gray-500 col-span-2">User Name :</label>
            <input
              className="text-gray-500 col-span-10 w-full  rounded-lg bg-white-normal py-1 pl-1 text-base focus:outline-none"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              value={UserName}
              required
              type="text"
            />
          </div>
          <div className="grid grid-cols-12 items-center justify-center gap-2">
            <label className=" text-gray-500 col-span-2">
              Assigned User(txt) :
            </label>
            <input
              className="text-gray-500 col-span-10 w-full  rounded-lg bg-white-normal py-1 pl-1 text-base focus:outline-none"
              onChange={(e) => {
                setAssignedUser(e.target.value);
              }}
              value={AssignedUser}
              required
              type="text"
            />
          </div>
          <div className="grid grid-cols-12 items-center justify-center gap-2">
            <label className=" text-gray-500 col-span-2">Department :</label>
            <input
              className="text-gray-500 col-span-10 w-full  rounded-lg bg-white-normal py-1 pl-1 text-base focus:outline-none"
              onChange={(e) => {
                setDepartment(e.target.value);
              }}
              value={Department}
              required
              type="text"
            />
          </div>
          <div className="grid grid-cols-12 items-center justify-center gap-2">
            <label className=" text-gray-500 col-span-2">Host Name :</label>
            <input
              className="text-gray-500 col-span-10 w-full  rounded-lg bg-white-normal py-1 pl-1 text-base focus:outline-none"
              onChange={(e) => {
                setHostName(e.target.value);
              }}
              value={HostName}
              required
              type="text"
            />
          </div>
          <div className="grid grid-cols-12 items-center justify-center gap-2">
            <label className=" text-gray-500 col-span-2">Location :</label>
            <input
              className="text-gray-500 col-span-4 w-full  rounded-lg bg-white-normal py-1 pl-1 text-base focus:outline-none"
              onChange={(e) => {
                setLocation(e.target.value);
              }}
              value={Location}
              required
              type="text"
            />
            <label className=" text-gray-500 col-span-2 text-right">
              City :
            </label>
            <input
              className="text-gray-500 col-span-4 w-full  rounded-lg bg-white-normal py-1 pl-1 text-base focus:outline-none"
              onChange={(e) => {
                setCity(e.target.value);
              }}
              value={City}
              required
              type="text"
            />
          </div>
          <div className="grid grid-cols-12 items-center justify-center gap-2">
            <label className=" text-gray-500 col-span-2">
              Deduction Status :
            </label>
            <input
              className="text-gray-500 col-span-10 w-full  rounded-lg bg-white-normal py-1 pl-1 text-base focus:outline-none"
              onChange={(e) => {
                setDeductionStatus(e.target.value);
              }}
              value={DeductionStatus}
              required
              type="text"
            />
          </div>
          <div className="grid grid-cols-12 items-center justify-center gap-2">
            <label className=" text-gray-500 col-span-2">
              Info to HR Date :
            </label>
            <input
              className="text-gray-500 col-span-10 w-full  rounded-lg bg-white-normal py-1 pl-1 text-base focus:outline-none"
              onChange={(e) => {
                setInfoToHRDate(e.target.value);
              }}
              value={InfoToHRDate}
              required
              type="text"
            />
          </div>
          <div className="grid grid-cols-12 items-center justify-center gap-2">
            <label className=" text-gray-500 col-span-2">
              Amount Deduct IDR :
            </label>
            <input
              className="text-gray-500 col-span-10 w-full  rounded-lg bg-white-normal py-1 pl-1 text-base focus:outline-none"
              onChange={(e) => {
                setAmountDeductIDR(e.target.value);
              }}
              value={AmountDeductIDR}
              required
              type="text"
            />
          </div>
          <div className="grid grid-cols-12 items-center justify-center gap-2">
            <label className=" text-gray-500 col-span-2">
              Historical to JIRA Ticket :
            </label>
            <input
              className="text-gray-500 col-span-10 w-full  rounded-lg bg-white-normal py-1 pl-1 text-base focus:outline-none"
              onChange={(e) => {
                setHistoricalToJIRATicket(e.target.value);
              }}
              value={HistoricalToJIRATicket}
              required
              type="text"
            />
          </div>
          <div className="grid grid-cols-12 items-center justify-center gap-2">
            <label className=" text-gray-500 col-span-2">
              Historical User Usage :
            </label>
            <input
              className="text-gray-500 col-span-10 w-full  rounded-lg bg-white-normal py-1 pl-1 text-base focus:outline-none"
              onChange={(e) => {
                setHistoricalUserUsage(e.target.value);
              }}
              value={HistoricalUserUsage}
              required
              type="text"
            />
          </div>
          <div className="grid grid-cols-12 items-center justify-center gap-2">
            <label className=" text-gray-500 col-span-2">
              Last Update Date:
            </label>
            <input
              className="text-gray-500 col-span-10 w-full  rounded-lg bg-white-normal py-1 pl-1 text-base focus:outline-none"
              onChange={(e) => {
                setLastUpdateDate(e.target.value);
              }}
              value={LastUpdateDate}
              required
              type="text"
            />
          </div>
          <div className="grid grid-cols-12 items-center justify-center gap-2">
            <label className=" text-gray-500 col-span-2">Comment :</label>
            <input
              className="text-gray-500 col-span-10 w-full  rounded-lg bg-white-normal py-1 pl-1 text-base focus:outline-none"
              onChange={(e) => {
                setComment(e.target.value);
              }}
              value={Comment}
              required
              type="text"
            />
          </div>
          <div className="grid grid-cols-12 items-center justify-center gap-2">
            <label className=" text-gray-500 col-span-2">Floor :</label>
            <input
              className="text-gray-500 col-span-10 w-full  rounded-lg bg-white-normal py-1 pl-1 text-base focus:outline-none"
              onChange={(e) => {
                setFloor(e.target.value);
              }}
              value={Floor}
              required
              type="text"
            />
          </div>
          <div className="grid grid-cols-12 items-center justify-center gap-2">
            <label className=" text-gray-500 col-span-2">Sub Area :</label>
            <input
              className="text-gray-500 col-span-10 w-full  rounded-lg bg-white-normal py-1 pl-1 text-base focus:outline-none"
              onChange={(e) => {
                setSubArea(e.target.value);
              }}
              value={SubArea}
              required
              type="text"
            />
          </div>
          <div className="grid grid-cols-12 items-center justify-center gap-2">
            <label className=" text-gray-500 col-span-2">Type :</label>
            <input
              className="text-gray-500 col-span-10 w-full  rounded-lg bg-white-normal py-1 pl-1 text-base focus:outline-none"
              onChange={(e) => {
                setType(e.target.value);
              }}
              value={Type}
              required
              type="text"
            />
          </div>
          {/*  */}
        </div>
        <div className=" w-full text-center">
          <button
            type="submit"
            onClick={handleSubmit}
            className="  my-4   w-full scale-100 transform rounded-lg bg-slate-400  px-10 py-2 text-center transition duration-300 hover:opacity-75 "
          >
            <h1 className="  rounded-2xl bg-slate-400 text-xl font-bold">
              Submit
            </h1>
          </button>
        </div>
      </div>
    </div>
  );
}
