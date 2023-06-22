import React, { useState } from 'react';

import { Form, Select } from 'antd';
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
    return (
        <React.Fragment>
            <div className='text-center text-black mt-3 mb-3'>
                <h5><b>อาชีพ</b></h5>
            </div>
            <Form
                name='basic'
                // labelCol={{
                //     span: 8,
                // }}
                style={{
                    marginBottom: 10,
                }}
                initialValues={{
                    remember: true,
                }}
            >

                <Form.Item
                    name="career"
                    id='career'
                    label="อาชีพ"
                    rules={[{ required: true, message: 'Missing area', },]}
                    style={{
                        display: 'inline-block',
                        lineHeight: '32px',
                        textAlign: 'center',
                        marginBottom: 2,
                        marginRight: 20,
                        // width: 'calc(500px)',
                    }}
                >
                    <Select
                        options={career}
                        style={{
                            lineHeight: '32px',
                            width: 'calc(200px)',
                            textAlign: 'center'
                        }}
                    />
                </Form.Item>
                <Form.Item
                    name="typebusi"
                    id="typebusi"
                    label="ประเภทธุรกิจ"
                    rules={[{ required: true, message: 'Missing area', },]}
                    style={{
                        display: 'inline-block',
                        lineHeight: '32px',
                        textAlign: 'center',
                        marginBottom: 2,
                        marginLeft: 20,
                        // width: 'calc(500px)',
                    }}
                >
                    <Select
                        options={career}
                        style={{
                            lineHeight: '32px',
                            width: 'calc(200px)',
                            textAlign: 'center'
                        }}
                    />
                </Form.Item>

                <Form.Item
                    name="address"
                    id="address"
                    label="ที่อยู่"
                    rules={[{ required: true, message: 'Missing area', },]}
                    style={{
                        display: 'inline-block',
                        lineHeight: '32px',
                        textAlign: 'center',
                        marginBottom: 2,
                        marginLeft: 20,
                        // width: 'calc(500px)',
                    }}
                >
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
                <Form
                    style={{ marginTop: 15 }}>

                    {careerin === 0 && (<AddressID />)}
                    {careerin === 1 && (<AddressCurr />)}
                    {careerin === 2 && (<AddressWork />)}
                    {careerin === 3 && (<AddressOther />)}

                </Form>


                {/* ฟอร์มสำหรับข้อมูลตามบัตรประชาชน */}
                {/* ฟอร์มสำหรับข้อมูลตามที่อยู่ทะเบียนบ้าน */}

            </Form>

        </React.Fragment>
    )
}
export default CareerIncome
