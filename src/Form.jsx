import React, { useState } from 'react'

const Form = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');



  const handleSubmit = (event) => {
    console.log(`Username: ${userName}, Password: ${password}`)
    setUserName('');
    setPassword('');
    event.preventDefault();
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='username' value={userName} onInput={(event)=>setUserName(event.target.value)}/>
            <input type="password" placeholder='password' value={password} onInput={(event)=>setPassword(event.target.value)}/>
            <input type="submit" value="submit"/>
        </form>
    </div>
  )
}

export default Form