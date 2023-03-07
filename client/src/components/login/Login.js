import React, {useState, useEffect} from 'react'
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import './styles/style.css'
import {SiThunderbird} from 'react-icons/si'

function Login({loginState, setLoginState}) {
    const [showLogin, setShowLogin] = useState(true);
    const [selectedLocation, setSelectedLocation] = useState(null)
    const [allLocations, setAllLocations] = useState([])

    useEffect(()=>{
        fetch('/locations')
            .then((r)=>r.json())
            .then((locations)=>{
                setAllLocations(locations)
                setSelectedLocation(locations[0])
            })
    },[])


    function handleChange(e) {
        fetch(`/locations/${e.target.value}`)
            .then((r)=>r.json())
            .then((location)=>{
                // setLocation(location)
                setLoginState({...loginState, location: location})
            })
    }

    const optionElements = allLocations.map((location)=><option key={location.id} value={location.id}>{location.name}</option>)


    return (
        <div className='login-container'>
            <SiThunderbird size='4em' color='black' />
            <h2 className='greeting' >Sign in to Postr</h2>
            {showLogin ? (
                <div id='login-form'>
                    <LoginForm loginState={loginState} setLoginState={setLoginState} handleChange={handleChange} optionElements={optionElements} allLocations={allLocations} selectedLocation={selectedLocation} />
                    <p>
                        Don't have an account?
                        <span id='login' onClick={() => setShowLogin(false)}> Sign Up</span>
                    </p>
                </div>
            ) : (
                <div id='signup-form'>
                    <SignUpForm loginState={loginState} setLoginState={setLoginState} handleChange={handleChange} optionElements={optionElements} allLocations={allLocations} selectedLocation={selectedLocation}/>
                    <p>
                        Have an account already?
                        <span id='login' onClick={() => setShowLogin(true)}> Log In</span>
                    </p>
                </div>
            )}
        </div>
    )


}

export default Login;