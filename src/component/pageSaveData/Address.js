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
            <div className='text-center text-black mt-3 mb-3'>
                <h5><b>ที่อยู่ตามทะเบียนบ้าน</b></h5>
            </div>
            <Form
                name='basic'
                labelCol={{
                    span: 8,
                }}
                style={{
                    maxWidth: '100vh',
                }}
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
                <Divider>
                    {checkAddress === 0 ? <AddressID /> : <AddressCurr />}
                </Divider>
            </Form>

        </>
    )
}
export default Address
