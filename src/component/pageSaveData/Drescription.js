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
    const style = {
        // marginTop: '5px',
        // width: '245px',
    };
    const styletext = {
        textAlign: 'right'
    };


    return (
        <>
            <Divider>
                รายละเอียด
            </Divider>
            <Form
                name='basic'
                initialValues={{
                    remember: true,
                }}
            >
                <Row
                    align="left"
                    justify="left"
                    gutter={32}
                >
                    <Col className='gutter-row' span={4}>
                        <Form.Item style={styletext}>

                        </Form.Item>
                    </Col>
                    <Col className='gutter-row' span={4}>

                    </Col>
                    <Col className='gutter-row' span={3}>
                        <Form.Item style={styletext}>
                            เลือก :
                        </Form.Item>
                    </Col>
                    <Col className='gutter-row' span={4}>
                        <Form.Item
                            name='select'
                            id='select'
                        >
                            <Select
                                defaultValue='เลือก'
                                onChange={handleChang}
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
                    </Col>
                    <Col className='gutter-row' span={4}>
                        <Form.Item style={styletext}>

                        </Form.Item>
                    </Col>
                    <Col className='gutter-row' span={4}>

                    </Col>
                </Row>
                {/* หน้าฟอร์มในการเลือกประเภทเล่ม */}
                <Row
                    align="left"
                    justify="center"
                    gutter={32}
                >
                    {holds === 0 ? <HoldBooks /> : <CloseFinances />}
                </Row>

                <Form.Item style={{ marginBottom: 0 }}>
                    <Divider>หมวดรูปภาพ</Divider>
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
            </Form>
        </>
    )
}

export default Drescription

