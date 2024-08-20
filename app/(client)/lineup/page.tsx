import ErrorPage from "@/components/404";
import Artists from "@/components/Artists";
import Schedule from "@/components/Schedule";
import {  SCHEDULES_QUERYResult } from "@/sanity.types";
import { client } from "@/sanity/lib/client";
import {  SCHEDULES_QUERY } from "@/sanity/lib/queries";

export default async function LineupPage() {
  
  const schedules = await client.fetch<SCHEDULES_QUERYResult>(SCHEDULES_QUERY);
  
  if (!schedules) {
    return <ErrorPage />
  }

  return (
    <div>
      {schedules?.map(schedule => {
        return <Schedule key={schedule._key} {...schedule} />;
      }
    )}
      {!schedules && <p>No schedules?</p>}
      <Artists />
    </div>
  );
}
