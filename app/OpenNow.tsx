"use client";
import { useEffect, useState } from "react";

// Mon-Fri 7:30 AM - 5:00 PM Pacific
function status(): { open: boolean; label: string } {
  const now = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" }));
  const day = now.getDay();
  const mins = now.getHours() * 60 + now.getMinutes();
  const weekday = day >= 1 && day <= 5;
  if (weekday && mins >= 450 && mins < 1020) return { open: true, label: "Open now until 5 p.m." };
  if (weekday && mins < 450) return { open: false, label: "Opens today at 7:30 a.m." };
  if (day === 5 || day === 6 || (day === 0)) return { open: false, label: "Closed now · opens Monday 7:30 a.m." };
  return { open: false, label: "Closed now · opens tomorrow 7:30 a.m." };
}

export default function OpenNow({ className = "" }: { className?: string }) {
  const [s, setS] = useState<{ open: boolean; label: string } | null>(null);
  useEffect(() => {
    setS(status());
    const t = setInterval(() => setS(status()), 60000);
    return () => clearInterval(t);
  }, []);
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span className={`h-2.5 w-2.5 rounded-full ${s?.open ? "pulse bg-[oklch(0.7_0.17_150)]" : "bg-[oklch(0.7_0.02_260)]"}`} aria-hidden="true" />
      {s ? s.label : "Mon-Fri 7:30 a.m. - 5 p.m."}
    </span>
  );
}
