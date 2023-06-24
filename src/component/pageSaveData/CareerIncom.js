import React, { useState } from 'react';

import { Col, Divider, Form, Row, Select } from 'antd';
import AddressCurr from './address/AddressCurrent';
import AddressID from './address/AddressID';
import AddressWork from './address/AddressWork';
import AddressOther from './address/AddressOther';

const career = [
    {
        label: 'การประมง',
        value: 'การประมง',
    },
    {
        label: 'นักเขียน',
        value: 'นักเขียน',
    },
    {
        label: 'นักข่าว',
        value: 'นักข่าว',
    },
    {
        label: 'ช่างภาพ',
        value: 'ช่างภาพ',
    },
    {
        label: 'ข้าราชการ',
        value: 'ข้าราชการ',
    },
    {
        label: 'ชาวไร่ชาวนา',
        value: 'ชาวไร่ชาวนา',
    },
    {
        label: 'ดีเจ',
        value: 'ดีเจ',
    },
    {
        label: 'นักแสดง',
        value: 'นักแสดง',
    },
    {
        label: 'หมอ',
        value: 'หมอ',
    },
    {
        label: 'นักร้อง',
        value: 'นักร้อง',
    },
    {
        label: 'นักบัญชี',
        value: 'นักบัญชี',
    },
    {
        label: 'นักกฎหมาย',
        value: 'นักกฎหมาย',
    },
    {
        label: 'พยาบาล',
        value: 'พยาบาล',
    },
    {
        label: 'พ่อค้า',
        value: 'พ่อค้า',
    },
    {
        label: 'ฟรีแลนซ์',
        value: 'ฟรีแลนซ์',
    },
    {
        label: 'นางแบบ',
        value: 'นางแบบ',
    },
    {
        label: 'สถาปนิก',
        value: 'สถาปนิก',
    },
    {
        label: 'หมอ',
        value: 'หมอ',
    },
]

function CareerIncome() {
    const [careerin, setCareer] = useState(0);

    const onChange = (value) => {
        setCareer(value);
    }
    const style = {
        // marginTop: '5px',
        // width: '245px',
    };
    const styletext = {
        textAlign: 'right'
    };

    return (
        <>
            <Divider>
                อาชีพ
            </Divider>
            <Form
                name='Career'
                initialValues={{
                    remember: true,
                }}
            >
                <Row
                    align="left"
                    justify="left"
                    gutter={32}
                >
                    <Col className='gutter-row' span={4}>
                        <Form.Item style={styletext}>
                            อาชีพ :
                        </Form.Item>
                    </Col>
                    <Col className='gutter-row' span={4}>
                        <Form.Item
                            style={style}
                            name='career'
                            id='career'
                        >
                            {/* input Form อาชีพ*/}
                            <Select
                                options={career}
                            />
                        </Form.Item>

                    </Col>
                    <Col className='gutter-row' span={3}>
                        <Form.Item style={styletext}>
                            ประเภทธุรกิจ :
                        </Form.Item>
                    </Col>
                    <Col className='gutter-row' span={4}>
                        <Form.Item
                            style={style}
                            name='typeBu'
                            id='typeBu'
                        >
                            {/* input Form ประเภทธุรกิจ*/}
                            <Select
                                options={career}
                            />
                        </Form.Item>
                    </Col>
                    <Col className='gutter-row' span={2}>
                        <Form.Item style={styletext}>
                            ที่อยู่ :
                        </Form.Item>
                    </Col>
                    <Col className='gutter-row' span={4}>
                        <Form.Item
                            style={style}
                            name='cardID'
                            id='cardID'
                        >
                            {/* input Form เลือกที่ทอยู่*/}
                            <Select
                                style={{
                                    lineHeight: '32px',
                                    width: 'calc(200px)',
                                    textAlign: 'center',
                                }}
                                defaultValue={'สถานที่ทำงาน'}
                                onChange={onChange}
                                options={[
                                    {
                                        label: 'ตามบัตรประชาชน',
                                        value: 0,
                                    },
                                    {
                                        label: 'ตามทะเบียนบ้าน',
                                        value: 1,
                                    },
                                    {
                                        label: 'ตามสถานที่ทำงาน',
                                        value: 2,
                                    },
                                    {
                                        label: 'ตามที่อยู่อื่น ๆ',
                                        value: 3,
                                    },
                                ]}
                            />
                        </Form.Item>
                    </Col>


                </Row>
                <Form
                    style={{ marginTop: 15 }}>
                    {careerin === 0 && (<AddressID />)}
                    {careerin === 1 && (<AddressCurr />)}
                    {careerin === 2 && (<AddressWork />)}
                    {careerin === 3 && (<AddressOther />)}

                </Form>
            </Form>
            <Divider></Divider>
        </>
    )
}
export default CareerIncome
