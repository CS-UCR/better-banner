import React from 'react';
import { Container } from '@material-ui/core';
import ScheduleTable from '../components/Table'; 
import Drawer from '../components/DrawerAndHeader';
import Tabs from '../components/Tabs';
import Calendar from '../components/Calendar'

export default function RegistrationPage(){

    
    return (
        <div>
            
            <Drawer title='Course Schedule' />
            <Container fixed>
                <Tabs title1='LIST' title2='CALENDAR' data1={<ScheduleTable />} data2={<Calendar />} />
                
            </Container>
        </div>
    );
};