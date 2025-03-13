import React from 'react'
import { Tabs,  Col, Row, Menu, Button  } from 'antd';
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
                        <MenuItems/>

            {/* <div className='nav-header'>
                <Row> 
                    <div className="logo-header">
                        <Col span={10}>
                                Logo
                        </Col>
                     </div>

                    <Col span={12}>
                    </Col>
                    <div className="logo-btn">
                        <Col span={2}>
                            <Button> Login </Button>
                        </Col>
                    </div>
                </Row>
            </div> */}
            
        </>
    )
}

export default Navbar
