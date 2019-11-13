import React from 'react';
import { List } from '@material-ui/core';
import RequirementListItem from './RequirementListItem';
import KanbanBoard from './KanbanBoard';
import Tree from './Tree';
import SnackBar from './SimpleSnackbars';
import Drawer from './Drawer';
import Card from './Card';

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
            },
            {
                id: 'lane3',
                title: 'WishList',
                label: '2/2',
                cards: [
                    {
                        id: 'CourseID1', title: 'CS179G', description: 'Senior Design Database', label: 'CompSci' 
                    },
                    {
                        id: 'CourseID2', title: 'CS161', description: 'Advanced Computer Architecture', label: 'CompSci' 
                    }
                ]

            }

        ]
    };
    return <KanbanBoard data={data} />;
};

export const D3Tree = () => {
    const myTreeData = [
        {
            name: 'Top Level',
            attributes: {
                keyA: 'val A',
                keyB: 'val B',
                keyC: 'val C'
            },
            children: [
                {
                    name: 'Level 2: A',
                    attributes: {
                        keyA: 'val A',
                        keyB: 'val B',
                        keyC: 'val C'
                    }
                },
                {
                    name: 'Level 2: B'
                },
                {
                    name: 'Level 3: C',
                    attributes: {
                        Professor: 'Jeffy McDaniel',
                        Room: 'Wch 136',
                        Bitch: 'True'
                    }
                }
            ]
        }
    ];
    return (
        <div id='treeWrapper' style={{ width: '100vw', height: '100vh' }}>
            <Tree data={myTreeData} />
        </div>
    );
};

export const SnackBar1 = () => {
    return <SnackBar />;
}

export const CourseDrawer = () => {
    return <Drawer />;
}

export const CourseCard = () => {
    return <Card />;
}

export default {
    title: 'Components'
};
