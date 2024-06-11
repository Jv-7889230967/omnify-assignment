"use client"
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { rows } from '../utils/Row-Data';
import { useContext, useState } from 'react';
import ColumnsContext from '../context/Columns-context';

export default function DataTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const { filteredcolumns } = useContext(ColumnsContext);  {/* catching the updated the filtered columns context to show only filtered columns*/}
  return (
    <Paper sx={{ width: '95%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 480 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {filteredcolumns.map((column) => (
                <TableCell
                  key={filteredcolumns.field}
                  align={filteredcolumns.align}
                  style={{ width: 180, backgroundColor: '#F8FAFC' }}
                >
                  {column.renderHeader()}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {filteredcolumns.map((column) => {
                      const value = row[column.field];
                      return (
                        <TableCell key={column.field} align={column.align} style={{ textAlign: 'start' }}>
                          {
                            column.format && typeof value === 'number'
                              ? column.format(value)
                              : <span style={{
                                color: value === 'lead' ? 'blue' : 'black',
                                backgroundColor: value === 'lead' ? '#EFF6FF' : value === 'inactive' ? '#F1F5F9' : value === 'active' ? '#F0FDF9' : 'transparent',
                                padding: '10px',
                                borderRadius: '10px'
                              }}>{value === 'lead' ? 'Lead' : value === 'inactive' ? 'Inactive' : value === 'active' ? 'Active' : value}</span>
                          }
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
