"use client"

import axios from "axios";
import { useState } from "react";



export default function Seachbox(){

const [movieNmae, setMovieName]= useState("")


    return <div>
        <input type="text" placeholder="enter movie name" onChange={(e)=>{

            setMovieName(e.target.value)
        }}>
        </input>

        <button onClick={ async ()=>{
await axios.post("http://localhost:3000/api/v1/movies/deatils/[id]",{
    movieNmae
})

        }}>
            Search
        </button>

    </div>
}