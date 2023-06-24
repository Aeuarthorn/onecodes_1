import * as React from 'react';
import './address/body.css'
import { MinusCircleOutlined, PlusOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select, Space, Divider, Row, Col } from 'antd';
const { Option } = Select;

const tell = [{
    label: 'เบอร์โทรศัพท์มือถือ',
    value: 'เบอร์โทรศัพท์มือถือ',
}];
const teller = [
    {
        label: 'ผู้ทำสัญญา',
        value: 'ผู้ทำสัญญา'
    },
    {
        label: 'พ่อ',
        value: 'พ่อ'
    },
    {
        label: 'แม่',
        value: 'แม่'
    },
    {
        label: 'เพื่อน',
        value: 'เพื่อน'
    },
    {
        label: 'น้า',
        value: 'น้า'
    },
    {
        label: 'อา',
        value: 'อา'
    },



];
const email = [{
    label: 'Email Address',
    value: 'Email Address',
}];
const facebook = [{
    label: 'Face Book',
    value: 'Face Book',
}];
const line = [{
    label: 'Line',
    value: 'Line',
}];
const telhome = [{
    label: 'เบอร์บ้าน',
    value: 'เบอร์บ้าน',
}];
const telwork = [{
    label: 'เบอร์ที่ทำงาน',
    value: 'เบอร์ที่ทำงาน',
}];
const per = [
    {
        label: 'ผู้ทำสัญญา',
        value: 'ผู้ทำสัญญา',
    },
    {
        label: 'ผู้ค้ำประกัน',
        value: 'ผู้ค้ำประกัน',
    }
];

function Contract() {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Received values of form:', values);
    };
    const handleChange = () => {
        form.setFieldsValue({
            teller: [],
        });
    };
    const style = {
        // marginTop: '5px',
        // width: '245px',
        textAlign: 'left'
    };
    const styletext = {
        textAlign: 'right'
    };


    return (
        <>
            <Divider>
                ช่องทางการติดต่อ
            </Divider>
            {/* Form ใหม่ */}
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
                    style={{ marginBottom: 0 }}
                >
                    <Col className='gutter-row' span={9} >

                        <Form.Item style={styletext}>
                            เบอร์โทรศัพท์มือถือ :
                        </Form.Item>
                    </Col>
                    <Col className='gutter-row' span={15} style={{ marginBottom: 0 }}>
                        <Form style={style}>
                            <Form.Item
                                name='tel'
                                id='tel'
                                style={{ display: 'inline-block', width: 'calc(200px)' }}
                            >
                                <Select
                                    options={tell}
                                    onChange={handleChange}
                                />
                            </Form.Item>
                            <Form.List
                                name="Tel"
                            >
                                {(fields, { add, remove, save }) => (
                                    <>
                                        <Button onClick={() => add()} blockicon={<PlusOutlined />}
                                            style={{ width: '100px', marginBottom: 5, marginLeft: 5 }}
                                        >
                                            เพิ่ม
                                        </Button>
                                        <Form >
                                            {fields.map((field) => (
                                                <div key={field.key}  >
                                                    <Form
                                                        shouldUpdate={(prevValues, curValues) =>
                                                            prevValues.tell !== curValues.tell || prevValues.teller !== curValues.teller
                                                        }
                                                    >
                                                        {() => (
                                                            <>
                                                                <Form.Item style={{ display: 'inline-block', marginBottom: 0, marginRight: 5 }}>
                                                                    ความสัมพันธ์ :
                                                                </Form.Item>
                                                                <span style={{ display: 'inline-block' }}>
                                                                    <Form.Item
                                                                        {...field}
                                                                        name={[field.name]}
                                                                        rules={[
                                                                            {
                                                                                required: true,
                                                                                message: 'Missing Tel',
                                                                            },
                                                                        ]}
                                                                    >                                                                                                                                                  <Select
                                                                        label='เลือก'
                                                                        style={{
                                                                            display: 'inline-block',
                                                                            marginBottom: 0,
                                                                            width: 150,
                                                                        }}
                                                                    >
                                                                            {teller.map((tel1) => (
                                                                                <Option key={tel1} value={tel1.value}  >
                                                                                    {tel1.value}
                                                                                </Option>
                                                                            ))}
                                                                        </Select>
                                                                        <span style={{ marginRight: 5, marginLeft: 20 }}>เบอร์โทร :</span>
                                                                        <Form.Item
                                                                            style={{ display: 'inline-block', marginBottom: 0 }}
                                                                            {...field}
                                                                            name={[field.name, 'tel']}
                                                                            rules={[
                                                                                {
                                                                                    required: true,
                                                                                    message: 'Missing Tel',
                                                                                },
                                                                            ]}
                                                                        >
                                                                            <Input style={{ width: 'calc(150px)' }} />
                                                                        </Form.Item>


                                                                        {/* Button Save Item */}
                                                                        {/* <SaveOutlined onClick={() => save(field.name)} /> */}
                                                                        <CheckCircleOutlined onClick={() => remove(field.name)}
                                                                            style={{
                                                                                marginLeft: 10,
                                                                                marginRight: 5,
                                                                                fontSize: '30px',
                                                                                color: '#5b8c00',
                                                                            }}
                                                                        />
                                                                        {/* Button minus Item */}
                                                                        <MinusCircleOutlined onClick={() => remove(field.name)}
                                                                            style={{
                                                                                fontSize: '30px',
                                                                                color: '#cf1322',
                                                                            }}
                                                                        />
                                                                    </Form.Item>
                                                                </span>
                                                            </>
                                                        )}
                                                    </Form>
                                                </div>
                                            ))}
                                        </Form>
                                    </>
                                )}
                            </Form.List>
                        </Form>
                    </Col>
                </Row>
                <Row
                    align="left"
                    justify="left"
                    gutter={32}
                >
                    <Col className='gutter-row' span={9} >

                        <Form.Item style={styletext}>
                            Email Address :
                        </Form.Item>
                    </Col>
                    <Col className='gutter-row' span={15} style={{ marginBottom: 0 }}>
                        <Form style={style}>
                            <Form.Item
                                name='email'
                                id='email'
                                style={{ display: 'inline-block', width: 'calc(200px)' }}
                            >
                                <Select
                                    options={email}
                                    onChange={handleChange}
                                />
                            </Form.Item>
                            <Form.List
                                name="Email"
                            >
                                {(fields, { add, remove, save }) => (
                                    <>
                                        <Button onClick={() => add()} blockicon={<PlusOutlined />}
                                            style={{ width: '100px', marginBottom: 5, marginLeft: 5 }}
                                        >
                                            เพิ่ม
                                        </Button>
                                        <Form >
                                            {fields.map((field) => (
                                                <div key={field.key}  >
                                                    <Form
                                                        shouldUpdate={(prevValues, curValues) =>
                                                            prevValues.email !== curValues.email || prevValues.teller !== curValues.teller
                                                        }
                                                    >
                                                        {() => (
                                                            <>
                                                                <Form.Item style={{ display: 'inline-block', marginBottom: 0, marginRight: 5 }}>
                                                                    ความสัมพันธ์ :
                                                                </Form.Item>
                                                                <span style={{ display: 'inline-block' }}>
                                                                    <Form.Item
                                                                        {...field}
                                                                        name={[field.name]}
                                                                        rules={[
                                                                            {
                                                                                required: true,
                                                                                message: 'Missing Email',
                                                                            },
                                                                        ]}
                                                                    >                                                                                                                                                  <Select
                                                                        label='เลือก'
                                                                        style={{
                                                                            display: 'inline-block',
                                                                            marginBottom: 0,
                                                                            width: 150,
                                                                        }}
                                                                    >
                                                                            {teller.map((tel1) => (
                                                                                <Option key={tel1} value={tel1.value}  >
                                                                                    {tel1.value}
                                                                                </Option>
                                                                            ))}
                                                                        </Select>
                                                                        <span style={{ marginRight: 5, marginLeft: 20 }}>เบอร์โทร :</span>
                                                                        <Form.Item
                                                                            style={{ display: 'inline-block', marginBottom: 0 }}
                                                                            {...field}
                                                                            name={[field.name, 'Email']}
                                                                            rules={[
                                                                                {
                                                                                    required: true,
                                                                                    message: 'Missing Email',
                                                                                },
                                                                            ]}
                                                                        >
                                                                            <Input style={{ width: 'calc(150px)' }} />
                                                                        </Form.Item>


                                                                        {/* Button Save Item */}
                                                                        {/* <SaveOutlined onClick={() => save(field.name)} /> */}
                                                                        <CheckCircleOutlined onClick={() => remove(field.name)}
                                                                            style={{
                                                                                marginLeft: 10,
                                                                                marginRight: 5,
                                                                                fontSize: '30px',
                                                                                color: '#5b8c00',
                                                                            }}
                                                                        />
                                                                        {/* Button minus Item */}
                                                                        <MinusCircleOutlined onClick={() => remove(field.name)}
                                                                            style={{
                                                                                fontSize: '30px',
                                                                                color: '#cf1322',
                                                                            }}
                                                                        />
                                                                    </Form.Item>
                                                                </span>
                                                            </>
                                                        )}
                                                    </Form>
                                                </div>
                                            ))}
                                        </Form>
                                    </>
                                )}
                            </Form.List>
                        </Form>
                    </Col>
                </Row>
                <Row
                    align="left"
                    justify="left"
                    gutter={32}
                >
                    <Col className='gutter-row' span={9} >

                        <Form.Item style={styletext}>
                            Facebook :
                        </Form.Item>
                    </Col>
                    <Col className='gutter-row' span={15} style={{ marginBottom: 0 }}>
                        <Form style={style}>
                            <Form.Item
                                name='facebook'
                                id='facebook'
                                style={{ display: 'inline-block', width: 'calc(200px)' }}
                            >
                                <Select
                                    options={facebook}
                                    onChange={handleChange}
                                />
                            </Form.Item>
                            <Form.List
                                name="Facebook"
                            >
                                {(fields, { add, remove, save }) => (
                                    <>
                                        <Button onClick={() => add()} blockicon={<PlusOutlined />}
                                            style={{ width: '100px', marginBottom: 5, marginLeft: 5 }}
                                        >
                                            เพิ่ม
                                        </Button>
                                        <Form >
                                            {fields.map((field) => (
                                                <div key={field.key}  >
                                                    <Form
                                                        shouldUpdate={(prevValues, curValues) =>
                                                            prevValues.facebook !== curValues.facebook || prevValues.teller !== curValues.teller
                                                        }
                                                    >
                                                        {() => (
                                                            <>
                                                                <Form.Item style={{ display: 'inline-block', marginBottom: 0, marginRight: 5 }}>
                                                                    ความสัมพันธ์ :
                                                                </Form.Item>
                                                                <span style={{ display: 'inline-block' }}>
                                                                    <Form.Item
                                                                        {...field}
                                                                        name={[field.name]}
                                                                        rules={[
                                                                            {
                                                                                required: true,
                                                                                message: 'Missing Facebook',
                                                                            },
                                                                        ]}
                                                                    >                                                                                                                                                  <Select
                                                                        label='เลือก'
                                                                        style={{
                                                                            display: 'inline-block',
                                                                            marginBottom: 0,
                                                                            width: 150,
                                                                        }}
                                                                    >
                                                                            {teller.map((tel1) => (
                                                                                <Option key={tel1} value={tel1.value}  >
                                                                                    {tel1.value}
                                                                                </Option>
                                                                            ))}
                                                                        </Select>
                                                                        <span style={{ marginRight: 5, marginLeft: 20 }}>เบอร์โทร :</span>
                                                                        <Form.Item
                                                                            style={{ display: 'inline-block', marginBottom: 0 }}
                                                                            {...field}
                                                                            name={[field.name, 'Facebook']}
                                                                            rules={[
                                                                                {
                                                                                    required: true,
                                                                                    message: 'Missing Facebook',
                                                                                },
                                                                            ]}
                                                                        >
                                                                            <Input style={{ width: 'calc(150px)' }} />
                                                                        </Form.Item>


                                                                        {/* Button Save Item */}
                                                                        {/* <SaveOutlined onClick={() => save(field.name)} /> */}
                                                                        <CheckCircleOutlined onClick={() => remove(field.name)}
                                                                            style={{
                                                                                marginLeft: 10,
                                                                                marginRight: 5,
                                                                                fontSize: '30px',
                                                                                color: '#5b8c00',
                                                                            }}
                                                                        />
                                                                        {/* Button minus Item */}
                                                                        <MinusCircleOutlined onClick={() => remove(field.name)}
                                                                            style={{
                                                                                fontSize: '30px',
                                                                                color: '#cf1322',
                                                                            }}
                                                                        />
                                                                    </Form.Item>
                                                                </span>
                                                            </>
                                                        )}
                                                    </Form>
                                                </div>
                                            ))}
                                        </Form>
                                    </>
                                )}
                            </Form.List>
                        </Form>
                    </Col>
                </Row>
                <Row
                    align="left"
                    justify="left"
                    gutter={32}
                >
                    <Col className='gutter-row' span={9} >

                        <Form.Item style={styletext}>
                            LineID :
                        </Form.Item>
                    </Col>
                    <Col className='gutter-row' span={15} style={{ marginBottom: 0 }}>
                        <Form style={style}>
                            <Form.Item
                                name='line'
                                id='line'
                                style={{ display: 'inline-block', width: 'calc(200px)' }}
                            >
                                <Select
                                    options={line}
                                    onChange={handleChange}
                                />
                            </Form.Item>
                            <Form.List
                                name="LineID"
                            >
                                {(fields, { add, remove, save }) => (
                                    <>
                                        <Button onClick={() => add()} blockicon={<PlusOutlined />}
                                            style={{ width: '100px', marginBottom: 5, marginLeft: 5 }}
                                        >
                                            เพิ่ม
                                        </Button>
                                        <Form >
                                            {fields.map((field) => (
                                                <div key={field.key}  >
                                                    <Form
                                                        shouldUpdate={(prevValues, curValues) =>
                                                            prevValues.line !== curValues.line || prevValues.teller !== curValues.teller
                                                        }
                                                    >
                                                        {() => (
                                                            <>
                                                                <Form.Item style={{ display: 'inline-block', marginBottom: 0, marginRight: 5 }}>
                                                                    ความสัมพันธ์ :
                                                                </Form.Item>
                                                                <span style={{ display: 'inline-block' }}>
                                                                    <Form.Item
                                                                        {...field}
                                                                        name={[field.name]}
                                                                        rules={[
                                                                            {
                                                                                required: true,
                                                                                message: 'Missing Line',
                                                                            },
                                                                        ]}
                                                                    >                                                                                                                                                  <Select
                                                                        label='เลือก'
                                                                        style={{
                                                                            display: 'inline-block',
                                                                            marginBottom: 0,
                                                                            width: 150,
                                                                        }}
                                                                    >
                                                                            {teller.map((tel1) => (
                                                                                <Option key={tel1} value={tel1.value}  >
                                                                                    {tel1.value}
                                                                                </Option>
                                                                            ))}
                                                                        </Select>
                                                                        <span style={{ marginRight: 5, marginLeft: 20 }}>เบอร์โทร :</span>
                                                                        <Form.Item
                                                                            style={{ display: 'inline-block', marginBottom: 0 }}
                                                                            {...field}
                                                                            name={[field.name, 'LineID']}
                                                                            rules={[
                                                                                {
                                                                                    required: true,
                                                                                    message: 'Missing LineID',
                                                                                },
                                                                            ]}
                                                                        >
                                                                            <Input style={{ width: 'calc(150px)' }} />
                                                                        </Form.Item>


                                                                        {/* Button Save Item */}
                                                                        {/* <SaveOutlined onClick={() => save(field.name)} /> */}
                                                                        <CheckCircleOutlined onClick={() => remove(field.name)}
                                                                            style={{
                                                                                marginLeft: 10,
                                                                                marginRight: 5,
                                                                                fontSize: '30px',
                                                                                color: '#5b8c00',
                                                                            }}
                                                                        />
                                                                        {/* Button minus Item */}
                                                                        <MinusCircleOutlined onClick={() => remove(field.name)}
                                                                            style={{
                                                                                fontSize: '30px',
                                                                                color: '#cf1322',
                                                                            }}
                                                                        />
                                                                    </Form.Item>
                                                                </span>
                                                            </>
                                                        )}
                                                    </Form>
                                                </div>
                                            ))}
                                        </Form>
                                    </>
                                )}
                            </Form.List>
                        </Form>
                    </Col>
                </Row>
                <Row
                    align="left"
                    justify="left"
                    gutter={32}
                >
                    <Col className='gutter-row' span={9} >

                        <Form.Item style={styletext}>
                            เบอร์บ้าน :
                        </Form.Item>
                    </Col>
                    <Col className='gutter-row' span={15} style={{ marginBottom: 0 }}>
                        <Form style={style}>
                            <Form.Item
                                name='telhome'
                                id='telhome'
                                style={{ display: 'inline-block', width: 'calc(200px)' }}
                            >
                                <Select
                                    options={telhome}
                                    onChange={handleChange}
                                />
                            </Form.Item>
                            <Form.List
                                name="TelHome"
                            >
                                {(fields, { add, remove, save }) => (
                                    <>
                                        <Button onClick={() => add()} blockicon={<PlusOutlined />}
                                            style={{ width: '100px', marginBottom: 5, marginLeft: 5 }}
                                        >
                                            เพิ่ม
                                        </Button>
                                        <Form >
                                            {fields.map((field) => (
                                                <div key={field.key}  >
                                                    <Form
                                                        shouldUpdate={(prevValues, curValues) =>
                                                            prevValues.telhome !== curValues.telhome || prevValues.teller !== curValues.teller
                                                        }
                                                    >
                                                        {() => (
                                                            <>
                                                                <Form.Item style={{ display: 'inline-block', marginBottom: 0, marginRight: 5 }}>
                                                                    ความสัมพันธ์ :
                                                                </Form.Item>
                                                                <span style={{ display: 'inline-block' }}>
                                                                    <Form.Item
                                                                        {...field}
                                                                        name={[field.name]}
                                                                        rules={[
                                                                            {
                                                                                required: true,
                                                                                message: 'Missing Telhome',
                                                                            },
                                                                        ]}
                                                                    >                                                                                                                                                  <Select
                                                                        label='เลือก'
                                                                        style={{
                                                                            display: 'inline-block',
                                                                            marginBottom: 0,
                                                                            width: 150,
                                                                        }}
                                                                    >
                                                                            {teller.map((tel1) => (
                                                                                <Option key={tel1} value={tel1.value}  >
                                                                                    {tel1.value}
                                                                                </Option>
                                                                            ))}
                                                                        </Select>
                                                                        <span style={{ marginRight: 5, marginLeft: 20 }}>เบอร์โทร :</span>
                                                                        <Form.Item
                                                                            style={{ display: 'inline-block', marginBottom: 0 }}
                                                                            {...field}
                                                                            name={[field.name, 'TelHome']}
                                                                            rules={[
                                                                                {
                                                                                    required: true,
                                                                                    message: 'Missing TelHome',
                                                                                },
                                                                            ]}
                                                                        >
                                                                            <Input style={{ width: 'calc(150px)' }} />
                                                                        </Form.Item>


                                                                        {/* Button Save Item */}
                                                                        {/* <SaveOutlined onClick={() => save(field.name)} /> */}
                                                                        <CheckCircleOutlined onClick={() => remove(field.name)}
                                                                            style={{
                                                                                marginLeft: 10,
                                                                                marginRight: 5,
                                                                                fontSize: '30px',
                                                                                color: '#5b8c00',
                                                                            }}
                                                                        />
                                                                        {/* Button minus Item */}
                                                                        <MinusCircleOutlined onClick={() => remove(field.name)}
                                                                            style={{
                                                                                fontSize: '30px',
                                                                                color: '#cf1322',
                                                                            }}
                                                                        />
                                                                    </Form.Item>
                                                                </span>
                                                            </>
                                                        )}
                                                    </Form>
                                                </div>
                                            ))}
                                        </Form>
                                    </>
                                )}
                            </Form.List>
                        </Form>
                    </Col>
                </Row>
                <Row
                    align="left"
                    justify="left"
                    gutter={32}
                >
                    <Col className='gutter-row' span={9} >

                        <Form.Item style={styletext}>
                            เบอร์ที่ทำงาน :
                        </Form.Item>
                    </Col>
                    <Col className='gutter-row' span={15} style={{ marginBottom: 0 }}>
                        <Form style={style}>
                            <Form.Item
                                name='telwork'
                                id='telwork'
                                style={{ display: 'inline-block', width: 'calc(200px)' }}
                            >
                                <Select
                                    options={telwork}
                                    onChange={handleChange}
                                />
                            </Form.Item>
                            <Form.List
                                name="TelWork"
                            >
                                {(fields, { add, remove, save }) => (
                                    <>
                                        <Button onClick={() => add()} blockicon={<PlusOutlined />}
                                            style={{ width: '100px', marginBottom: 5, marginLeft: 5 }}
                                        >
                                            เพิ่ม
                                        </Button>
                                        <Form >
                                            {fields.map((field) => (
                                                <div key={field.key}  >
                                                    <Form
                                                        shouldUpdate={(prevValues, curValues) =>
                                                            prevValues.telwork !== curValues.telwork || prevValues.teller !== curValues.teller
                                                        }
                                                    >
                                                        {() => (
                                                            <>
                                                                <Form.Item style={{ display: 'inline-block', marginBottom: 0, marginRight: 5 }}>
                                                                    ความสัมพันธ์ :
                                                                </Form.Item>
                                                                <span style={{ display: 'inline-block' }}>
                                                                    <Form.Item
                                                                        {...field}
                                                                        name={[field.name]}
                                                                        rules={[
                                                                            {
                                                                                required: true,
                                                                                message: 'Missing TelWork',
                                                                            },
                                                                        ]}
                                                                    >                                                                                                                                                  <Select
                                                                        label='เลือก'
                                                                        style={{
                                                                            display: 'inline-block',
                                                                            marginBottom: 0,
                                                                            width: 150,
                                                                        }}
                                                                    >
                                                                            {teller.map((tel1) => (
                                                                                <Option key={tel1} value={tel1.value}  >
                                                                                    {tel1.value}
                                                                                </Option>
                                                                            ))}
                                                                        </Select>
                                                                        <span style={{ marginRight: 5, marginLeft: 20 }}>เบอร์โทร :</span>
                                                                        <Form.Item
                                                                            style={{ display: 'inline-block', marginBottom: 0 }}
                                                                            {...field}
                                                                            name={[field.name, 'TelWork']}
                                                                            rules={[
                                                                                {
                                                                                    required: true,
                                                                                    message: 'Missing TelWork',
                                                                                },
                                                                            ]}
                                                                        >
                                                                            <Input style={{ width: 'calc(150px)' }} />
                                                                        </Form.Item>


                                                                        {/* Button Save Item */}
                                                                        {/* <SaveOutlined onClick={() => save(field.name)} /> */}
                                                                        <CheckCircleOutlined onClick={() => remove(field.name)}
                                                                            style={{
                                                                                marginLeft: 10,
                                                                                marginRight: 5,
                                                                                fontSize: '30px',
                                                                                color: '#5b8c00',
                                                                            }}
                                                                        />
                                                                        {/* Button minus Item */}
                                                                        <MinusCircleOutlined onClick={() => remove(field.name)}
                                                                            style={{
                                                                                fontSize: '30px',
                                                                                color: '#cf1322',
                                                                            }}
                                                                        />
                                                                    </Form.Item>
                                                                </span>
                                                            </>
                                                        )}
                                                    </Form>
                                                </div>
                                            ))}
                                        </Form>
                                    </>
                                )}
                            </Form.List>
                        </Form>
                    </Col>
                </Row>
            </Form>
            <Divider>

            </Divider>
        </>
    )
}
export default Contract
