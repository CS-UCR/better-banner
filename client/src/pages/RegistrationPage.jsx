import React from 'react';
import ClassDetails from '../components/ClassDetails';

export default function RegistrationPage(){

    return (
        <div>
            <h1>Hello</h1>
            <ClassDetails 
                courseTitle='CS150G'
                Schedule='Monday 11:00 - 11:50'
                Overview='Theory of Automata'
                Prerequisites='CS111 with a grade of C- or better'
                Location='WCH 138'
                Instructor='Pae Lependu'
                Seats_Available='Seats available: 5'
                Waitlist='Waitlist: 0'
            />
        </div>
    );
};