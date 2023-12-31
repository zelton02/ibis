import React from 'react';
import style from '@/styles/home/suggestion.module.css';
import { Notifications } from '@material-ui/icons';


const HomeSuggestion = () => {

    const suggestion: string[] = [
        'Item B is trending in F&B. Suggest to add stock',
        '40 Item E sold in 2 days. 85 left i inventory. Will sold out in 2 days. Suggest to add stock.',
        'Supplier C may save 1.5% of cost for item G',
        'Supplier D may save 8% of cost for item T',
    ]

    return (
        <>
            <h2>Suggestion</h2>
            <div className={style.table}>
                {
                    suggestion.map((s, index) => (
                        <div className={index % 2 == 0 ? style.suggestionBar : style.suggestionBarr} key={index}>
                            {s}
                        </div>
                    ))
                }
            </div>

        </>
    );
};

export default HomeSuggestion;