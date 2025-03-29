import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectPastes } from "../redux/selectors"; // ✅ Ensure the correct path


const Paste = () => {
  // ✅ Use memoized selector
  const pastes = useSelector(selectPastes);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  // ✅ Filter pastes correctly
  const filteredData = pastes.filter((paste) =>
    paste.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        className='p-2 rounded-2xl min-w-[600px] mt-5'
        type='search'
        placeholder='Search Here'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className='flex flex-col gap-5'>
        {filteredData.length > 0 &&
          filteredData.map((paste, index) => (
            <div key={index} className='border'>
              {paste.title} {/* ✅ Corrected JSX */}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Paste;
