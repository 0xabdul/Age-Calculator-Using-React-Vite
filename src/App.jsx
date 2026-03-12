import { useState } from 'react'
import './App.css'

function App() {
  const [day,setday]=useState("");
  const [month,setmonth]=useState("");
  const [year,setyear]=useState("");
  const [ageYear,setageyear]=useState("--");
  const [ageDay,setageday]=useState("--");
  const [ageMonth,setagemonth]=useState("--");
  const [err,seterr]=useState(false);
  const click=()=>{
    const today = new Date();
    const birthday = new Date(year,month-1,day);
    let years = today.getFullYear() - birthday.getFullYear();
    let months = today.getMonth() - birthday.getMonth();
    let days = today.getDate()- birthday.getDate();
    if (days < 0){
      months--;
      days +=30;
    }
    if (months < 0){
      years--;
      months +=12;
    }
    setageyear(years);
    setagemonth(months);
    setageday(days);

    if (day === "" || month === "" || year === ""){
      seterr(true);
      setageyear("--");
      setagemonth("--");
      setageday('--');
    }
    else{
      seterr(false);
      setageyear(years);
      setagemonth(months);
      setageday(days)
    }
  }

  return (
   <div>
    <div className='container'>
      <div className='first-cont'>
      <div className='day-name'>
        <p className='col-change-day' style={{color: err ? "hsl(0, 100%, 67%)" : "hsl(0, 1%, 44%)"}}>DAY</p>
        <input type='number' alt="day-number" className='dayinput' placeholder='DD' onChange={(e)=>setday(e.target.value)} style={{border: err ? "0.1rem solid hsl(0, 100%, 67%)" : "0.1rem solid hsl(0, 0%, 86%)"}}></input>
       {err &&( 
       <p className='errday' style={{display: err ? "block" : "none"}}>What's about day</p>
       )}
      </div>
      <div className='month-name'>
        <p className='col-change-month' style={{color: err ? "hsl(0, 100%, 67%)" : "hsl(0, 1%, 44%)"}}>MONTH</p>
        <input type='number' alt="month-number" className='monthinput' placeholder='MM' onChange={(e)=>setmonth(e.target.value)} style={{border: err ? "0.1rem solid hsl(0, 100%, 67%)" : "0.1rem solid hsl(0, 0%, 86%)"}}></input>
        {err &&(
        <p className='errmonth'  style={{display: err ? "block" : "none"}}>What's about month</p>
        )}
      </div>
      <div className='year-name'>
        <p className='col-change-year' style={{color: err ? "hsl(0, 100%, 67%)" : "hsl(0, 1%, 44%)"}}>YEAR</p>
        <input type='number' alt='year-number' className='yearinput' placeholder='YYYY' onChange={(e)=>setyear(e.target.value)} style={{border: err ? "0.1rem solid hsl(0, 100%, 67%)" : "0.1rem solid hsl(0, 0%, 86%)"}}></input>
        {err &&(
        <p className='erryear'  style={{display: err ? "block" : "none"}}>What's about year</p>
        )}
      </div>
      </div>
      <div className='final'>
      <div className='sec-flex'>
      <div className='line' style={{paddingTop: err ? "0rem" : "1rem"}}>
        <p className='stline'></p>
      </div>
      <div className='arrow-img'>
        <img src='/icon-arrow.svg' alt='arrow-img' className='arrow' onClick={click}></img>
      </div>
      </div>
      <div className='line-height'>
       <div className='year'>
        <p className='dataone'>{ageYear}</p>
        <p>years</p>
      </div>
      <div className='month'>
        <p className='datatwo'>{ageMonth}</p>
        <p>months</p>
      </div>
      <div className='day'>
        <p className='datathree'>{ageDay}</p>
        <p>days</p>
      </div>
      </div>
      </div>
    </div>
   </div>
  )
}

export default App
