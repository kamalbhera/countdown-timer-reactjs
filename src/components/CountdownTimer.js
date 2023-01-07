import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import 'font-awesome/css/font-awesome.min.css';
import 'react-datetime-picker/dist/DateTimePicker.css'
import 'react-calendar/dist/Calendar.css'
const CountdownTimer = () => {
    const [intervalId, setIntervalId] = useState();
    const [state, setState] = useState({
        date: new Date(),
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
        edit: false,
    });
    var interval = ''
    const dateChangeHandler = (date) => {
        setState({
            date: date,
            edit: false
        })
    };

    const timer = () => {
        var selectDate = new Date(state.date).getTime();
        var nowdate = new Date().getTime();
        var distance = selectDate - nowdate;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setState({
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        })
        if (distance < 0) {
            clearInterval(intervalId);
            setState({
                days: "00",
                hours: "00",
                minutes: "00",
                seconds: "00"
            })
        }
    };

    const startTimer = () => {
        interval = setInterval(() => {
            timer()
        }, 1000);
        setIntervalId(interval)
    };
    const stopTimer = () => {
        clearInterval(intervalId);
        setState({
            days: '00',
            hours: '00',
            minutes: '00',
            seconds: '00',
        })
        clearInterval(intervalId);
    }
    const onEditHandler = () => {
        setState({
            edit: true,
            Edit: ''
        })
    };

    return (
        <div className="container card">
            <h1>{state.days}:{state.hours}:{state.minutes}:{state.seconds}</h1>
            <div className="container picker">
                <div className="col-sm-12">
                    <div className="row">
                        <div className="col-sm-4 col">
                            {!state.edit ? <i className="fa fa-pencil icon" aria-hidden="true" onClick={onEditHandler} style={{ fontSize: '40px' }} ></i> : null}
                            {state.edit ? <DateTimePicker onChange={dateChangeHandler} value={state.date} /> : null}
                        </div>
                        <div className="col-sm-4 col">
                            <i className="fa fa-play" aria-hidden="true" style={{ fontSize: '40px' }} onClick={startTimer}></i>
                        </div>
                        <div className="col-sm-4">
                            <i className="fa fa-pause" aria-hidden="true" style={{ fontSize: '40px' }} onClick={stopTimer}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CountdownTimer;