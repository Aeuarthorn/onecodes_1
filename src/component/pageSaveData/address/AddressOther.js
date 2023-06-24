import React, { useState } from 'react';
import '../address/body.css'
import { Form, Input, Select, Row, Col } from 'antd';
import district from '../data/District';
import { Option } from 'antd/es/mentions';
import district1 from '../data/District1';
import province from '../data/Province';
import zipcode from '../data/ZipCode';


function AddressOther() {
    const [cashs, setCashs] = useState(0);

    const onChangeCash = (value) => {
        setCashs(value);
    }

    const onChange = (value) => {
        console.log(`selected ${value}`);
    };
    const onSearch = (value) => {
        console.log('search:', value);
    };
    const style = {
        // marginTop: '5px',
        // width: '245px',
    };
    const styletext = {
        textAlign: 'right'
    };

    return (
        <>
            {/* ฟอร์มสำหรับข้อมูลตามที่อยู่ทะเบียนบ้าน */}
            <Form
                name='AddressOther'
                initialValues={{
                    remember: true,
                }}
            >
                <Row align="left"
                    justify="left"
                    gutter={
                        32
                    }
                >
                    <Col className='gutter-row' span={6}>
                        <Form.Item style={styletext}>
                            บ้านเลขที่ :
                        </Form.Item>
                        <Form.Item style={styletext}>
                            ซอย :
                        </Form.Item>
                        <Form.Item style={styletext}>
                            หมู่บ้าน / อาคาร :
                        </Form.Item>
                        <Form.Item style={styletext}>
                            อำเภอ :
                        </Form.Item>
                        <Form.Item style={styletext}>
                            รหัสไปรษณีย์ :
                        </Form.Item>
                        <Form.Item style={styletext}>
                            ลักษณะบ้าน :
                        </Form.Item>

                    </Col>
                    <Col className='gutter-row' span={5}>
                        <Form.Item
                            style={style}
                            name='housenember'
                            id='housenember'
                        >
                            {/* input Form บ้านเลขที่*/}
                            <Input />
                        </Form.Item>
                        <Form.Item
                            style={style}
                            name='alley'
                            id='alley'
                        >
                            {/* input Form ซอย*/}
                            <Input />
                        </Form.Item>
                        <Form.Item
                            style={style}
                            name='group1'
                            id='group1'
                        >
                            {/* input Form หมู่บ้าน / อาคาร*/}
                            <Input />
                        </Form.Item>

                        <Form.Item
                            style={style}
                            name='distric1'
                            id='distric1'
                        >
                            {/* input Form อำเภอ*/}
                            <Select
                                name='distric1'
                                id='distric1'
                                showSearch
                                placeholder="เลือกอำเภอ"
                                optionFilterProp="children"
                                onChange={onChange}
                                onSearch={onSearch}
                                filterOption={(input, option) =>
                                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                }
                            >
                                {district1.map((item) => (
                                    <Option key={item.district1}>
                                        {item.value}
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item>
                        <Form.Item
                            style={style}
                            name='zipcode'
                            id='zipcode'
                        >
                            {/* input Form จังหวัด*/}
                            <Select
                                name='zipcode'
                                id='zipcode'
                                showSearch
                                placeholder="เลือกรหัสไปรษณีย์"
                                optionFilterProp="children"
                                onChange={onChange}
                                onSearch={onSearch}
                                filterOption={(input, option) =>
                                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                }
                            >
                                {zipcode.map((item) => (
                                    <Option key={item.zipcode}>
                                        {item.value}
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item>
                        <Form.Item
                            style={style}
                            name='typehome'
                            id='typehome'
                        >
                            {/* input Form ลักษณะบ้าน*/}
                            <Select
                                name='typehome'
                                id='typehome'
                                // showSearch
                                placeholder="เลือกลักษณะบ้าน"
                                onChange={onChangeCash}
                                // onSearch={onSearch}
                                options={[
                                    {
                                        label: 'บ้านเดี่ยว',
                                        value: 'บ้านเดี่ยว',
                                    },
                                    {
                                        label: 'บ้านสองชั้น',
                                        value: 'บ้านสองชั้น',
                                    },
                                    {
                                        label: 'คอนโด',
                                        value: 'คอนโด',
                                    },
                                ]}
                            />
                        </Form.Item>

                    </Col>
                    <Col className='gutter-row' span={3}>
                        <Form.Item style={styletext}>
                            หมู่ที่ :
                        </Form.Item>
                        <Form.Item style={styletext}>
                            ถนน :
                        </Form.Item>
                        <Form.Item style={styletext}>
                            ตำบล :
                        </Form.Item>
                        <Form.Item style={styletext}>
                            จังหวัด :
                        </Form.Item>
                        <Form.Item style={styletext}>

                        </Form.Item>
                        <Form.Item style={styletext}>
                            ลักษณะความเป็นเจ้าของบ้าน :
                        </Form.Item>
                    </Col>
                    <Col className='gutter-row' span={5}>
                        <Form.Item
                            style={style}
                            name='group'
                            id='group'
                        >
                            {/* input Form หมู่ที่*/}
                            <Input />
                        </Form.Item>
                        <Form.Item
                            style={style}
                            name='road'
                            id='road'
                        >
                            {/* input Form ถนน*/}
                            <Input />
                        </Form.Item>

                        <Form.Item
                            style={style}
                            name='district'
                            id='district'
                        >
                            {/* input Form ตำบล*/}
                            <Select
                                name='district'
                                id='district'
                                showSearch
                                placeholder="เลือกตำบล"
                                optionFilterProp="children"
                                onChange={onChange}
                                onSearch={onSearch}
                                filterOption={(input, option) =>
                                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                }
                            >
                                {district.map((item) => (
                                    <Option key={item.district}>
                                        {item.value}
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item>
                        <Form.Item
                            style={style}
                            name='province'
                            id='province'
                        >
                            {/* input Form จังหวัด*/}
                            <Select
                                name='province'
                                id='province'
                                // showSearch
                                placeholder="เลือกจังหวัด"
                                optionFilterProp="children"
                                onChange={onChange}
                                // onSearch={onSearch}
                                filterOption={(input, option) =>
                                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                }
                            >
                                {province.map((item) => (
                                    <Option key={item.province}>
                                        {item.value}
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item>
                        <Form.Item
                            style={style}

                        >

                        </Form.Item>
                        <Form.Item
                            style={style}
                            name='typeOwn'
                            id='typeOwn'
                        >
                            {/* input Form ลักษณะความเป็นเจ้าของ*/}
                            <Select
                                name='typeOwn'
                                id='typeOwn'
                                // showSearch
                                placeholder="เลือกความเป็นเจ้าของ"
                                optionFilterProp="children"
                                onChange={onChange}
                                // onSearch={onSearch}
                                options={[
                                    {
                                        label: 'เจ้าของบ้าน',
                                        value: 'เจ้าของบ้าน'
                                    },
                                    {
                                        label: 'ผู้อยู่อาศัย',
                                        value: 'ผู้อยู่อาศัย'
                                    },
                                ]}
                            />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </>
    )
}
export default AddressOther
