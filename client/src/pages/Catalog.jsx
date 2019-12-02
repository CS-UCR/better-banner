import React from 'react';
import Tree from '../components/Tree';
import useTitle from '../hooks/useTitle';

export default function TreeFunction() {
    useTitle('Catalog');
    return (
        <div id='treeWrapper' style={{width: '100vw', height: '100vh' }}>
            {/* <Drawer title='Catalog' /> */}
            <Tree  />
        </div>
    );

};