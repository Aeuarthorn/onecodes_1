import * as React from 'react';
import { Container, Grid, MenuItem, Select } from '@mui/material';
import AddressID from './address/AddressID';
import { useState } from 'react';
import AddressCurrent from './address/AddressCurrent';
import AddressWork from './address/AddressWork';
import AddressOther from './address/AddressOther';

function SendDocument() {
    const [addID, setAddressID] = useState(true);
    const [addCur, setAddressCur] = useState(false);
    const [addWork, setAddressWork] = useState(false);
    const [addOther, setAddressOther] = useState(false);
    const addressId = () => {
        setAddressID(true);
        setAddressCur(false);
        setAddressWork(false);
        setAddressOther(false);
    };
    const addressCur = () => {
        setAddressID(false);
        setAddressCur(true);
        setAddressWork(false);
        setAddressOther(false);
    };
    const addressWork = () => {
        setAddressID(false);
        setAddressCur(false);
        setAddressWork(true);
        setAddressOther(false);
    };
    const addressOther = () => {
        setAddressID(false);
        setAddressCur(false);
        setAddressWork(false);
        setAddressOther(true);
    };

    return (
        <div className='text-center'>
            <Grid container spacing={2} className='mt-2 pt-2' >
                <Grid xs={12}>
                    <label> เลือก</label>
                    <Select
                        sx={{ m: 1, width: 300 }}
                        select
                    >
                        <MenuItem
                            value={'ตามบัตรประชาชน'}
                            variant="contained"
                            sx={{ width: 300 }}
                            onClick={addressId}
                        >
                            ตามบัตรประชาชน
                        </MenuItem>
                        <MenuItem
                            value={'ตามทะเบียนบ้าน'}
                            variant="contained"
                            sx={{ width: 300 }}
                            onClick={addressCur}>
                            ตามทะเบียนบ้าน
                        </MenuItem>
                        <MenuItem
                            value={'ตามสถานที่ทำงาน'}
                            variant="contained"
                            sx={{ width: 300 }}
                            onClick={addressWork}
                        >
                            ตามสถานที่ทำงาน
                        </MenuItem>
                        <MenuItem
                            value={'อื่นๆ'}
                            variant="contained"
                            sx={{ width: 300 }}
                            onClick={addressOther}>
                            อื่น ๆ
                        </MenuItem>
                    </Select>
                </Grid>
                <Container>
                    {addID && (<AddressID />)}
                    {addCur && (<AddressCurrent />)}
                    {addWork && (<AddressWork />)}
                    {addOther && (<AddressOther />)}
                </Container>
            </Grid>
        </div>
    )
}
export default SendDocument
