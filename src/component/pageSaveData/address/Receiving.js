//เงินสด
import * as React from 'react';
import '../address/body.css';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { Container, Grid, MenuItem } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import monthlyburden from '../data/MonthlyBurden';

const TextBox = styled(TextField)({
    width: 320,
})
function Receiving() {

    return (
        <div className='text-center'>
            <Grid container spacing={3} className='p-1 mt-2'>
                <Container>
                    <TextBox className='p-1 mt-2 '
                        id="outlined-basic"
                        label="กรอกจำนวนเงิน"
                        variant="outlined"
                    /><label className='p-1 mt-4'>บาท</label>
                    <TextBox className='p-1 mt-2 '
                        id="outlined-basic"
                        label="รายได้จากต่างประเทศ"
                        variant="outlined"
                    /><label className='p-1 mt-4'>บาท</label><p />
                </Container>
                <Container>
                    <Grid> <label><b>อายุงานปัจจุบัน</b></label></Grid>

                    <TextBox className='p-1 mt-2 '
                        id="outlined-basic"
                        label="ปี"
                        variant="outlined"
                    /><label className='p-1 mt-4'>ปี</label>
                    <TextBox className='p-1 mt-2 '
                        id="outlined-basic"
                        label="เดือน"
                        variant="outlined"
                    /><label className='p-1 mt-4'>เดือน</label><p />
                    <Grid xs={12}>
                        <label className='p-1 mt-4 '><b>วันที่เริ่มทำงาน</b></label>
                        <LocalizationProvider dateAdapter={AdapterDayjs} >
                            <DatePicker label=' วัน / เดือน / ปี' className='p-1 mt-2' />
                        </LocalizationProvider>

                        <TextBox className='p-1 mt-2 '
                            id="outlined-basic"
                            label="ตำแหน่ง"
                            variant="outlined"
                        />
                        <TextBox className='p-1 mt-2 '
                            id="outlined-basic"
                            label="ฝ่าย / แผนก"
                            variant="outlined"
                        />
                        < TextBox className='p-1 mt-2'
                            id="outlined-basic"
                            label="ภาระประจำเดือน"
                            variant="outlined"
                            select
                            sx={{ maxHeight: '400px' }}
                        >
                            {monthlyburden.map((item) => (
                                <MenuItem value={item.monthlyburden}  >
                                    {item.monthlyburden}
                                </MenuItem>
                            ))}
                        </TextBox>
                        <TextBox className='p-1 mt-2 '
                            id="outlined-basic"
                            label="กรอก"
                            variant="outlined"
                        /><label className='p-1 mt-4'>บาท</label><p />
                    </Grid>

                </Container>
            </Grid>

        </div >
    )
}

export default Receiving
