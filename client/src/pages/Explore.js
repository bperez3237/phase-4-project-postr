import React from "react";
import LocationList from "../components/LocationList";
import PostList from "../components/PostList";

function Explore({location, user}) {

    return (
        <>
        <h1>explore</h1>
            <LocationList></LocationList>
            <PostList location={location} name={user.name}></PostList>
        </>
    )


}

export default Explore;