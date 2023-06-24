import * as React from 'react'
import { Col, Form, Input, Row, Select } from 'antd';
import province from '../data/Province';
import { Option } from 'antd/es/mentions';



function CloseFinances() {
    const onChange = (value) => {
        console.log(`selected ${value}`);
    };
    const onSearch = (value) => {
        console.log('search:', value);
    };
    const styletext = {
        textAlign: 'right'
    };


    return (
        <>
            <Form
                name='Hold_book'
                initialValues={{
                    remember: true,
                }}
            >
                <div style={{ marginBottom: '10px', textAlign: 'left' }}>
                    <b>รายละเอียดขอกู้เงินหน่อย</b>
                </div>
                <Row
                    align='left'
                    justify='left'
                    gutter={32}
                >

                    <Col className='gutter-row' span={4}>
                        <Form.Item style={styletext}>
                            ชื่อ - นามสกุล :
                        </Form.Item>
                        <Form.Item style={styletext}>
                            ยอดกู้สุทธิ :
                        </Form.Item>
                        <Form.Item style={styletext}>
                            ผู้ตรวจสอบ :
                        </Form.Item>
                    </Col>
                    <Col className='gutter-row' span={4}>
                        <Form.Item
                            name='name'
                            id='name'
                        >
                            {/* input Form  ชื่อ - นามสกุล*/}
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name='loanamount'
                            id='loanamount'
                        >
                            {/* input Form  ยอดกู้สุทธิ*/}
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name='inspector'
                            id='inspector'
                        >
                            {/* input Form  ผู้ตรวจสอบ*/}
                            <Select />
                        </Form.Item>
                    </Col>
                    <Col className='gutter-row' span={4}>
                        <Form.Item style={styletext}>
                            ยอดที่ต้องการจัด :
                        </Form.Item>
                        <Form.Item style={styletext}>
                            จำนวนผ่อน :
                        </Form.Item>
                        <Form.Item style={styletext}>
                            พนักงานขาย :
                        </Form.Item>
                    </Col>
                    <Col className='gutter-row' span={3}>
                        <Form.Item
                            name='top_notch'
                            id='top_notch'
                        >
                            {/* input Form  ยอดที่ต้องการจัด*/}
                            <Select />
                        </Form.Item>
                        <Form.Item
                            name='installment_amount'
                            id='installment_amount'
                        >
                            {/* input Form  จำนวนผ่อน*/}
                            <Select />
                        </Form.Item>
                        <Form.Item
                            name='salesperson'
                            id='salesperson'
                        >
                            {/* input Form  พนักงานขาย*/}
                            <Select />
                        </Form.Item>
                    </Col>
                    <Col className='gutter-row' span={4}>
                        <Form.Item style={styletext}>
                            เรทรถ :
                        </Form.Item>
                        <Form.Item style={styletext}>
                            ดอกเบี้ย :
                        </Form.Item>
                        <Form.Item style={styletext}>
                            ดอกเบี้ยรวม :
                        </Form.Item>
                        <Form.Item style={styletext}>
                            ผ่อนรวมดอกเบี้ย :
                        </Form.Item>
                    </Col>
                    <Col className='gutter-row' span={3}>
                        <Form.Item
                            name='late'
                            id='late'
                        >
                            {/* input Form  เรทรถ*/}
                            <Select />
                        </Form.Item>
                        <Form.Item
                            name='interest'
                            id='interest'
                        >
                            {/* input Form  ดอกเบี้ย*/}
                            <Select />
                        </Form.Item>
                        <Form.Item
                            name='sum_interest'
                            id='sum_interest'
                        >
                            {/* input Form  ดอกเบี้ยรวม*/}
                            <Select />
                        </Form.Item>
                        <Form.Item
                            name='interest_sum'
                            id='interest_sum'
                        >
                            {/* input Form  ผ่อนดอกเบี้ยรวม*/}
                            <Select />
                        </Form.Item>
                    </Col>
                </Row>
                <div style={{ marginBottom: '10px', textAlign: 'left' }}>
                    <b>รายละเอียดไฟแนนซ์เดิม</b>
                </div>
                <Row
                    align='left'
                    justify='left'
                    gutter={32}
                >

                    <Col className='gutter-row' span={4}>
                        <Form.Item style={styletext}>
                            ยอดที่ต้องการ :
                        </Form.Item>
                        <Form.Item style={styletext}>
                            ค้างกี่งวด :
                        </Form.Item>

                    </Col>
                    <Col className='gutter-row' span={4}>
                        <Row
                            align='left'
                            justify='left'
                            gutter={32}
                        >
                            <Col className='gutter-row' span={19}>
                                <Form.Item
                                    style={{ display: 'inline-block', }}
                                    name='desired_balance'
                                    id='desired_balance'
                                >
                                    {/* input Form  ยอดที่ต้องการ*/}
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    style={{ display: 'inline-block', }}
                                    name='many_installments'
                                    id='many_installments'
                                >
                                    {/* input Form  ค้างกี่งวด*/}
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col className='gutter-row' span={5}>
                                <Form.Item>
                                    บาท
                                </Form.Item>
                                <Form.Item>
                                    บาท
                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>
                    <Col className='gutter-row' span={2}>

                        <Form.Item style={styletext}>
                            กี่งวด :
                        </Form.Item>
                        <Form.Item style={styletext}>
                            ค่างวด :
                        </Form.Item>
                    </Col>
                    <Col className='gutter-row' span={4}>
                        <Row
                            align='left'
                            justify='left'
                            gutter={32}
                        >
                            <Col className='gutter-row' span={19}>
                                <Form.Item
                                    style={{ display: 'inline-block', }}
                                    name='number_installments'
                                    id='number_installments'
                                >
                                    {/* input Form  กี่งวด*/}
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    style={{ display: 'inline-block', }}
                                    name='installments'
                                    id='installments'
                                >
                                    {/* input Form  ค้างกี่งวด*/}
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col className='gutter-row' span={5}>
                                <Form.Item>
                                    งวด
                                </Form.Item>
                                <Form.Item>
                                    บาท
                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>
                    <Col className='gutter-row' span={4}>
                        <Form.Item style={styletext}>
                            ยอดปิดไฟแนนซ์ :
                        </Form.Item>
                        <Form.Item style={styletext}>
                            ยอดคงเหลือ :
                        </Form.Item>
                    </Col>
                    <Col className='gutter-row' span={5}>
                        <Row
                            align='left'
                            justify='left'
                            gutter={32}
                        >
                            <Col className='gutter-row' span={19}>
                                <Form.Item
                                    style={{ display: 'inline-block', }}
                                    name='finance_closeing'
                                    id='finance_closeing'
                                >
                                    {/* input Form  กี่งวด*/}
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    style={{ display: 'inline-block', }}
                                    name='balance'
                                    id='balance'
                                >
                                    {/* input Form  ค้างกี่งวด*/}
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col className='gutter-row' span={4}>
                                <Form.Item>
                                    งวด
                                </Form.Item>
                                <Form.Item>
                                    บาท
                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div style={{ marginBottom: '10px', textAlign: 'left' }}>
                    <b>รายละเอียดรถ</b>
                </div>
                <Row
                    align='left'
                    justify='left'
                    gutter={32}
                >
                    <Col className='gutter-row' span={4}>
                        <Form.Item style={styletext}>
                            ยี่ห้อ :
                        </Form.Item>
                        <Form.Item style={styletext}>
                            เลขตัวถัง :
                        </Form.Item>
                        <Form.Item style={styletext}>
                            กลุ่มสินค้า :
                        </Form.Item>
                    </Col>
                    <Col className='gutter-row' span={4}>
                        <Form.Item
                            name='brand'
                            id='brand'
                        >
                            {/* input Form  ยี่ห้อ*/}
                            <Select />
                        </Form.Item>
                        <Form.Item
                            name='classic_number'
                            id='classic_number'
                        >
                            {/* input Form  เลขตัวถัง*/}
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name='product_group'
                            id='product_group'
                        >
                            {/* input Form  กลุ่มสินค้า*/}
                            <Select />
                        </Form.Item>
                    </Col>
                    <Col className='gutter-row' span={3}>
                        <Form.Item style={styletext}>
                            รุ่นสินค้า :
                        </Form.Item>
                        <Form.Item style={styletext}>
                            เลขเครื่อง :
                        </Form.Item>
                        <Form.Item style={styletext}>
                            รุ่นปี :
                        </Form.Item>
                    </Col>
                    <Col className='gutter-row' span={4}>
                        <Form.Item
                            name='model_product'
                            id='model_product'
                        >
                            {/* input Form  รุ่นสินค้า*/}
                            <Select />
                        </Form.Item>
                        <Form.Item
                            name='key_number'
                            id='key_number'
                        >
                            {/* input Form  เลขเครื่อง*/}
                            <Select />
                        </Form.Item>
                        <Form.Item
                            name='model_year'
                            id='model_year'
                        >
                            {/* input Form  รุ่นปี*/}
                            <Select />
                        </Form.Item>
                    </Col>
                    <Col className='gutter-row' span={3}>
                        <Form.Item style={styletext}>
                            สี :
                        </Form.Item>
                        <Form.Item style={styletext}>
                            เลขทะเบียน :
                        </Form.Item>
                        <Form.Item style={styletext}>
                            จังหวัด :
                        </Form.Item>
                    </Col>
                    <Col className='gutter-row' span={4}>
                        <Form.Item
                            name='color'
                            id='color'
                        >
                            {/* input Form  สี*/}
                            <Select />
                        </Form.Item>
                        <Form.Item
                            name='registration_number'
                            id='registration_number'
                        >
                            {/* input Form  เลขทะเบียน*/}
                            <Select />
                        </Form.Item>
                        <Form.Item
                            name='province'
                            id='province'
                        >
                            {/* input Form  จังหวัด*/}
                            <Select
                                showSearch
                                placeholder="Select a province"
                                optionFilterProp="children"
                                onChange={onChange}
                                onSearch={onSearch}
                                filterOption={(input, option) =>
                                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                }
                            >
                                {province.map((item) => (
                                    <Option key={item.province}>
                                        {item.value}
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default CloseFinances
