/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
// sample code, edit to change components and play around

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Container from '@material-ui/core/Container';
import Calendar from './Calendar';
import Tree from './Tree';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import NoteIcon from '@material-ui/icons/Note';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PeopleIcon from '@material-ui/icons/People';
import SchoolIcon from '@material-ui/icons/School';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper
    },
    nested: {
        paddingLeft: theme.spacing(4)
    }
}));

export default function NestedList(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState({
        Schedule: false,
        Overview: false,
        Prerequisites: false,
        Location: false,
        Instructor: false,
        ClassSeats: false
    });
    // grabbing Schedule Dialog props
    const { OpenDialog, CloseDialog, details } = props;

    const handleClick = key => {
        setOpen({ ...open, [key]: !open[key] });
    };

    return (
        <Container maxWidth='sm'>
            <List
                component='nav'
                aria-labelledby='nested-list-subheader'
                subheader={
                    <ListSubheader component='div' id='nested-list-subheader'>
                        {/* CS179G */}
                        {details.courseTitle}
                    </ListSubheader>
                }
                className={classes.root}
            >
                {/* <ListItem button>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Sent mail" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItem> */}
                <ListItem button onClick={() => handleClick('Schedule')}>
                    <ListItemIcon>
                        <AccessTimeIcon />
                        
                    </ListItemIcon>
                    <ListItemText primary='Schedule' />
                    {open.Schedule ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open.Schedule} timeout='auto' unmountOnExit>
                    <List component='div' disablePadding>
                        <ListItem
                            button
                            onClick={() => OpenDialog(<Calendar />)}
                            className={classes.nested}
                        >
                            <ListItemIcon>
                                <RemoveIcon />
                            </ListItemIcon>
                            {/* <ListItemText primary='Monday, 11:00 - 11:50' /> */}
                            <ListItemText primary={details.Schedule} />
                        </ListItem>
                    </List>
                </Collapse>

                <ListItem button onClick={() => handleClick('Overview')}>
                    <ListItemIcon>
                        <NoteIcon />
                    </ListItemIcon>
                    <ListItemText primary='Overview' />
                    {open.Overview ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open.Overview} timeout='auto' unmountOnExit>
                    <List component='div' disablePadding>
                        <ListItem
                            button
                            onClick={() => OpenDialog(<Tree />)}
                            className={classes.nested}
                        >
                            <ListItemIcon>
                                <RemoveIcon />
                            </ListItemIcon>
                            {/* <ListItemText primary='Senior design class of database' /> */}
                            <ListItemText primary={details.Overview} />
                        </ListItem>
                    </List>
                </Collapse>

                <ListItem button onClick={() => handleClick('Prerequisites')}>
                    <ListItemIcon>
                        <PriorityHighIcon />
                    </ListItemIcon>
                    <ListItemText primary='Prerequisites' />
                    {open.Prerequisites ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open.Prerequisites} timeout='auto' unmountOnExit>
                    <List component='div' disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <RemoveIcon />
                            </ListItemIcon>
                            {/* <ListItemText primary='CS166 with a grade of C- or better' /> */}
                            <ListItemText primary={details.Prerequisites} />
                        </ListItem>
                    </List>
                </Collapse>

                <ListItem button onClick={() => handleClick('Location')}>
                    <ListItemIcon>
                        <LocationOnIcon />
                    </ListItemIcon>
                    <ListItemText primary='Location' />
                    {open.Location ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open.Location} timeout='auto' unmountOnExit>
                    <List component='div' disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <RemoveIcon />
                            </ListItemIcon>
                            {/* <ListItemText primary='Chung 138' /> */}
                            <ListItemText primary={details.Location} />
                        </ListItem>
                    </List>
                </Collapse>

                <ListItem button onClick={() => handleClick('Instructor')}>
                    <ListItemIcon>
                        <SchoolIcon />
                    </ListItemIcon>
                    <ListItemText primary='Instructor' />
                    {open.Instructor ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open.Instructor} timeout='auto' unmountOnExit>
                    <List component='div' disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <RemoveIcon />
                            </ListItemIcon>
                            {/* <ListItemText primary='Marriam Salloum' /> */}
                            <ListItemText primary={details.Instructor} />
                        </ListItem>
                    </List>
                </Collapse>

                <ListItem button onClick={() => handleClick('ClassSeats')}>
                    <ListItemIcon>
                        <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary='ClassSeats' />
                    {open.ClassSeats ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open.ClassSeats} timeout='auto' unmountOnExit>
                    <List component='div' disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <RemoveIcon />
                            </ListItemIcon>
                            {/* <ListItemText primary='Seats available: 5' /> */}
                            <ListItemText primary={details.Seats_Available} />
                        </ListItem>
                    </List>
                </Collapse>
                <Collapse in={open.ClassSeats} timeout='auto' unmountOnExit>
                    <List component='div' disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <RemoveIcon />
                            </ListItemIcon>
                            {/* <ListItemText primary='Waitlist: 0' /> */}
                            <ListItemText primary={details.Waitlist} />
                        </ListItem>
                    </List>
                </Collapse>
            </List>
        </Container>
    );
}
