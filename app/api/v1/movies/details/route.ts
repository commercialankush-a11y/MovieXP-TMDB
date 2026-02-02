import axios from "axios";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req:NextRequest){

    const { searchParams } = new URL(req.url);
  const query = searchParams.get("id");

    const url = `https://api.themoviedb.org/3/movie/${query}?language=en-US`


    const data = await axios.get(url,{
        headers:{
            accept: 'application/json',
    Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`
        }
    });

    const res = data.data


    return NextResponse.json(res)
}