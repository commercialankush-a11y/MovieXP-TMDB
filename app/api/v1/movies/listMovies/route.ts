import { NextRequest, NextResponse } from "next/server";


export async function GET(req:NextRequest){

    const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`;

const res = await fetch (url,{
    headers:{
        accept: 'application/json',
        Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`
    }
})
    
const data = await res.json();


    return NextResponse.json({
       data
    })
}