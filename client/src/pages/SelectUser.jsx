import React from 'react';
import {
    List,
    ListItem,
    ListItemText,
    Container,
    Paper,
    Typography
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Loader from '../components/Loader';
import useFetch from '../hooks/useFetch';
// import UserContext from '../layout/UserContext';

export default function SelectUser() {
    const [loading, data] = useFetch('/api/info/students');
    // const setUser = React.useContext(UserContext);
    const history = useHistory();
    const handleClick = studentId => {
        // setUser(studentId);
        history.push(`/app/${studentId}/registration`);
    };

    return loading ? (
        <Loader />
    ) : (
        <Container maxWidth='md'>
            <Typography variant='h3'>Select Student</Typography>
            <Paper>
                <List>
                    {data.map(student => (
                        <ListItem
                            divider
                            key={student.student_id}
                            button
                            onClick={() => handleClick(student.student_id)}
                        >
                            <ListItemText
                                primary={`${student.firstName} ${student.lastName}`}
                                secondary={`SID: ${student.student_id}`}
                            />
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </Container>
    );
}
