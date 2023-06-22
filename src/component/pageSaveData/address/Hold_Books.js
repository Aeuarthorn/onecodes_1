import * as React from 'react'
import { Form, Input, Select } from 'antd';

import province from '../data/Province';
import { Option } from 'antd/es/mentions';





function HoldBooks() {

    const onChange = (value) => {
        console.log(`selected ${value}`);
    };
    const onSearch = (value) => {
        console.log('search:', value);
    };
    return (
        <div>
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
                    name='name'
                    rules={[{ required: true, message: 'Please input your CardID' }]}
                    style={{
                        marginBottom: 0,
                    }}
                >
                    <span
                        style={{ display: 'inline-block', lineHeight: '32px', textAlign: 'center', marginRight: '10px' }}
                    >
                        ชื่อ - นามสกุล :
                    </span>
                    <Form.Item
                        style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(200px)', textAlign: 'center', marginRight: '10px' }}
                    >
                        <Input />
                    </Form.Item>
                    <span
                        style={{ display: 'inline-block', lineHeight: '32px', textAlign: 'center', marginRight: '10px' }}
                    >
                        ยอดที่ต้องการจัด :
                    </span>
                    <Form.Item
                        style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(200px)', textAlign: 'center', marginRight: '10px' }}
                    >
                        <Input />
                    </Form.Item><span style={{ marginRight: '10px' }}>บาท</span>

                    <span
                        style={{ display: 'inline-block', lineHeight: '32px', textAlign: 'center', marginRight: '10px' }}
                    >
                        เรทรถ :
                    </span>
                    <Form.Item
                        style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(200px)', textAlign: 'center', marginRight: '10px' }}
                    >
                        <Input />
                    </Form.Item><span >บาท</span>
                </Form.Item>
                <Form.Item
                    name='name'
                    rules={[{ required: true, message: 'Please input your CardID' }]}
                    style={{
                        marginBottom: 0,
                    }}
                >
                    <span
                        style={{ display: 'inline-block', lineHeight: '32px', textAlign: 'center', marginRight: '10px', marginLeft: '20px' }}
                    >
                        ยอดกู้สุทธิ :
                    </span>
                    <Form.Item
                        style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(120px)', textAlign: 'center', marginRight: '10px' }}
                    >
                        <Input />
                    </Form.Item><span style={{ marginRight: '15px' }}>บาท</span>
                    <span
                        style={{ display: 'inline-block', lineHeight: '32px', textAlign: 'center', marginRight: '10px' }}
                    >
                        จำนวนผ่อน :
                    </span>
                    <Form.Item
                        style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(100px)', textAlign: 'center', marginRight: '10px' }}
                    >
                        <Input />
                    </Form.Item><span style={{ marginRight: '15px' }}>งวด</span>
                    <span
                        style={{ display: 'inline-block', lineHeight: '32px', textAlign: 'center', marginRight: '10px' }}
                    >
                        ดอกเบี้ย :
                    </span>
                    <Form.Item
                        style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(100px)', textAlign: 'center', marginRight: '10px' }}
                    >
                        <Input />
                    </Form.Item><span style={{ marginRight: '15px' }}>% ต่อปี</span>
                    <span
                        style={{ display: 'inline-block', lineHeight: '32px', textAlign: 'center', marginRight: '10px' }}
                    >
                        ดอกเบี้ยรวม :
                    </span>
                    <Form.Item
                        style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(100px)', textAlign: 'center', marginRight: '10px' }}
                    >
                        <Input />
                    </Form.Item><span>% ต่อปี</span>
                </Form.Item>
                <Form.Item
                    name='name'
                    rules={[{ required: true, message: 'Please input your CardID' }]}
                    style={{
                        marginBottom: 0,
                    }}
                >
                    <span
                        style={{ display: 'inline-block', lineHeight: '32px', textAlign: 'center', marginRight: '10px', marginLeft: '16px' }}
                    >
                        ผู้ตรวจสอบ :
                    </span>
                    <Form.Item
                        style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(200px)', textAlign: 'center', marginRight: '10px' }}
                    >
                        <Select />
                    </Form.Item>
                    <span
                        style={{ display: 'inline-block', lineHeight: '32px', textAlign: 'center', marginRight: '10px' }}
                    >
                        พนักงานขาย :
                    </span>
                    <Form.Item
                        style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(200px)', textAlign: 'center', marginRight: '10px' }}
                    >
                        <Select />
                    </Form.Item>

                    <span
                        style={{ display: 'inline-block', lineHeight: '32px', textAlign: 'center', marginRight: '10px' }}
                    >
                        ผ่อนรวมดอกเบี้ย :
                    </span>
                    <Form.Item
                        style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(200px)', textAlign: 'center', marginRight: '10px' }}
                    >
                        <Input />
                    </Form.Item><span>บาท</span>
                </Form.Item>
            </Form>
            {/* รายละเอียดรถ */}
            <Form
                labelCol={{
                    span: 1,
                }}
                style={{ textAlign: 'left', marginLeft: '30px', fontSize: '18px' }}
            >
                <b>รายละเอียดรถ
                </b>
            </Form>
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
                    name='name'
                    rules={[{ required: true, message: 'Please input your CardID' }]}
                    style={{
                        marginBottom: 0,
                    }}
                >
                    <span
                        style={{ display: 'inline-block', lineHeight: '32px', textAlign: 'center', marginRight: '10px', marginLeft: '45px' }}
                    >
                        ยี่ห้อ :
                    </span>
                    <Form.Item
                        style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(200px)', textAlign: 'center', marginRight: '10px' }}
                    >
                        <Select />
                    </Form.Item>
                    <span
                        style={{ display: 'inline-block', lineHeight: '32px', textAlign: 'center', marginRight: '10px', marginLeft: '30px' }}
                    >
                        รุ่นสินค้า :
                    </span>
                    <Form.Item
                        style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(200px)', textAlign: 'center', marginRight: '80px' }}
                    >
                        <Select />
                    </Form.Item>
                    <span
                        style={{ display: 'inline-block', lineHeight: '32px', textAlign: 'center', marginRight: '10px', margigLeft: '10px' }}
                    >
                        สี :
                    </span>
                    <Form.Item
                        style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(200px)', textAlign: 'center', marginRight: '15px' }}
                    >
                        <Select />
                    </Form.Item>
                </Form.Item>
                <Form.Item
                    name='name'
                    rules={[{ required: true, message: 'Please input your CardID' }]}
                    style={{
                        marginBottom: 0,
                    }}
                >
                    <span
                        style={{ display: 'inline-block', lineHeight: '32px', textAlign: 'center', marginRight: '10px', marginLeft: '15px' }}
                    >
                        เลขตัวถัง :
                    </span>
                    <Form.Item
                        style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(200px)', textAlign: 'center', marginRight: '15px' }}
                    >
                        <Input />
                    </Form.Item>
                    <span
                        style={{ display: 'inline-block', lineHeight: '32px', textAlign: 'center', marginRight: '10px', marginLeft: '10px' }}
                    >
                        เลขเครื่อง :
                    </span>
                    <Form.Item
                        style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(200px)', textAlign: 'center', marginRight: '15px' }}
                    >
                        <Input />
                    </Form.Item>

                    <span
                        style={{ display: 'inline-block', lineHeight: '32px', textAlign: 'center', marginRight: '10px', marginLeft: '10px' }}
                    >
                        เลขทะเบียน :
                    </span>
                    <Form.Item
                        style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(200px)', textAlign: 'center', marginRight: '15px' }}
                    >
                        <Input />
                    </Form.Item>
                </Form.Item>
                <Form.Item
                    name='name'
                    rules={[{ required: true, message: 'Please input your CardID' }]}
                    style={{
                        marginBottom: 0,
                    }}
                >
                    <span
                        style={{ display: 'inline-block', lineHeight: '32px', textAlign: 'center', marginRight: '10px', marginLeft: '20px' }}
                    >
                        กลุ่มสินค้า :
                    </span>
                    <Form.Item
                        style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(200px)', textAlign: 'center', marginRight: '45px' }}
                    >
                        <Select />
                    </Form.Item>
                    <span
                        style={{ display: 'inline-block', lineHeight: '32px', textAlign: 'center', marginRight: '10px', marginLeft: '12px' }}
                    >
                        รุ่นปี :
                    </span>
                    <Form.Item
                        style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(200px)', textAlign: 'center', marginRight: '50px' }}
                    >
                        <Select />
                    </Form.Item>

                    <span
                        style={{ display: 'inline-block', lineHeight: '32px', textAlign: 'center', marginRight: '10px' }}
                    >
                        จังหวัด :
                    </span>
                    <Form.Item
                        style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(200px)', textAlign: 'center', marginRight: '30px' }}
                    >
                        <Select
                            showSearch
                            placeholder="Select a province"
                            optionFilterProp="children"
                            onChange={onChange}
                            onSearch={onSearch}
                            filterOption={(input, option) =>
                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                            style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(200px)', textAlign: 'left' }}
                        >
                            {province.map((item) => (
                                <Option key={item.province}>
                                    {item.value}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                </Form.Item>

            </Form>
        </div>
    )
}

export default HoldBooks
