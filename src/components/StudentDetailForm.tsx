import {
    Box, TextField, Typography, Button,
    FormControl, FormLabel, RadioGroup, FormControlLabel,
    Radio
} from '@mui/material';
import { useAtom } from 'jotai';
import { useState } from 'react'

import { FormBox, StudentForm } from '../styles/StudentDetail';
import { StudentFormField } from '../constants/StudentDetail';
import { newStudentAtom, addStudentAtom, updateStudentAtom } from "../store/store";
import StudentDetail from './StudentDetail';

const StudentDetailForm = () => {

    const [edit, setEdit] = useState(false);
    const [text, textSet] = useAtom(newStudentAtom);
    const [, addStudent] = useAtom(addStudentAtom);
    const [, updateStudent] = useAtom(updateStudentAtom);

    const handleStudentChange = (e: any) => {
        e.preventDefault()
        var data = JSON.parse(JSON.stringify(text))
        data[e.target.id] = e.target.value
        textSet(data)
    }

    const handleGenderChange = (e: any) => {
        e.preventDefault()
        var data = JSON.parse(JSON.stringify(text))
        data['gender'] = e.target.value
        textSet(data)
    }

    const UpdateStudent = () => {
        updateStudent()
        setEdit(false)
    }

    return (
        <Box sx={StudentForm}>
            <FormBox>
                <Typography variant="h6" textAlign={'center'}>Student Detail</Typography>
                {StudentFormField.map((item, index) => {
                    return (
                        item.type === 'radio' ?
                            <FormControl key={index}>
                                <FormLabel id="demo-radio-buttons-group-label">{item.label}</FormLabel>
                                <RadioGroup
                                    id={item.id}
                                    row
                                    onChange={(e) => handleGenderChange(e)}
                                    value={text.gender || ""}
                                >
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                </RadioGroup>
                            </FormControl> :
                            <>
                                <TextField
                                    key={index}
                                    type={item.type}
                                    label={item.label}
                                    variant="standard"
                                    fullWidth
                                    sx={{ mb: '1rem' }}
                                    id={item.id}
                                    value={JSON.parse(JSON.stringify(text))[item.id] || ""}
                                    onChange={(e) => handleStudentChange(e)}
                                />
                                <br />
                            </>
                    )
                })}
                {edit ?
                    <Button variant="contained" color="primary" onClick={() => UpdateStudent()} fullWidth>
                        Update
                    </Button> :
                    <Button variant="contained" color="primary" onClick={() => addStudent()} fullWidth>
                        Save
                    </Button>}
            </FormBox>
            <Box sx={{ mt: '2rem' }}>
                <StudentDetail setEdit={setEdit} />
            </Box>
        </Box>
    )
}

export default StudentDetailForm