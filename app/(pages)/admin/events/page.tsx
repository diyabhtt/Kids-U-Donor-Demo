import React from "react";
import { VolRegTable } from "@/app/(pages)/volunteers/Registration/components/view_events/VolRegTable";

export default function EventsPage() {
  return (
    <div className="flex font-sans">
      <div className="flex-grow p-5">
        <VolRegTable />
      </div>
    </div>
  );
}
