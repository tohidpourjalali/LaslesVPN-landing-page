import { companies } from "@/lib/content";

export default function FeaturedIn() {
  return (
    <section
      aria-label="Featured in"
      className="container-page mt-[3.58rem] mb-[5rem] flex flex-wrap items-center justify-center gap-[3rem] py-[5rem] md:justify-between md:gap-[2rem] md:py-[7.416rem]"
    >
      {companies.map((company) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={company.name}
          src={company.src}
          alt={company.name}
          className="h-auto w-[10rem] opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:w-[12rem] md:w-[14rem] lg:w-auto"
        />
      ))}
    </section>
  );
}
