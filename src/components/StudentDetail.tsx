import { useAtom } from 'jotai';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { newStudentAtom, removeTodoAtom, studentAtom } from '../store/store';
import { StudentDetailContent, StudentFormField } from '../constants/StudentDetail';

interface Props {
  setEdit: (value: boolean) => void
}

const StudentDetail = ({ setEdit }: Props) => {
  const [studentList] = useAtom(studentAtom);
  const [, textSet] = useAtom(newStudentAtom);
  const [, removeTodo] = useAtom(removeTodoAtom);

  const EditDetail = (row: StudentDetailContent) => {
    setEdit(true)
    textSet(row)
  }

  const DeleteDetail = (row: StudentDetailContent) => {
    removeTodo(row.id)
  }

  return (
    <>
      {studentList && studentList.length > 0 &&
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                {StudentFormField.map((item) => (
                  <TableCell>{item.label}</TableCell>
                ))}
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {studentList.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.firstName}</TableCell>
                  <TableCell>{row.lastName}</TableCell>
                  <TableCell>{row.city}</TableCell>
                  <TableCell>{row.country}</TableCell>
                  <TableCell>{row.contact}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.gender}</TableCell>
                  <TableCell onClick={() => EditDetail(row)}><EditIcon color={"primary"} /></TableCell>
                  <TableCell onClick={() => DeleteDetail(row)}><DeleteIcon color={"primary"} /></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer >
      }
    </>
  )
}

export default StudentDetail