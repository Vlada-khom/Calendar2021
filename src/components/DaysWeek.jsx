import './styles.css';
export const DaysWeek = () => {
    const daysWeek = ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun'];
    
    
    return (
        <div className="daysWeek">
            {daysWeek.map(name => 
                <div className="day-week" key={name}>{name}</div>
                )}
        </div>);
}