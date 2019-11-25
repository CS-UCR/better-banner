import React from 'react';
import { Grid, FormLabel, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import Card from '../components/Card';
import ClassDetails from '../components/ClassDetails';
import FullScreenDialog from '../components/FullScreenDialog';
import Drawer from '../components/DrawerAndHeader';
import UnitSlider from '../components/UnitSlider';
import FilterOption from '../components/MenuFilter';

// used as the index to map each entry
const courses = [
    {
        courseTitle: 'CS150',
        Schedule: 'Tuesday 11:00 - 11:50',
        Overview: 'Theory of Automata',
        Prerequisites: 'CS111 with a grade of C- or better',
        Location: 'WCH 138',
        Instructor: 'Pae Lependu',
        Seats_Available: 'Seats available: 5',
        Waitlist: 'Waitlist: 0',
    },
    {
        courseTitle: 'CS179G',
        Schedule: 'Monday 11:00 - 11:50',
        Overview: 'Database Senior Design',
        Prerequisites: 'CS166 with a grade of C- or better',
        Location: 'WCH 145',
        Instructor: 'Mariam Salloum',
        Seats_Available: 'Seats available: 0',
        Waitlist: 'Waitlist: 2',
    },
    {
        courseTitle: 'CS120B',
        Schedule: 'Friday 3:00 - 5:00',
        Overview: 'Theory of Automata',
        Prerequisites: 'CS120B with a grade of C- or better',
        Location: 'WCH 129',
        Instructor: 'Phillip Brisk',
        Seats_Available: 'Seats available: 15',
        Waitlist: 'Waitlist: 0',
    },
    {
        courseTitle: 'CS150',
        Schedule: 'Monday 11:00 - 11:50',
        Overview: 'Theory of Automata',
        Prerequisites: 'CS111 with a grade of C- or better',
        Location: 'WCH 138',
        Instructor: 'Pae Lependu',
        Seats_Available: 'Seats available: 5',
        Waitlist: 'Waitlist: 0',
    },
    {
        courseTitle: 'CS120B',
        Schedule: 'Friday 3:00 - 5:00',
        Overview: 'Theory of Automata',
        Prerequisites: 'CS120B with a grade of C- or better',
        Location: 'WCH 129',
        Instructor: 'Phillip Brisk',
        Seats_Available: 'Seats available: 15',
        Waitlist: 'Waitlist: 0',
    },
    {
        courseTitle: 'CS150',
        Schedule: 'Monday 11:00 - 11:50',
        Overview: 'Theory of Automata',
        Prerequisites: 'CS111 with a grade of C- or better',
        Location: 'WCH 138',
        Instructor: 'Pae Lependu',
        Seats_Available: 'Seats available: 5',
        Waitlist: 'Waitlist: 0',
    },
    {
        courseTitle: 'CS120B',
        Schedule: 'Friday 3:00 - 5:00',
        Overview: 'Theory of Automata',
        Prerequisites: 'CS120B with a grade of C- or better',
        Location: 'WCH 129',
        Instructor: 'Phillip Brisk',
        Seats_Available: 'Seats available: 15',
        Waitlist: 'Waitlist: 0',
    },
    {
        courseTitle: 'CS150',
        Schedule: 'Monday 11:00 - 11:50',
        Overview: 'Theory of Automata',
        Prerequisites: 'CS111 with a grade of C- or better',
        Location: 'WCH 138',
        Instructor: 'Pae Lependu',
        Seats_Available: 'Seats available: 5',
        Waitlist: 'Waitlist: 0',
    },
];

const filterOption1 = ['CS150', 'CS179G', 'CS120B'];


const filterOption2 = ['Monday', 'Tuesday','Friday'];


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8)
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
}));



export default function Sandbox() {
    const classes = useStyles();

    const [ScheduleDialog, ToggleDialog] = React.useState(false);
    const [DialogData, SetData] = React.useState(null);

    const [drawerState, setState] = React.useState({
        left: false,
    });    

    const [filter1, getFilter] = React.useState('');
    const [filter2, getFilter2] = React.useState('');

    function retrieveFilter(newFilter){
        getFilter(newFilter);
    }

    function retrieveFilter2(newFilter){
        getFilter2(newFilter);
    }

    function handleData (data){
        ToggleDialog(true);
        SetData(data);
    }

    function closeDialog(){
        ToggleDialog(false);
        SetData(null);
    }


    let query1 = {courseTitle: filter1};
    let query2 = {Schedule: filter2};
    let results;
    if(filter1 === ''){
        results = courses.filter(obj => obj.Schedule.includes(query2.Schedule));
    }
    else{
        results = courses.filter(obj => (obj.courseTitle === query1.courseTitle && obj.Schedule.includes(query2.Schedule)) );
    }
    // results = courses.filter(obj => obj.Schedule.includes(query2.Schedule) );

    // return is like the render() you find in class 
    return (
        <>
            <Drawer title='Registration Sandbox' />
            <h1>{filter1}</h1>
            <h1>{filter2}</h1>
            <Grid container justify='center' spacing={4}>
                <Grid item>
                    <UnitSlider />
                </Grid>
                <Grid item>
                    <FilterOption label='Course' filter={retrieveFilter} options={filterOption1} />
                </Grid>
                <Grid item>
                    <FilterOption label='Day' filter={retrieveFilter2} options={filterOption2} />
                </Grid>
                {/* <Grid item>
                    <FilterOption filter={retrieveFilter} options={filterOption1} />
                </Grid> */}
            </Grid>

            <FormLabel>Results</FormLabel>
            <Grid container spacing={6}>
                {results.map((x, index) => (
                    <Grid item key={index} className={classes.cardGrid} xs={3}>

                        <ClassDetails 
                            details={x}
                            OpenDialog={handleData}
                            CloseDialog={closeDialog}
                        />
                    </Grid>
                ))}
            </Grid>
            <FullScreenDialog open={ScheduleDialog} close={closeDialog} data={DialogData} />

        </>
    );
}
