import React from 'react';
import { List, Grow, Container } from '@material-ui/core';
import RequirementListItem from '../components/RequirementListItem';
import Loader from '../components/Loader';
import useFetch from '../hooks/useFetch';
import Title from '../components/Title';

/**
 * An arrow function returns whatever follows if there are no brackets
 * i.e.  () => <statement>; is equivalent to function () { return <statement>; }
 */
const calcTimeout = index => (index + 1) * 100;

export default function Audit() {
    const [loading, data] = useFetch('user/1/audit');
    return loading ? (
        <Loader />
    ) : (
        <Container maxWidth='md'>
            <Title>Audit</Title>
            <List>
                {data.map(({ complete, total, label }, index) => (
                    <Grow in timeout={calcTimeout(index)}>
                        <RequirementListItem
                            complete={complete}
                            total={total}
                            onClick={() => console.log('TODO')}
                            label={label}
                        />
                    </Grow>
                ))}
            </List>
        </Container>
    );
}
