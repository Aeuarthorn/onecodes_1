import React, { useState } from 'react';
import { Form, Select, Input, Button, Space, DatePicker, Divider, Row, Col } from 'antd';
import { MinusCircleOutlined, CheckCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
const { Option } = Select;

const income = [
    {
        label: 'โอที',
        value: 'โอที',
    },
    {
        label: 'ค่าเดินทาง',
        value: 'ค่าเดินทาง',
    },
    {
        label: 'อื่นๆ',
        value: 'อื่นๆ',
    },
];


function Income() {
    const [form] = Form.useForm();
    const [cashs, setCashs] = useState(0);
    const [cashhome, setCashHome] = useState(0);

    const onFinish = (values) => {
        console.log('Received values of form:', values);
    };

    const onChangeCash = (value) => {
        setCashs(value);
    }
    const onChangeCashHome = (value) => {
        setCashHome(value);
    }
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
                รายได้
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
                    <Col className='gutter-row' span={5}>
                        <Form.Item style={styletext}>
                            เงินเดือน :
                        </Form.Item>
                    </Col>
                    <Col className='gutter-row' span={5}>
                        <Form.Item
                            name='salary'
                            id='salary'
                        >
                            {/* input Form เงินเดือน*/}
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col className='gutter-row' span={3}>
                        <Form.Item style={styletext}>
                            ค่าคอมมิชชั่น :
                        </Form.Item>
                    </Col>
                    <Col className='gutter-row' span={5}>
                        <Form.Item
                            name='commission'
                            id='commission'
                        >
                            {/* input Form ค่าคอมมิชชั่น*/}
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row
                    align="left"
                    justify="left"
                    gutter={32}
                >
                    <Col className='gutter-row' span={24}>
                        <Form.Item
                            name='salary'
                            id='salary'
                        >
                            {/* input Form เงินเดือน*/}
                            <Form.List
                                name="money"
                                id="money"
                            >
                                {(fields, { add, remove }) => (
                                    <>
                                        <span >
                                            <span style={{ marginRight: '15px' }} >
                                                ค่าอื่น ๆ :
                                            </span>
                                            <Button onClick={() => add()} block icon={<PlusCircleOutlined style={{
                                                fontSize: '20px', color
                                                    : '#5b8c00'
                                            }} />}
                                                style={{ width: '100px', textAlign: 'center', marginBottom: 5 }}
                                            >
                                                เพิ่ม
                                            </Button>
                                        </span>

                                        {fields.map((field) => (
                                            <Form.Item
                                                style={{
                                                    marginBottom: 0,
                                                }}
                                            >
                                                <Space key={field.key} align="baseline" >
                                                    <Form.Item
                                                        noStyle
                                                        shouldUpdate={(prevValues, curValues) =>
                                                            prevValues.income !== curValues.income || prevValues.teller !== curValues.teller
                                                        }
                                                    >
                                                        {() => (
                                                            <Form.Item
                                                                {...field}
                                                                label="เลือก"
                                                                name={[field.name]}
                                                                rules={[
                                                                    {
                                                                        required: true,
                                                                        message: 'Missing Income',
                                                                    },
                                                                ]}
                                                            >
                                                                <Select
                                                                    // disabled={!form.getFieldValue('income')}
                                                                    style={{ width: 'calc(150px)' }}
                                                                >
                                                                    {income.map((inc) => (
                                                                        <Option key={inc} value={inc.value}>
                                                                            {inc.value}
                                                                        </Option>
                                                                    ))}
                                                                </Select>
                                                            </Form.Item>

                                                        )}
                                                    </Form.Item>
                                                    <Form.Item
                                                        {...field}
                                                        label="จำนวนเงิน"
                                                        name={[field.name, 'tel']}

                                                    >
                                                        <Input />
                                                    </Form.Item><span>
                                                        บาท
                                                    </span>
                                                    {/* Button Save Item */}
                                                    {/* <SaveOutlined onClick={() => save(field.name)} /> */}

                                                    {/* Button minus Item */}
                                                    <CheckCircleOutlined onClick={() => remove(field.name)}
                                                        style={{
                                                            fontSize: '30px', color
                                                                : '#5b8c00'
                                                        }}
                                                    />
                                                    <MinusCircleOutlined onClick={() => remove(field.name)}
                                                        style={{
                                                            fontSize: '30px', color
                                                                : '#cf1322'
                                                        }}
                                                    />
                                                </Space>
                                            </Form.Item>
                                        ))}

                                    </>
                                )}
                            </Form.List>
                        </Form.Item>
                    </Col>
                </Row>
                <Row
                    align="left"
                    justify="left"
                    gutter={32}
                >
                    <Col className='gutter-row' span={4}>
                        <Form.Item style={styletext}>
                            ช่องทางการรับเงิน :
                        </Form.Item>
                        <Form.Item style={styletext}>
                            อายุงานปัจจุบัน :
                        </Form.Item>
                        {/* <Form.Item style={styletext}>
                            ตำแหน่ง :
                        </Form.Item> */}

                    </Col>
                    <Col className='gutter-row' span={4}>
                        <Form.Item>
                            {/* input Form ช่องทางการรับเงิน */}
                            <Select
                                name='receiving'
                                id='receiving'
                                defaultValue={0}
                                onChange={onChangeCash}
                                options={[
                                    {
                                        label: 'เงินสด',
                                        value: 0,
                                    },
                                    {
                                        label: 'บัญชีธนาคาร',
                                        value: 1,
                                    },
                                ]}
                            />
                        </Form.Item>
                        <Form.Item
                            name='incomeout'
                            id='incomeout'
                        >
                            {/* input Form อายุงานปัจจุบัน*/}
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col className='gutter-row' span={3}>
                        <Form.Item >
                            {cashs === 0 ? 'กรอกจำนวนเงิน :' : 'กรอกเลขบัญชี : '}
                        </Form.Item>
                        <Form.Item >
                            ปี
                        </Form.Item>

                    </Col>
                    <Col className='gutter-row' span={4}>
                        <Form.Item
                            name='mon'
                            id='mon'
                        >
                            {/*input Form กรอกข้อมูล */}
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name='incomeout'
                            id='incomeout'
                        >
                            {/* input Form เดือน*/}
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col className='gutter-row' span={3.5}>
                        <Form.Item style={styletext}>
                            รายได้จากต่างประเทศ :
                        </Form.Item>
                        <Form.Item style={styletext}>
                            เดือน  วันที่เริ่มทำงาน :
                        </Form.Item>
                        {/* <Form.Item style={styletext}>
                            รายได้จากต่างประเทศ :
                        </Form.Item> */}
                    </Col>
                    <Col className='gutter-row' span={4}>
                        <Form.Item
                            style={{ display: 'inline-block' }}
                            name='incomeout'
                            id='incomeout'
                        >
                            {/* input Form รายได้จากต่างประเทศ*/}
                            <Input />
                        </Form.Item>
                        {/* <span style={{ display: 'inline-block', lineHeight: '32px', marginLeft: '10px' }}>บาท</span> */}

                        <Form.Item
                            name='startwork'
                            id='startwork'
                        >
                            {/* input Form วันที่เริ่มทำงาน*/}
                            <DatePicker />
                        </Form.Item>

                    </Col>
                </Row>
                <Row
                    align="left"
                    justify="left"
                    gutter={32}
                >
                    <Col className='gutter-row' span={6}>
                        <Form.Item style={styletext}>
                            ตำแหน่ง :
                        </Form.Item>
                        <Form.Item style={styletext}>
                            ภาระประจำเดือน :
                        </Form.Item>
                        {/* <Form.Item style={styletext}>
                            ตำแหน่ง :
                        </Form.Item> */}

                    </Col>
                    <Col className='gutter-row' span={6}>
                        <Form.Item
                            name='department'
                            id='department'
                        >
                            {/* input Form ตำแหน่ง */}
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name='incomeout'
                            id='incomeout'
                        >
                            {/* input Form ภาระประจำเดือน*/}
                            <Select
                                name='monthlyburden'
                                id='monthlyburden'
                                defaultValue={0}
                                onChange={onChangeCashHome}
                                options={[
                                    {
                                        label: 'ค่าบ้าน',
                                        value: 0,
                                    },
                                    {
                                        label: 'ค่ารถ',
                                        value: 1,
                                    },
                                    {
                                        label: 'ค่าหมอ',
                                        value: 2,
                                    },
                                    {
                                        label: 'ค่าเดินทาง',
                                        value: 3,
                                    },
                                    {
                                        label: 'ค่าอาหาร',
                                        value: 4,
                                    },
                                ]}
                            />
                        </Form.Item>
                    </Col>
                    <Col className='gutter-row' span={3}>
                        <Form.Item style={styletext}>
                            ฝ่าย / แผนก :
                        </Form.Item>
                        <Form.Item style={styletext}>
                            กรอกจำนวนเงิน :
                        </Form.Item>

                    </Col>
                    <Col className='gutter-row' span={6}>
                        <Form.Item
                            name='mon'
                            id='mon'
                        >
                            {/*input Form ฝ่าย / แผนก */}
                            <Select />
                        </Form.Item>
                        <Form.Item
                            style={{ display: 'inline-block' }}
                            name='incomeout'
                            id='incomeout'
                        >
                            {/* input Form กรอกจำนวนเงิน*/}
                            <Input />
                        </Form.Item>
                        <span style={{ display: 'inline-block', lineHeight: '32px', marginLeft: '15px' }}>บาท</span>
                    </Col>
                </Row>
            </Form>
            <Divider></Divider>
        </>
    )
}
export default Income
