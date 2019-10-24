import React from 'react';
import { List } from '@material-ui/core';
import RequirementListItem from './RequirementListItem';
import KanbanBoard from './KanbanBoard';

export const Requirements = () => {
    const data = [
        {
            complete: 3,
            total: 5,
            onClick: () => console.log('Lower Division'),
            label: 'Lower Division'
        },
        {
            complete: 0,
            total: 3,
            onClick: () => console.log('Breadth Requirements'),
            label: 'Breadth Requirements'
        },
        {
            complete: 0,
            total: 12,
            onClick: () => console.log('Upper Division'),
            label: 'Upper Division'
        }
    ];
    return (
        <List>
            {data.map(props => (
                // eslint-disable-next-line
                <RequirementListItem key={props.label} {...props} />
            ))}
        </List>
    );
};

export const Board = () => {
    const data = {
        lanes: [
            {
                id: 'lane1',
                title: 'Planned Tasks',
                label: '2/2',
                cards: [
                    {
                        id: 'Card1',
                        title: 'Write Blog',
                        description: 'Can AI make memes',
                        label: '30 mins',
                        draggable: false
                    },
                    {
                        id: 'Card2',
                        title: 'Pay Rent',
                        description: 'Transfer via NEFT',
                        label: '5 mins',
                        metadata: { sha: 'be312a1' }
                    }
                ]
            },
            {
                id: 'lane2',
                title: 'Completed',
                label: '0/0',
                cards: []
            }
        ]
    };
    return <KanbanBoard data={data} />;
};

export default {
    title: 'Components'
};
