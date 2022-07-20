import React from "react";
import {useState, useEffect} from 'react'
import LocationList from "../components/LocationList";
import PostList from "../components/PostList";

function Explore({user}) {
    const [location, setLocation] = useState(null)
    const [locations, setLocations] = useState([])

    useEffect(()=>{
        fetch(`/locations`)
            .then((r)=>r.json())
            .then((locations)=> {
                setLocation(locations[0])
                setLocations(locations)
                
            })

    },[])

    return (
        <>
        <h1>explore</h1>
            <LocationList></LocationList>
            {location ? <PostList location={location} name={user.name}></PostList> : <></>}
        </>
    )


}

export default Explore;