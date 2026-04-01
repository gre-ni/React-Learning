// import { useState } from 'react'
import { User } from './User.jsx'
import { Student } from './Student.jsx'
import { lide } from './lide.js'
import { Wrapper } from './Wrapper.jsx'

function App() {

  const students = lide;

  return (
    <>
      <Wrapper>
        <p>Content</p>
      </Wrapper>
      <Student data={students}/>
    </>
  )
}

export default App
