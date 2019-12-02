import React from 'react';
import { List, Slide, Container } from '@material-ui/core';
import RequirementListItem from '../components/RequirementListItem';
import Loader from '../components/Loader';
import useTitle from '../hooks/useTitle';
// import TitleContext from '../layout/TitleContext';
// import useFetch from '../hooks/useFetch';
// import Title from '../components/Title';
// import Drawer from '../layout/DrawerAndHeader';

/**
 * An arrow function returns whatever follows if there are no brackets
 * i.e.  () => <statement>; is equivalent to function () { return <statement>; }
 */
const calcTimeout = index => (index + 1) * 200;

export default function Audit() {
    // const [loading, data] = useFetch('user/1/audit');
    useTitle('Audit');
    const loading = false;
    const data = [
        {
            complete: 5,
            total: 12,
            label: 'Degree in Bachelor of Science'
        },
        {
            complete: 0,
            total: 1,
            label: 'Bourns College of Engineering Grad Application'
        },
        {
            complete: 3,
            total: 15,
            label: 'Breadth for Bourns College of Engineering '
        },
        {
            complete: 3,
            total: 10,
            label: 'DEPTH for Bourns College of Engineering'
        },
        {
            complete: 5,
            total: 20,
            label: 'Lower Division Computer Science Requirements'
        }
    ];
    return loading ? (
        <div>
            <Loader />
        </div>
    ) : (
        <Container maxWidth='md'>
            {/* <Drawer title='Audit' /> */}
            {/* <Title>Audit</Title> */}
            <List>
                {data.map(({ complete, total, label }, index) => (
                    <Slide
                        direction={index % 2 ? 'left' : 'right'}
                        key={index}
                        in
                        timeout={calcTimeout(index)}
                    >
                        <RequirementListItem
                            complete={complete}
                            total={total}
                            onClick={() => console.log('TODO')}
                            label={label}
                        />
                    </Slide>
                ))}
            </List>
        </Container>
    );
}
