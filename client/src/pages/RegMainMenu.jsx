import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const date1 = new Date();
const daysLeftOfWeek = date1.getDay() % 7;

date1.setHours(7);
date1.setMinutes(0);
date1.setDate(date1.getDate() - daysLeftOfWeek + 2);
const date2 = new Date();
date2.setHours(8);
date2.setMinutes(30);
date2.setDate(date2.getDate() - daysLeftOfWeek + 2);
const date3 = new Date();
date3.setHours(10);
date3.setMinutes(0);
date3.setDate(date3.getDate() - daysLeftOfWeek + 1);
const date4 = new Date();
date4.setHours(11);
date4.setMinutes(0);
date4.setDate(date4.getDate() - daysLeftOfWeek + 1);
const date5 = new Date();
date5.setHours(7);
date5.setMinutes(0);
date5.setDate(date5.getDate() - daysLeftOfWeek + 4);
const date6 = new Date();
date6.setHours(8);
date6.setMinutes(30);
date6.setDate(date6.getDate() - daysLeftOfWeek + 4);
const date7 = new Date();
date7.setHours(10);
date7.setMinutes(0);
date7.setDate(date7.getDate() - daysLeftOfWeek + 3);
const date8 = new Date();
date8.setHours(11);
date8.setMinutes(0);
date8.setDate(date8.getDate() - daysLeftOfWeek + 3);
const date9 = new Date();
date9.setHours(10);
date9.setMinutes(0);
date9.setDate(date9.getDate() - daysLeftOfWeek + 5);
const date10 = new Date();
date10.setHours(11);
date10.setMinutes(0);
date10.setDate(date10.getDate() - daysLeftOfWeek + 5);
const date11 = new Date();
date11.setHours(10);
date11.setMinutes(0);
date11.setDate(date11.getDate() - daysLeftOfWeek + 5);
const date12 = new Date();
date12.setHours(11);
date12.setMinutes(0);
date12.setDate(date12.getDate() - daysLeftOfWeek + 5);

const MyCalendar = props => (
    <div>
        <Calendar
            localizer={localizer}
            // events={[]}
            startAccessor='start'
            endAccessor='end'
            step={15}
            style={{ height: 500 }}
            defaultView='week'
            views={['week']}
            drilldownView={null}
            toolbar={false}
            events={[
                { title: 'CS179', start: date1, end: date2, allDay: false },
                { title: 'CS171', start: date3, end: date4, allDay: false },
                { title: 'CS179', start: date5, end: date6, allDay: false },
                { title: 'CS171', start: date7, end: date8, allDay: false },
                { title: 'CS171', start: date9, end: date10, allDay: false },
                { title: 'CS171', start: date11, end: date12, allDay: false }
            ]}
        />
    </div>
);

export default MyCalendar;
