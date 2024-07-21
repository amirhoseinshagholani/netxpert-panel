import { useMemo } from "react";
import Grid from "../../../core/grid";

const Transactions = () => {
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
                    <span className="text-white text-xl">Transactions</span>
                </div>
                <div className="px-3 py-4">
                    {
                        <Grid columns={columns} data={data} />
                    }
                </div>
            </div>
        </>
    )
}

export default Transactions;