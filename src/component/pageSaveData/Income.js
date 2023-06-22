import React, { useState } from 'react';
import { Form, Select, Input, Button, Space, DatePicker } from 'antd';
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

// const cash = [
//     {
//         label: 'เงินสด',
//         value: 'เงินสด',
//     },
//     {
//         label: 'บัญชีธนาคาร',
//         value: 'บัญชีธนาคาร',
//     },
// ]

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


    return (
        <React.Fragment>
            <div className='text-center text-black  mt-3 mb-3'>
                <h5><b>รายได้</b></h5>
            </div>
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
                <Form.Item
                    style={{ marginBottom: 0, }}
                >
                    <span
                        style={{ lineHeight: '32px', textAlign: 'center', marginRight: '10px' }}
                    >
                        เงินเดือน :
                    </span>
                    <Form.Item
                        style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(200px)', textAlign: 'center', marginRight: '10px' }}
                        name='saraly'
                        id='saraly'
                    >
                        {/* input Form เงินเดือน */}
                        <Input />
                    </Form.Item>
                    <span
                        style={{ lineHeight: '32px', textAlign: 'center', marginRight: '10px' }}
                    >
                        ค่าคอมมิชชั่น :
                    </span>
                    <Form.Item
                        style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(200px)', textAlign: 'center', marginRight: '10px' }}
                        name='commission'
                        id='commission'
                    >
                        {/* input Form คอมมิชชั่น */}
                        <Input />
                    </Form.Item><span style={{ marginRight: '10px' }}>บาท</span>

                    <Form.Item
                        form={form}
                        name='dynamic_form_complex'
                        initialValues={{ remember: true, }}
                        onFinish={onFinish}
                        autoComplete="off"
                        label="ค่าอื่นๆ"
                        rules={[{ required: true, message: 'Missing area', },]}
                        style={{
                            display: 'inline-block',
                            textAlign: 'center',
                            marginBottom: 2,
                        }}
                    >
                    </Form.Item>
                    {/* input Form ค่าใช้จ่ายอื่นๆ  */}
                    <Form.List
                        name="money"
                        id="money"
                    >
                        {(fields, { add, remove }) => (
                            <>
                                <span >
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
                <Form.Item
                    style={{ marginBottom: 0 }}
                >
                    <span style={{ marginRight: '10px' }}>
                        ช่องทางการรับเงิน :
                    </span>
                    <Form.Item
                        style={{ display: 'inline-block', lineHeight: '32px', marginRight: '10px' }}
                    >
                        {/* input Form ช่องทางการรับเงิน */}
                        <Select
                            name='receiving'
                            id='receiving'
                            defaultValue={0}
                            onChange={onChangeCash}
                            style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(150px)', textAlign: 'center' }}
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
                    <span
                        style={{ display: 'inline-block', lineHeight: '32px', textAlign: 'center' }}
                    >
                        {cashs === 0 ? 'กรอกจำนวนเงิน' : 'กรอกเลขบัญชี'}
                    </span>
                    <Form.Item style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(100px)', marginLeft: '12px' }}
                        name='receiving1'
                        id='receiving1'
                    >
                        {/* input Form ประเภทเงิน */}
                        <Input />
                    </Form.Item>
                </Form.Item>
                <Form.Item
                    style={{ marginBottom: 0 }}
                >
                    <span style={{ marginRight: '10px', lineHeight: '32px' }}>
                        รายได้จากต่างประเทศ :
                    </span>
                    <Form.Item
                        style={{ display: 'inline-block', lineHeight: '32px', marginRight: '10px' }}
                        name='foreivingincome'
                        id='foreivingincome'
                    >
                        {/* input Form รายได้จากต่างประเทศ */}
                        <Input />
                    </Form.Item>
                    <span style={{ marginRight: '30px', lineHeight: '32px' }}>
                        บาท
                    </span>
                </Form.Item>

                <Form.Item
                    rules={[{ required: true, message: 'Please input your CardID' }]}
                    style={{
                        marginBottom: 0,
                    }}
                >

                    <span style={{ marginLeft: '10px', lineHeight: '32px' }}>
                        อายุงานปัจจุบัน :
                    </span>
                    <Form.Item style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(100px)', marginLeft: '10px' }}
                        name='year'
                        id='year'
                    >
                        {/* input Form อายุงานปัจจุบัน ปี */}
                        <Input />
                    </Form.Item>
                    <span style={{ marginLeft: '10px', lineHeight: '32px', marginRight: '20px' }}>ปี</span>
                    <Form.Item style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(100px)', marginLeft: '10px' }}
                        name='month'
                        id='month'
                    >
                        {/* input Form อายุงานปัจจุบัน เดือน */}
                        <Input />
                    </Form.Item>
                    <span style={{ marginLeft: '10px', lineHeight: '32px', marginRight: '20px' }}>เดือน</span>
                    <span style={{ marginLeft: '10px', lineHeight: '32px' }}>
                        วันเริ่มทำงาน :
                    </span>
                    <Form.Item style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(200px)', marginLeft: '10px' }}
                        name='startwork'
                        id='startwork'
                    >
                        {/* input Form วันที่เริ่มทำงาน */}
                        <DatePicker />
                    </Form.Item>
                </Form.Item>
                <Form.Item
                    rules={[{ required: true, message: 'Please input your CardID' }]}
                    style={{ marginBottom: 0 }}
                >
                    <span style={{ marginRight: '10px' }}>
                        ตำแหน่ง :
                    </span>
                    <Form.Item
                        style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(200px)', marginRight: '20px' }}
                        name='position'
                        id='position'
                    >
                        {/* input Form ตำแหน่ง */}
                        <Input />
                    </Form.Item>
                    <span style={{ marginRight: '10px', lineHeight: '32px', marginLeft: '20px' }}>
                        ฝ่าย / แผนก :
                    </span>
                    <Form.Item
                        style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(200px)', marginRight: '20px' }}
                        name='department'
                        id='department'
                    >
                        {/* input Form ฝ่าย / แผนก */}
                        <Select />
                    </Form.Item>
                </Form.Item>
                <Form.Item
                    name='ภาระประจำเดือน'
                    rules={[{ required: true, message: 'Please input your CardID' }]}
                    style={{
                        marginBottom: 0,
                    }}
                >
                    <span style={{ marginRight: '10px' }}>
                        ภาระประจำเดือน :
                    </span>
                    {/* input Form ภาระประจำเดือน */}
                    <Select
                        name='monthlyburden'
                        id='monthlyburden'
                        defaultValue={0}
                        onChange={onChangeCashHome}
                        style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(200px)', textAlign: 'center', marginRight: '20px' }}
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

                    <span
                        style={{ display: 'inline-block', lineHeight: '32px', textAlign: 'center', marginLeft: '12px' }}
                    >
                        {cashhome === 0 && ('กรอกจำนวนเงิน :')}
                        {cashhome === 1 && ('กรอกจำนวนเงิน :')}
                        {cashhome === 2 && ('กรอกจำนวนเงิน :')}
                        {cashhome === 3 && ('กรอกจำนวนเงิน :')}
                        {cashhome === 4 && ('กรอกจำนวนเงิน :')}
                        {cashhome === 5 && ('กรอกจำนวนเงิน :')}
                    </span>
                    <Form.Item style={{ display: 'inline-block', lineHeight: '32px', width: 'calc(100px)', marginLeft: '10px' }}
                        name='money'
                        id='money'
                    >
                        {/* input Form ภาระประจำเดือน */}
                        <Input />
                    </Form.Item>
                    <span value={0} style={{ marginLeft: '10px' }}>บาท</span>
                </Form.Item>
            </Form>
        </React.Fragment>
    )
}
export default Income
