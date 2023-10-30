// pages/index.js
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function BooksList() {
 
 
 const [cities, setCities] = useState([]);
 
  useEffect( ()=>{
      fetchTasks();
  } ,[]);

  const fetchTasks = async ()=>{
      try{
          const response = await axios.get('http://localhost:3000/user/weather');
          setCities(response.data);
          console.log(cities);
      } catch(error){
          console.error(error);
      }
  };
  
  return (
    <div>
      <h1>Weather</h1>
      <table>
        <thead>
          <tr>
          <th>City</th>
          <th>Temperature</th>
          <th>Pressure</th>
          <th>Humidity</th>
          <th>Feels_like</th>
          <th>Weather Description</th>  
             
          </tr>       
        </thead>
        {cities.map((city, index) => (
          <tbody>
            <tr>
            <td>{city['city']['name']}</td>
            <td>{city['temperature']}</td>
            <td>{city['pressure']}</td>
            <td>{city['humidity']}</td>
            <td>{city['feels_like']}</td>
            <td>{city['weatherDescription']}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
        }