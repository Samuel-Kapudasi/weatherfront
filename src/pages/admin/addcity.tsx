import { useRouter } from "next/router";
import { useState } from "react";
import { FormEvent } from "react";
import axios from "axios";

export default function AddCity() {
    const [city, setCity] = useState('');
    const router = useRouter();
    const handleClick = () =>
    {
        router.replace(`/`);
    }
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try
        {
            const res = await axios.post(`http://localhost:3000/admin/add`,{'name':city},{withCredentials: true, headers:{"Content-Type":"application/json"},});
            
          }
        catch(error)
        {
            alert(`Error entering the city ${error}`);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="city">Name:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        <button type="submit" onClick={handleClick}>Submit</button>
      </form>
    )
}