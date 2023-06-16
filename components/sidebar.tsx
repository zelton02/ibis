import React from 'react';
import style from '@/styles/components/sidebar.module.css';
import { Notifications } from '@material-ui/icons';
import Link from 'next/link';
import { naviPage } from 'model/navi';

interface FrameProp {
    current: String;
}

const SideBar: React.FC<FrameProp> = ({ current }) => {

    const title: string[] = [
        'Home',
        'Items',
        'Supplier',
    ]

    return (
        <div className={style.sideBar}>
            <div className={style.sideButton}>
                {
                    title.map((e, index) => (
                        <SideBarButton href={naviPage[index]} title={e} selected={current == naviPage[index]} key={index}></SideBarButton>
                    ))
                }
            </div>
            <div className={style.profile}>
                <div className={style.pic}></div>
                <div className={style.name}>Ah Beng</div>
            </div>


        </div>
    );
};

export default SideBar;

interface SideBarButtonProp {
    href: string,
    title: string,
    selected: boolean,
}

const SideBarButton: React.FC<SideBarButtonProp> = ({ href, title, selected }) => {
    return (
        <Link href={href} className={style.sideBarButton}>
            <div className={selected ? style.selected : style.title}>{title}</div>

        </Link>
    );
};