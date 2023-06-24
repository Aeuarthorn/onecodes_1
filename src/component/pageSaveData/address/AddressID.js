import * as React from 'react';
import '../address/body.css'
import { Form, Input, Select, Row, Col } from 'antd';
import district from '../data/District';
import { Option } from 'antd/es/mentions';
import district1 from '../data/District1';
import province from '../data/Province';
import zipcode from '../data/ZipCode';


function AddressID() {

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
            <Form
                name='AddressID'
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
                    </Col>
                    <Col className='gutter-row' span={5}>
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
                            {/* input Form วันหมดอายุบัตร*/}
                            <Input />
                        </Form.Item>

                        <Form.Item
                            style={style}
                            name='cardID'
                            id='cardID'
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
                            name='cardID'
                            id='cardID'
                        >
                            {/* input Form รหัสไปรษณีย์*/}
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

                    </Col>
                    <Col className='gutter-row' span={5}>
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
                                name='distric'
                                id='distric'
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
                                name='province'
                                id='province'

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
                </Row>
            </Form>

        </>
    )
}
export default AddressID
