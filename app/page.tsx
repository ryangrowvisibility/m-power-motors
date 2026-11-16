import { Icon, Stars, type IconName } from "./Icon";
import OpenNow from "./OpenNow";

const PHONE = "(916) 457-8701";
const TEL = "tel:+19164578701";
const ADDRESS = "7500 14th Ave #8, Sacramento, CA 95820";
const MAPS = "https://www.google.com/maps/search/?api=1&query=M%20Power%20Motors&query_place_id=ChIJxwvTz87amoAR2i6CvQGJUYU";
const DIRECTIONS = "https://www.google.com/maps/dir/?api=1&destination=7500%2014th%20Ave%20%238%2C%20Sacramento%2C%20CA%2095820";

const services: { icon: IconName; title: string; body: string }[] = [
  { icon: "calendar", title: "BMW major service", body: "Your BMW's scheduled major service done the way the factory intends, using BMW parts. Fluids, filters, plugs, inspections and the items your service indicator is asking for, at independent-shop prices instead of dealership rates." },
  { icon: "gauge", title: "BMW engine repair", body: "Oil leaks, overheating, rough running, timing and valve-train problems. We work on BMW engines every day and repair the cause, not just the symptom." },
  { icon: "cog", title: "Transmission repair", body: "Harsh shifts, slipping or warning messages. We diagnose BMW transmission problems properly and explain your options before any work starts." },
  { icon: "disc", title: "Brake service", body: "Brake inspection and replacement of pads, rotors and sensors, so your BMW stops the way it should and the brake warning goes away." },
  { icon: "thermo", title: "Cooling system repair", body: "BMW cooling systems are a known weak point: water pumps, thermostats, expansion tanks and hoses. We find the leak or failure and fix it before it becomes an engine problem." },
  { icon: "search", title: "Suspension & check engine diagnostics", body: "Clunks, wandering, worn control arms and bushings, plus check engine light diagnostics with BMW-capable equipment. You get a clear answer on what is wrong." },
];

const reviews = [
  { title: "Honest and fair", job: "BMW repair", text: "Charlie did a great job on my BMW and was honest and fair the whole way through." },
  { title: "Amazing work from the whole team", job: "BMW service", text: "Charlie, Brian and the team did amazing work on the car. Highly recommend them." },
];

const why = [
  { icon: "car" as IconName, t: "BMW only", s: "This shop focuses on BMWs, so the techs know the common failures and how to fix them right." },
  { icon: "dollar" as IconName, t: "Dealer quality, shop prices", s: "BMW parts and know-how without the dealership service-desk markup." },
  { icon: "handshake" as IconName, t: "Honest and fair", s: "Reviewers say Charlie is straight with them about what the car needs." },
  { icon: "user" as IconName, t: "Know who works on your car", s: "Owner Charlie and technician Brian, by name, every visit." },
];

const steps = [
  { title: "Call Charlie", body: "Describe the symptom, warning light or service your BMW is due for. We will set a time to bring it in." },
  { title: "Diagnosis & a clear quote", body: "We find the cause and walk you through what needs doing now, what can wait and what it costs." },
  { title: "Repair with BMW parts", body: "Once you approve, we do the work with BMW parts and keep you updated." },
  { title: "Back on the road", body: "Pick up your car on 14th Ave, Monday to Friday until 5 p.m." },
];

const faqs = [
  { q: "Do you only work on BMWs?", a: "M Power Motors is a BMW specialist. That focus is the point: the team sees the same BMW systems every day and knows where they fail. If you have another make, call and ask." },
  { q: "Will using an independent shop affect my BMW warranty?", a: "Having scheduled maintenance done at a qualified independent shop with the right parts and keeping your records is generally fine. We use BMW parts for major service. Call if you want to talk through your situation." },
  { q: "Are you cheaper than the dealership?", a: "The goal is dealership-quality BMW service and repair at independent-shop prices. You get a clear quote before any work begins, so you can compare." },
  { q: "What are your hours?", a: "Monday to Friday, 7:30 a.m. to 5:00 p.m. Closed weekends." },
  { q: "Where are you located?", a: "7500 14th Ave #8, Sacramento, CA 95820. Tap \"Get directions\" for a map." },
  { q: "My check engine light is on. Can you tell me what's wrong?", a: "Yes. We run check engine diagnostics on BMWs and tell you in plain language what the code means and what it will take to fix." },
  { q: "Do I need an appointment?", a: "Call " + PHONE + " first so we can plan time for your car and give you a drop-off time." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "M Power Motors",
  description: "Independent BMW specialist in Sacramento: BMW major service, engine and transmission repair, brakes, cooling system, suspension and check engine diagnostics.",
  telephone: "+1-916-457-8701",
  address: { "@type": "PostalAddress", streetAddress: "7500 14th Ave #8", addressLocality: "Sacramento", addressRegion: "CA", postalCode: "95820", addressCountry: "US" },
  openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:30", closes: "17:00" }],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.5", reviewCount: "34" },
  hasMap: MAPS,
};

function CallButton({ label, dark = false }: { label: string; dark?: boolean }) {
  return (
    <a href={TEL} className={`group btn inline-flex min-h-14 items-center justify-between gap-4 rounded-full py-2 pl-7 pr-2 text-lg font-bold ${dark ? "bg-cta text-ink hover:bg-cta-hover" : "bg-cta text-ink hover:bg-cta-hover shadow-[0_16px_32px_-16px_oklch(0.72_0.18_52/0.9)]"}`}>
      {label}
      <span className="nub grid h-10 w-10 place-items-center rounded-full bg-ink/10"><Icon name="phone" className="h-5 w-5" /></span>
    </a>
  );
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">Skip to content</a>

      <div className="hidden bg-brand text-sm text-white/85 md:block">
        <div className="mx-auto flex max-w-[1200px] items-center gap-6 px-6 py-2">
          <span className="inline-flex items-center gap-2"><Icon name="pin" className="h-4 w-4 text-cta" /> {ADDRESS}</span>
          <OpenNow />
          <span className="inline-flex items-center gap-2"><Icon name="car" className="h-4 w-4 text-cta" /> Independent BMW specialist</span>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-3 md:px-6">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand text-cta"><Icon name="gauge" className="h-5 w-5" /></span>
            <span className="leading-tight">
              <span className="block font-[family-name:var(--font-heading)] text-xl font-extrabold text-ink">M Power Motors</span>
              <span className="block text-xs font-semibold text-muted">BMW service &amp; repair · Sacramento</span>
            </span>
          </a>
          <nav aria-label="Main" className="hidden items-center gap-7 text-[15px] font-semibold text-ink lg:flex">
            <a href="#services" className="hover:text-[var(--accent-ink)]">Services</a>
            <a href="#reviews" className="hover:text-[var(--accent-ink)]">Reviews</a>
            <a href="#about" className="hover:text-[var(--accent-ink)]">Why us</a>
            <a href="#visit" className="hover:text-[var(--accent-ink)]">Visit</a>
            <a href="#faq" className="hover:text-[var(--accent-ink)]">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={TEL} className="hidden font-bold text-ink md:inline">{PHONE}</a>
            <a href={TEL} className="btn hidden min-h-12 items-center gap-2 rounded-full bg-cta px-5 font-bold text-ink hover:bg-cta-hover sm:inline-flex"><Icon name="phone" className="h-5 w-5" /> Call Now</a>
            <a href={TEL} aria-label={`Call ${PHONE}`} className="btn grid h-12 w-12 place-items-center rounded-full bg-cta text-ink sm:hidden"><Icon name="phone" className="h-5 w-5" /></a>
          </div>
        </div>
      </header>

      <main id="main">
        <section id="top" className="relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(60%_60%_at_85%_20%,oklch(0.95_0.04_60),transparent_70%)]" aria-hidden="true" />
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 pb-16 pt-12 md:px-6 md:pb-24 md:pt-20 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rise">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 text-sm font-semibold text-ink"><span className="h-2 w-2 rounded-full bg-cta" aria-hidden="true" /> Dealership alternative for BMW owners</p>
              <h1 className="text-[clamp(2.2rem,4.8vw,3.6rem)] font-extrabold tracking-tight">Independent BMW Repair &amp; Service in Sacramento</h1>
              <p className="mt-5 max-w-[56ch] text-lg text-muted md:text-xl">Dealership-quality work on your BMW at independent-shop prices. Owner Charlie and technician Brian handle major service, engine, transmission and cooling repairs with BMW parts, and they tell you straight what your car needs.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CallButton label={`Call ${PHONE}`} />
                <a href="#services" className="btn inline-flex min-h-14 items-center justify-center rounded-full border-2 border-brand px-7 text-lg font-bold text-ink hover:bg-brand hover:text-white">See BMW services</a>
              </div>
              <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-[15px] font-semibold text-ink">
                <Stars rating={4.5} className="h-5 w-5" /> <span>4.5</span><span className="text-line">|</span>
                <span>34 customer reviews</span><span className="text-line">|</span><span>BMW parts</span><span className="text-line">|</span><span>Mon-Fri from 7:30 a.m.</span>
              </p>
            </div>

            <div className="rise rise-2 rounded-[2rem] bg-brand/5 p-2 ring-1 ring-brand/10">
              <div className="rounded-[calc(2rem-0.5rem)] bg-white p-7 shadow-[0_30px_60px_-35px_oklch(0.3_0.02_260/0.35)] md:p-8">
                <p className="text-sm font-bold text-[var(--accent-ink)]">Quick facts</p>
                <ul className="mt-4 space-y-4">
                  <li className="flex gap-3"><Icon name="pin" className="h-6 w-6 shrink-0 text-[var(--accent-ink)]" /><span><span className="block font-semibold">{ADDRESS}</span><a href={DIRECTIONS} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold underline underline-offset-4">Get directions</a></span></li>
                  <li className="flex gap-3"><Icon name="clock" className="h-6 w-6 shrink-0 text-[var(--accent-ink)]" /><span><span className="block font-semibold">Mon-Fri, 7:30 a.m. - 5 p.m.</span><OpenNow className="text-sm text-muted" /></span></li>
                  <li className="flex gap-3"><Icon name="user" className="h-6 w-6 shrink-0 text-[var(--accent-ink)]" /><span className="font-semibold">Owner: Charlie</span></li>
                </ul>
                <figure className="mt-6 border-t border-line pt-5">
                  <Stars className="h-4 w-4" />
                  <blockquote className="mt-2 text-lg text-ink">&ldquo;Charlie did a great job on my BMW and was honest and fair.&rdquo;</blockquote>
                  <figcaption className="mt-1 text-sm text-muted">Customer review · BMW repair</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section aria-label="Why BMW owners choose M Power Motors" className="bg-brand text-white">
          <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4 md:px-6">
            {[
              { icon: "star" as IconName, t: "4.5 stars", s: "34 customer reviews" },
              { icon: "car" as IconName, t: "BMW specialist", s: "Independent, BMW-focused" },
              { icon: "cog" as IconName, t: "BMW parts", s: "For major scheduled service" },
              { icon: "dollar" as IconName, t: "Shop prices", s: "Not dealership rates" },
            ].map((x) => (
              <div key={x.t} className="flex items-start gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 text-cta"><Icon name={x.icon} className="h-6 w-6" /></span>
                <span><span className="block font-bold">{x.t}</span><span className="text-sm text-white/75">{x.s}</span></span>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
              <div>
                <p className="text-sm font-bold text-[var(--accent-ink)]">BMW services</p>
                <h2 className="mt-2 text-3xl font-extrabold md:text-[2.6rem]">Everything your BMW needs, without the dealer markup</h2>
              </div>
              <p className="text-lg text-muted">From scheduled major service to the cooling and suspension repairs every BMW eventually needs. Call about any of them and you will talk to someone who works on BMWs all day.</p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {services.map((s, i) => (
                <article key={s.title} className={`lift group flex gap-5 rounded-3xl border p-7 ${i === 0 ? "border-cta/60 bg-[oklch(0.98_0.02_70)]" : "border-line bg-white"}`}>
                  <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl ${i === 0 ? "bg-cta text-ink" : "bg-tint text-[var(--accent-ink)]"}`}><Icon name={s.icon} className="h-7 w-7" /></span>
                  <div className="flex flex-col">
                    <h3 className="text-xl font-bold">{s.title}{i === 0 && <span className="ml-2 align-middle rounded-full bg-brand px-2.5 py-0.5 text-xs font-bold text-white">Most booked</span>}</h3>
                    <p className="mt-2 flex-1 text-muted">{s.body}</p>
                    <a href={TEL} className="mt-4 inline-flex items-center gap-2 font-bold text-ink">Call about this <span className="nub grid h-7 w-7 place-items-center rounded-full bg-tint"><Icon name="arrow" className="h-4 w-4" /></span></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-bold text-[var(--accent-ink)]">Reviews</p>
                <h2 className="mt-2 text-3xl font-extrabold md:text-[2.6rem]">Rated 4.5 from 34 customer reviews</h2>
                <p className="mt-3 max-w-[58ch] text-lg text-muted">BMW owners keep saying the same thing: honest, fair, expert work. Charlie and Brian get mentioned by name.</p>
              </div>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="group btn inline-flex min-h-12 shrink-0 items-center gap-3 rounded-full border-2 border-brand bg-white py-1.5 pl-5 pr-1.5 font-bold text-ink">Find us on Google Maps <span className="nub grid h-9 w-9 place-items-center rounded-full bg-tint"><Icon name="arrow" className="h-4 w-4" /></span></a>
            </div>
            <div className="mt-12 grid gap-5 lg:grid-cols-[1.2fr_1fr_1fr]">
              <div className="flex flex-col justify-between rounded-3xl bg-brand p-8 text-white">
                <div>
                  <p className="font-[family-name:var(--font-heading)] text-6xl font-extrabold">4.5</p>
                  <Stars rating={4.5} className="mt-2 h-6 w-6" />
                  <p className="mt-3 text-white/80">Average from 34 customer reviews</p>
                </div>
                <ul className="mt-8 space-y-2 text-white/90">
                  {["Honest", "Fair pricing", "Expert BMW work", "Charlie & Brian by name"].map((t) => (
                    <li key={t} className="flex items-center gap-2"><Icon name="check" className="h-5 w-5 text-cta" /> {t}</li>
                  ))}
                </ul>
              </div>
              {reviews.map((r) => (
                <figure key={r.title} className="flex flex-col rounded-3xl border border-line bg-white p-7">
                  <Stars className="h-5 w-5" />
                  <p className="mt-4 font-[family-name:var(--font-heading)] text-xl font-bold">{r.title}</p>
                  <blockquote className="mt-2 flex-1 text-lg text-ink">&ldquo;{r.text}&rdquo;</blockquote>
                  <figcaption className="mt-4 text-sm text-muted">Customer review · {r.job}</figcaption>
                </figure>
              ))}
            </div>
            <p className="mt-5 text-sm text-muted">Quotes paraphrased from customer reviews; rating from 34 Yelp reviews.</p>
          </div>
        </section>

        <section id="about" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-12 px-5 md:px-6 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-sm font-bold text-[var(--accent-ink)]">Why M Power Motors</p>
              <h2 className="mt-2 text-3xl font-extrabold md:text-[2.6rem]">A BMW shop run by people you can name</h2>
              <div className="mt-6 space-y-4 text-lg text-muted">
                <p>M Power Motors is an independent BMW specialist on 14th Avenue in Sacramento, run by owner Charlie. The idea is simple: BMW owners deserve dealership-quality service and repair without dealership pricing or a service desk standing between them and the people doing the work.</p>
                <p>Because the shop focuses on BMWs, the team knows these cars inside out, from the cooling systems that tend to fail to the suspension parts that wear and the electronics behind a check engine light. Major services are done with BMW parts.</p>
                <p>Customers mention Charlie and technician Brian by name, and they keep coming back to the same words: honest, fair, amazing work.</p>
              </div>
              <div className="mt-8"><CallButton label={`Talk to Charlie: ${PHONE}`} /></div>
            </div>
            <div className="grid content-start gap-4 sm:grid-cols-2">
              {why.map((d) => (
                <div key={d.t} className="rounded-3xl border border-line bg-white p-6">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[oklch(0.96_0.04_65)] text-[var(--accent-ink)]"><Icon name={d.icon} className="h-6 w-6" /></span>
                  <h3 className="mt-4 text-lg font-bold">{d.t}</h3>
                  <p className="mt-2 text-muted">{d.s}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <p className="text-sm font-bold text-[var(--accent-ink)]">How it works</p>
            <h2 className="mt-2 max-w-[30ch] text-3xl font-extrabold md:text-[2.6rem]">Four steps from warning light to fixed</h2>
            <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s.title} className="relative">
                  <div className="flex items-center gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-cta font-[family-name:var(--font-heading)] text-xl font-extrabold text-ink">{i + 1}</span>
                    {i < steps.length - 1 && <span className="hidden h-px flex-1 bg-brand/20 lg:block" aria-hidden="true" />}
                  </div>
                  <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-muted">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="visit" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 md:px-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-bold text-[var(--accent-ink)]">Visit the shop</p>
              <h2 className="mt-2 text-3xl font-extrabold md:text-[2.6rem]">On 14th Avenue, serving BMW owners across Sacramento</h2>
              <p className="mt-4 text-lg text-muted">{ADDRESS}. BMW owners come from all over greater Sacramento for a specialist who isn&apos;t the dealership.</p>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {["14th Avenue area", "Greater Sacramento", "95820"].map((a) => (
                  <li key={a} className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-4 py-2 font-semibold"><Icon name="pin" className="h-4 w-4 text-[var(--accent-ink)]" /> {a}</li>
                ))}
              </ul>
              <a href={DIRECTIONS} target="_blank" rel="noopener noreferrer" className="btn mt-7 inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-brand px-5 font-bold text-ink hover:bg-brand hover:text-white"><Icon name="nav" className="h-5 w-5" /> Get directions</a>
            </div>
            <div className="rounded-[2rem] bg-brand/5 p-2 ring-1 ring-brand/10">
              <div className="overflow-hidden rounded-[calc(2rem-0.5rem)] bg-white">
                <iframe title="Map to M Power Motors, 7500 14th Ave, Sacramento" src="https://maps.google.com/maps?q=7500%2014th%20Ave%2C%20Sacramento%2C%20CA%2095820&z=15&output=embed" className="h-[340px] w-full md:h-[400px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="bg-tint py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-10 px-5 md:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="text-sm font-bold text-[var(--accent-ink)]">FAQ</p>
              <h2 className="mt-2 text-3xl font-extrabold md:text-[2.6rem]">BMW owners usually ask</h2>
              <p className="mt-4 text-lg text-muted">Something else on your mind? Call Charlie at {PHONE}.</p>
            </div>
            <div className="space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="rounded-2xl border border-line bg-white px-6 py-5">
                  <summary className="flex items-center justify-between gap-6 text-lg font-bold text-ink">
                    {f.q}
                    <span className="plus grid h-9 w-9 shrink-0 place-items-center rounded-full bg-tint text-xl leading-none text-ink" aria-hidden="true">+</span>
                  </summary>
                  <p className="mt-3 max-w-[65ch] text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand text-white">
          <div className="mx-auto grid max-w-[1200px] items-center gap-8 px-5 py-14 md:px-6 md:py-20 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="text-3xl font-extrabold text-white md:text-[2.7rem]">BMW due for service or showing a warning? Call Charlie at {PHONE}</h2>
              <p className="mt-4 text-lg text-white/80">7500 14th Ave #8, Sacramento. Monday to Friday, 7:30 a.m. to 5 p.m.</p>
            </div>
            <div className="flex flex-col gap-3">
              <CallButton label={`Call ${PHONE}`} dark />
              <a href={DIRECTIONS} target="_blank" rel="noopener noreferrer" className="btn inline-flex min-h-14 items-center justify-center gap-2.5 rounded-full border-2 border-white/60 px-7 text-lg font-bold text-white hover:bg-white hover:text-ink"><Icon name="nav" className="h-5 w-5" /> Get directions</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white pb-28 pt-14 md:pb-10">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 md:grid-cols-2 md:px-6 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="font-[family-name:var(--font-heading)] text-2xl font-extrabold">M Power Motors</p>
            <p className="mt-3 max-w-[40ch] text-muted">Independent BMW service and repair in Sacramento. Owner: Charlie.</p>
          </div>
          <div>
            <p className="font-bold">Contact</p>
            <ul className="mt-3 space-y-2 text-muted">
              <li><a href={TEL} className="font-semibold text-ink">{PHONE}</a></li>
              <li>7500 14th Ave #8<br />Sacramento, CA 95820</li>
              <li><a href={DIRECTIONS} target="_blank" rel="noopener noreferrer" className="hover:text-ink">Get directions</a></li>
            </ul>
          </div>
          <div>
            <p className="font-bold">BMW services</p>
            <ul className="mt-3 space-y-2 text-muted">
              {services.map((s) => <li key={s.title}><a href="#services" className="hover:text-ink">{s.title}</a></li>)}
            </ul>
          </div>
          <div>
            <p className="font-bold">Hours</p>
            <ul className="mt-3 space-y-2 text-muted">
              <li>Monday-Friday: 7:30 a.m. - 5 p.m.</li>
              <li>Saturday-Sunday: Closed</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-[1200px] border-t border-line px-5 pt-6 text-sm text-muted md:px-6">© {new Date().getFullYear()} M Power Motors · {ADDRESS}. BMW is a trademark of BMW AG; M Power Motors is an independent repair shop.</div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-line bg-white p-3 md:hidden">
        <a href={TEL} className="btn inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cta font-bold text-ink"><Icon name="phone" className="h-5 w-5" /> Call</a>
        <a href={DIRECTIONS} target="_blank" rel="noopener noreferrer" className="btn inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand font-bold text-white"><Icon name="nav" className="h-5 w-5" /> Directions</a>
      </div>
    </>
  );
}
