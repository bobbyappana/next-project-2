// main URL.com = localhost:3000
import React, { useState } from 'react'
import axios from 'axios'
const HomePage = () => {

  const [userName, setUserName] = useState('')
  const [userAge, setUserAge] = useState('')
  const [userAddress, setuserAddress] = useState('')

  const onSubmit = async () => {
    let payload = {
      name: userName,
      age: userAge,
      address: userAddress
    }
    const response = await axios.post('api/userdata', JSON.stringify(payload))
      // {
      //   method: "POST",
      //   body: JSON.stringify(payload),
      //   headers:{
      //     'Content-Type':'application/json'
      //   }
      // })
      .then(resp => console.log(resp))
  }

  return (
    <>
      <div
        style={{
          height: "50px",
          display: "flex",
          alignItems: 'center',
          justifyContent: "center"
        }}
      >Welcome to Next js</div>
      <div
        style={{
          height: "50px",
          display: "flex",
          alignItems: 'center',
          justifyContent: "center"
        }}
      >
        <label>Name</label>
        <input name='name' type='text' value={userName}
          onChange={(e) => { setUserName(e.target.value) }} />
      </div>
      <div
        style={{
          height: "50px",
          display: "flex",
          alignItems: 'center',
          justifyContent: "center"
        }}
      >
        <label>Age</label>
        <input name='age' type='text' value={userAge}
          onChange={(e) => { setUserAge(e.target.value) }} />
      </div>
      <div
        style={{
          height: "50px",
          display: "flex",
          alignItems: 'center',
          justifyContent: "center"
        }}
      >
        <label>Address</label>
        <input name='address' type='text' value={userAddress}
          onChange={(e) => { setuserAddress(e.target.value) }} />
      </div>
      <div
        style={{
          height: "50px",
          display: "flex",
          alignItems: 'center',
          justifyContent: "center"
        }}
      >
        <button type="submit" onClick={onSubmit}>Submit</button>
      </div>
    </>
  )
}

export default HomePage