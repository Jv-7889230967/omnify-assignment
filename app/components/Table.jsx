"use client"
import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { columns } from '../utils/Column-data';
import { rows } from '../utils/Row-Data';

const Table = () => {


  return (
    <main className='table-container'>
      <div style={{ height: 530, width: "100%",margin:'0 auto' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>

    </main>
  )
}

export default Table