import React from 'react';
import style from '@/styles/home/suggestion.module.css';
import { Notifications } from '@material-ui/icons';


const HomeSuggestion = () => {

    const suggestion: string[] = [
        'Item A is less in stock. Suggest to add stock',
        'Item B is trending. Suggest to add stock',
        'Supplier C may save 1.5% of cost for item G',
        'Supplier D may save 8% of cost for item T',
    ]

    return (
        <>
            <h2>Suggestion</h2>
            {
                suggestion.map((s, index) => (
                    <div className={index % 2 == 0 ? style.suggestionBar : style.suggestionBarr} key={index}>
                        {s}
                    </div>
                ))
            }
        </>
    );
};

export default HomeSuggestion;