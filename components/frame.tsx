import React from 'react';
import style from '@/styles/components/sidebar.module.css';
import { Notifications } from '@material-ui/icons';
import Link from 'next/link';
import Header from './header';
import SideBar from './sidebar';

interface FrameProp {
    current: String;
}

const Frame: React.FC<FrameProp> = ({ current }) => {


    return (
        <div>
            <Header></Header>
            <SideBar current={current}></SideBar>
        </div>
    );
};

export default Frame;

