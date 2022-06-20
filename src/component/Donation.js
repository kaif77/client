import React, { useState, useEffect, component } from 'react'
import "../component/Donation.css"
import axios from 'axios'


const Donation = () => {
  const [firstname, setFirstname] = useState('')
  const [lastName, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [tpnum, setTpnum] = useState('');
  const [address, setAddress] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [country, setCountry] = useState('');
  const [recognition, setRecognition] = useState('');
  const [anonymous, setAnonymous] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState(false);

    axios.post("http://localhost:5000/api/insert", {
      firstname: firstname,
      lastName: lastName,
      email: email,
      tpnum: tpnum,
      address: address,
      zipcode: zipcode,
      country: country,
      recognition: recognition,
      anonymous: anonymous,
      amount: amount,

    }).then(() => {
      alert("Succesfully Submitted");
    });

  }

  return (
    <div class="form">
      <body>
        <form onSubmit={handlesubmit}>
          <h1>Donate</h1><br></br> <br></br>
          <label>How much would you like to Donate</label> <br></br>

          <input type="text" Class="textbox" name="amount" placeholder="Amount Rs. " onChange={(e) => {
            setAmount(e.target.value);
            <label>Amount Rs.</label>
          }}

          /><br /><br />

            <label>Who is the Donor</label> <br></br>
            <input type="text" class="textbox" placeholder="First name" name="Firstname"
              onChange={(e) => {
                setFirstname(e.target.value)  
            }
            }
            /><br />
          <input type="text" class="textbox" placeholder="Last name" name="Lastname" onChange={(e) => {
            setLastname(e.target.value);

          }} /><br />
          <input type="text" class="textbox" placeholder="Email address" name="Email" onChange={(e) => {
            setEmail(e.target.value);
          }} /><br />
          <input type="text" class="textbox" placeholder="Phone number" name="Tpnum" onChange={(e) => {
            setTpnum(e.target.value);
          }} />  <br />
          <input type="text" class="textbox" placeholder="Address" name="Address" onChange={(e) => {
            setAddress(e.target.value);
          }} />  <br />
          <input type="text" class="textbox" placeholder="Zip/Postal code" name="Zipcode" onChange={(e) => {
            setZipcode(e.target.value);
          }} />  <br />
          <input type="text" class="textbox" placeholder="Country" name="Country" onChange={(e) => {
            setCountry(e.target.value);
          }} />  <br /><br />

          <label>Is this an anonymous gift?</label> <br />
          <input type="text" class="textbox" placeholder="Yes or No" name="Anonymous" onChange={(e) => {
            setAnonymous(e.target.value);
          }} /> <br /> <br />

          <label>Is recognnition requested for this donation?</label> <br /><br />
          <input type="text" class="textbox" name="Recognition" onChange={(e) => {
            setRecognition(e.target.value);
          }}></input> <br /> <br />



          <button>Submit</button>
        </form>
      </body>
    </div>
  )


export default Donation