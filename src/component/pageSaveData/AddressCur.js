import * as React from 'react';
import { useState } from 'react';
import { Form, Select, Divider } from 'antd';
import AddressID from './address/AddressID';
import AddressCurr from './address/AddressCurrent';
import AddressWork from './address/AddressWork';
import AddressOther from './address/AddressOther';


function AddressCur() {
    const [checkAddress, setCheckAddress] = useState(0);

    const onChange = (value) => {
        setCheckAddress(value);
    }

    return (
        <>
            <Divider>
                ที่อยู่ตามทะเบียนบ้าน
            </Divider>
            <Form
                name='basic'
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
                {/* ฟอร์มสำหรับข้อมูลตามบัตรประชาชน */}
                {/* ฟอร์มสำหรับข้อมูลตามที่อยู่ทะเบียนบ้าน */}
                {checkAddress === 0 && (<AddressID />)}
                {checkAddress === 1 && (<AddressCurr />)}
                {checkAddress === 2 && (<AddressWork />)}
                {checkAddress === 3 && (<AddressOther />)}
            </Form>
            <Divider>

            </Divider>
        </>
    )
}
export default AddressCur
