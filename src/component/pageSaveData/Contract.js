import * as React from 'react';
import './address/body.css'
import { MinusCircleOutlined, PlusOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select, Space } from 'antd';
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

    return (
        <React.Fragment>
            <div style={{ marginTop: 5 }}>
                <h5><b>ช่องทางการติดต่อ</b></h5>
            </div>
            {/* Form ใหม่ */}
            <Form
                form={form}
                name='dynamic_form_complex'
                labelCol={{ span: 8, }}
                style={{
                    marginBottom: 5,
                }}
                initialValues={{ remember: true, }}
                onFinish={onFinish}
                autoComplete="off"
            >
                {/* input Form เบอโทรศัพท์มือถือ */}
                <Form.Item
                    name='tel'
                    id='tel'
                    label="เบอร์โทรศัพท์มือถือ"
                    rules={[{ required: true, message: 'Missing area', },]}
                    style={{
                        display: 'inline-block',
                        lineHeight: '32px',
                        textAlign: 'center',
                        marginBottom: 2,
                        // width: 'calc(500px)',
                    }}
                >
                    <Select
                        options={tell}
                        onChange={handleChange}
                        style={{
                            lineHeight: '32px',
                            width: 'calc(250px)',
                            textAlign: 'center'
                        }}
                    />
                </Form.Item>

                <Form.List
                    name="tel"
                >
                    {(fields, { add, remove }) => (
                        <>
                            <span>
                                <Button onClick={() => add()} block icon={<PlusOutlined />}
                                    style={{ width: '100px', textAlign: 'center', marginBottom: 5 }}
                                >
                                    เพิ่ม
                                </Button>
                            </span>
                            <Form >
                                {fields.map((field) => (
                                    <Form.Item
                                        style={{ marginBottom: 0 }}
                                    >
                                        <Space key={field.key} align="baseline" >
                                            <Form.Item
                                                noStyle
                                                shouldUpdate={(prevValues, curValues) =>
                                                    prevValues.tell !== curValues.tell || prevValues.teller !== curValues.teller
                                                }
                                            >
                                                {() => (
                                                    <Form.Item
                                                        {...field}
                                                        label="ความสัมพันธ์"
                                                        name={[field.name]}
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: 'Missing Tel',
                                                            },
                                                        ]}
                                                    >
                                                        <Select
                                                            disabled={!form.getFieldValue('tel')}
                                                            style={{
                                                                width: 150,
                                                            }}
                                                        >
                                                            {/* {(teller[form.getFieldValue('teller')] || []).map((item) => (
                                                                <Option key={item} value={item}>
                                                                    {item}
                                                                </Option>
                                                            ))} */}
                                                            {teller.map((tel1) => (
                                                                <Option key={tel1} value={tel1.value}  >
                                                                    {tel1.value}
                                                                </Option>
                                                            ))}
                                                        </Select>
                                                    </Form.Item>
                                                )}
                                            </Form.Item>
                                            <Form.Item
                                                {...field}
                                                label="เบอร์โทร"
                                                name={[field.name, 'tel']}

                                            >
                                                <Input />
                                            </Form.Item>
                                            {/* Button Save Item */}
                                            {/* <SaveOutlined onClick={() => save(field.name)} /> */}
                                            <CheckCircleOutlined onClick={() => remove(field.name)}
                                                style={{
                                                    fontSize: '30px', color
                                                        : '#5b8c00'
                                                }}
                                            />
                                            {/* Button minus Item */}
                                            <MinusCircleOutlined onClick={() => remove(field.name)}
                                                style={{
                                                    fontSize: '30px', color
                                                        : '#cf1322'
                                                }}
                                            />
                                        </Space>
                                    </Form.Item>
                                ))}
                            </Form>
                        </>
                    )}
                </Form.List>
                {/* input Form Email */}
                <Form.Item
                    name='email'
                    id='email'
                    label='Email Address'
                    rules={[{ required: true, message: 'Missing area', },]}
                    style={{
                        display: 'inline-block',
                        lineHeight: '32px',
                        textAlign: 'center',
                        marginBottom: 2,
                        // width: 'calc(500px)',
                    }}
                >
                    <Select
                        options={email}
                        onChange={handleChange}
                        style={{
                            lineHeight: '32px',
                            width: 'calc(250px)',
                            textAlign: 'center',
                            marginLeft: 10,
                            marginRight: 4
                        }}
                    />
                </Form.Item>

                <Form.List
                    name="email"
                >
                    {(fields, { add, remove }) => (
                        <>
                            <span>
                                <Button onClick={() => add()} block icon={<PlusOutlined />}
                                    style={{ width: '100px', textAlign: 'center', marginBottom: 5, marginLeft: 15 }}
                                >
                                    เพิ่ม
                                </Button>
                            </span>
                            <Form >
                                {fields.map((field) => (
                                    <Form.Item
                                        style={{ marginBottom: 0 }}
                                    >
                                        <Space key={field.key} align="baseline" >
                                            <Form.Item
                                                noStyle
                                                shouldUpdate={(prevValues, curValues) =>
                                                    prevValues.email !== curValues.email || prevValues.teller !== curValues.teller
                                                }
                                            >
                                                {() => (
                                                    <Form.Item
                                                        {...field}
                                                        label="เลือก"
                                                        name={[field.name, 'email']}
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: 'Missing Email',
                                                            },
                                                        ]}
                                                    >
                                                        <Select
                                                            disabled={!form.getFieldValue('email')}
                                                            style={{
                                                                width: 150,
                                                            }}
                                                        >
                                                            {/* {(teller[form.getFieldValue('teller')] || []).map((item) => (
                                                                <Option key={item} value={item}>
                                                                    {item}
                                                                </Option>
                                                            ))} */}
                                                            {per.map((email1) => (
                                                                <Option key={email1} value={email1.value} >
                                                                    {email1.value}
                                                                </Option>
                                                            ))}
                                                        </Select>
                                                    </Form.Item>
                                                )}
                                            </Form.Item>
                                            <Form.Item
                                                {...field}
                                                label="Email "
                                                name={[field.name, '']}

                                            >
                                                <Input style={{
                                                    width: 250,
                                                }} />
                                            </Form.Item>
                                            {/* Button Save Item */}
                                            {/* <SaveOutlined onClick={() => save(field.name)} /> */}
                                            <CheckCircleOutlined onClick={() => remove(field.name)}
                                                style={{
                                                    fontSize: '30px', color
                                                        : '#5b8c00'
                                                }}
                                            />
                                            {/* Button minus Item */}
                                            <MinusCircleOutlined onClick={() => remove(field.name)}
                                                style={{
                                                    fontSize: '30px', color
                                                        : '#cf1322'
                                                }}
                                            />
                                        </Space>
                                    </Form.Item>
                                ))}
                            </Form>
                        </>
                    )}
                </Form.List>
                {/* input Form FaceBook */}
                <Form.Item
                    name="facebook"
                    id="facebook"
                    label="FaceBook"
                    rules={[{ required: true, message: 'Missing area', },]}
                    style={{
                        display: 'inline-block',
                        lineHeight: '32px',
                        textAlign: 'center',
                        marginBottom: 2,
                        // width: 'calc(500px)',
                    }}
                >
                    <Select
                        options={facebook}
                        onChange={handleChange}
                        style={{
                            lineHeight: '32px',
                            width: 'calc(250px)',
                            textAlign: 'center',
                            marginLeft: 18,
                            marginRight: 4
                        }}
                    />
                </Form.Item>

                <Form.List
                    name="facebook"
                >
                    {(fields, { add, remove }) => (
                        <>
                            <span>
                                <Button onClick={() => add()} block icon={<PlusOutlined />}
                                    style={{ width: '100px', textAlign: 'center', marginBottom: 5, marginLeft: 35 }}
                                >
                                    เพิ่ม
                                </Button>
                            </span>
                            <Form >
                                {fields.map((field) => (
                                    <Form.Item
                                        style={{ marginBottom: 0 }}
                                    >
                                        <Space key={field.key} align="baseline" >
                                            <Form.Item
                                                noStyle
                                                shouldUpdate={(prevValues, curValues) =>
                                                    prevValues.facebook !== curValues.facebook || prevValues.teller !== curValues.teller
                                                }
                                            >
                                                {() => (
                                                    <Form.Item
                                                        {...field}
                                                        label="เลือก"
                                                        name={[field.name, 'facebook']}
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: 'Missing Facebook',
                                                            },
                                                        ]}
                                                    >
                                                        <Select
                                                            // disabled={!form.getFieldValue('facebok')}
                                                            style={{
                                                                width: 150,
                                                            }}
                                                        >
                                                            {/* {(teller[form.getFieldValue('teller')] || []).map((item) => (
                                                                <Option key={item} value={item}>
                                                                    {item}
                                                                </Option>
                                                            ))} */}
                                                            {per.map((face) => (
                                                                <Option key={face} value={face.value} >
                                                                    {face.value}
                                                                </Option>
                                                            ))}
                                                        </Select>
                                                    </Form.Item>
                                                )}
                                            </Form.Item>
                                            <Form.Item
                                                {...field}
                                                label="Facebook "
                                                name={[field.name, '']}

                                            >
                                                <Input style={{
                                                    width: 250,
                                                }} />
                                            </Form.Item>
                                            {/* Button Save Item */}
                                            {/* <SaveOutlined onClick={() => save(field.name)} /> */}
                                            <CheckCircleOutlined onClick={() => remove(field.name)}
                                                style={{
                                                    fontSize: '30px', color
                                                        : '#5b8c00'
                                                }}
                                            />
                                            {/* Button minus Item */}
                                            <MinusCircleOutlined onClick={() => remove(field.name)}
                                                style={{
                                                    fontSize: '30px', color
                                                        : '#cf1322'
                                                }}
                                            />
                                        </Space>
                                    </Form.Item>
                                ))}
                            </Form>
                        </>
                    )}
                </Form.List>
                {/* input Form Line */}
                <Form.Item
                    name="line"
                    id="line"
                    label="Line"
                    rules={[{ required: true, message: 'Missing area', },]}
                    style={{
                        display: 'inline-block',
                        lineHeight: '32px',
                        textAlign: 'center',
                        marginBottom: 2,
                        // width: 'calc(500px)',
                    }}
                >
                    <Select
                        options={line}
                        onChange={handleChange}
                        style={{
                            lineHeight: '32px',
                            width: 'calc(250px)',
                            textAlign: 'center',
                            marginLeft: 26,
                            marginRight: 4
                        }}
                    />
                </Form.Item>

                <Form.List
                    name="line"
                >
                    {(fields, { add, remove }) => (
                        <>
                            <span>
                                <Button onClick={() => add()} block icon={<PlusOutlined />}
                                    style={{ width: '100px', textAlign: 'center', marginBottom: 5, marginLeft: 60 }}
                                >
                                    เพิ่ม
                                </Button>
                            </span>
                            <Form >
                                {fields.map((field) => (
                                    <Form.Item
                                        style={{ marginBottom: 0 }}
                                    >
                                        <Space key={field.key} align="baseline" >
                                            <Form.Item
                                                noStyle
                                                shouldUpdate={(prevValues, curValues) =>
                                                    prevValues.line !== curValues.line || prevValues.teller !== curValues.teller
                                                }
                                            >
                                                {() => (
                                                    <Form.Item
                                                        {...field}
                                                        label="เลือก"
                                                        name={[field.name, 'line']}
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: 'Missing line',
                                                            },
                                                        ]}
                                                    >
                                                        <Select
                                                            // disabled={!form.getFieldValue('facebok')}
                                                            style={{
                                                                width: 150,
                                                            }}
                                                        >
                                                            {/* {(teller[form.getFieldValue('teller')] || []).map((item) => (
                                                                <Option key={item} value={item}>
                                                                    {item}
                                                                </Option>
                                                            ))} */}
                                                            {per.map((line) => (
                                                                <Option key={line} value={line.value} >
                                                                    {line.value}
                                                                </Option>
                                                            ))}
                                                        </Select>
                                                    </Form.Item>
                                                )}
                                            </Form.Item>
                                            <Form.Item
                                                {...field}
                                                label="Line "
                                                name={[field.name, '']}

                                            >
                                                <Input style={{
                                                    width: 250,
                                                }} />
                                            </Form.Item>
                                            {/* Button Save Item */}
                                            {/* <SaveOutlined onClick={() => save(field.name)} /> */}
                                            <CheckCircleOutlined onClick={() => remove(field.name)}
                                                style={{
                                                    fontSize: '30px', color
                                                        : '#5b8c00'
                                                }}
                                            />
                                            {/* Button minus Item */}
                                            <MinusCircleOutlined onClick={() => remove(field.name)}
                                                style={{
                                                    fontSize: '30px', color
                                                        : '#cf1322'
                                                }}
                                            />
                                        </Space>
                                    </Form.Item>
                                ))}
                            </Form>
                        </>
                    )}
                </Form.List>
                {/* input Form เบอร์บ้าน */}
                <Form.Item
                    name="telhome"
                    id='telhome'
                    label="เบอร์บ้าน"
                    rules={[{ required: true, message: 'Missing area', },]}
                    style={{
                        display: 'inline-block',
                        lineHeight: '32px',
                        textAlign: 'center',
                        marginBottom: 2,
                        // width: 'calc(500px)',
                    }}
                >
                    <Select
                        options={telhome}
                        onChange={handleChange}
                        style={{
                            lineHeight: '32px',
                            width: 'calc(250px)',
                            textAlign: 'center',
                            marginLeft: 18,
                            marginRight: 4
                        }}
                    />
                </Form.Item>

                <Form.List
                    name="telhome"
                >
                    {(fields, { add, remove }) => (
                        <>
                            <span>
                                <Button onClick={() => add()} block icon={<PlusOutlined />}
                                    style={{ width: '100px', textAlign: 'center', marginBottom: 5, marginLeft: 36 }}
                                >
                                    เพิ่ม
                                </Button>
                            </span>
                            <Form >
                                {fields.map((field) => (
                                    <Form.Item
                                        style={{ marginBottom: 0 }}
                                    >
                                        <Space key={field.key} align="baseline" >
                                            <Form.Item
                                                noStyle
                                                shouldUpdate={(prevValues, curValues) =>
                                                    prevValues.telhome !== curValues.telhome || prevValues.teller !== curValues.teller
                                                }
                                            >
                                                {() => (
                                                    <Form.Item
                                                        {...field}
                                                        label="เลือก"
                                                        name={[field.name, 'telhome']}
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: 'Missing telhome',
                                                            },
                                                        ]}
                                                    >
                                                        <Select
                                                            // disabled={!form.getFieldValue('facebok')}
                                                            style={{
                                                                width: 150,
                                                            }}
                                                        >
                                                            {/* {(teller[form.getFieldValue('teller')] || []).map((item) => (
                                                                <Option key={item} value={item}>
                                                                    {item}
                                                                </Option>
                                                            ))} */}
                                                            {per.map((face) => (
                                                                <Option key={face} value={face.value} >
                                                                    {face.value}
                                                                </Option>
                                                            ))}
                                                        </Select>
                                                    </Form.Item>
                                                )}
                                            </Form.Item>
                                            <Form.Item
                                                {...field}
                                                label="เบอร์บ้าน"
                                                name={[field.name, '']}

                                            >
                                                <Input style={{
                                                    width: 250,
                                                }} />
                                            </Form.Item>
                                            {/* Button Save Item */}
                                            {/* <SaveOutlined onClick={() => save(field.name)} /> */}
                                            <CheckCircleOutlined onClick={() => remove(field.name)}
                                                style={{
                                                    fontSize: '30px', color
                                                        : '#5b8c00'
                                                }}
                                            />
                                            {/* Button minus Item */}
                                            <MinusCircleOutlined onClick={() => remove(field.name)}
                                                style={{
                                                    fontSize: '30px', color
                                                        : '#cf1322'
                                                }}
                                            />
                                        </Space>
                                    </Form.Item>
                                ))}
                            </Form>
                        </>
                    )}
                </Form.List>
                {/* input Form เบอร์ที่ทำงาน */}
                <Form.Item
                    name='telwork'
                    id='telwork'
                    label="เบอร์ที่ทำงาน"
                    rules={[{ required: true, message: 'Missing area', },]}
                    style={{
                        display: 'inline-block',
                        lineHeight: '32px',
                        textAlign: 'center',
                        marginBottom: 2,
                        // width: 'calc(500px)',
                    }}
                >
                    <Select
                        options={telwork}
                        onChange={handleChange}
                        style={{
                            lineHeight: '32px',
                            width: 'calc(250px)',
                            textAlign: 'center',
                            marginLeft: 17,

                        }}
                    />
                </Form.Item>

                <Form.List
                    name="telwork"
                >
                    {(fields, { add, remove }) => (
                        <>
                            <span>
                                <Button onClick={() => add(1)} block icon={<PlusOutlined />}
                                    style={{ width: '100px', textAlign: 'center', marginBottom: 20, marginLeft: 25 }}
                                >
                                    เพิ่ม
                                </Button>
                            </span>
                            <Form >
                                {fields.map((field) => (
                                    <Form.Item
                                        style={{ marginBottom: 0 }}
                                    >
                                        <Space key={field.key} align="baseline" >
                                            <Form.Item
                                                noStyle
                                                shouldUpdate={(prevValues, curValues) =>
                                                    prevValues.telwork !== curValues.telwork || prevValues.teller !== curValues.teller
                                                }
                                            >
                                                {() => (
                                                    <Form.Item
                                                        {...field}
                                                        label="เลือก"
                                                        name={[field.name, 'telwork']}
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: 'Missing telwork',
                                                            },
                                                        ]}
                                                    >
                                                        <Select
                                                            // disabled={!form.getFieldValue('facebok')}
                                                            style={{
                                                                width: 150,
                                                            }}
                                                        >
                                                            {/* {(teller[form.getFieldValue('teller')] || []).map((item) => (
                                                                <Option key={item} value={item}>
                                                                    {item}
                                                                </Option>
                                                            ))} */}
                                                            {per.map((face) => (
                                                                <Option key={face} value={face.value} >
                                                                    {face.value}
                                                                </Option>
                                                            ))}
                                                        </Select>
                                                    </Form.Item>
                                                )}
                                            </Form.Item>
                                            <Form.Item
                                                {...field}
                                                label="เบอร์ที่ทำงาน"
                                                name={[field.name, '']}

                                            >
                                                <Input style={{
                                                    width: 250,
                                                }} />
                                            </Form.Item>
                                            {/* Button Save Item */}
                                            {/* <SaveOutlined onClick={() => save(field.name)} /> */}
                                            <CheckCircleOutlined onClick={() => remove(field.name)}
                                                style={{
                                                    fontSize: '30px', color
                                                        : '#5b8c00'
                                                }}
                                            />
                                            {/* Button minus Item */}
                                            <MinusCircleOutlined onClick={() => remove(field.name)}
                                                style={{
                                                    fontSize: '30px', color
                                                        : '#cf1322'
                                                }}
                                            />
                                        </Space>
                                    </Form.Item>
                                ))}
                            </Form>
                        </>
                    )}
                </Form.List>
            </Form>
        </React.Fragment>
    )
}
export default Contract
