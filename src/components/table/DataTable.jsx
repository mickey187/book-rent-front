import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

// const columns = [
//   { field: 'id', headerName: 'ID', width: 90 },
//   { field: 'firstName', headerName: 'First name', width: 150 },
//   { field: 'lastName', headerName: 'Last name', width: 150 },
//   { field: 'age', headerName: 'Age', type: 'number', width: 110 },
//   { field: 'email', headerName: 'Email', width: 200 },
// ];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, email: 'jon.snow@example.com' },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, email: 'cersei.lannister@example.com' },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, email: 'jaime.lannister@example.com' },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, email: 'arya.stark@example.com' },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, email: 'daenerys.targaryen@example.com' },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150, email: 'melisandre@example.com' },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, email: 'ferrara@example.com' },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, email: 'rossini@example.com' },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, email: 'harvey@example.com' },
// ];

export default function DataTable({columns, rows}) {
  return (
    <div className=' h-[400px]'>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}
