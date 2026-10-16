export default function GlobalNetwork() {
  return (
    <section id="locations" className="container-page">
      <div className="flex flex-col items-center gap-[1.5rem] text-center md:gap-[2rem]">
        <h2 className="max-w-[43.5rem] text-[2.8rem] leading-[1.424] font-medium text-ink md:text-[3.2rem] lg:text-[3.5rem]">
          Huge Global Network of Fast VPN
        </h2>
        <p className="max-w-[55.5rem] text-[1.5rem] leading-[1.875] text-muted md:text-[1.6rem]">
          See{" "}
          <span className="font-medium">LaslesVPN</span> everywhere to make it
          easier for you when you move locations.
        </p>
      </div>

      {/* World map — 1060 × 539 at design size */}
      <div className="mt-[5rem] px-0 md:mt-[10rem] md:px-[4rem] lg:mt-[15.581rem]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/huge-global.svg"
          alt="World map showing LaslesVPN server locations"
          width={1060}
          height={539}
          className="h-auto w-full"
        />
      </div>
    </section>
  );
}
