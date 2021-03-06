import React, { Fragment } from 'react';

import useCalendar from '../hooks/useCalendar';


const Calendar = () => {
  const { calendarRows, selectedDate, todayFormatted, daysShort, monthNames, getNextMonth, getPrevMonth } = useCalendar();

  const dateClickHandler = date => {
    console.log(date);
  }

  return(
    <Fragment>
      <div class='box'>        
      <p>Selecionar mês:{`${monthNames[selectedDate.getMonth()]} - ${selectedDate.getFullYear()}`}</p>
      
      </div>
      <table className="table">        
        <thead>
          <tr>
            {daysShort.map(day => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {
            Object.values(calendarRows).map(cols => {
              return <tr key={cols[0].date}>
                {cols.map(col => (
                  col.date === todayFormatted
                    ? <td key={col.date} className={`${col.classes} today`} onClick={() => dateClickHandler(col.date)}>
                      {col.value}
                    </td>
                    : <td key={col.date} className={col.classes} onClick={() => dateClickHandler(col.date)}>{col.value}</td>
                ))}
              </tr>
            })
          }
        </tbody>
      </table>

      <button className="button" onClick={getPrevMonth}>Anterior</button>
      <button className="button" onClick={getNextMonth}>Próximo</button>
    </Fragment>
  );
  
}

export default Calendar;