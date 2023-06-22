import * as React from 'react';
import '../address/body.css'
import { Form, Input, Select, } from 'antd';
import district from '../data/District';
import { Option } from 'antd/es/mentions';
import district1 from '../data/District1';
import province from '../data/Province';
import zipcode from '../data/ZipCode';


function AddressCurr() {

    const onChange = (value) => {
        console.log(`selected ${value}`);
    };
    const onSearch = (value) => {
        console.log('search:', value);
    };

    return (
        <div>

            {/* ฟอร์มสำหรับข้อมูลตามที่อยู่ทะเบียนบ้าน */}
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
                    label='หมายเลขทะเบียนบ้าน'
                    rules={[{ required: true, message: 'Please input your CardID' }]}
                    style={{
                        marginBottom: 0,
                    }}
                >
                    <Form.Item
                        style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(250px)', textAlign: 'center', marginRight: '95px' }}
                        name='CurrentID'
                        id='CurrentID'
                    >
                        {/* input Form  หมายเลขทะเบียนบ้าน */}
                        <Input />
                    </Form.Item>
                    <span style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(250px)', textAlign: 'center' }}>

                    </span>
                </Form.Item>
                <Form.Item
                    label='เลขที่'
                    style={{
                        marginBottom: 0,
                    }}
                >
                    <Form.Item
                        style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(250px)', marginRight: '45px' }}
                        name='number'
                        id='number'
                    >
                        {/* input Form เลขที่ */}
                        <Input />
                    </Form.Item>
                    <span
                        style={{ display: 'inline-block', lineHeight: '32px', textAlign: 'center' }}
                    >
                        หมู่ที่ :
                    </span>
                    <Form.Item style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(250px)', marginLeft: '12px' }}
                        name='group'
                        id='group'
                    >
                        {/* input Form หมู่ที่ */}
                        <Input />
                    </Form.Item>
                </Form.Item>
                <Form.Item label='ซอย' style={{ marginBottom: 0, }}                >
                    <Form.Item
                        style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(250px)', marginRight: '45px' }}
                        name='alley'
                        id='alley'
                    >
                        {/* input Form ซอย */}
                        <Input />
                    </Form.Item>
                    <span
                        style={{ display: 'inline-block', lineHeight: '32px', textAlign: 'center' }}
                    >
                        ถนน :
                    </span>
                    <Form.Item style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(250px)', marginLeft: '12px' }}
                        name='road'
                        id='road'
                    >
                        {/* input Form ถนน */}
                        <Input />
                    </Form.Item>
                </Form.Item>
                <Form.Item label='หมู่บ้าน / อาคาร' style={{ marginBottom: 0 }}                >
                    <Form.Item
                        style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(250px)', marginRight: '35px' }}
                        name='group1'
                        id='group1'
                    >
                        {/* input Form หมู่บ้าน / อาคาร */}
                        <Input />
                    </Form.Item>
                    <span
                        style={{ display: 'inline-block', lineHeight: '32px', textAlign: 'center' }}
                    >
                        ตำบล :
                        {/* input Form Select ตำบล */}
                        <Select
                            name='distric'
                            id='distric'
                            placeholder="เลือกอำเภอ"
                            onChange={onChange}
                            onSearch={onSearch}
                            filterOption={(input, option) =>
                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                            style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(250px)', marginLeft: '12px', textAlign: 'left' }}
                        >{/* รอ map กับ data */}
                            {district.map((item) => (
                                <Option key={item.district}>
                                    {item.value}
                                </Option>
                            ))}
                        </Select>
                    </span>
                </Form.Item>
                <Form.Item
                    label='อำเภอ'
                >
                    <span
                        style={{ display: 'inline-block', lineHeight: '32px', textAlign: 'center' }}
                    >
                        {/* input Form อำเภอ */}
                        <Select
                            // showSearch
                            name='distric1'
                            id='distric1'
                            placeholder="เลือกอำเภอ"
                            // optionFilterProp="children"
                            onChange={onChange}
                            onSearch={onSearch}
                            filterOption={(input, option) =>
                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                            style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(250px)', marginRight: '28px', textAlign: 'left' }}
                        >
                            {district1.map((item) => (
                                <Option key={item.district1}>
                                    {item.value}
                                </Option>
                            ))}
                        </Select>
                    </span>
                    <span
                        style={{ display: 'inline-block', lineHeight: '32px', textAlign: 'center' }}
                    >
                        จังหวัด :
                        {/* input Form จังหวัด */}
                        <Select
                            // showSearch
                            name='province'
                            id='province'
                            placeholder="เลือกจังหวัด"
                            // optionFilterProp="children"
                            onChange={onChange}
                            onSearch={onSearch}
                            filterOption={(input, option) =>
                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                            style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(250px)', marginLeft: '12px', textAlign: 'left' }}
                        >
                            {province.map((item) => (
                                <Option key={item.province}>
                                    {item.value}
                                </Option>
                            ))}
                        </Select>
                    </span>
                </Form.Item>
                <Form.Item
                    label='รหัสไปรษณีย์'
                >
                    {/* input Form  รหัสไปรษณีย์ */}
                    <Select
                        name='zipcode'
                        id='zipcode'
                        showSearch
                        placeholder="รหัสไปรษณีย์"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(250px)', marginRight: '75px', textAlign: 'left' }}
                    >
                        {zipcode.map((item) => (
                            <Option key={item.zipcode}>
                                {item.value}
                            </Option>
                        ))}
                    </Select>
                    <span
                        style={{ display: 'inline-block', lineHeight: '32px', textAlign: 'center' }}
                    >
                        <Form.Item
                            style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(250px)', marginLeft: '12px', textAlign: 'left' }}
                        >
                        </Form.Item>
                    </span>
                </Form.Item>
            </Form>
        </div>
    )
}
export default AddressCurr
