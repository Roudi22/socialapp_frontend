import React, {useState} from 'react'
import { Routes, Route} from "react-router-dom"

import { Navbar, Feed, PinDetail, CreatePin, Search} from "../components"
const Pins = ({user}) => {
  const [searchterm, setSearchterm] = useState("")
  return (
    <div className='px-2 md:px-5'>
      <div className='bg-gray-50'>
        <Navbar searchterm={searchterm} setSearchterm={setSearchterm}/>
      </div>
      <div className='h-full'>
        <Routes>
          <Route path='/' element={<Feed/>}/>
          <Route path='/category/:categoryId' element={<Feed/>}/>
          <Route path='/pin-detail/:pinId' element={<PinDetail user={user}/>}/>
          <Route path='/create-pin' element={<CreatePin user={user}/>}/>
          <Route path='/search' element={<Search searchterm={searchterm} setSearchterm={setSearchterm}/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default Pins