import React from 'react';
import { Container } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import ScheduleTable from '../components/Table';
// import Drawer from '../layout/DrawerAndHeader';
import Tabs from '../components/Tabs';
import Calendar from '../components/Calendar';
import useTitle from '../hooks/useTitle';
import useFetch from '../hooks/useFetch';
import Loader from '../components/Loader';

export default function RegistrationPage() {
    useTitle('Course Schedule');
    const { id } = useParams();
    const [loading, data] = useFetch(`/api/users/${id}/registration`);
    return loading ? (
        <Loader />
    ) : (
        <div>
            {/* <Drawer title='Course Schedule' /> */}
            <Container fixed>
                <Tabs
                    title1='LIST'
                    title2='CALENDAR'
                    data1={<ScheduleTable events={data} />}
                    data2={<Calendar events={data} />}
                />
            </Container>
        </div>
    );
}
