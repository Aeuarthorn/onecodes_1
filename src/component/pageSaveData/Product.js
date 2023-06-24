import React, { useState } from 'react';
import { Col, Form, Input, Select, Modal, Upload, Divider, Row } from 'antd';
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
                สินค้า
            </Divider>
            <Form
                name='Product'
                initialValues={{
                    remember: true,
                }}
            >
                <Row
                    align="left"
                    justify="left"
                    gutter={32}
                >
                    {/* column 1 */}
                    <Col className='gutter-row' span={3}>
                        <Form.Item style={styletext}>
                            ประเภทลูกค้า :
                        </Form.Item>
                        <Form.Item style={styletext}>
                            รุ่น :
                        </Form.Item>
                        <Form.Item style={styletext}>
                            เลขทะเบียน :
                        </Form.Item>
                        <Form.Item style={styletext}>
                            กลุ่มสินค้า :
                        </Form.Item>
                        <Form.Item style={styletext}>
                            เลขไมค์ :
                        </Form.Item>
                        <Form.Item style={styletext}>
                            สถานะทะเบียน :
                        </Form.Item>
                    </Col>
                    <Col className='gutter-row' span={5}>
                        <Form.Item
                            style={style}
                            name='typepartner'
                            id='typepartner'
                        >
                            {/* input Form ประเภทลูกค้า*/}
                            <Select
                            // options={career}
                            />
                        </Form.Item>
                        <Form.Item
                            style={style}
                            name='model'
                            id='model'
                        >
                            {/* input Form รุ่น*/}
                            <Select
                            // options={career}
                            />
                        </Form.Item>
                        <Form.Item
                            style={style}
                            name='regisnumber'
                            id='regisnumber'
                        >
                            {/* input Form เลขทะเบียน*/}
                            <Input
                            // options={career}
                            />
                        </Form.Item>
                        <Form.Item
                            style={style}
                            name='productgroup'
                            id='productgroup'
                        >
                            {/* input Form กลุ่มสินค้า*/}
                            <Select
                            // options={career}
                            />
                        </Form.Item>
                        <Form.Item
                            style={style}
                            name='mikenumber'
                            id='mikenumber'
                        >
                            {/* input Form เลขไมค์*/}
                            <Input
                            // options={career}
                            />
                        </Form.Item>
                        <Form.Item
                            style={style}
                            name='recordstatus'
                            id='recordstatus'
                        >
                            {/* input Form สถานะทะเบียน*/}
                            <Select
                            // options={career}
                            />
                        </Form.Item>
                    </Col>
                    {/* column 2 */}
                    <Col className='gutter-row' span={3}>
                        <Form.Item style={styletext}>
                            ประเภทลูกค้า :
                        </Form.Item>
                        <Form.Item style={styletext}>
                            ปี :
                        </Form.Item>
                        <Form.Item style={styletext}>
                            ประเภทรถ :
                        </Form.Item>
                        <Form.Item style={styletext}>
                            เลขตัวถัง :
                        </Form.Item>
                        <Form.Item style={styletext}>
                            เลขกุญแจ :
                        </Form.Item>
                        <Form.Item style={styletext}>
                            ที่เก็บ :
                        </Form.Item>
                    </Col>
                    <Col className='gutter-row' span={5}>
                        <Form.Item
                            style={style}
                            name='typeproduct'
                            id='typeproduct'
                        >
                            {/* input Form ประเภทสินค้า*/}
                            <Select
                            // options={career}
                            />
                        </Form.Item>
                        <Form.Item
                            style={style}
                            name='year'
                            id='year'
                        >
                            {/* input Form ปี*/}
                            <Select
                            // options={career}
                            />
                        </Form.Item>
                        <Form.Item
                            style={style}
                            name='typecar'
                            id='typecar'
                        >
                            {/* input Form ประเภทรถ*/}
                            <Select
                            // options={career}
                            />
                        </Form.Item>
                        <Form.Item
                            style={style}
                            name='classisnumber'
                            id='classisnumber'
                        >
                            {/* input Form เลขตัวถัง*/}
                            <Input
                            // options={career}
                            />
                        </Form.Item>
                        <Form.Item
                            style={style}
                            name='keynumber'
                            id='keynumber'
                        >
                            {/* input Form เลขกุญแจ*/}
                            <Input
                            // options={career}
                            />
                        </Form.Item>
                        <Form.Item
                            style={style}
                            name='storage'
                            id='storage'
                        >
                            {/* input Form ที่เก็บ*/}
                            <Select
                            // options={career}
                            />
                        </Form.Item>
                    </Col>
                    {/* column 3 */}
                    <Col className='gutter-row' span={3}>
                        <Form.Item style={styletext}>
                            ยี่ห้อ :
                        </Form.Item>
                        <Form.Item style={styletext}>
                            ราคา :
                        </Form.Item>
                        <Form.Item style={styletext}>
                            สีรถ :
                        </Form.Item>
                        <Form.Item style={styletext}>
                            เลขเครื่อง :
                        </Form.Item>
                        <Form.Item style={styletext}>
                            รหัสผู้รับรถ :
                        </Form.Item>
                    </Col>
                    <Col className='gutter-row' span={5}>
                        <Form.Item
                            style={style}
                            name='brand'
                            id='brand'
                        >
                            {/* input Form ยี่ห้อ*/}
                            <Select
                            // options={career}
                            />
                        </Form.Item>
                        <Form.Item
                            style={style}
                            name='price'
                            id='price'
                        >
                            {/* input Form ราคา*/}
                            <Input
                            // options={career}
                            />
                        </Form.Item>
                        <Form.Item
                            style={style}
                            name='carpaint'
                            id='carpaint'
                        >
                            {/* input Form สีรถ*/}
                            <Select
                            // options={career}
                            />
                        </Form.Item>
                        <Form.Item
                            style={style}
                            name='machinenumber'
                            id='machinenumber'
                        >
                            {/* input Form เลขเครื่อง*/}
                            <Input
                            // options={career}
                            />
                        </Form.Item>
                        <Form.Item
                            style={style}
                            name='reseivercode'
                            id='reseivercode'
                        >
                            {/* input Form รหัสผู้รับรถ*/}
                            <Select
                            // options={career}
                            />
                        </Form.Item>
                    </Col>


                </Row>
            </Form>
            <Form>
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
        </>
    )
}
export default Product
