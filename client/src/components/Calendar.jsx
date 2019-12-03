import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
// import useFetch from '../hooks/useFetch';

const localizer = momentLocalizer(moment);

const date1 = new Date();
const daysLeftOfWeek = date1.getDay() % 7;
// var date = new Date();
// date.setHours(integer)
// date.setMinutes(integer)
// date.setDate(date.getDate() - daysLeftofWeek + integer)

const minDate = new Date();
const maxDate = new Date();

minDate.setHours(6);
minDate.setMinutes(0);
maxDate.setHours(22);
minDate.setMinutes(0);

function parsingData(classMeeting) {
    const { days, start, end, title } = classMeeting;
    const meetings = [];

    if (days === 'MWF') {
        let class1 = new Date();
        class1.setDate(date1.getDate() - daysLeftOfWeek + 1);
        class1.setMinutes(0);
        meetings.push(class1);
        class1 = new Date();
        class1.setDate(date1.getDate() - daysLeftOfWeek + 3);
        class1.setMinutes(0);
        meetings.push(class1);
        class1 = new Date();
        class1.setDate(date1.getDate() - daysLeftOfWeek + 5);
        class1.setMinutes(0);
        meetings.push(class1);
    } else {
        let class1 = new Date();
        class1.setDate(date1.getDate() - daysLeftOfWeek + 2);
        class1.setMinutes(0);
        meetings.push(class1);
        class1 = new Date();
        class1.setDate(date1.getDate() - daysLeftOfWeek + 4);
        class1.setMinutes(0);
        meetings.push(class1);
    }
    const initialTime = parseInt(start[0] + start[1], 10);
    const endTime = parseInt(end[0] + end[1], 10);

    const correctTime = {};
    correctTime.days = meetings;
    correctTime.start = initialTime;
    correctTime.end = endTime;

    const classTimes = [];

    for (let i = 0; i < meetings.length; i += 1) {
        const classTimesObject = {};
        classTimesObject.start = new Date(
            meetings[i].setHours(correctTime.start)
        );
        classTimesObject.end = new Date(meetings[i].setHours(correctTime.end));
        classTimesObject.allDay = false;
        classTimesObject.title = title;
        classTimes.push(classTimesObject);
    }

    return classTimes;
}

const chooseMeeting = choice => {
    switch (choice) {
        case 0:
            return 'MWF';
        case 1:
            return 'TR';
        default:
            return 'MWF';
    }
};

const genOfferings = () => {
    const startTime = Math.floor(Math.random() * 12);
    return {
        // course_id: null, // will be redefined later
        // instructor: null, // will be redefined later
        // capacity: faker.random.number(100),
        // location: `${faker.name.lastName()} ${faker.random.number(400)}`,
        days: chooseMeeting(Math.floor(Math.random() * 2)),
        start: `${startTime}:00:00`,
        // end: `${Math.ceil(Math.random() * 2) + startTime}:00:00`,
        end: `${startTime + 1}:00:00`,
        title: 'CS179'
        // quarter: `${chooseQuarter(faker.random.number(2))}19`
    };
};

const MyCalendar = props => {
    // const [loading, data] = useFetch('/api/users/:studentId/registration');

    const data = parsingData(genOfferings());
    console.log(data);
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <Calendar
                localizer={localizer}
                startAccessor='start'
                endAccessor='end'
                step={15}
                // style={{ height: '900px', width: '100%' }}
                defaultView='week'
                views={['week']}
                // drilldownView={null}
                toolbar={false}
                events={data}
                min={minDate}
                max={maxDate}
                // { title: 'classname', start: initialStart, end: end, allDay: false },
                // { start: data.start, end: data.end, allDay: false }
            />
        </div>
    );
};

export default MyCalendar;
