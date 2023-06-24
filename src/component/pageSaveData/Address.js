import * as React from 'react';
import { useState } from 'react';
import { Divider, Form, Select } from 'antd';
import AddressID from './address/AddressID';
import AddressCurr from './address/AddressCurrent';

function Address() {
    const [checkAddress, setCheckAddress] = useState(0);

    const onChange = (value) => {
        setCheckAddress(value);
    }

    return (
        <>
            <Divider >
                ที่อยู่ตามทะเบียนบ้าน
            </Divider>
            <Form
                name='Address'
                initialValues={{
                    remember: true,
                }}
            >
                <Form.Item
                    label={'เลือก'}
                    rules={[{ required: true, message: 'Please Select' }]}
                    style={{
                        display: 'inline-block',
                        lineHeight: '32px', width: 'calc(250px)',
                        textAlign: 'center',
                    }}
                >
                    <Select
                        defaultValue={0}
                        onChange={onChange}
                        style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(250px)', textAlign: 'center' }}
                        options={[
                            {
                                label: 'ตามบัตรประชาชน',
                                value: 0,
                            },
                            {
                                label: 'ตามทะเบียนบ้าน',
                                value: 1,
                            },
                        ]}
                    />


                </Form.Item>
                {/* ฟอร์มสำหรับข้อมูลตามบัตรประชาชน */}
                {/* ฟอร์มสำหรับข้อมูลตามที่อยู่ทะเบียนบ้าน */}
                <Form>
                    {checkAddress === 0 ? <AddressID /> : <AddressCurr />}
                </Form>
            </Form>
            <Divider></Divider>
        </>
    )
}
export default Address
