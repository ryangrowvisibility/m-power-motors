export type IconName = "phone" | "star" | "shield" | "clock" | "pin" | "wrench" | "gauge" | "car" | "disc" | "droplet" | "cloud" | "calendar" | "search" | "check" | "user" | "dollar" | "arrow" | "nav" | "handshake" | "cog" | "thermo";

export function Icon({ name, className = "h-6 w-6" }: { name: IconName; className?: string }) {
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const paths: Record<IconName, React.ReactNode> = {
    phone: <path {...p} d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />,
    star: <path fill="currentColor" d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z" />,
    shield: <><path {...p} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path {...p} d="m9 12 2 2 4-4" /></>,
    clock: <><circle {...p} cx="12" cy="12" r="10" /><path {...p} d="M12 6v6l4 2" /></>,
    pin: <><path {...p} d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle {...p} cx="12" cy="10" r="3" /></>,
    wrench: <path {...p} d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z" />,
    gauge: <><path {...p} d="M12 14l4-4" /><path {...p} d="M3.3 19a10 10 0 1 1 17.4 0z" /></>,
    car: <><path {...p} d="M5 17h14v-5l-2-5H7l-2 5z" /><path {...p} d="M3 12h18" /><circle {...p} cx="7.5" cy="17" r="2" /><circle {...p} cx="16.5" cy="17" r="2" /></>,
    disc: <><circle {...p} cx="12" cy="12" r="9" /><circle {...p} cx="12" cy="12" r="3" /><path {...p} d="M12 3v3M21 12h-3M12 21v-3M3 12h3" /></>,
    droplet: <path {...p} d="M12 2.7 6.3 8.4a8 8 0 1 0 11.4 0z" />,
    cloud: <><path {...p} d="M17.5 19H8a6 6 0 1 1 5.7-7.9A4.5 4.5 0 1 1 17.5 19z" /><path {...p} d="M8 15h6" /></>,
    calendar: <><rect {...p} x="3" y="4" width="18" height="18" rx="2" /><path {...p} d="M16 2v4M8 2v4M3 10h18" /></>,
    search: <><circle {...p} cx="11" cy="11" r="8" /><path {...p} d="m21 21-4.3-4.3" /></>,
    check: <path {...p} d="M20 6 9 17l-5-5" />,
    user: <><circle {...p} cx="12" cy="8" r="4" /><path {...p} d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1" /></>,
    dollar: <><circle {...p} cx="12" cy="12" r="10" /><path {...p} d="M15 9.5c-.5-1-1.6-1.5-3-1.5-1.7 0-3 .8-3 2s1.3 1.7 3 2 3 .8 3 2-1.3 2-3 2c-1.4 0-2.5-.5-3-1.5M12 6v2M12 16v2" /></>,
    arrow: <path {...p} d="M5 12h14M13 6l6 6-6 6" />,
    nav: <path {...p} d="m3 11 19-9-9 19-2-8z" />,
    cog: <><circle {...p} cx="12" cy="12" r="3" /><path {...p} d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" /></>,
    thermo: <><path {...p} d="M14 14.8V4a2 2 0 1 0-4 0v10.8a4 4 0 1 0 4 0z" /><path {...p} d="M12 17v-5" /></>,
    handshake: <><path {...p} d="m11 17 2 2a1 1 0 1 0 3-3" /><path {...p} d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.9-3.9a3 3 0 0 0-4.2 0l-.9.9a1 1 0 1 1-3-3l2.8-2.8a5.8 5.8 0 0 1 7.1-.9l.5.3a2 2 0 0 0 1.4.2L21 4" /><path {...p} d="m21 3 1 11h-2M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3M3 4h8" /></>,
  };
  return <svg viewBox="0 0 24 24" className={className} aria-hidden="true">{paths[name]}</svg>;
}

export function Stars({ rating = 5, className = "h-5 w-5" }: { rating?: number; className?: string }) {
  return (
    <span className="inline-flex text-star" role="img" aria-label={`${rating} out of 5 stars`}>
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = Math.max(0, Math.min(1, rating - i));
        return (
          <span key={i} className="relative inline-block">
            <Icon name="star" className={`${className} text-line`} />
            <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}><Icon name="star" className={className} /></span>
          </span>
        );
      })}
    </span>
  );
}
