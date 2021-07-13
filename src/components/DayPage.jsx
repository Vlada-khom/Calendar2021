import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { storageManager } from "../module/storageManager";
import { getDayId } from "../tools/dateTools";
import {NotesContext} from '../tools/notesProvider';

export const DayPage =(props) => {
    const notes = useContext(NotesContext);
    const date = new Date(props.year, props.month - 1, props.day);
    const note = notes[getDayId(props.year, props.month - 1, props.day)];

    const[memo, setMemo] = useState(note);
    
    const dateLabel = date.toLocaleDateString();
    
    const handleChangeNote = ({target: {value} }) => {
        setMemo(value);
    }

    const handleSaveClick = () => {
        const dateId = getDayId(props.year, props.month - 1, props.day);
        storageManager.updateNote(dateId, memo);
        console.log('save');
    }
    return (
        <div style={{textAlign: 'center'}}>
            <Link to="/" style={{textDecoration: 'none', color: 'white', border: '1px solid black',
             backgroundColor: 'rgb(107, 107, 214)', boxShadow: '1px 1px 1px black', 
             padding: '1px 3px'}}>Back</Link>
            <div>{dateLabel}</div>

            <textarea onChange={handleChangeNote} value={memo}></textarea>
            <button onClick={handleSaveClick}>Save</button>
        </div>
    )
}