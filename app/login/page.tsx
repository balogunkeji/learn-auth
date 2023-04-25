'use client'

import { signIn } from 'next-auth/react'
import React, { useRef } from 'react'

function Login() {
  const userName = useRef('')
  const password = useRef('')
  const onSubmit = async () => {
    const result = await signIn('credentials', {
      username: userName.current,
      password: password.current,
      redirect: false,
      callbackUrl: '/'
    })
      return result;
  }

  return (
    
      <div className='form'>
        <input type="text" placeholder='username' onChange={(e) => (userName.current = e.target.value)} />
        <input type="password" placeholder='password' onChange={(e) => (password.current = e.target.value)} />
        <input type="button" value="Submit" onClick={onSubmit} />
      </div>
   
  )
}

export default Login