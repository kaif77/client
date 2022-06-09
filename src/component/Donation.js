import React from 'react'
import "../component/Donation.css"



const Donation = () => {

  return (
    <div><h1>Donate</h1>
      <div>

        <label>1. How much would you like to Donate</label> <br />
        <button>one time gift</button>
        <button>Every Month</button>
        <button>Every Year</button> <br />

        <label>Amount Rs.  </label>
        <input type="text" /><br /><br />

        <label>2. Who is the Donor</label> <br /><br />
        <input type="text" placeholder="First name" /><br />
        <input type="text" placeholder="Last name" /><br />
        <input type="email" placeholder="Email addess  " /><br />
        <input type="text" placeholder="Phone number" />  <br />
        <input type="text" placeholder="Address" />  <br />
        <input type="number" placeholder="Zip/Postal code" />  <br />
        <input type="text" placeholder="Country" />  <br /><br />

        <label>3. Is this an anonymous gift?</label> <br />
        <button>Yes</button>
        <button>No</button><br /><br />

        <label>4. Is recognnition requested for this donation?</label> <br /><br />
        <select id="selection" name="selection">
          <option value="No recognition requested at this time">No recognition requested at this time</option>
          <option value="Yes,for a special occation">Yes, for a special occation</option>
          <option value="Yes,for a memoorial">Yes,for a memorial</option><br /><br />

        </select><br /><br />

        <label>5. How would you like to pay?</label> <br />
        <button>Credit or Debit card</button><br />
        <input type="text" placeholder="Name on card" /><br />
        <input type="number" placeholder="Card Number" /><br />
        <input type="number" placeholder="MM/YY" /><br />
        <input type="number" placeholder="CVV" /><br /><br /><br />

        <input type="submit" />



      </div>
    </div>
  )
}

export default Donation