import * as React from 'react';
import '../address/body.css'
import { Form, Input, Select, Row, Col } from 'antd';
import district from '../data/District';
import { Option } from 'antd/es/mentions';
import district1 from '../data/District1';
import province from '../data/Province';
import zipcode from '../data/ZipCode';


function AddressWork() {

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
                name='AddressWork'
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
                            ชื่อสถานที่ทำงาน :
                        </Form.Item>
                        <Form.Item style={styletext}>
                            ฝ่าย / แผนก :
                        </Form.Item>
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

                    </Col>
                    <Col className='gutter-row' span={5}>
                        <Form.Item
                            style={style}
                            name='cardID'
                            id='cardID'
                        >
                            {/* input Form ชื่อสถานที่ทำงาน*/}
                            <Input />
                        </Form.Item>
                        <Form.Item
                            style={style}
                            name='cardID'
                            id='cardID'
                        >
                            {/* input Form ฝ่าย / แผนก*/}
                            <Input />
                        </Form.Item>
                        <Form.Item
                            style={style}
                            name='cardID'
                            id='cardID'
                        >
                            {/* input Form หมู่ที่*/}
                            <Input />
                        </Form.Item>
                        <Form.Item
                            style={style}
                            name='cardID'
                            id='cardID'
                        >
                            {/* input Form ถนน*/}
                            <Input />
                        </Form.Item>

                        <Form.Item
                            style={style}
                            name='cardID'
                            id='cardID'
                        >
                            {/* input Form ตำบล*/}
                            <Select
                                name='distric1'
                                id='distric1'
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
                            name='cardID'
                            id='cardID'
                        >
                            {/* input Form จังหวัด*/}
                            <Select
                                name='zipcode'
                                id='zipcode'
                                showSearch
                                placeholder="เลือกจังหวัด"
                                optionFilterProp="children"
                                onChange={onChange}
                                onSearch={onSearch}
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

                    </Col>
                    <Col className='gutter-row' span={3}>
                        {/* <Form.Item style={styletext}>

                        </Form.Item> */}
                        <Form.Item style={styletext}>
                            ตำแหน่ง :
                        </Form.Item>
                        <Form.Item style={styletext}>
                            บ้านเลขที่ :
                        </Form.Item>
                        <Form.Item style={styletext}>
                            ซอย :
                        </Form.Item>
                        <Form.Item style={styletext}>
                            หมู่บ้าน /อาคาร :
                        </Form.Item>
                        <Form.Item style={styletext}>
                            อำเภอ :
                        </Form.Item>
                        <Form.Item style={styletext}>
                            รหัสไปรษณีย์ :
                        </Form.Item>

                    </Col>
                    <Col className='gutter-row' span={5}>

                        <Form.Item
                            style={style}
                            name='cardID'
                            id='cardID'
                        >
                            {/* input Form ตำแหน่ง*/}
                            <Input />
                        </Form.Item>
                        <Form.Item
                            style={style}
                            name='cardID'
                            id='cardID'
                        >
                            {/* input Form บ้านเลขที่*/}
                            <Input />
                        </Form.Item>
                        <Form.Item
                            style={style}
                            name='cardID'
                            id='cardID'
                        >
                            {/* input Form ซอย*/}
                            <Input />
                        </Form.Item>

                        <Form.Item
                            style={style}
                            name='cardID'
                            id='cardID'
                        >
                            {/* input Form หมู่บ้าน / อาคาร*/}
                            <Input />
                        </Form.Item>
                        <Form.Item
                            style={style}
                            name='cardID'
                            id='cardID'
                        >
                            {/* input Form อำเภอ*/}
                            <Select
                                name='province'
                                id='province'

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
                            name='cardID'
                            id='cardID'
                        >
                            {/* input Form รหัสไปษณีย์*/}
                            <Select
                                name='province'
                                id='province'
                                showSearch
                                placeholder="เลือกรหัสไปษณีย์"
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
                    </Col>
                </Row>
            </Form>
        </>
    )
}
export default AddressWork
