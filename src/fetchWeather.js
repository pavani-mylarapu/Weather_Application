import axios from "axios";

const API_KEY="ce71da033ccd1fb46b14b0388de5c4dc"
const URL="https://api.openweathermap.org/data/2.5/weather"
// npm  install axios

const fetchWeather  = async (query) => {  //query means city name arrow 
  const {data} = await axios.get(URL,{
        params: {
            q:query,    //city name
            units:"metric",     //c
            APPID:API_KEY       //api key
        } 
    })
    return data
}



export default fetchWeather;