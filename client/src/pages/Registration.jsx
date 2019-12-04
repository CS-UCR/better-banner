import React from 'react';
import { Grid, FormLabel, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import Card from '../components/Card';
import ClassDetails from '../components/ClassDetails';
import FullScreenDialog from '../components/FullScreenDialog';
// import Drawer from '../layout/DrawerAndHeader';
import UnitSlider from '../components/UnitSlider';
import FilterOption from '../components/MenuFilter';
import useTitle from '../hooks/useTitle';
import useFetch from '../hooks/useFetch';
import Loader from '../components/Loader';

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
        Waitlist: 'Waitlist: 0'
    },
    {
        courseTitle: 'CS179G',
        Schedule: 'Monday 11:00 - 11:50',
        Overview: 'Database Senior Design',
        Prerequisites: 'CS166 with a grade of C- or better',
        Location: 'WCH 145',
        Instructor: 'Mariam Salloum',
        Seats_Available: 'Seats available: 0',
        Waitlist: 'Waitlist: 2'
    },
    {
        courseTitle: 'CS120B',
        Schedule: 'Friday 3:00 - 5:00',
        Overview: 'Theory of Automata',
        Prerequisites: 'CS120B with a grade of C- or better',
        Location: 'WCH 129',
        Instructor: 'Phillip Brisk',
        Seats_Available: 'Seats available: 15',
        Waitlist: 'Waitlist: 0'
    },
    {
        courseTitle: 'CS150',
        Schedule: 'Monday 11:00 - 11:50',
        Overview: 'Theory of Automata',
        Prerequisites: 'CS111 with a grade of C- or better',
        Location: 'WCH 138',
        Instructor: 'Pae Lependu',
        Seats_Available: 'Seats available: 5',
        Waitlist: 'Waitlist: 0'
    },
    {
        courseTitle: 'CS120B',
        Schedule: 'Friday 3:00 - 5:00',
        Overview: 'Theory of Automata',
        Prerequisites: 'CS120B with a grade of C- or better',
        Location: 'WCH 129',
        Instructor: 'Phillip Brisk',
        Seats_Available: 'Seats available: 15',
        Waitlist: 'Waitlist: 0'
    },
    {
        courseTitle: 'CS150',
        Schedule: 'Monday 11:00 - 11:50',
        Overview: 'Theory of Automata',
        Prerequisites: 'CS111 with a grade of C- or better',
        Location: 'WCH 138',
        Instructor: 'Pae Lependu',
        Seats_Available: 'Seats available: 5',
        Waitlist: 'Waitlist: 0'
    },
    {
        courseTitle: 'CS120B',
        Schedule: 'Friday 3:00 - 5:00',
        Overview: 'Theory of Automata',
        Prerequisites: 'CS120B with a grade of C- or better',
        Location: 'WCH 129',
        Instructor: 'Phillip Brisk',
        Seats_Available: 'Seats available: 15',
        Waitlist: 'Waitlist: 0'
    },
    {
        courseTitle: 'CS150',
        Schedule: 'Monday 11:00 - 11:50',
        Overview: 'Theory of Automata',
        Prerequisites: 'CS111 with a grade of C- or better',
        Location: 'WCH 138',
        Instructor: 'Pae Lependu',
        Seats_Available: 'Seats available: 5',
        Waitlist: 'Waitlist: 0'
    }
];

const filterOption1 = ['CS150', 'CS179G', 'CS120B'];

const filterOption2 = ['Monday', 'Tuesday', 'Friday'];

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
        width: 250
    },
    fullList: {
        width: 'auto'
    }
}));

export default function Registration() {
    const classes = useStyles();
    useTitle('Registration Sandbox');
    const [ScheduleDialog, ToggleDialog] = React.useState(false);
    const [DialogData, SetData] = React.useState(null);

    const [loading, FetchData] = useFetch('/api/info/offerings');
    // if (!loading) {
    //     console.log(FetchData);
    // }

    const [unitFilter, setUnitFilter] = React.useState({
        min: 0,
        max: 200
    });

    const [filter1, setFilter] = React.useState('');
    const [filter2, setFilter2] = React.useState('');

    function SetUnitFilter(newFilter) {
        setUnitFilter(newFilter);
    }

    function retrieveFilter(newFilter) {
        setFilter(newFilter);
    }

    function retrieveFilter2(newFilter) {
        setFilter2(newFilter);
    }

    function handleData(data) {
        ToggleDialog(true);
        SetData(data);
    }

    function closeDialog() {
        ToggleDialog(false);
        SetData(null);
    }

    const buildClassTime = ({ start, end, days }) => (
        <div>
            <Typography>
                <strong>DAYS:</strong>
                {days}
            </Typography>
            <Typography>
                <strong>START:</strong>
                {`${start} AM`}
            </Typography>
            <Typography>
                <strong>END:</strong>
                {`${end} AM`}
            </Typography>
        </div>
    );

    // let query1 = {courseTitle: filter1};
    // let query2 = {Schedule: filter2};
    // let query3 = {courseTitle: unitFilter}
    // let results = courses;
    function HandleData() {
        const results = FetchData.map((x, index) => {
            const obj = {
                courseTitle: x.title,
                Schedule: buildClassTime(x),
                Overview: 'its a class',
                Prerequisites: 'CS 100',
                Location: x.location,
                Instructor: `${x.firstName} ${x.lastName}`,
                Seats_Available: x.capacity,
                Waitlist: 0
            };
            return obj;
        });
        return results;
    }

    // results = courses.filter(
    //     obj =>
    //         parseInt(obj.courseTitle.substring(2), 10) >= unitFilter.min &&
    //         parseInt(obj.courseTitle.substring(2), 10) <= unitFilter.max
    // );

    // if(filter1 === '' && filter2 !== ''){
    //     results = courses.filter(obj => obj.Schedule.includes(query2.Schedule));
    // }
    // else{
    //     results = courses.filter(obj => (obj.courseTitle === query1.courseTitle && obj.Schedule.includes(query2.Schedule)) );
    // }

    // return is like the render() you find in class
    return loading ? (
        <Loader />
    ) : (
        <>
            {/* <Drawer title='Registration Sandbox' /> */}
            <h1>{filter1}</h1>
            <h1>{filter2}</h1>
            <Grid container justify='center' spacing={4}>
                <Grid item>
                    <UnitSlider range={SetUnitFilter} />
                </Grid>
                <Grid item>
                    <FilterOption
                        label='Course'
                        filter={retrieveFilter}
                        options={filterOption1}
                    />
                </Grid>
                <Grid item>
                    <FilterOption
                        label='Day'
                        filter={retrieveFilter2}
                        options={filterOption2}
                    />
                </Grid>
                {/* <Grid item>
                    <FilterOption filter={retrieveFilter} options={filterOption1} />
                </Grid> */}
            </Grid>

            <FormLabel>Results</FormLabel>
            <Grid container spacing={6}>
                {HandleData().map((x, index) => (
                    <Grid item key={index} className={classes.cardGrid} xs={3}>
                        <ClassDetails
                            details={x}
                            OpenDialog={handleData}
                            CloseDialog={closeDialog}
                            raw={FetchData[index]}
                        />
                    </Grid>
                ))}
            </Grid>
            <FullScreenDialog
                open={ScheduleDialog}
                close={closeDialog}
                data={DialogData}
            />
        </>
    );
}
