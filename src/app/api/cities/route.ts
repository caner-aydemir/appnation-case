import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  if (!query) {
    return NextResponse.json(
      { error: "Query parameter is missing" },
      { status: 400 }
    );
  }

  const API_KEY = process.env.RAPIDAPI_KEY;

  const res = await fetch(
    `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${query}&limit=10&sort=-population`,
    {
      headers: {
        "X-RapidAPI-Key": API_KEY!,
        "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to fetch city suggestions" },
      { status: res.status }
    );
  }

  const data = await res.json();
  return NextResponse.json(data.data);
}
