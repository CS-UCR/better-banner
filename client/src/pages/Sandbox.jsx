import React from 'react';
import { AppBar,Toolbar,Typography,Button,Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import Card from '../components/Card';
import ClassDetails from '../components/ClassDetails';


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
            {/* <Container className={classes.cardGrid} maxWidth='md'>
                <Grid container spacing={2}>
                    <Grid item sm={12}>
                        <Card />
                    </Grid>
                    <Grid item sm={12}>
                        <Card />
                    </Grid>
                    <Grid item sm={12}>
                        <Card />
                    </Grid>
                    <Grid item sm={12}>
                        <Card />
                    </Grid>
                </Grid>
            </Container> */}
            <Grid container spacing={4}>
                {courses.map((x, index) => (
                    <Grid item key={index} className={classes.cardGrid} xs={3}>
                        {/* <Card
                            courseNumber={x.courseNumber}
                            schedule={x.schedule}
                            courseHead={x.courseHead}
                        /> */}
                        <ClassDetails 
                            courseTitle={x.courseTitle}
                            Schedule={x.Schedule}
                            Overview={x.Overview}
                            Prerequisites={x.Prerequisites}
                            Location={x.Location}
                            Instructor={x.Instructor}
                            Seats_Available={x.Seats_Available}
                            Waitlist={x.Waitlist}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    );
}
