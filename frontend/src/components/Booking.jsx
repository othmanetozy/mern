import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

const Booking = () => {

  const getInitialStateAdults = () => {
    const adults = "1";
    return adults;
  };

  const getInitialStateChildren = () => {
    const children = "0";
    return children;
  };

  const curr = new Date();
  curr.setDate(curr.getDate());
  const date = curr.toISOString().substring(0, 10);

  const getInitialStateDate = () => {
    const dateR = date;
    return dateR;
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [time, setTime] = useState("");
  const [dateR, setDateR] = useState(getInitialStateDate);
  const [comfort, setComfort] = useState("standard"); //default 
  const [adults, setAdults] = useState(getInitialStateAdults);
  const [children, setChildren] = useState(getInitialStateChildren);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const reservationHandler = async (e) => {
    e.preventDefault();

    try {

      const {data} = await axios.post('/api/auth/reservation', {
        name,
        email,
        from,
        to,
        time,
        date: dateR,
        comfort,
        adults,
        children,
        message
      });

      if(data) {
        setSuccess("Felicitation ! vous avez reservé(e) un taxi ");
      }

    } catch(error) {
      setError("Actuellement, il n'est pas possible de réserver un taxi !");
    }

  }

  return (
    <div className='booking'>
      <div className="bookingRow">
        <div className="bookingCol">
          <form onSubmit={reservationHandler}>
            <h3 className="bookingTitle">Booking Form</h3>
            <div className="formGroups">
              <div className="formGroup">
                <div className="formGroupOne">
                  <input type="text" onChange={(e) => setName(e.target.value)} placeholder='Name:' required />
                  <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='E-mail:' required />
                </div>
                <div className="formGroupOne">
                  <input type="text" onChange={(e) => setFrom(e.target.value)} placeholder='From:' required />
                  <input type="text" onChange={(e) => setTo(e.target.value)} placeholder='To:' required />
                </div>
              </div>
              <div className="formGroup">
                <div className="formGroupTwo">
                  <div>
                    <label htmlFor="time">Time</label>
                    <input type="text" id='time' onChange={(e) => setTime(e.target.value)}required />
                  </div>
                  <div>
                    <label htmlFor="date">Date</label>
                    <input type="date" onChange={(e) => setDateR(e.target.value)} defaultValue={date} id='date' required />
                  </div>
                </div>
              </div>
              <div className="formGroup">
                <div className="formGroupThree">
                  <div>
                    <label htmlFor="comfort">Comfort</label>
                    <div className="comfortOptions first">
                      <div>
                        <input type="radio" value="economy" onChange={(e) => setComfort(e.target.value)} name="comfort" id="economy" />
                        <label htmlFor="economy">Economie</label>
                      </div>

                      <div>
                        <input type="radio" value="standard" onChange={(e) => setComfort(e.target.value)} name="comfort" id="standard" />
                        <label htmlFor="standard">Standard</label>
                      </div>

                      <div>
                        <input type="radio" value="lux" onChange={(e) => setComfort(e.target.value)} name="comfort" id="lux" />
                        <label htmlFor="lux">Luxe</label>
                      </div>
                    </div>
                    <div className="comfortOptions second">
                      <div>
                        <label htmlFor="adults">Adults</label>
                        <select onChange={(e) => setAdults(e.target.value)} name="people" id="adults" required>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="children">Children</label>
                        <select onChange={(e) => setChildren(e.target.value)} name="people" id="children" required>
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
              <div className="formGroup">
                <div className="formGroupFour">
                  <textarea onChange={(e) => setMessage(e.target.value)} name="" id="" cols="30" rows="10" placeholder='Message:'></textarea>
                </div>
              </div>
              <div className="formGroup">
                <button className='btnSubmit'>envoyée</button>
              </div>
              <div className="messageInfo">
                {error && <p className='error'>{error}</p>}
                {success && <p className='success'>{success}</p>} 
              </div>
            </div>
          </form>
        </div>
        <div className="bookingCol">
          <div className="bookingImages">
            <div className="bookingImage">
              <Link to='/'>
                <img src="./assets/uploads/page1_img1.jpg" alt="" />
                <span>Economie</span>
              </Link>
            </div>
            <div className="bookingImage">
              <Link to='/'>
                <img src="./assets/uploads/page1_img2.jpg" alt="" />
                <span>Standard</span>
              </Link>
            </div>
            <div className="bookingImage">
              <Link to='/'>
                <img src="./assets/uploads/page1_img3.jpg" alt="" />
                <span>Luxe</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking