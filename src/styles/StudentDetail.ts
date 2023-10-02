import { Box, styled } from "@mui/material"

export const StudentForm = () => ({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '1rem'
})

export const FormBox = styled(Box)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    border: '1px solid',
    padding: '2rem',
}));