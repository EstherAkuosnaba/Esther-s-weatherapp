import React from 'react'
import Login from '.././Container/Login'
import './Home.css';

function Home() {
    return (
        <div classNameName='home'>
            <div classNameName='login'>
                   
                <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                    <a className="navbar-brand" style={{color: "white"}}
                     href="/">Estee WeatherApp</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                        <form className="form-inline my-2 my-lg-0 ml-auto">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline my-2 my-sm-0 ml-auto" id="navbut" type="submit">Search</button>
                        </form>
                    </nav>
                    <Login />
            </div>
        </div>
    )
}

export default Home
