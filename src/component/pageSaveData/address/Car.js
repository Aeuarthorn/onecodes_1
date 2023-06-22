//ที่อยู่ตามบัตรประชาชน
import React, { useState } from 'react';
import '../address/body.css'
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import TextBox from '@mui/material/Box';
import { Container, Grid, MenuItem } from '@mui/material';
import districtData from '../data/District';
import province from '../data/Province';
import { Select, Space } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';

//importCar




const Brand = [
    'BENZ',
    'BMW',
    'FORD',
    'HONDA',
    'ISUZU',
    'MAZDA',
    'JEEP',
    'HINO',
    'KOBEL',
    'KUBOTA',
    'NISSAN',
    'MG',
    'SUZUKI',
];
const Models = {
    BENZ: ['BENZ3001', 'BENZ3001003', 'BENZ3002'],
    BMW: ['BMW30001', 'BMW3001'],
    FORD: ['Ford001', 'Ford002', 'Ford003', 'Ford004', 'Ford005', 'Ford006', 'Ford007', 'Ford008',
        'Ford009', 'Ford010', 'Ford011', 'Ford012', 'Ford013', 'Ford014', 'Ford015'],
    HONDA: ['Honda1001', 'Honda1002', 'Honda1003', 'Honda1004', 'Honda1005', 'Honda1006',
        'Honda1007', 'Honda1008', 'Honda1009', 'Honda1010', 'Honda1011'],
    ISUZU: ['Isuzu1001', 'Isuzu1002', 'Isuzu1003', 'Isuzu1004', 'Isuzu1005', 'Isuzu1006'],
    MAZDA: ['Mazda1001', 'Mazda1002', 'Mazda1003', 'Mazda1004', 'Mazda1005', 'Mazda1006'],
    JEEP: ['Jeep1001', 'Jeep1002', 'Jeep1003', 'Jeep1004', 'Jeep1005', 'Jeep1006'],
    HINO: ['Hino1001', 'Hino1002', 'Hino1003', 'Hino1004', 'Hino1005', 'Hino1006'],
    KOBEL: ['Kobel1001', 'Kobel1002', 'Kobel1003', 'Kobel1004', 'Kobel1005', 'Kobel1006'],
    KUBOTA: ['Kubota1001', 'Kubota1002', 'Kubota1003', 'Kubota1004', 'Kubota1005', 'Kubota1006'],
    NISSAN: ['Nissan1001', 'Nissan1002', 'Nissan1003', 'Nissan1004', 'Nissan1005', 'Nissan1006'],
    MG: ['Mg1001', 'Mg1002', 'Mg1003', 'Mg1004', 'Mg1005', 'Mg1006'],
    SUZUKI: ['Suzuki001', 'Suzuki002', 'Suzuki003', 'Suzuki004', 'Suzuki005', 'Suzuki006'],
};

function Cars() {
    const [branded, setBrands] = useState(Models[Brand[0]]);
    const [model, setModels] = useState(Models[Brand[0][0]]);
    const handleBrandChange = (value) => {
        setBrands(Models[value]);
        setModels(Models[value][0]);
    };
    const onModelChange = (value) => { 
        setModels(value);
    };

    return (
        <div className='text-center'>
           

            <Form.Item
                label="Username"
                name="username"
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

export default Cars
