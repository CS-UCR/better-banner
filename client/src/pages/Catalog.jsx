import React from 'react';
import Tree from '../components/Tree';
import Drawer from '../components/DrawerAndHeader';

const treeData = [
    {
        name: 'Computer Science',
        attributes: {            
        },
        nodeSvgShape: {
            shape: 'rect',
            shapeProps: {
                fill: 'blue',
                width: 20,
                height: 20,
                x: -10,
                y: -10,
            }
        },
        children: [
            {
                name: 'CS 005',
                attributes: {
                    title: 'Introduction to Computer Programming',
                    units: 4,
                }
            },
            {
                name: 'CS 006',
                attributes: {
                    title: 'Effective Use of the World Wide Web',
                    units: 4,
                }
            },
            {
                name: 'CS 008',
                attributes: {
                    title: 'Introduction to Computing',
                    units: 4,
                }
            },
            {
                name: 'CS 009',
                attributes: {
                    title: '(E-Z) Introduction to Programming',
                    units: 4,
                }
            },
            {
                name: 'CS 009M',
                attributes: {
                    title: 'Introduction to Matlab',
                    units: 4,
                }
            },
            {
                name: 'CS 010',
                attributes: {
                    title: 'Introduction to Computer Science For Science, Mathematics, and Engineering ',
                    units: 4,
                },
                children: [
                    {
                        name: 'CS 011',
                        attributes: {
                            title: 'Introduction to Discrete Structures',
                            units: 4,
                        },
                        children: [
                            {
                                name: 'CS 111',
                                attributes: {
                                    title: 'Discrete Structures',
                                    units: 4,
                                },
                                children: [
                                    {
                                        name: 'CS 133',
                                        attributes: {
                                            title: 'Computational Geometry',
                                            units: 4,
                                            additionalPrereqs: 'CS 100'
                                        },
                                    },
                                    {
                                        name: 'CS 141',
                                        attributes: {
                                            title: 'Intermediate Data Structures and Algorithms',
                                            units: 4,
                                            additionalPrereqs: 'CS 014'
                                        },
                                        children: [
                                            {
                                                name: 'CS 145',
                                                attributes: {
                                                    title: 'Combinatorial Optimization Algorithms',
                                                    units: 4,
                                                },
                                            },
                                            {
                                                name: 'CS 193',
                                                attributes: {
                                                    title: 'Design Product 1',
                                                    units: 4,
                                                },
                                            },
                                        ]
                                    },
                                    {
                                        name: 'CS 150',
                                        attributes: {
                                            title: 'Automata and Formal Languages',
                                            units: 4,
                                        },
                                        children: [
                                            {
                                                name: 'CS 152',
                                                attributes: {
                                                    title: 'Compiler Design',
                                                    units: 4,
                                                    additionalPrereqs: 'CS 061, CS 100'
                                                },
                                                children: [
                                                    {
                                                        name: 'CS 179E',
                                                        attributes: {
                                                            title: 'Project in Computer Science: Compilers',
                                                            units: 4,
                                                        },
                                                    },
                                                ]
                                            },
                                            {
                                                name: 'CS 173',
                                                attributes: {
                                                    title: 'Introduction to Natural Language Processing',
                                                    units: 4,
                                                },
                                            },
                                            {
                                                name: 'CS 181',
                                                attributes: {
                                                    title: 'Principles of Programming Languages',
                                                    units: 4,
                                                },
                                            },
                                        ]
                                    },
                                    {
                                        name: 'CS 153',
                                        attributes: {
                                            title: 'Design of Operating Systems',
                                            units: 4,
                                            additionalPrereqs: 'CS 061, CS 100'

                                        },
                                        children: [
                                            {
                                                name: 'CS 164',
                                                attributes: {
                                                    title: 'Computer Networks',
                                                    units: 4,
                                                },
                                                children: [
                                                    {
                                                        name: 'CS 179I',
                                                        attributes: {
                                                            title: 'Project in Computer Science: Networks',
                                                            units: 4,
                                                            additionalPrereqs: 'ENGR 180W'
                                                        },
                                                    },
                                                ]
                                            },
                                            {
                                                name: 'CS 165',
                                                attributes: {
                                                    title: 'Computer Security',
                                                    units: 4,
                                                    additionalPrereqs: 'CS 141'
                                                },
                                            },
                                            {
                                                name: 'CS 169',
                                                attributes: {
                                                    title: 'Mobile Wireless Networks',
                                                    units: 4,
                                                },
                                            },
                                            {
                                                name: 'CS 179F',
                                                attributes: {
                                                    title: 'Project in Computer Science: Operating Systems',
                                                    units: 4,
                                                },
                                            },
                                        ]
                                    },
                                    {
                                        name: 'CS 160',
                                        attributes: {
                                            title: 'Concurrent Programming and Parallel Systems',
                                            units: 4,
                                            additionalPrereqs: 'CS 061, CS 100'
                                        },
                                    },
                                    {
                                        name: 'CS 166',
                                        attributes: {
                                            title: 'Database Management Systems',
                                            units: 4,
                                        },
                                        children: [
                                            {
                                                name: 'CS 179G',
                                                attributes: {
                                                    title: 'Project in Computer Science: Database Systems',
                                                    units: 4,
                                                    additionalPrereqs: 'ENGR 180W'
                                                },
                                            },
                                        ]
                                    },
                                    {
                                        name: 'CS 167',
                                        attributes: {
                                            title: 'Introduction to Big-Data Management',
                                            units: 4,
                                        },
                                    },
                                    {
                                        name: 'CS 170',
                                        attributes: {
                                            title: 'Introduction to Artificial Intelligence',
                                            units: 4,       
                                        },
                                        children: [
                                            {
                                                name: 'CS 179M',
                                                attributes: {
                                                    title: 'Project in Computer Science: Artificial Intelligence',
                                                    units: 4,
                                                    additionalPrereqs: 'ENGR 180W'
                                                },
                                            },
                                        ]
                                    },
                                    {
                                        name: 'CS 172',
                                        attributes: {
                                            title: 'Introduction to Information Retrieval',
                                            units: 4,
                                        },
                                    },
                                    {
                                        name: 'CS 177',
                                        attributes: {
                                            title: 'Modeling and Simulation',
                                            units: 4,
                                        },
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        name: 'CS 012',
                        attributes: {
                            title: 'Introduction to Computer Science For ... Part 2',
                            units: 4,
                        },
                        children: [
                            {
                                name: 'CS 014',
                                attributes: {
                                    title: 'Introduction to Data Structures and Algorithms',
                                    units: 4,
                                },
                                children : [
                                    {
                                        name: 'CS 100',
                                        attributes: {
                                            title: 'Software Construction',
                                            units: 4,
                                        },
                                        children: [
                                            {
                                                name: 'CS 130',
                                                attributes: {
                                                    title: 'Computer Graphics',
                                                    units: 4,
                                                },
                                                children: [
                                                    {
                                                        name: 'CS 179N',
                                                        attributes: {
                                                            title: 'Project in Computer Science: Graphics',
                                                            units: 4,
                                                            additionalPrereqs: 'ENGR 180W'
                                                        },
                                                    },
                                                ]
                                            },
                                            {
                                                name: 'CS 135',
                                                attributes: {
                                                    title: 'Virtual Reality',
                                                    units: 4,
                                                },
                                            },
                                            {
                                                name: 'CS 171',
                                                attributes: {
                                                    title: 'Introduction to Machine Learning and Data Mining',
                                                    units: 4,
                                                },
                                            },
                                            {
                                                name: 'CS 175',
                                                attributes: {
                                                    title: 'Entrepreneurship in Computing',
                                                    units: 4,
                                                    additionalPrereqs: 'Junior or Senior Status'
                                                },
                                            },
                                            {
                                                name: 'CS 180',
                                                attributes: {
                                                    title: 'Introduction to Software Engineering',
                                                    units: 4,
                                                },
                                                children: [
                                                    {
                                                        name: 'CS 179K',
                                                        attributes: {
                                                            title: 'Project in Computer Science: Software Engineering',
                                                            units: 4,
                                                            additionalPrereqs: 'ENGR 180W'
                                                        },
                                                    },
                                                ]
                                            },
                                            {
                                                name: 'CS 182',
                                                attributes: {
                                                    title: 'Software Testing and Verification',
                                                    units: 4,
                                                },
                                            },
                                            {
                                                name: 'CS 183',
                                                attributes: {
                                                    title: 'Unix System Administration',
                                                    units: 4,
                                                },
                                            },
                                        ]
                                    },
                                    {
                                        name: 'CS 105',
                                        attributes: {
                                            title: 'Data Analysis Methods',
                                            units: 4,
                                        }
                                    },
                                ]
                            },
                        ],
                    },
                    {
                        name: 'CS 013',
                        attributes: {
                            title: 'Introductory Computer Science For Engineering',
                            units: 4,
                        }
                    },
                    {
                        name: 'CS 061',
                        attributes: {
                            title: 'Machine Organization and Assembly Language Programming',
                            units: 4,
                        },
                        children: [
                            {
                                name: 'CS 120A',
                                attributes: {
                                    title: 'Logic Design',
                                    units: 5,
                                },
                                children: [
                                    {
                                        name: 'CS 120B',
                                        attributes: {
                                            title: 'Introduction to Embedded Systems',
                                            units: 4,
                                        },
                                        children: [
                                            {
                                                name: 'CS 122A',
                                                attributes: {
                                                    title: 'Intermediate Embedded and Real-Time Systems',
                                                    units: 5,
                                                },
                                                children: [
                                                    {
                                                        name: 'CS 122B',
                                                        attributes: {
                                                            title: 'Advanced Embedded and Real-Time Systems',
                                                            units: 5,
                                                        },
                                                    }
                                                ]
                                            },
                                            {
                                                name: 'CS 147',
                                                attributes: {
                                                    title: 'Graphics Processing Unit Computing and Programming',
                                                    units: 4,
                                                },
                                            },
                                            {
                                                name: 'CS 179J',
                                                attributes: {
                                                    title: 'Project in Computer Science Embedded Systems',
                                                    units: 4,
                                                },
                                            }
                                        ]
                                    },
                                    {
                                        name: 'CS 161',
                                        attributes: {
                                            title: 'Design and Architecture of Computer Systems',
                                            units: 4,
                                        },
                                        children: [
                                            {
                                                name: 'CS 162',
                                                attributes: {
                                                    title: 'Computer Architecture',
                                                    units: 4,
                                                },
                                            },
                                        ]
                                    },
                                    {
                                        name: 'CS 168',
                                        attributes: {
                                            title: 'Introduction to VLSI',
                                            units: 4,
                                        },
                                    },
                                    
                                ],
                            },
                        ]
                    },
                ]
            },
        ]
        
    }
    
]

export default function treeFunction(){
    return (
        
        <div id='treeWrapper' style={{width: '100vw', height: '100vh' }}>
            <Drawer title='Catalog' />
            <Tree data={treeData} orientation='vertical' separation={{siblings: 3, nonSiblings: 3}} />
        </div>
    );

};