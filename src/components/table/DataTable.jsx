import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';



export default function DataTable({columns, rows}) {
  return (
    <div className=' h-[400px] w-full'>
      <DataGrid rows={rows} columns={columns} pageSize={5}  />
    </div>
  );
}
