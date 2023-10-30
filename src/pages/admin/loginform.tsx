import { useRouter } from "next/router";
import { useState } from "react";
import { FormEvent } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try
        {
          const res = await axios.post(`http://localhost:3000/admin/signin`,{'email':email,'password':password},{withCredentials: true, headers:{"Content-Type":"application/json"},});
          if(!res.data)
          {
            throw new Error('Invalid login credentials. Please try again.');
          }
          router.push('/admin/add');
        }
        catch(error)
        {
            toast.error(String(error));
        };
    };
    return (
        <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Log In</button>
        <ToastContainer position="top-center" autoClose={3000}/>
      </form>
    )
}