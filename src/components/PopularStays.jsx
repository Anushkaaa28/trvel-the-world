import React from 'react'
import { Card } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { GoPlay } from "react-icons/go";
import { FaStar } from "react-icons/fa";



const PopularStays = () => {

  const PopStays = [
    {
        id:1,
        name:"Bali",
        price:899,
        ratings:"4.8",
        img:"https://th.bing.com/th/id/OIP.-LxJZKjX-OHYvG9-N-x57QHaFj?w=219&h=180&c=7&r=0&o=5&pid=1.7"
    },
    {
        id:2,
        name:"Swiss",
        price:900,
        ratings:"4.1",
        img:"https://th.bing.com/th/id/OIP.P0bfIzerPnMY5-auaddWRgHaD5?w=340&h=180&c=7&r=0&o=5&pid=1.7"
    },
    {
        id:2,
        name:"Boracay",
        price:699,
        ratings:"4.9",
        img:"https://th.bing.com/th/id/OIP.P0bfIzerPnMY5-auaddWRgHaD5?w=340&h=180&c=7&r=0&o=5&pid=1.7"
    },
    {
        id:2,
        name:"Palawan",
        price:789,
        ratings:"4.5",
        img:"https://th.bing.com/th/id/OIP.FzRo_q5GVinvO7R3gjMigwHaFj?w=271&h=203&c=7&r=0&o=5&pid=1.7"
    }
]

  return (
    <div className='m-5'>
    <h4 className='m-2'>Popular stays</h4>
    
<div className='d-flex flex-wrap justify-content-around'>

    {PopStays.map((p,i)=>(

        
        <div key={i} className='m-2 cards'>
        <Card className='' style={{ width: '17rem'}}>
      <Card.Img variant="top" className='rounded p-2' height={'190px'} src={p.img} />

      <Card.Body className='  p-2'>

        <div className='d-flex justify-content-between'>
        <p className='mt-2 text-secondary'>See Property details</p>
        <span className=' fs-4' style={{color:'blue'}}><GoPlay /></span>
        </div>
        <Card.Title className='m-0' >{p.name}</Card.Title>
        <p className=' m-0' >${p.price}/night</p>
        <p className='' ><FaStar className='text-warning ' /><span className='m-2'>{p.ratings}</span></p>

      </Card.Body>
      <Button variant="light border" className='text-uppercase text-primary'>More details</Button>

    </Card>
    </div>
    ))

    }
    </div>
    
    </div>  )
}

export default PopularStays