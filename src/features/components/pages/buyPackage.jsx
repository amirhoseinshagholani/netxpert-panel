import Grid from "../../../core/grid";


import { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';




const BuyPackage = () => {
  const data = [
    {
      name: {
        firstName: 'John',
        lastName: 'Doe',
      },
      address: '261 Erdman Ford',
      city: 'East Daphne',
      state: 'Kentucky',
    },
    {
      name: {
        firstName: 'Jane',
        lastName: 'Doe',
      },
      address: '769 Dominic Grove',
      city: 'Columbus',
      state: 'Ohio',
    },
    {
      name: {
        firstName: 'Joe',
        lastName: 'Doe',
      },
      address: '566 Brakus Inlet',
      city: 'South Linda',
      state: 'West Virginia',
    },
    {
      name: {
        firstName: 'Kevin',
        lastName: 'Vandy',
      },
      address: '722 Emie Stream',
      city: 'Lincoln',
      state: 'Nebraska',
    },
    {
      name: {
        firstName: 'Joshua',
        lastName: 'Rolluffs',
      },
      address: '32188 Larkin Turnpike',
      city: 'Charleston',
      state: 'South Carolina',
    },
  ];
  
  const columns = useMemo(
      () => [
        {
          accessorKey: 'name.firstName', //access nested data with dot notation
          header: 'First Name',
          size: 150,
        },
        {
          accessorKey: 'name.lastName',
          header: 'Last Name',
          size: 150,
        },
        {
          accessorKey: 'address', //normal accessorKey
          header: 'Address',
          size: 200,
        },
        {
          accessorKey: 'city',
          header: 'City',
          size: 150,
        },
        {
          accessorKey: 'state',
          header: 'State',
          size: 150,
        },
      ],
      [],
    );
    return (
        <>
            <div className="h-full pb-5 pt-0 pl-0 pr-0 bg-slate-300 shadow-lg rounded rounded-lg">
                <div className="bg-gradient-to-r from-blue-400 to-slate-600 h-14 p-2 rounded-tr-lg rounded-tl-lg">
                    <span className="text-white text-xl">Shop Packages</span>
                </div>
                <div className="p-5">
                    <div className="bg-gradient-to-r from-[#ff6d00] to-slate-600 h-10 w-full rounded rounded-lg p-2 text-white">
                        <span>Purchase</span>
                    </div>
                    <div className="m-5 grid grid-cols-12 gap-5">
                        <div className="col-span-3 flex flex-col">
                            <label className="mb-1 text-slate-700" htmlFor="name">SIM card:</label>
                            <select className="h-10 bg-white text-slate-500 shadow-lg text-gray-800 focus:outline-none p-2 rounded-lg" name="" id="">
                                <option value="">Select your SIM card</option>
                                <option value="">09370965131</option>
                                <option value="">09125534678</option>
                            </select>
                        </div>
                        <div className="col-span-4 flex flex-col ml-10">
                            <label className="mb-1 text-slate-700" htmlFor="name">Package:</label>
                            <select className="h-10 bg-white text-slate-500 shadow-lg text-gray-800 focus:outline-none p-2 rounded-lg" name="" id="">
                                <option value="">Select One Package</option>
                                <option value="">NetXpert-1 Month</option>
                                <option value="">NetXpert-3 Month</option>
                                <option value="">NetXpert-6 Month</option>
                                <option value="">NetXpert-1 Year</option>
                            </select>
                        </div>
                        <div className="col-span-4 flex flex-col ml-10">
                            <button className="bg-gradient-to-r from-green-600 to-slate-600 shadow-lg text-slate-100 w-32 rounded rounded-lg p-2 mt-7">Submit</button>
                        </div>
                    </div>
                    <div className="bg-gradient-to-r mt-10 from-[#ff6d00] to-slate-600 h-10 w-full rounded rounded-lg p-2 text-white">
                        <span>History</span>
                    </div>
                    <div className="px-3 py-4">
                        {
                            <Grid columns={columns} data={data} />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default BuyPackage;