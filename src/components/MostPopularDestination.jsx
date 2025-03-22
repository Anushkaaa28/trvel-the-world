import React from 'react'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MostPopularDestination = () => {

    const PopDestinations = [
        {
            id:1,
            name:"Paris",
            price:70000,
            img:"https://th.bing.com/th/id/OIP.NJgiINFs-yHnV-vLB6dIVgHaEK?w=305&h=180&c=7&r=0&o=5&pid=1.7"
        },
        {
            id:2,
            name:"Greece",
            price:890000,
            img:"https://cdn.getyourguide.com/img/tour/61c339e6e1be9.jpeg/132.webp"
        },
        {
            id:2,
            name:"Norway",
            price:990000,
            img:"https://cdn.britannica.com/64/94864-050-223C3FE6/Northern-lights-sky-Kautokeino.jpg"
        },
        {
            id:2,
            name:"Turkey",
            price:120000,
            img:"https://www.iabtravel.com/wp-content/uploads/2017/07/TURKEY-COUNTRY-IMAGE.jpg"
        }
    ]








  return (

    <div className='m-5'>
    <h6 className='text-uppercase text-primary m-0'>Plan your next trip</h6>
    <h4 className='m-2'>Most Popular Destination</h4>
    
<div className='d-flex flex-wrap justify-content-around'>

    {PopDestinations.map((p,i)=>(

        
        <div key={i} className=' position-relative circle m-3 cards'>
        <Card className='' style={{ width: '17rem'}}>
      <Card.Img variant="top" className='rounded' height={'190px'} src={p.img} />
      <Card.Body className='p-0'>
        <Card.Title className='position-absolute top-0 start-0 p-2 text-white'>{p.name}</Card.Title>
        <p className='position-absolute top-0 end-0 p-2 text-white'>form</p>
        <Card.Title className='position-absolute top-0 end-0 p-2 text-white mt-4' >₹{p.price}</Card.Title>

      </Card.Body>
    </Card>
    </div>
    ))

    }
    </div>
    
    </div>


  )
}

export default MostPopularDestination