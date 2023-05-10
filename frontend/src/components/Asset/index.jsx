import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faPencil,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import DataRow from './dataRow';
import { useDataAssetContext } from '../../hooks/useDataAssetContext';
import useFetch from '../../hooks/useFetch';
import { useSearch } from '../../hooks/useSearch';
import { useState } from 'react';
import { useDisplayContext } from '../../hooks/useDisplayContext';
import Pagination from './pagination';
//import { use } from '../../../../backend/server/routes/data_asset';
//import { useEffect } from 'react';

export default function Index() {
  const { assets, dispatch } = useDataAssetContext();
  const { notify, isPending, error, setLoading, setError } =
    useDisplayContext();
  const url = 'http://localhost:3100/api/asset';
  useFetch({
    url,
    dispatch,
    setError,
    setLoading,
    type: 'GET_ASSETS',
  });
  console.log(assets);

  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(1500);

  const indexOfLastTask = currentPage * postPerPage;
  const indexOfFirstTask = indexOfLastTask - postPerPage;
  const currentTask = assets && assets.slice(indexOfFirstTask, indexOfLastTask);
  // assets.sort((a, b) => a.id - b.id) &&
  // assets.sort((a, b) => a.id - b.id).slice(indexOfFirstTask, indexOfLastTask);

  const { searchResult, getSearchTerm, inputEl, searchTerm } =
    useSearch(currentTask);
  const listTasks = searchTerm < 1 ? currentTask : searchResult;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className=" overflow-hidden">
      <div className="mt-24 px-12">
        <div className="flex gap-2">
          <div className="flex w-[500px] items-center justify-center rounded-xl border bg-slate-400 px-3 align-middle ">
            <input
              ref={inputEl}
              type="test"
              value={searchTerm}
              className=" text-gray-500 w-full bg-transparent text-base focus:outline-none "
              onChange={getSearchTerm}
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
        <div className="justify-center">
          {assets && (
            <Pagination
              postPerPage={postPerPage}
              totalPost={assets.length}
              paginate={paginate}
            />
          )}
        </div>
        <div
          style={{
            display: 'flex',
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          <table
            className="mt-4 w-full table-auto"
            //style={{ whiteSpace: 'nowrap' }}
          >
            <thead className="bg-slate-400">
              <tr>
                <th
                  className="border border-black"
                  style={{ minWidth: 30, maxWidth: 400 }}
                >
                  id
                </th>
                <th
                  className="border border-black"
                  style={{ minWidth: 150, maxWidth: 400 }}
                >
                  Asset Tag
                </th>
                <th
                  className="border border-black"
                  style={{ minWidth: 200, maxWidth: 400 }}
                >
                  Serial Number
                </th>
                <th
                  className="border border-black"
                  style={{ minWidth: 150, maxWidth: 400 }}
                >
                  Inventory Number
                </th>
                <th
                  className="border border-black"
                  style={{ minWidth: 150, maxWidth: 400 }}
                >
                  Evidence Number
                </th>
                <th
                  className="border border-black"
                  style={{ minWidth: 250, maxWidth: 400 }}
                >
                  IMEI
                </th>
                <th
                  className="border border-black"
                  style={{ minWidth: 250, maxWidth: 400 }}
                >
                  Model Asset
                </th>
                <th
                  className="border border-black"
                  style={{ minWidth: 250, maxWidth: 400 }}
                >
                  Asset Class
                </th>
                <th
                  className="border border-black"
                  style={{ minWidth: 150, maxWidth: 400 }}
                >
                  Asset Type
                </th>
                <th
                  className="border border-black"
                  style={{ minWidth: 200, maxWidth: 400 }}
                >
                  Purchase Order (PO)
                </th>
                <th
                  className="border border-black"
                  style={{ minWidth: 200, maxWidth: 400 }}
                >
                  Delivery Order (DO)
                </th>
                <th
                  className="border border-black"
                  style={{ minWidth: 200, maxWidth: 400 }}
                >
                  Status
                </th>
                <th
                  className="border border-black"
                  style={{ minWidth: 250, maxWidth: 400 }}
                >
                  Sub Status
                </th>
                <th
                  className="border border-black"
                  style={{ minWidth: 200, maxWidth: 400 }}
                >
                  NIK
                </th>
                <th
                  className="border border-black"
                  style={{ minWidth: 300, maxWidth: 400 }}
                >
                  User Name
                </th>
                <th
                  className="border border-black"
                  style={{ minWidth: 300, maxWidth: 400 }}
                >
                  Assigned User (txt)
                </th>
                <th
                  className="border border-black"
                  style={{ minWidth: 200, maxWidth: 400 }}
                >
                  Department
                </th>
                <th
                  className="border border-black"
                  style={{ minWidth: 200, maxWidth: 400 }}
                >
                  HostName
                </th>
                <th
                  className="border border-black"
                  style={{ minWidth: 350, maxWidth: 400 }}
                >
                  Location
                </th>
                <th
                  className="border border-black"
                  style={{ minWidth: 200, maxWidth: 400 }}
                >
                  City
                </th>
                <th
                  className="border border-black"
                  style={{ minWidth: 100, maxWidth: 400 }}
                >
                  Deduction Status
                </th>
                <th
                  className="border border-black"
                  style={{ minWidth: 150, maxWidth: 400 }}
                >
                  Info to HR Date
                </th>
                <th
                  className="border border-black"
                  style={{ minWidth: 300, maxWidth: 400 }}
                >
                  Amount Deduct (IDR)
                </th>
                <th
                  className="border border-black"
                  style={{ minWidth: 200, maxWidth: 400 }}
                >
                  Historical JIRA Ticket
                </th>
                <th
                  className="border border-black"
                  style={{ minWidth: 200, maxWidth: 400 }}
                >
                  Historical User Usage
                </th>
                <th
                  className="border border-black"
                  style={{ minWidth: 150, maxWidth: 400 }}
                >
                  Last Update Date
                </th>
                <th
                  className="border border-black"
                  style={{ minWidth: 250, maxWidth: 400 }}
                >
                  Comment
                </th>
                <th
                  className="border border-black"
                  style={{ minWidth: 75, maxWidth: 400 }}
                >
                  Floor
                </th>
                <th
                  className="border border-black"
                  style={{ minWidth: 150, maxWidth: 400 }}
                >
                  Sub Area
                </th>
                <th
                  className="border border-black"
                  style={{ minWidth: 200, maxWidth: 400 }}
                >
                  Type
                </th>
              </tr>
            </thead>
            <tbody className="border border-black">
              {listTasks &&
                listTasks
                  .sort((a, b) => a.id - b.id)
                  .map((asset) => (
                    <>
                      <DataRow asset={asset} />
                    </>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
