import axios from "axios";
import { NextRequest, NextResponse } from "next/server";



export async function GET(req: NextRequest){

const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");

  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;

const res = await axios.get(url,{
    headers:{
    accept: 'application/json',
    Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`
    }
})

const data = res.data;
console.log(data);


    return NextResponse.json({ 
      data  
    })
}