//ที่ดิน
import React, { useState } from 'react';
import '../address/body.css'
import { Container, Grid, MenuItem, Select } from '@mui/material';
import { Form, Input, Space } from 'antd';

const Lands = [
    'ที่บ้าน',
    'ไร่นา',
    'ห้องแถว',
    'หอพัก',

];
const SizeLand = {
    size1: ['10ak', '11ak', '12ak'],
    size2: ['100ak', '200ak', '300ak'],
};

function Landed() {
    const [landed, setLands] = useState(SizeLand[Lands[0]]);
    const [size, setSizes] = useState(SizeLand[Lands[0][0]]);
    const handleLandChange = (value) => {
        setLands(SizeLand[value]);
        setSizes(SizeLand[value][0]);
    };
    const onChangeSize = (value) => {
        setSizes(value);
    };

    return (
        <div className='text-center'>
            <Space span={24}
                style={{
                    marginBottom: '10px'
                }}
            >
                <label>โฉนด</label>
                <Select
                    defaultValue={Lands[0]}
                    style={{
                        width: 300,
                    }}
                    onChange={handleLandChange}
                    options={Lands.map((land1) => ({
                        label: land1,
                        value: land1,
                    }))}
                />
                <label>ขนาดพื้นที่</label>
                <Select
                    style={{
                        width: 300,
                    }}
                    value={size}
                    onChange={onChangeSize}
                    options={landed.map((sized) => ({
                        label: sized,
                        value: sized,
                    }))}
                />
            </Space>
            <Form.Item
                label="ที่ดิน"
                name="ที่ดิน"
                style={{
                    marginTop: '10px',
                    maxWidth: 400,
                }}
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="โฉนด"
                name="โฉนด"
                style={{
                    marginTop: '10px',
                    maxWidth: 400,
                }}
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

        </div >
    )
}

export default Landed
