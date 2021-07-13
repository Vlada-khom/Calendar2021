
import {Day} from './Day';


export function Days ({year, month}){
  const monthDate = new Date(year, month);
    
    const days = Array(31).fill().map((x, index) => ({
      label: String(index + 1),
    }));
    
    const daysOfWeek = [
      { label: 'Mon' },
      { label: 'Tue' },
      { label: 'Wed' },
      { label: 'Thu' },
      { label: 'Fri' },
      { label: 'Sat' },
      { label: 'Sun' },
    ];
    
    for (let i = monthDate.getDay() + 5; i >= 0; i = i - 1) {
      daysOfWeek.push({ label: '' });
    }
    
    days.unshift(...daysOfWeek);
    

     

    return (
      <>
        <div className="days-list">
          {days.map((day, index) =>(
          <Day key={index} year={year} month={month} day={day.label} />))}
        </div>
      </>
     
    );
  }