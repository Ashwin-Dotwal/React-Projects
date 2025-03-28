import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Paste = () => {
  // ✅ Check the correct slice name in useSelector
  const pastes = useSelector((state) => state.paste?.pastes || []);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  // ✅ Ensure 'title' is correctly referenced
  const filterData = pastes.filter((paste) =>
    paste.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <input 
      className='p-2 rounded-3xl min-w-[70%]'
      type='Search'
      placeholder='Search Here'
      value={searchTerm}
      onChange={(e)=>setSearchTerm(e.target.value)} />

    </div>
  )
}

export default Paste