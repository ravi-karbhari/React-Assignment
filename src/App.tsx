import { Box } from '@mui/material'
import { Provider } from 'jotai';

import StudentDetailForm from './components/StudentDetailForm';

function App() {
    return (
        <Provider>
            <Box className="App">
                <StudentDetailForm />
            </Box>
        </Provider>
    );
}

export default App;