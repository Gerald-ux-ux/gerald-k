"use client";

import { useEffect, useState } from "react";

function formatTimezone(): string {
  const now = new Date();

  // Get time in HH:MM format
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const time = `${hours}:${minutes}`;

  // Get UTC offset
  const offsetMinutes = -now.getTimezoneOffset();
  const offsetHours = Math.floor(Math.abs(offsetMinutes) / 60);
  const offsetMins = Math.abs(offsetMinutes) % 60;
  const sign = offsetMinutes >= 0 ? "+" : "-";
  const offset = `UTC ${sign}${offsetHours.toString().padStart(2, "0")}:${offsetMins.toString().padStart(2, "0")}`;

  return `${time} (${offset})`;
}

export default function Timezone() {
  const [timezone, setTimezone] = useState<string>("");

  useEffect(() => {
    // Set initial timezone
    setTimezone(formatTimezone());

    // Update every minute
    const interval = setInterval(() => {
      setTimezone(formatTimezone());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  if (!timezone) {
    return null;
  }

  return <span className="text-secondary underline">{timezone}</span>;
}
