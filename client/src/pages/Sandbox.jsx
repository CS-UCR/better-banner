import React from 'react';
import { Grid, FormLabel, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import Card from '../components/Card';
import ClassDetails from '../components/ClassDetails';
import FullScreenDialog from '../components/FullScreenDialog';
import Drawer from '../components/DrawerAndHeader';
import UnitSlider from '../components/UnitSlider';
import FilterOption from '../components/FilterOption';

// used as the index to map each entry
const courses = [
    {
        courseTitle: 'CS150G',
        Schedule: 'Monday 11:00 - 11:50',
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
        courseTitle: 'CS150G',
        Schedule: 'Monday 11:00 - 11:50',
        Overview: 'Theory of Automata',
        Prerequisites: 'CS111 with a grade of C- or better',
        Location: 'WCH 138',
        Instructor: 'Pae Lependu',
        Seats_Available: 'Seats available: 5',
        Waitlist: 'Waitlist: 0',
    },
    {
        courseTitle: 'CS150G',
        Schedule: 'Monday 11:00 - 11:50',
        Overview: 'Theory of Automata',
        Prerequisites: 'CS111 with a grade of C- or better',
        Location: 'WCH 138',
        Instructor: 'Pae Lependu',
        Seats_Available: 'Seats available: 5',
        Waitlist: 'Waitlist: 0',
    },
    {
        courseTitle: 'CS150G',
        Schedule: 'Monday 11:00 - 11:50',
        Overview: 'Theory of Automata',
        Prerequisites: 'CS111 with a grade of C- or better',
        Location: 'WCH 138',
        Instructor: 'Pae Lependu',
        Seats_Available: 'Seats available: 5',
        Waitlist: 'Waitlist: 0',
    },
    {
        courseTitle: 'CS150G',
        Schedule: 'Monday 11:00 - 11:50',
        Overview: 'Theory of Automata',
        Prerequisites: 'CS111 with a grade of C- or better',
        Location: 'WCH 138',
        Instructor: 'Pae Lependu',
        Seats_Available: 'Seats available: 5',
        Waitlist: 'Waitlist: 0',
    },
    {
        courseTitle: 'CS150G',
        Schedule: 'Monday 11:00 - 11:50',
        Overview: 'Theory of Automata',
        Prerequisites: 'CS111 with a grade of C- or better',
        Location: 'WCH 138',
        Instructor: 'Pae Lependu',
        Seats_Available: 'Seats available: 5',
        Waitlist: 'Waitlist: 0',
    },
    {
        courseTitle: 'CS150G',
        Schedule: 'Monday 11:00 - 11:50',
        Overview: 'Theory of Automata',
        Prerequisites: 'CS111 with a grade of C- or better',
        Location: 'WCH 138',
        Instructor: 'Pae Lependu',
        Seats_Available: 'Seats available: 5',
        Waitlist: 'Waitlist: 0',
    },
];


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
        top: false,
        left: false,
        bottom: false,
        right: false,
    });    

    function handleData (data){
        ToggleDialog(true);
        SetData(data);
    }

    function closeDialog(){
        ToggleDialog(false);
        SetData(null);
    }

    // return is like the render() you find in class 
    return (
        <>
            <Drawer title='Registration Sandbox' />
            <Grid container justify='center' spacing={4}>
                <Grid item>
                    <UnitSlider />
                </Grid>
                <Grid item>
                    <FilterOption />
                </Grid>
                <Grid item>
                    <FilterOption />
                </Grid>
                <Grid item>
                    <FilterOption />
                </Grid>
            </Grid>

            <FormLabel>Results</FormLabel>
            <Grid container spacing={6}>
                {courses.map((x, index) => (
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
