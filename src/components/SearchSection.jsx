import React from 'react'

const SearchSection = () => {
  return (
    <div>
        <div className='headerImg'>
        {/* <img className='position-relative' src='./src/assets/SearchSection.png' width={"100%"}></img> */}

        <div  className='pt-5 text-white text-center ' style={{height:"600px"}}>
            <h1 className='pt-5 mt-5'>Let's explore & travel the world</h1>
            <p>Find the best destination and the most popular stays</p>
            

            {/* .....................search bar..................... */}
            <div className='border bg-white py-3 w-75 m-auto rounded'>

              <div className='d-flex justify-content-between mx-4'>
                <h6 className='text-uppercase text-dark'>Search Flights</h6>

              <div>
                <input type='radio'></input><lable className='text-dark mx-2'>Return</lable>
                <input type='radio' className='ms-3'></input><lable className='text-dark mx-2'>One-way</lable>
              </div>
              </div>

            <div className=''>
                <input className=' border m-1 px-4 py-2 rounded' placeholder='Departure'></input>
                <input className='bg-transparent border m-1 px-4 py-2 rounded' placeholder='Arrival'></input>
                <input type='date' className='bg-transparent border m-1 px-5 py-2 rounded'></input>
                <button className='text-uppercase mb-2 m-1 px-5 py-2 btn btn-warning'>Search flights</button>
            </div>

            </div>
        </div>
        </div>

        
    </div>
  )
}

export default SearchSection