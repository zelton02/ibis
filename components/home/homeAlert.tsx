import React from 'react';
import style from '@/styles/home/suggestion.module.css';
import { Notifications } from '@material-ui/icons';


const HomeAlert = () => {

    const alert: string[] = [
        'Item A left 25 in inventory, reaches lower threshold (30). Add stock asap.',
        'Item B left 10 in inventory, reaches lower threshold (40). Add stock asap.',
        '20 Item C expiried in 4 days ( 21 June 2023 ). Please take note.',
        '250 Item C expiried in 12 days ( 29 June 2023 ). Please take note.',
        
    ]

    return (
        <>
            <h2>Alert</h2>
            <div className={style.table}>
                {
                    alert.map((s, index) => (
                        <div className={index % 2 == 0 ? style.suggestionBar : style.suggestionBarr} key={index}>
                            {s}
                        </div>
                    ))
                }
            </div>

        </>
    );
};

export default HomeAlert;