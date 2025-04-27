import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get("city");

  const API_KEY = process.env.WEATHER_API_KEY;

  if (!city) {
    return NextResponse.json({ error: "City is required" }, { status: 400 });
  }

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );

  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to fetch weather data" },
      { status: 500 }
    );
  }

  const data = await res.json();

  return NextResponse.json(data);
}
