import React from 'react';
import { List } from '@material-ui/core';
import RequirementListItem from './RequirementListItem';

export const Requirements = () => {
    const dummy = [{
        complete: 3,
        total: 5,
        onClick: () => console.log('clicked'),
        label: 'Some Requirement'
    }];
    return (
        <List>
            {dummy.map(props => (
                <RequirementListItem {...props} />
            ))}
        </List>
    );
};

export default {
    title: 'Components'
};
