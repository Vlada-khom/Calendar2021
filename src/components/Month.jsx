import React from "react";
import {Days} from './Days';
import './styles.css';
import{Link} from 'react-router-dom';

export const Month = function({year, month}) {
    const monthDate = new Date(year, month - 1);
    const monthName = monthDate.toLocaleString('en', { month: 'long' });

    return (
        <div className="month">
            <Link to={`/year/${Number(year)}/month/${Number(month)}`} style={{color:"black", textDecoration: 'none', textShadow: '1px 1px 0 black', fontWeight:'600' }}>
                <div>{monthName}</div>
            </Link>
                <Days year={Number(year)} month={month - 1}/>
        </div>

    )
}