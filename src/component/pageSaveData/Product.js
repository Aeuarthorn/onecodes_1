import React, { useState } from 'react';
import { Form, Input, Select, Modal, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';


const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

function Product() {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');

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
        <React.Fragment>
            <div className='text-center text-black mt-3 mb-3'>
                <h5><b>สินค้า</b></h5>
            </div>
            <Form
                name='basic'
                labelCol={{
                    span: 8,
                }}
                style={{
                    maxHeight: '100vh',
                }}
                initialValues={{
                    remember: true,
                }}
            >
                <Form.Item
                    style={{ marginBottom: 0 }}
                >
                    <span style={{ lineHeight: '32px' }}>
                        ประเภทลูกค้า :
                    </span>
                    <Form.Item style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(200px)', marginRight: '30px' }}>
                        {/* input Form ประเภทลูกค้า */}
                        <Select
                            style={{ marginLeft: '15px' }}
                            name='customertype'
                            id='customertype'
                        />

                    </Form.Item>
                    <span>
                        ประเภทสินค้า :
                    </span>
                    <Form.Item
                        style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(200px)', marginRight: '30px' }}
                    >
                        {/* input Form ประเภทสินค้า */}
                        <Select style={{ marginLeft: '15px' }}
                            name='proeducttype'
                            id='proeducttype'
                        />
                    </Form.Item>
                    <span>
                        ยี่ห้อ :
                    </span>
                    <Form.Item
                        style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(200px)', marginRight: '30px' }}
                    >
                        {/* input Form ยี่ห้อ */}
                        <Select style={{ marginLeft: '15px' }}
                            name='brand'
                            id='brand'
                        />
                    </Form.Item>
                </Form.Item>
                <Form.Item
                    style={{ marginBottom: 0 }}
                >
                    <span style={{ lineHeight: '32px' }}>
                        รุ่น :
                    </span>
                    <Form.Item
                        style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(200px)', marginRight: '30px' }}
                    >
                        {/* input Form รุ่น */}
                        <Select style={{ marginLeft: '15px' }}
                            name='model'
                            id='model'
                        />
                    </Form.Item>
                    <span>
                        ปี :
                    </span>
                    <Form.Item
                        style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(200px)', marginRight: '30px' }}
                    >
                        {/* input Form ปี */}
                        <Select style={{ marginLeft: '15px' }}
                            name='year'
                            id='year'
                        />
                    </Form.Item>
                    <span style={{ lineHeight: '32px', marginRight: '10px' }}>
                        ราคา :
                    </span>
                    <Form.Item
                        style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(200px)' }}
                        name='price'
                        id='price'
                    >
                        {/* input Form ราคา */}
                        <Input />
                    </Form.Item><span style={{ marginLeft: '10px' }}>บาท</span>
                </Form.Item>
                <Form.Item
                    style={{ marginBottom: 0 }}
                >
                    <span
                        style={{ lineHeight: '32px' }}
                    >
                        เลขทะเบียน :
                    </span>
                    <Form.Item
                        style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(200px)', marginRight: '30px' }}
                        name='registrationnumber'
                        id='registrationnumber'
                    >
                        {/* input Form เลขทะเบียน */}
                        <Input style={{ marginLeft: '15px' }} />
                    </Form.Item>
                    <span
                        style={{ lineHeight: '32px' }}
                    >
                        ประเภทรถ :
                    </span>
                    <Form.Item
                        style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(200px)', marginRight: '30px' }}
                        name='cartype'
                        id='cartype'
                    >
                        {/* input Form ประเภทรถ */}
                        <Input style={{ marginLeft: '15px' }} />
                    </Form.Item>
                    <span
                        style={{ lineHeight: '32px' }}
                    >
                        สีรถ :
                    </span>
                    <Form.Item
                        style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(200px)', marginRight: '30px' }}
                        name='carcolor'
                        id='carcolor'
                    >
                        {/* input Form สีรถ */}
                        <Input style={{ marginLeft: '15px' }} />
                    </Form.Item>
                </Form.Item>
                <Form.Item
                    style={{ marginBottom: 0 }}
                >
                    <span
                        style={{ lineHeight: '32px' }}
                    >
                        กลุ่มสินค้า :
                    </span>
                    <Form.Item
                        style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(200px)', marginRight: '30px' }}
                    >
                        {/* input Form กลุ่มสินค้า */}
                        <Select style={{ marginLeft: '15px' }}
                            name='productgroup'
                            id='productgroup'
                        />
                    </Form.Item>
                    <span
                        style={{ lineHeight: '32px' }}
                    >
                        เลขตัวถัง :
                    </span>
                    <Form.Item
                        style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(200px)', marginRight: '30px' }}
                        name='chassisnumber'
                        id='chassisnumber'
                    >
                        {/* input Form เลขตัวถัง */}
                        <Input style={{ marginLeft: '15px' }} />
                    </Form.Item>
                    <span
                        style={{ lineHeight: '32px' }}
                    >
                        เลขเครื่อง :
                    </span>
                    <Form.Item
                        style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(200px)', marginRight: '30px' }}
                        name='machinenumber'
                        id='machinenumber'
                    >
                        {/* input Form เลขเครื่อง */}
                        <Input style={{ marginLeft: '15px' }} />
                    </Form.Item>
                </Form.Item>
                <Form.Item
                    style={{ marginBottom: 0 }}
                >
                    <span
                        style={{ lineHeight: '32px' }}
                    >
                        เลขไมค์ :
                    </span>
                    <Form.Item
                        style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(200px)', marginRight: '30px' }}
                    >
                        {/* input Form เลขไมค์ */}
                        <Select style={{ marginLeft: '15px' }}
                            name='mileage'
                            id='mileage'
                        />
                    </Form.Item>
                    <span
                        style={{ lineHeight: '32px' }}
                    >
                        เลขกุญแจ :
                    </span>
                    <Form.Item
                        style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(200px)', marginRight: '30px' }}
                        name='keynumber'
                        id='keynumber'
                    >
                        {/* input Form เลขกุญแจ */}
                        <Input style={{ marginLeft: '15px' }} />
                    </Form.Item>
                    <span
                        style={{ lineHeight: '32px' }}
                    >
                        รหัสผู้รับรถ :
                    </span>
                    <Form.Item
                        style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(200px)', marginRight: '30px' }}
                    >
                        {/* input Form รหัสผู้ใช้รถ */}
                        <Select style={{ marginLeft: '15px' }}
                            name='receivercode'
                            id='receivercode'
                        />
                    </Form.Item>
                </Form.Item>
                <Form.Item
                    style={{ marginBottom: 0 }}
                >
                    <span
                        style={{ lineHeight: '32px' }}
                    >
                        สถานะทะเบียน :
                    </span>
                    <Form.Item
                        style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(200px)', marginRight: '30px' }}
                    >
                        {/* input Form สถานะทะเบียน */}
                        <Select style={{ marginLeft: '15px' }}
                            name='status'
                            id='status'
                        />
                    </Form.Item>
                    <span
                        style={{ lineHeight: '32px' }}
                    >
                        ที่เก็บ :
                    </span>
                    <Form.Item
                        style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(200px)', marginRight: '30px' }}
                        name='storage'
                        id='storage'
                    >
                        {/* input Form ที่เก็บ */}
                        <Input style={{ marginLeft: '15px' }} />
                    </Form.Item>
                    <span
                        style={{ lineHeight: '32px' }}
                    >
                    </span>
                    <Form.Item
                        style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(200px)', marginRight: '30px' }}
                    >

                    </Form.Item>
                </Form.Item>
                <Form.Item
                    style={{ marginBottom: 0 }}
                >
                    <span
                        style={{ lineHeight: '120px', marginBottom: 0 }}
                    >
                        เพิ่มรูป :
                    </span>
                    <Form.Item
                        style={{ display: 'inline-block', lineHeight: '32px', marginBottom: 0, marginLeft: '15px', maxWidth: 'calc(800px)' }}
                    >
                        <Upload
                            name="avatar"
                            id='avatar'
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
                </Form.Item>

            </Form>
        </React.Fragment>
    )
}
export default Product
