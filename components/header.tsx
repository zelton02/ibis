import React from 'react';
import style from '@/styles/components/header.module.css';
import { Notifications } from '@material-ui/icons';


const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.title}>iBIS</div>
            <div className={style.noti}>
                <Notifications></Notifications>
            </div>
        </div>
    );
};

export default Header;