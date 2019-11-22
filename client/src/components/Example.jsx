/* eslint-disable react/prop-types */
import React from 'react';
import { Button } from '@material-ui/core';

const values = [
    // 'blah',
    // 'bleh',
    // 'fee',
    // 'fi',
    // 'fo',
    // 'fum',
    {
        title: 'CS179',
        days: 'MWF',
        times: '10:00 - 10:50'
    },
    {
        title: 'CS166',
        days: 'TR',
        times: '11:00 - 12:20'
    }
];

// function pickDate() {
//     const values = [];
//     return values[];
// }

function SettingChild({ handleData }) {
    function setData() {
        const chosenValue = values[Math.trunc(Math.random() * values.length)];
        handleData(chosenValue);
    }

    return (
        <Button onClick={setData} variant='contained'>
            Click me!
        </Button>
    );
}

function ReceivingChild({ data }) {
    return (
        <ul>
            {data.map(({ title, days, times }) => (
                <li>
                    <h4>{title}</h4>
                    <p>{days}</p>
                    <p>{times}</p>
                </li>
            ))}
        </ul>
    );
}

export default function Parent() {
    const [state, setState] = React.useState([]);
    function handleData(chosenValue) {
        setState([...state, chosenValue]);
    }
    return (
        <div>
            <SettingChild handleData={handleData} />
            <ReceivingChild data={state} />
        </div>
    );
}
