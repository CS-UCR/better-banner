import React from 'react';
import { AppBar,Toolbar,Typography,Button,Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import Card from '../components/Card';
import ClassDetails from '../components/ClassDetails';
import FullScreen from '../components/FullScreenDialog';
import FullScreenDialog from '../components/FullScreenDialog';

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
    }
}));
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



export default function Sandbox() {
    const classes = useStyles();

    const [ScheduleDialog, ToggleDialog] = React.useState(false);
    const [DialogData, SetData] = React.useState(null);



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
            <AppBar position='relative'>
                <Toolbar>
                    <Typography
                        variant='h6'
                        align='center'
                        color='inherit'
                        className={classes.title}
                    >
                        Registration Sandbox
                    </Typography>
                    <Button color='inherit' className={classes.menuButton}>
                        Add
                    </Button>
                </Toolbar>
            </AppBar>
            <Grid container spacing={4}>
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
