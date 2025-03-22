import React from 'react'
import Card from 'react-bootstrap/Card';


const RecommendedHolidays = () => {

    const RecHolidays = [
        {
            id:1,
            name:"Bali",
            price:899,
            stay:"4D3N",
            img:"https://th.bing.com/th/id/OIP.-LxJZKjX-OHYvG9-N-x57QHaFj?w=219&h=180&c=7&r=0&o=5&pid=1.7"
        },
        {
            id:2,
            name:"Swiss",
            price:900,
            stay:"6D5N",
            img:"https://th.bing.com/th/id/OIP.P0bfIzerPnMY5-auaddWRgHaD5?w=340&h=180&c=7&r=0&o=5&pid=1.7"
        },
        {
            id:2,
            name:"Boracay",
            price:699,
            stay:"5D4N",
            img:"https://th.bing.com/th/id/OIP.Loev5fVVuRkFkJtx4u6tXgHaE8?w=261&h=180&c=7&r=0&o=5&pid=1.7"
        },
        {
            id:2,
            name:"Palawan",
            price:789,
            stay:"4D3N",
            img:"https://th.bing.com/th/id/OIP.FzRo_q5GVinvO7R3gjMigwHaFj?w=271&h=203&c=7&r=0&o=5&pid=1.7"
        }
    ]


  return (
    <div className='m-5'>
    <h4 className='m-2'>Recommended Holidays</h4>
    
<div className='d-flex flex-wrap justify-content-around'>

    {RecHolidays.map((p,i)=>(

        
        <div key={i} className='m-2 cards'>
        <Card className='' style={{ width: '17rem'}}>
      <Card.Img variant="top" className='' height={'190px'} src={p.img} />
      <Card.Body className=' d-flex justify-content-between p-2'>
        <Card.Text className='m-0'>{p.name} <br></br> <span className='text-secondary'>{p.stay}</span></Card.Text>
        <Card.Title className='text-primary m-0' >${p.price}</Card.Title>
      </Card.Body>
    </Card>
    </div>
    ))

    }
    </div>
    </div>
  )
}

export default RecommendedHolidays