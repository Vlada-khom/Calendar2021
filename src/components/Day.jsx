import { Link } from "react-router-dom";
import {useContext} from 'react';
import {NotesContext} from '../tools/notesProvider';
import { getDayId } from "../tools/dateTools";

export const Day = ({day, year, month}) => {
    const notes = useContext(NotesContext);
    const today = new Date();
    
    const isToday = today.getFullYear() === Number(year) &&
    today.getMonth() === Number(month) &&
    today.getDate() === Number(day);

    let note = '';
    try {
        const date = getDayId(year, month, day);
        note = notes[date]; 
    } catch {}

    return(
        <div className="day" style={{ backgroundColor: isToday ? 'red' : 'transparent', 
        borderRadius: isToday ? '50%' : '0', border: note ? '2px solid blue' : 'none'}}>
        {
          Number.isInteger(Number(day)) ?
          <Link to={`/year/${year}/month/${Number(month + 1)}/day/${day}`} >
              {day}
          </Link> :
          <div className="day-week">{day}</div>
        } 
        </div>
    )
}