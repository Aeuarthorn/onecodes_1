import * as React from 'react';
import { Button, message, Steps, } from 'antd';
import { useState } from 'react';
import './styles.css';

//import page 
import PersonalInf from '../pageSaveData/PersonalInf';
import Address from '../pageSaveData/Address';
import AddressCur from '../pageSaveData/AddressCur';
// import SendDocument from '../pageSaveData/SendDocument';
import Contract from '../pageSaveData/Contract';
import CareerIncome from '../pageSaveData/CareerIncom';
import Income from '../pageSaveData/Income';
import Product from '../pageSaveData/Product';
import Drescription from '../pageSaveData/Drescription';
import { Container } from 'react-bootstrap';

const steps = [
    {
        id: 0,
        title: 'ข้อมูลส่วนตัว',
        contant: <PersonalInf />,
    },
    {
        id: 1,
        title: 'ที่อยู่ตามทะเบียนบ้าน',
        contant: <Address />,
    },
    {
        id: 2,
        title: 'ที่อยู่ปัจจุบัน',
        contant: <AddressCur />,
    },
    // {
    //     id: 3,
    //     title: 'ที่ส่งเอกสาร',
    //     contant: <SendDocument />,
    // },
    {
        id: 4,
        title: 'ช่องทางการติดต่อ',
        contant: <Contract />,
    },
    {
        id: 5,
        title: 'อาชีพ',
        contant: <CareerIncome />,
    },
    {
        id: 6,
        title: 'รายได้',
        contant: <Income />,
    },
    {
        id: 7,
        title: 'สินค้า',
        contant: <Product />,
    },
    {
        id: 8,
        title: 'รายละเอียด',
        contant: <Drescription />,
    },
];



const BodyMainSaveData = () => {
    // const theme = {
    //     token: {
    //         colorFillAlter: '#d9d9d9',
    //         colorTextTertiary: '#e6f4ff',
    //         borderRadiusLG: '#002c8c',
    //         colorBorder: '#120338',
    //     }
    // }
    const [current, setCurrent] = useState(0);
    const next = () => {
        setCurrent(current + 1);
    };
    const prev = () => {
        setCurrent(current - 1);
    };
    const onChange = (value) => {
        console.log('onChange:', value);
        setCurrent(value);
    };
    const items = steps.map((item) => ({
        key: item.id,
        title: item.title,
        contant: item.contant,
    }));
    // const contentStyle = {
    //     lineHeight: '260px',
    //     textAlign: 'center',
    //     color: theme.token.colorTextTertiary,
    //     backgroundColor: theme.token.colorFillAlter,
    //     borderRadius: theme.token.borderRadiusLG,
    //     // border: `2px dashed ${theme.token.colorBorder}`,
    //     marginTop: 16,
    // };

    return (
        <>
            <h1 className='text-center text-black mt-3'>บันทึกประวัติลูกค้า</h1>
            <Container>
                {/* Stepper */}
                <Steps
                    current={current}
                    items={items}
                    type="navigation"
                    size="default"
                    onChange={onChange}
                    style={{
                        margin: 5,
                    }}
                />
                {/* body */}
                <div style={{ textAlign: 'center' }}
                >
                    {steps[current].contant}
                </div>
            </Container>
            {/* ปุ่มกด */}
            <div
                style={{
                    marginTop: 24,
                    marginBottom: 15,
                }}
                className='text-center'
            >
                {current > 0 && (
                    <Button
                        style={{
                            margin: '8px',
                            background: '#d9d9d9',
                            // fontSize: '30px'
                        }}
                        onClick={() => prev()}
                    >
                        ย้อนกลับ
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                        บันทึก
                    </Button>
                )}

                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}
                    >
                        ต่อไป
                    </Button>
                )}
            </div>
        </>
    )
}
<script src="https://cdn.jsdelivr.net/npm/@coreui/coreui@4.2.0/dist/js/coreui.bundle.min.js" integrity="sha384-n0qOYeB4ohUPebL1M9qb/hfYkTp4lvnZM6U6phkRofqsMzK29IdkBJPegsyfj/r4" crossorigin="anonymous"></script>

export default BodyMainSaveData
