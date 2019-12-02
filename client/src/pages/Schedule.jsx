import React from 'react';
import { Container } from '@material-ui/core';
import ScheduleTable from '../components/Table';
// import Drawer from '../layout/DrawerAndHeader';
import Tabs from '../components/Tabs';
import Calendar from '../components/Calendar';
import useTitle from '../hooks/useTitle';

export default function RegistrationPage() {
    useTitle('Course Schedule');
    return (
        <div>
            {/* <Drawer title='Course Schedule' /> */}
            <Container fixed>
                <Tabs
                    title1='LIST'
                    title2='CALENDAR'
                    data1={<ScheduleTable />}
                    data2={<Calendar />}
                />
            </Container>
        </div>
    );
}
