import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faPencil,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

export default function Index() {
  return (
    <div className=" overflow-hidden">
      <div className="mt-24 px-12">
        <div className="flex gap-2">
          <div className="flex w-[500px] items-center justify-center rounded-xl border bg-slate-400 px-3 align-middle ">
            <input
              className=" text-gray-500 w-full bg-transparent text-base focus:outline-none "
              onChange={(e) => {}}
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              color="Black"
              size="lg"
              className="p-2"
            />
          </div>
          <a className=" cursor-pointer">
            <FontAwesomeIcon
              icon={faPencil}
              color="Black"
              size="lg"
              className="p-3"
            />
          </a>
          <a className=" cursor-pointer">
            <FontAwesomeIcon
              icon={faTrash}
              color="Black"
              size="lg"
              className="p-3"
            />
          </a>
        </div>

        <div>
          <table className="mt-4 w-full table-auto bg-slate-400">
            <thead>
              <tr>
                <th className="border border-black">Serial num</th>
                <th className="border border-black">Type</th>
                <th className="border border-black">Evidence num</th>
                <th className="border border-black">Inven num</th>
                <th className="border border-black">Model asset</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black">1</td>
                <td className="border border-black">Kursi</td>
                <td className="border border-black">Furniture</td>
                <td className="border border-black">10</td>
                <td className="border border-black">Baik</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
