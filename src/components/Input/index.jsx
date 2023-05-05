export default function Index() {
  return (
    <div className=" overflow-hidden">
      <div className="mt-24 px-12">
        <div className="mb-3 flex w-full justify-center text-xl font-bold">
          Input Form
        </div>
        <div className="flex w-full flex-col gap-3 rounded-2xl bg-slate-400 p-4">
          <div className="grid grid-cols-12 items-center justify-center gap-2">
            <label className=" text-gray-500 col-span-2">Serial Number :</label>
            <input
              className="text-gray-500 col-span-10 w-full  rounded-lg bg-white-normal py-1 pl-1 text-base focus:outline-none"
              onChange={(e) => {}}
            />
          </div>
          <div className="grid grid-cols-12 items-center justify-center gap-2">
            <label className=" text-gray-500 col-span-2">
              Inventory Number :
            </label>
            <input
              className="text-gray-500 col-span-10 w-full  rounded-lg bg-white-normal py-1 pl-1 text-base focus:outline-none"
              onChange={(e) => {}}
            />
          </div>
          <div className="grid grid-cols-12 items-center justify-center gap-2">
            <label className=" text-gray-500 col-span-2">
              Evidence Number :
            </label>
            <input
              className="text-gray-500 col-span-10 w-full  rounded-lg bg-white-normal py-1 pl-1 text-base focus:outline-none"
              onChange={(e) => {}}
            />
          </div>
          <div className="grid grid-cols-12 items-center justify-center gap-2">
            <label className=" text-gray-500 col-span-2">IMEI :</label>
            <input
              className="text-gray-500 col-span-10 w-full  rounded-lg bg-white-normal py-1 pl-1 text-base focus:outline-none"
              onChange={(e) => {}}
            />
          </div>
          <div className="grid grid-cols-12 items-center justify-center gap-2">
            <label className=" text-gray-500 col-span-2">Model Asset :</label>
            <input
              className="text-gray-500 col-span-10 w-full  rounded-lg bg-white-normal py-1 pl-1 text-base focus:outline-none"
              onChange={(e) => {}}
            />
          </div>
          <div className="grid grid-cols-12 items-center justify-center gap-2">
            <label className=" text-gray-500 col-span-2">Status :</label>
            <input
              className="text-gray-500 col-span-4 w-full  rounded-lg bg-white-normal py-1 pl-1 text-base focus:outline-none"
              onChange={(e) => {}}
            />
            <label className=" text-gray-500 col-span-2 text-right">
              Sub Status :
            </label>
            <input
              className="text-gray-500 col-span-4 w-full  rounded-lg bg-white-normal py-1 pl-1 text-base focus:outline-none"
              onChange={(e) => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
