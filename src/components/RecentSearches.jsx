import React from "react";
import { GiAirplaneDeparture } from "react-icons/gi";
import { BiSolidHotel } from "react-icons/bi";
import { ImSpoonKnife } from "react-icons/im";
import { FaBus } from "react-icons/fa";
import { FaTaxi } from "react-icons/fa6";
import { TfiVideoClapper } from "react-icons/tfi";
import { GiFamilyHouse } from "react-icons/gi";






const RecentSearches = () => {
  return (
    <div className="m-5  p-2">
      <h5>Recent Searches</h5>

      <div className="d-flex flex-wrap  gap-1 ">

        <div className="col border">
        <div className="d-flex  justify-content-between p-2 m-2">
            <h3 className="">SIN</h3>
            <p><GiAirplaneDeparture className="fs-2" /></p>
            <h3 className="d-inline">SIN</h3>
        </div>
        <p className="text-center"><b>Depart On:</b> <span>7 Sep 2021</span></p>
        </div>
        

        <div className="col border">
        <div className="d-flex  justify-content-between p-2  m-2">
            <h3 className="d-inline">MY</h3>
            <p><GiAirplaneDeparture className="fs-2" /></p>
            <h3 className="d-inline">DUBAI</h3>
        </div>
        <p className="text-center"><b>Depart On:</b> <span>9 Sep 2021</span></p>
        </div>

        </div>

        

    
        <div>
            <p>Prepare for your trip</p>
            <div className="d-flex flex-wrap justify-content-between px-5">

            <div className="text-center">
                <BiSolidHotel  style={{fontSize:"60px"}} className="bg-danger text-white  rounded p-2"/>
                <p className="">Hotels</p>
            </div>

            <div className="text-center">
            <GiFamilyHouse style={{fontSize:"60px"}} className="bg-info text-white rounded p-2"/>
                <p className="">Attractions</p>
            </div>

            <div className="text-center">
                <ImSpoonKnife style={{fontSize:"60px"}} className="bg-success text-white rounded p-2"/>
                <p className="">Eats</p>
            </div>

            <div className="text-center">
            <FaBus style={{fontSize:"60px"}} className="bg-warning text-white rounded p-2"/>
                <p className="">Bus</p>
            </div>

            <div className="text-center">
            <FaTaxi style={{fontSize:"60px"}} className="bg-primary text-white rounded p-2"/>
                <p className="">Taxi</p>
            </div>

            <div className="text-center">
            <TfiVideoClapper style={{fontSize:"60px"}} className="bg-success text-white rounded p-2"/>
                <p className="">Movies</p>
            </div>
            </div>
        </div>




      </div>
  );
};

export default RecentSearches;
