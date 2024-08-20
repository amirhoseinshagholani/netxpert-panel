
import {MaterialReactTable,useMaterialReactTable} from 'material-react-table';

const Grid = ({columns,data=[]}) => {

  const table = useMaterialReactTable({
    columns,
    data, 
    muiTableProps: {
      sx: {
        direction: 'ltr',
        textAlign: 'left',
        fontFamily:'vazir'
      },
    },
    muiTableHeadCellProps: {
      sx: {
        direction: 'ltr',
        textAlign: 'left',
        fontFamily:'vazir'
      },
    },
    muiTableBodyCellProps: {
      sx: {
        direction: 'ltr',
        textAlign: 'left',
        fontFamily:'vazir'
      },
    },
  });

  return <MaterialReactTable table={table} />;
};

export default Grid;