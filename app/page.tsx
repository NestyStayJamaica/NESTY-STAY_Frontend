import { modules, portals, vendors } from "@/lib/platform-data";

const stats = [
  ["11", "Role portals"],
  ["6", "Delivery phases"],
  ["5", "Provider adapters"],
  ["1 hr", "Booking hold"]
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f7f3] text-[#17201b]">
      <section className="border-b border-[#d8d5cc] bg-[#fdfbf6]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-8 lg:grid-cols-[1fr_420px] lg:px-8">
          <div className="flex flex-col justify-between gap-10">
            <nav className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="grid size-11 place-items-center rounded-md bg-[#173f35] text-lg font-black text-white">
                  NS
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#55706a]">
                    NestyStay
                  </p>
                  <p className="text-sm text-[#66726c]">Jamaica and Caribbean platform</p>
                </div>
              </div>
              <div className="rounded-md border border-[#d8d5cc] bg-white px-3 py-2 text-sm font-semibold text-[#36524b]">
                Frontend + .NET backend scaffold
              </div>
            </nav>

            <div className="max-w-4xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#b06a2c]">
                Full platform launch plan
              </p>
              <h1 className="text-4xl font-black leading-tight text-[#13221d] md:text-6xl">
                Trust-based rental, management, directory, and wellness operations in one command center.
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-[#52635e]">
                This scaffold merges the signed Statement of Work with the full master spec:
                bookings, eKYC, payments, badges, founding tiers, QR access, police wellness,
                property management, association governance, directories, and provider failover.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-4">
              {stats.map(([value, label]) => (
                <div key={label} className="rounded-md border border-[#d8d5cc] bg-white p-4">
                  <p className="text-2xl font-black text-[#173f35]">{value}</p>
                  <p className="text-sm text-[#66726c]">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-md border border-[#d8d5cc] bg-[#173f35] p-5 text-white shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#ffd39d]">
              Phase 1 flow
            </p>
            <div className="mt-5 space-y-3">
              {[
                "Book Now popup",
                "Alibaba eKYC starts",
                "Booking held as PENDING",
                "APPROVED after verification",
                "Stripe captures payment",
                "QR access released"
              ].map((item, index) => (
                <div key={item} className="flex gap-3 rounded-md bg-white/10 p-3">
                  <span className="grid size-7 shrink-0 place-items-center rounded bg-[#ffd39d] text-sm font-black text-[#173f35]">
                    {index + 1}
                  </span>
                  <p className="font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <div className="grid gap-4 lg:grid-cols-3">
          {modules.map((module) => (
            <article key={module.key} className="rounded-md border border-[#d8d5cc] bg-white p-5">
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#b06a2c]">
                    {module.phase}
                  </p>
                  <h2 className="mt-1 text-xl font-black">{module.name}</h2>
                </div>
                <span className="rounded bg-[#e7f0ea] px-2 py-1 text-xs font-bold text-[#173f35]">
                  {module.status}
                </span>
              </div>
              <p className="min-h-20 text-sm leading-6 text-[#52635e]">{module.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {module.capabilities.map((capability) => (
                  <span key={capability} className="rounded border border-[#e2dfd6] px-2 py-1 text-xs text-[#52635e]">
                    {capability}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#d8d5cc] bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-8 lg:grid-cols-[360px_1fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#b06a2c]">
              Portals
            </p>
            <h2 className="mt-2 text-3xl font-black">Role-based access from day one.</h2>
            <p className="mt-4 text-sm leading-6 text-[#52635e]">
              Every planned audience has a defined portal boundary so the backend claims,
              frontend routes, and future database permissions stay aligned.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {portals.map((portal) => (
              <div key={portal.role} className="rounded-md border border-[#d8d5cc] bg-[#fdfbf6] p-4">
                <h3 className="font-black">{portal.name}</h3>
                <p className="mt-2 text-sm leading-6 text-[#52635e]">{portal.purpose}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {vendors.map((vendor) => (
            <article key={vendor.kind} className="rounded-md border border-[#d8d5cc] bg-white p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#b06a2c]">
                {vendor.kind}
              </p>
              <h3 className="mt-2 font-black">{vendor.primary}</h3>
              <p className="mt-3 text-sm leading-6 text-[#52635e]">{vendor.notes}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
