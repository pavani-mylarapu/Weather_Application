import { useState } from "react";
import fetchWeather from "./fetchWeather";
import moment from "moment";
import {BsMoon} from 'react-icons/bs';
import {AiOutlineInstagram, AiFillLinkedin, AiFillFacebook} from 'react-icons/ai';


import './App.css';
const App = ()=>{
    const [query, setQuery] = useState("")
    const [weather, setWeather] = useState({})
    const [mode, setMode] = useState('light');

    const handleChange = (e)=>{
        setQuery(e.target.value)
    }
    const search = async (e) =>{
        if(e.code === 'Enter'){
            const data = await fetchWeather(query)
            setWeather(data) 
            setQuery("")
        }
    }

    const toggleMode = () => {
        setMode(mode === 'light' ? 'dark' : 'light');
      };

        return(
            <div  className={`${mode === 'dark' ? 'dark' : 'light'}`}>
                <div className="report">
                    <marquee>WEATHER REPORT </marquee>
                </div>

                <nav className="nav">
                    <p>Email:mylarapupavani@gmail.com</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span><p>Contact:9342901029</p></span>
                    <div className="icon">
                    <span onClick={toggleMode}  style={{marginLeft:"650px", fontSize:"15px"}}><BsMoon/></span>
                    <a href="https://www.instagram.com/"><span style={{marginLeft:"60px", fontSize:"20px"}}><AiOutlineInstagram/></span></a>
                    <a href="https://in.linkedin.com/"><span style={{marginLeft:"70px", fontSize:"20px"}}><AiFillLinkedin/></span></a>
                    <a href="https://www.facebook.com/"><span style={{marginLeft:"80px", fontSize:"20px"}}><AiFillFacebook/></span></a>
                    </div>

                </nav>
                
            <div className="container">           
            <div className="card">
                <div className="card-title">
                    <h1 className="ti">Weather App</h1>
                    <input placeholder="Enter city Name" type="text" value={query} onChange={handleChange} onKeyPress={search} className="bo"/>
                </div>
                {weather.main &&
                <div className="card-body">
                    <section>
                        <div id="city">
                            <h2> {weather.name}
                            <span>&nbsp;{weather.sys.country}.Weather</span></h2>

                        </div>
                        <div id="time">
                            <p>As of {moment().format('LL')},&nbsp;{moment().format('dddd')}</p>
                        </div>
                        <div id="temp" style={{textAlign:"center"}}>
                             <h2>{Math.round(weather.main.temp)} <span>&deg;C</span></h2>
                             <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                             <p>{weather.weather[0].description}</p>
                        </div>
                        <div id="info">
                             <p>{weather.weather[0].description}</p>
                        </div>
                    </section>

                    <main>
                        <div id="a">
                            Humidity {Math.round(weather.main.humidity)}%
                        </div>
                        <div id="b">
                            visibility {Math.round(weather.visibility)} mi
                        </div>
                        <div id="a">
                            Wind Speed {Math.round(weather.wind.speed)} Km/h
                        </div>
                        <div id="b">
                            Sunrise {new Date(weather.sys.sunrise * 1000).toLocaleTimeString('en-IN')}
                        </div>
                        <div id="a">
                            SunSet&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {new Date(weather.sys.sunset * 1000).toLocaleTimeString('en-IN')}
                        </div>
                        <div id="b">
                            Hig/Low&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {Math.round(weather.main.temp)} / {Math.round(weather.main.temp)}
                        </div>
                    </main>

                </div>
                }
            </div>
            
        </div>

            </div>

    )
}

export default App;
