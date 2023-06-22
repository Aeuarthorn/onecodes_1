import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleIcon from '@mui/icons-material/People';
import { Link as RouterLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import SearchIcon from '@mui/icons-material/Search';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';


export const mainListItems = (
    <React.Fragment>
        <ListItemButton to='/home' component={RouterLink} >
            <ListItemIcon>
                <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="หน้าหลัก" />
        </ListItemButton>
        <ListItemButton to='/body_main_savedata' component={RouterLink}>
            <ListItemIcon>
                <BookmarkAddedIcon />
            </ListItemIcon>
            <ListItemText primary="บันทึกประวัติลูกค้า" />
        </ListItemButton>
        <ListItemButton to='/body_main_savepromise_money' component={RouterLink}>
            <ListItemIcon>
                <BookmarkAddedIcon />
            </ListItemIcon>
            <ListItemText primary="บันทึกทำสัญญาเงินกู้" />
        </ListItemButton>
        <ListItemButton to='/body_main_search_data_backlist' component={RouterLink}>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="สอบถามข้อมูล Backlist" />
        </ListItemButton>
        <ListItemButton to='/body_main_history' component={RouterLink}>
            <ListItemIcon>
                <SearchIcon />
            </ListItemIcon>
            <ListItemText primary="สอบถามข้อมูลประวัติลูกค้า" />
        </ListItemButton>
        <ListItemButton to='/body_main_data_debtor' component={RouterLink}>
            <ListItemIcon>
                <SearchIcon />
            </ListItemIcon>
            <ListItemText primary="สอบถามข้อมูลลูกหนี้เงินกู้" />
        </ListItemButton>
        <ListItemButton to='/body_main_savedate' component={RouterLink}>
            <ListItemIcon>
                <BookmarkAddedIcon />
            </ListItemIcon>
            <ListItemText primary="บันทึกชำระประจำวัน" />
        </ListItemButton>
        <ListItemButton to='/body_main_print_slip' component={RouterLink}>
            <ListItemIcon>
                <LocalPrintshopIcon />
            </ListItemIcon>
            <ListItemText primary="พิมพ์ใบเสร็จ" />
        </ListItemButton>
    </React.Fragment>
);

// export const secondaryListItems = (
//     <React.Fragment>
//         <ListSubheader component="div" inset>
//             Saved reports
//         </ListSubheader>
//         <ListItemButton>
//             <ListItemIcon>
//                 <AssignmentIcon />
//             </ListItemIcon>
//             <ListItemText primary="Current month" />
//         </ListItemButton>
//         <ListItemButton>
//             <ListItemIcon>
//                 <AssignmentIcon />
//             </ListItemIcon>
//             <ListItemText primary="Last quarter" />
//         </ListItemButton>
//         <ListItemButton>
//             <ListItemIcon>
//                 <AssignmentIcon />
//             </ListItemIcon>
//             <ListItemText primary="Year-end sale" />
//         </ListItemButton>
//     </React.Fragment>
// );