import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Container,
    Grid,
    GridList,
    GridListTile
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '../components/Card';

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
        courseNumber: 'CS 161',
        schedule: 'M W F, 12:30',
        courseHead: 'DESIGN AND ARCHITECTURE OF COMPUTER SYSTEMS (4 units)'
    },
    {
        courseNumber: 'CS 179G',
        schedule: 'M W F, 12:30',
        courseHead: 'SENIOR DESIGN (4 units)'
    },
    {
        courseNumber: 'CS 150',
        schedule: 'M W F, 12:30',
        courseHead: 'THEORY OF AUTOMATA (4 units)'
    },
    {
        courseNumber: 'CS 161',
        schedule: 'M W F, 12:30',
        courseHead: 'DESIGN AND ARCHITECTURE OF COMPUTER SYSTEMS (4 units)'
    },
    {
        courseNumber: 'CS 161',
        schedule: 'M W F, 12:30',
        courseHead: 'DESIGN AND ARCHITECTURE OF COMPUTER SYSTEMS (4 units)'
    },
    {
        courseNumber: 'CS 161',
        schedule: 'M W F, 12:30',
        courseHead: 'DESIGN AND ARCHITECTURE OF COMPUTER SYSTEMS (4 units)'
    },
    {
        courseNumber: 'CS 161',
        schedule: 'M W F, 12:30',
        courseHead: 'DESIGN AND ARCHITECTURE OF COMPUTER SYSTEMS (4 units)'
    },
    {
        courseNumber: 'CS 161',
        schedule: 'M W F, 12:30',
        courseHead: 'DESIGN AND ARCHITECTURE OF COMPUTER SYSTEMS (4 units)'
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
            <h1>Hi there</h1>
            <p>June Bug</p>
            <p> Whats cooking</p>
            <GridList cols={4}>
                {courses.map((x, index) => (
                    <GridListTile key={index}>
                        <Card
                            courseNumber={x.courseNumber}
                            schedule={x.schedule}
                            courseHead={x.courseHead}
                        />
                    </GridListTile>
                ))}
            </GridList>
        </>
    );
}
