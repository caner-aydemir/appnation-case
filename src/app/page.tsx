import WeatherDashboard from "@/components/weather/WeatherDashboard";
import { Suspense } from "react";

export default async function Home() {
  return (
    <Suspense fallback={null}>
      <WeatherDashboard />
    </Suspense>
  );
}
