import React from 'react'
import { Tabs,  Col, Row, Menu  } from 'antd';
import MenuItems from './MenuItems';

const Navbar = () => {
    const onChange = (key) => {
        console.log(key);
    };

    const items = [
        {
            key: '1',
            label: 'Home',                                    
        },
        {
            key: '2',
            label: 'Features',
        },
        {
            key: '3',
            label: 'Explore',
        },
        {
            key: '3',
            label: 'Explore',
        },
        {
            key: '3',
            label: 'Explore',
        },
    ];

    return (
        <>
            <Row>
            <MenuItems/>
 
                {/* <Col span={8}>
                    <h1> logo </h1>
                </Col>
                <Col span={14}>
                    <MenuItems/>
                </Col>
                <Col span={2}>
                    <h1> btn </h1>
                </Col> */}
            </Row>
        </>
    )
}

export default Navbar
