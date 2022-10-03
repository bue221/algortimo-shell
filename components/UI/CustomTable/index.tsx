import * as React from 'react'
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableCell
} from '@mui/material'
import { useEffect } from 'react'

export function createData(
  iter: number,
  data: number,
  time: number
): { iter: number; data: number; time: number } {
  return { iter, data, time }
}

interface Props {
  rows?: Array<{ iter: number; data: number; time: number }>
}

export default function CustomTable({ rows = [] }: Props) {
  const [rowsM, setRowsM] = React.useState<
    Array<{
      iter: number
      data: number
      time: number
    }>
  >([])

  useEffect(() => {
    if (rows.length > 0) setRowsM(rows)
  }, [rows])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell># de iteración</TableCell>
            <TableCell align="right"># datos</TableCell>
            <TableCell align="right">Tiempo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsM.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.iter}
              </TableCell>
              <TableCell align="right">{row.data}</TableCell>
              <TableCell align="right">{row.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
