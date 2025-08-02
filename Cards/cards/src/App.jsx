import { useState } from 'react'

import './App.css'
import Cards from './Componenets/Cards'

function App() {
const users =[
  {
    "name": "Aarav",
    "surname": "Mehta",
    "age": 27,
    "city": "Mumbai",
    "profession": "Software Developer",
    "profilePhoto": "https://randomuser.me/api/portraits/men/75.jpg"
  },
  {
    "name": "Priya",
    "surname": "Sharma",
    "age": 24,
    "city": "Delhi",
    "profession": "UX Designer",
    "profilePhoto": "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    "name": "Rohan",
    "surname": "Kumar",
    "age": 31,
    "city": "Bangalore",
    "profession": "Data Scientist",
    "profilePhoto": "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    "name": "Ananya",
    "surname": "Reddy",
    "age": 29,
    "city": "Hyderabad",
    "profession": "Marketing Manager",
    "profilePhoto": "https://randomuser.me/api/portraits/women/25.jpg"
  },
  {
    "name": "Vihaan",
    "surname": "Singh",
    "age": 35,
    "city": "Pune",
    "profession": "Project Manager",
    "profilePhoto": "https://randomuser.me/api/portraits/men/15.jpg"
  }
]


  return (
   <div>
    <div className='p-10 m-10'>
  {users.map(function(elem,idx){

    return <Cards key={idx} user={elem.name} surname={elem.surname} age={elem.age} city={elem.city} photu={elem.profilePhoto} profession={elem.profession}/>
  })}
    </div>
   </div>
  )
}

export default App
