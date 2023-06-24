import React, { useState } from 'react'
import { Form, Select, Modal, Upload, Divider, Col, Row, Input, Button } from 'antd';
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

    const [open, setOpen] = useState(false);
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
                            {/*  */}
                        </Form.Item>
                    </Col>
                    <Col className='gutter-row' span={4}>
                        <Form.Item style={styletext}>
                            {/*  */}
                        </Form.Item>

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
                            {/* input Form เลือกประเภทเล่ม */}
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
                </Row>
                {/* หน้าฟอร์มในการเลือกประเภทเล่ม */}
                <Row
                    align="left"
                    justify="center"
                    gutter={32}
                >
                    <Col className='gutter-row' span={19}>
                        {holds === 0 ? <HoldBooks /> : <CloseFinances />}
                    </Col>
                    <Col className='gutter-row' span={5}>
                        <Row
                            align="left"
                            justify="center"
                            gutter={5}
                        >
                            <Col className='gutter-row' span={24}>
                                <Form.Item >
                                    <b>คนค้ำประกัน </b>
                                </Form.Item>
                            </Col>
                            <Col className='gutter-row' span={8}>
                                <Form.Item style={styletext}>
                                    กลุ่มสินค้า :
                                </Form.Item>
                                <Form.Item style={styletext}>
                                    รหัสสินค้า :
                                </Form.Item>
                                <Form.Item style={styletext}>
                                    เลขที่บัตร :
                                </Form.Item>
                                <Form.Item style={styletext}>
                                    วันเกิด :
                                </Form.Item>
                                <Form.Item style={styletext}>
                                    เลขที่บัตร :
                                </Form.Item>
                                <Form.Item style={styletext}>
                                    ที่อยู่ :
                                </Form.Item>

                            </Col>
                            <Col className='gutter-row' span={16}>
                                <Form.Item >
                                    <Input />
                                </Form.Item>
                                <Form.Item >
                                    <Input />
                                </Form.Item>
                                <Form.Item >
                                    <Input />
                                </Form.Item>
                                <Form.Item >
                                    <Input />
                                </Form.Item>
                                <Form.Item >
                                    <Input />
                                </Form.Item>
                                <Form.Item >
                                    <Input />
                                </Form.Item>
                                <Form.Item >
                                    {/* ปุ่มเพิ่มคนค้ำประกัน */}
                                    <Button
                                        type='primary'
                                        defaultValue='เพิ่ม'
                                        onClick={() => setOpen(true)}
                                    >
                                        เพิ่มข้อมูลคนค้ำประกัน
                                    </Button>
                                    <Modal
                                        title='เพิ่มคนค้ำ'
                                        centered
                                        open={open}
                                        onOk={() => setOpen(false)}
                                        onCancel={() => setOpen(false)}
                                    >
                                        <Row
                                            align='left'
                                            justify='left'
                                            gutter={32}
                                        >
                                            <Col className='gutter-row' span={6}>
                                                <Form.Item style={styletext}>
                                                    ชื่อสาขา :
                                                </Form.Item>
                                                <Form.Item style={styletext}>
                                                    ชื่อ - นามสกุล :
                                                </Form.Item>
                                                <Form.Item style={styletext}>
                                                    ความสัมพันธ์ :
                                                </Form.Item>
                                                <Form.Item style={styletext}>
                                                    วันที่ :
                                                </Form.Item>
                                                <Form.Item style={styletext}>
                                                    ที่อยู่ :
                                                </Form.Item>
                                                <Form.Item style={styletext}>
                                                    เบอร์โทร :
                                                </Form.Item>
                                            </Col>
                                            <Col className='gutter-row' span={18}>
                                                <Form.Item >
                                                    {/* input Form ชื่อสาขา */}
                                                    <Select />
                                                </Form.Item>
                                                <Form.Item >
                                                    {/* input Form ชื่อ - นามสกุล */}
                                                    <Input />
                                                </Form.Item>
                                                <Form.Item >
                                                    {/* input Form ความสัมพันธ์ */}
                                                    <Select />
                                                </Form.Item>
                                                <Form.Item >
                                                    {/* input Form วันที่ */}
                                                    <Select />
                                                </Form.Item>
                                                <Form.Item >
                                                    {/* input Form ที่อยู่ */}
                                                    <Select />
                                                </Form.Item>
                                                <Form.Item >
                                                    {/* input Form เบอร์โทร */}
                                                    <Input />
                                                </Form.Item>
                                            </Col>

                                        </Row>

                                    </Modal>
                                </Form.Item>
                            </Col>
                        </Row>
                        {/* <Row
                            align="left"
                            justify="center"
                            gutter={5}
                        >
                            <Col className='gutter-row' span={24}>
                                <Form.Item >
                                    <b>คนค้ำประกัน</b>
                                </Form.Item>
                            </Col>
                            <Col className='gutter-row' span={10}>
                                <Form.Item >
                                    คนค้ำประกัน
                                </Form.Item>
                            </Col>
                            <Col className='gutter-row' span={14}>
                                <Form.Item >
                                    <Input />
                                </Form.Item>
                            </Col>
                        </Row> */}
                    </Col>


                </Row >

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
            </Form >
        </>
    )
}

export default Drescription

