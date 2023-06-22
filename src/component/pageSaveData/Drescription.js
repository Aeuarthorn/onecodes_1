import React, { useState } from 'react'
import { Form, Select, Modal, Upload, Divider, Col, Row } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import HoldBooks from './address/Hold_Books';
import CloseFinances from './address/Close_Finances';

const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

function Drescription() {
    const [holds, setHolds] = useState(0);

    const handleChang = (value) => {
        setHolds(value);
    }

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
                <h5><b>รายละเอียด</b></h5>
            </div>
            <Form
                name='basic'
                labelCol={{
                    span: 8,
                }}
                style={{
                    maxHeight: '100vh'
                }}
                initialValues={{
                    remember: true,
                }}
            >
                <span
                    style={{ display: 'inline-block', lineHeight: '32px' }}
                >
                    เลือก :
                </span>
                <Form.Item
                    style={{
                        display: 'inline-block',
                        marginLeft: '10px',
                        marginRight: '15px',
                        marginBottom: 0,
                        width: '200px',
                    }}
                >
                    <Select
                        defaultValue='เลือก'
                        onChange={handleChang}
                        style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(200px)', textAlign: 'center', marginBottom: 0 }}
                        options={[
                            {
                                label: 'ถือเล่มมา',
                                value: 0,
                            },
                            {
                                label: 'ปิดยอดไฟแนนซ์เดิม',
                                value: 1,
                            },
                        ]}
                    />
                </Form.Item>
                {/* <span ></span> */}
                {/* หน้าฟอร์มในการเลือกประเภทเล่ม */}
            </Form>
            <Divider style={{ marginBottom: 0 }}>
                {holds === 0 ? <HoldBooks /> : <CloseFinances />}
            </Divider>
            <Form.Item style={{ marginBottom: 0 }}>
                <h5><b>หมวดรูปภาพ</b></h5>
                <Row>
                    <Col span={8}>
                        <b>รูปรถ</b>
                        <Form.Item
                            style={{ marginBottom: 0 }}
                        >
                            <Form.Item
                                style={{ display: 'inline-block', lineHeight: '32px', marginBottom: 0, marginLeft: '15px', maxWidth: 'calc(800px)' }}
                            >
                                <Upload
                                    name="avatar"
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
                    </Col>
                    <Col span={8}>
                        <b>รูปเอกสาร</b>
                        <Form.Item
                            style={{ marginBottom: 0 }}
                        >
                            <Form.Item
                                style={{ display: 'inline-block', lineHeight: '32px', marginBottom: 0, marginLeft: '15px', maxWidth: 'calc(800px)' }}
                            >
                                <Upload
                                    name="avatar"
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
                    </Col>
                    <Col span={8}>
                        <b>รูปใบเสร็จ</b>
                        <Form.Item
                            style={{ marginBottom: 0 }}
                        >
                            <Form.Item
                                style={{ display: 'inline-block', lineHeight: '32px', marginBottom: 0, marginLeft: '15px', maxWidth: 'calc(800px)' }}
                            >
                                <Upload
                                    name="avatar"
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
                    </Col>
                </Row>
            </Form.Item>
        </React.Fragment>
    )
}

export default Drescription

