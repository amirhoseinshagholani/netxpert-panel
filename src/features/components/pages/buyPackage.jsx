import Grid from "../../../core/grid";
import one_month_pic from "@public/img/1-month-iconjpg.jpg";
import three_month_pic from "@public/img/3-month-iconjpg.jpg";
import six_month_pic from "@public/img/6-month-iconjpg.jpg";
import twelve_month_pic from "@public/img/12-month-iconjpg copy.jpg";

import { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';




const BuyPackage = () => {
  // const data = [
  //   {
  //     name: {
  //       firstName: 'John',
  //       lastName: 'Doe',
  //     },
  //     address: '261 Erdman Ford',
  //     city: 'East Daphne',
  //     state: 'Kentucky',
  //   },
  //   {
  //     name: {
  //       firstName: 'Jane',
  //       lastName: 'Doe',
  //     },
  //     address: '769 Dominic Grove',
  //     city: 'Columbus',
  //     state: 'Ohio',
  //   },
  //   {
  //     name: {
  //       firstName: 'Joe',
  //       lastName: 'Doe',
  //     },
  //     address: '566 Brakus Inlet',
  //     city: 'South Linda',
  //     state: 'West Virginia',
  //   },
  //   {
  //     name: {
  //       firstName: 'Kevin',
  //       lastName: 'Vandy',
  //     },
  //     address: '722 Emie Stream',
  //     city: 'Lincoln',
  //     state: 'Nebraska',
  //   },
  //   {
  //     name: {
  //       firstName: 'Joshua',
  //       lastName: 'Rolluffs',
  //     },
  //     address: '32188 Larkin Turnpike',
  //     city: 'Charleston',
  //     state: 'South Carolina',
  //   },
  // ];

  // const columns = useMemo(
  //   () => [
  //     {
  //       accessorKey: 'name.firstName', //access nested data with dot notation
  //       header: 'First Name',
  //       size: 150,
  //     },
  //     {
  //       accessorKey: 'name.lastName',
  //       header: 'Last Name',
  //       size: 150,
  //     },
  //     {
  //       accessorKey: 'address', //normal accessorKey
  //       header: 'Address',
  //       size: 200,
  //     },
  //     {
  //       accessorKey: 'city',
  //       header: 'City',
  //       size: 150,
  //     },
  //     {
  //       accessorKey: 'state',
  //       header: 'State',
  //       size: 150,
  //     },
  //   ],
  //   [],
  // );
  return (
    <>
      <div className="h-full pb-5 pt-0 pl-0 pr-0 bg-slate-200 shadow-lg rounded rounded-lg">
        <div className="bg-gradient-to-l from-blue-400 to-slate-600 h-14 p-2 rounded-tr-lg rounded-tl-lg">
          <span className="text-white text-xl">Shop Packages</span>
        </div>
        <div className="p-5">
          <div className="bg-gradient-to-r from-[#ff6d00] to-slate-600 h-10 w-full rounded rounded-lg p-2 text-white">
            <span>Packages - Choose one of the packages</span>
          </div>

          <div className="m-5 grid grid-cols-12 gap-8 text-gray-100">

            <div className="col-span-3 h-60 bg-gradient-to-b from-blue-400 to-slate-700 rounded-3xl p-3 shadow-xl">
              <div className="gap-2 flex">
                <div className="text-[#f7ce16] shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-boxes"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434zM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134 2.75 1.571v-3.134L8.5 9.933zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21zM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643 8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z" />
                  </svg>
                </div>
                <div className="text-md font-bold">NetXpert-1Month</div>
              </div>
              <div className="w-full mt-5 flex">
                <img className="rounded rounded-md mx-auto justify-center w-16" src={one_month_pic} alt="" />
              </div>
              <div className="mt-3">
                <span className="font-bold text-md text-[#f5e4d7]">Description : </span>
                <span className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. </span>
              </div>
              <div className="h-full w-full flex justify-end mt-0">
                <div className="mt-5">
                  <span className="mb-3 flex">
                    <button className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-600 shadow-lg pt-1 pb-1 p-4 text-yellow-100 rounded-xl">
                      buy : 18$
                    </button>
                  </span>
                </div>
              </div>
            </div>


            <div className="col-span-3 h-60 bg-gradient-to-b from-blue-400 to-slate-700 rounded-3xl p-3 shadow-xl">
              <div className="gap-2 flex">
                <div className="text-[#f7ce16] shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-boxes"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434zM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134 2.75 1.571v-3.134L8.5 9.933zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21zM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643 8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z" />
                  </svg>
                </div>
                <div className="text-md font-bold">NetXpert-1Month</div>
              </div>
              <div className="w-full mt-5 flex">
                <img className="rounded rounded-md mx-auto justify-center w-16" src={three_month_pic} alt="" />
              </div>
              <div className="mt-3">
                <span className="font-bold text-md text-[#f5e4d7]">Description : </span>
                <span className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. </span>
              </div>
              <div className="h-full w-full flex justify-end mt-0">
                <div className="mt-5">
                  <span className="mb-3 flex">
                    <button className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-600 shadow-lg pt-1 pb-1 p-4 text-yellow-100 rounded-xl">
                      buy : 18$
                    </button>
                  </span>
                </div>
              </div>
            </div>


            <div className="col-span-3 h-60 bg-gradient-to-b from-blue-400 to-slate-700 rounded-3xl p-3 shadow-xl">
              <div className="gap-2 flex">
                <div className="text-[#f7ce16] shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-boxes"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434zM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134 2.75 1.571v-3.134L8.5 9.933zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21zM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643 8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z" />
                  </svg>
                </div>
                <div className="text-md font-bold">NetXpert-1Month</div>
              </div>
              <div className="w-full mt-5 flex">
                <img className="rounded rounded-md mx-auto justify-center w-16" src={six_month_pic} alt="" />
              </div>
              <div className="mt-3">
                <span className="font-bold text-md text-[#f5e4d7]">Description : </span>
                <span className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. </span>
              </div>
              <div className="h-full w-full flex justify-end mt-0">
                <div className="mt-5">
                  <span className="mb-3 flex">
                    <button className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-600 shadow-lg pt-1 pb-1 p-4 text-yellow-100 rounded-md">
                      buy : 18$
                    </button>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-span-3 h-60 bg-gradient-to-b from-blue-400 to-slate-700 rounded-3xl p-3 shadow-xl">
              <div className="gap-2 flex">
                <div className="text-[#f7ce16] shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-boxes"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434zM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134 2.75 1.571v-3.134L8.5 9.933zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21zM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643 8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z" />
                  </svg>
                </div>
                <div className="text-md font-bold">NetXpert-1Month</div>
              </div>
              <div className="w-full mt-5 flex">
                <img className="rounded rounded-md mx-auto justify-center w-16" src={twelve_month_pic} alt="" />
              </div>
              <div className="mt-3">
                <span className="font-bold text-md text-[#f5e4d7]">Description : </span>
                <span className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. </span>
              </div>
              <div className="h-full w-full flex justify-end mt-0">
                <div className="mt-5">
                  <span className="mb-3 flex">
                    <button className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-600 shadow-lg pt-1 pb-1 p-4 text-yellow-100 rounded-md">
                      buy : 18$
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>


          {/* <div className="bg-gradient-to-r mt-16 from-[#ff6d00] to-slate-600 h-10 w-full rounded rounded-lg p-2 text-white">
            <span>History</span>
          </div>
          <div className="px-3 py-4">
            {
              <Grid columns={columns} data={data} />
            }
          </div> */}
        </div>
      </div>
    </>
  )
}

export default BuyPackage;