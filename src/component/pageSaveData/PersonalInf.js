import React, { useState } from 'react';
import { DatePicker, Form, Input, Select, Modal, Upload, Row, Col, Divider } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import district from './data/District';
import { Option } from 'antd/es/mentions';
import district1 from './data/District1';
import province from './data/Province';
import zipcode from './data/ZipCode';
import './page.css'

const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

function Personal_Inf() {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');

    const onChange = (value) => {
        console.log(`selected ${value}`);
    };
    const onSearch = (value) => {
        console.log('search:', value);
    };
    const handleCancel = () => setPreviewOpen(false);
    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/')));
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
            <Divider >
                ข้อมูลส่วนตัว
            </Divider>
            <Form
                name='PersonalInf'

                initialValues={{
                    remember: true,
                }}
            >
                <Row align="left"
                    justify="left"
                    gutter={32}
                >
                    <Col className='gutter-row' span={6}>
                        <Form.Item style={styletext}>
                            เลขบัตรประจำตัวประชาชน :
                        </Form.Item>
                        <Form.Item style={styletext}>
                            ชื่อ - นามสกุล :
                        </Form.Item>
                        <Form.Item style={styletext}>
                            วัยหมดอายุบัตร :
                        </Form.Item>
                        <Form.Item style={styletext}>
                            บ้านเลขที่ :
                        </Form.Item>
                        <Form.Item style={styletext}>
                            หมู่ที่ :
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
                            {/* input Form เลขบัตรประจำตัวประชาชน*/}
                            <Input />
                        </Form.Item>
                        <Form.Item
                            style={style}
                            name='cardID'
                            id='cardID'
                        >
                            {/* input Form ชื่อ - นามสกุล*/}
                            <Input />
                        </Form.Item>
                        <Form.Item
                            style={style}
                            name='cardID'
                            id='cardID'
                        >
                            {/* input Form วันหมดอายุบัตร*/}
                            <DatePicker />
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
                            {/* input Form หมู่ที่*/}
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
                            Name - LastName :
                        </Form.Item>
                        <Form.Item style={styletext}>
                            ศาสนา :
                        </Form.Item>
                        <Form.Item style={styletext}>
                            วัน / เดือน / ปีเกิด :
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
                            {/* input Form ชื่อ - นามสกุล ภาษาอังกฤษ*/}
                            <Input />
                        </Form.Item>
                        <Form.Item
                            style={style}
                            name='cardID'
                            id='cardID'
                        >
                            {/* input Form ศาสนา*/}
                            <Select />
                        </Form.Item>
                        <Form.Item
                            style={style}
                            name='cardID'
                            id='cardID'
                        >
                            {/* input Form วัน / เดือน / ปีเกิด*/}
                            <DatePicker />
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
                    <Col align="top" span={5}>
                        <Form
                            style={style}
                            value={100}
                            name="avatar"
                            id='avatar'
                        >
                            {/* input Form เพิ่มรูปภาพ */}
                            <Upload
                                listType="picture-card"
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                onPreview={handlePreview}
                            >
                                {/* {fileList.length >= 8 ? null : uploadButton} */}
                                <div value={100}>
                                    <PlusOutlined /><p />
                                    รูปภาพ
                                </div>
                            </Upload>
                            {/* ดูภาพที่อัพโหลดมา */}
                            <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                                <img
                                    alt="example"
                                    style={{
                                        width: '100%',
                                    }}
                                    src={previewImage}
                                />
                            </Modal>
                        </Form>
                    </Col>
                    <Divider></Divider>
                </Row>
            </Form>
        </>
    );
}

export default Personal_Inf
