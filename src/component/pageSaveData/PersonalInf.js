import React, { useState } from 'react';
import { DatePicker, Form, Input, Select, Modal, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import district from './data/District';
import { Option } from 'antd/es/mentions';
import district1 from './data/District1';
import province from './data/Province';
import zipcode from './data/ZipCode';
// import { Container } from 'react-bootstrap';

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
    return (
        <div>
            <div className='text-center text-black mt-3 mb-3'>
                <h5><b>ข้อมูลส่วนตัว</b></h5>
            </div>

            <Form
                name='basic'
                labelCol={{
                    span: 8,
                }}
                style={{
                    maxWidth: '100vh',
                    marginTop: 10,
                }}
                initialValues={{
                    remember: true,
                }}
            >

                <span style={{ display: 'inline-block', lineHeight: '130px', marginRight: '10px' }}>
                    เลขบัตรประจำตัวประชาชน :
                </span>
                <Form.Item
                    style={{ display: 'inline-block', lineHeight: '130px', width: 'calc(250px)', textAlign: 'center' }}
                    name='cardID'
                    id='cardID'
                >
                    {/* input Form เลขบัตรประจำตัวประชาชน*/}
                    <Input />
                </Form.Item>

                <Form.Item
                    style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(250px)' }}
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
                        <div style={{ marginBottom: 0 }}>
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
                </Form.Item>
                <Form.Item
                    label='ชื่อ'
                    rules={[{ required: true, message: 'Please input your Name' }]}
                    style={{
                        marginBottom: 0,
                    }}
                >
                    <Form.Item
                        style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(250px)', marginRight: '25px' }}
                        name='name'
                        id='name'
                    >
                        {/* input Form ชื่อ - นามสกุล*/}
                        <Input />
                    </Form.Item>
                    <span
                        style={{ display: 'inline-block', lineHeight: '32px', textAlign: 'center' }}
                    >
                        ศาสนา :
                    </span>
                    <Form.Item
                        style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(250px)', marginLeft: '12px' }}
                        name='religion'
                        id='religion'
                    >
                        {/* input Form ศาสนา*/}
                        <Input />
                    </Form.Item>
                </Form.Item>
                <Form.Item
                    label='วันหมดอายุ'
                    rules={[{ required: true, message: 'Please input your CardID' }]}
                    style={{
                        marginBottom: 0,
                    }}
                >
                    <Form.Item
                        style={{ display: 'inline-block', marginRight: '30px', marginLeft: '10px' }}
                        name='date'
                        id='date'
                    >
                        {/* input Form */}
                        <DatePicker style={{ width: 'calc(200px)' }} />
                    </Form.Item>
                    <span
                        style={{ width: '20px', lineHeight: '32px', textAlign: 'center' }}
                    >
                        วัน / เดือน / ปีเกิด :
                    </span>
                    <Form.Item
                        style={{ display: 'inline-block' }}
                        name='brithday'
                        id='drithday'
                    >
                        {/* input Form วัน เดือน ปีเกิด*/}
                        <DatePicker style={{ width: 'calc(200px)', marginRight: '30px', marginLeft: '15px' }} />
                    </Form.Item>
                </Form.Item>
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
                {/* การใช้ span ทำให้อยู่ใน col เดียวกัน */}
                <Form.Item
                    label='เลขที่'
                    rules={[{ required: true, message: 'Please input your CardID' }]}
                    style={{
                        marginBottom: 0,
                    }}
                >
                    <Form.Item
                        style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(250px)', marginRight: '15px' }}
                        name='number'
                        id='number'
                    >
                        {/* input Form บ้านเลขที่*/}
                        <Input />
                    </Form.Item>
                    <span
                        style={{ display: 'inline-block', lineHeight: '32px', textAlign: 'center' }}
                    >
                        ถนน :
                    </span>
                    <Form.Item
                        style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(250px)', marginLeft: '15px' }}
                        name='road'
                        id='road'
                    >
                        {/* input Form ถนน*/}
                        <Input />
                    </Form.Item>
                </Form.Item>
                <Form.Item
                    label='หมู่ที่'
                    rules={[{ required: true, message: 'Please input your CardID' }]}
                    style={{ lineHeight: '32px', marginBottom: 0 }}
                >
                    <Form.Item
                        style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(250px)', marginRight: '15px' }}
                        name='group'
                        id='group'
                    >
                        {/* input Form หมู่*/}
                        <Input />
                    </Form.Item>
                    <span
                        style={{ display: 'inline-block', lineHeight: '32px', textAlign: 'center' }}                                           >
                        ตำบล :
                        {/* input Form ตำบล*/}
                        <Select
                            name='distric'
                            id='distric'
                            showSearch
                            placeholder="Select a district"
                            optionFilterProp="children"
                            onChange={onChange}
                            onSearch={onSearch}
                            filterOption={(input, option) =>
                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                            style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(250px)', marginLeft: '15px', textAlign: 'left' }}
                        >
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
                    rules={[{ required: true, message: 'Please input your CardID' }]}                                  >
                    <span
                        style={{ display: 'inline-block', lineHeight: '32px', textAlign: 'center' }}
                    >
                        {/* input Form อำเภอ */}
                        <Select
                            name='distric1'
                            id='distric1'
                            showSearch
                            placeholder="Select a district1"
                            optionFilterProp="children"
                            onChange={onChange}
                            onSearch={onSearch}
                            filterOption={(input, option) =>
                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                            style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(250px)', marginRight: '15px', textAlign: 'left' }}
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
                            name='province'
                            id='province'
                            showSearch
                            placeholder="Select a province"
                            optionFilterProp="children"
                            onChange={onChange}
                            onSearch={onSearch}
                            filterOption={(input, option) =>
                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                            style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(250px)', marginLeft: '15px', textAlign: 'left' }}
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
                    rules={[{ required: true, message: 'Please input your CardID' }]}
                >
                    {/* input Form รหัสไปรษณีย์ */}
                    <Select
                        name='zipcode'
                        id='zipcode'
                        showSearch
                        placeholder="Select a zipcode"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(250px)', marginLeft: '15px', textAlign: 'left' }}
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
                            style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(250px)', marginLeft: '90px', textAlign: 'left' }}
                        >
                        </Form.Item>
                    </span>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Personal_Inf
