export default function Hero() {
  return (
    <section
      id="about"
      className="container-page grid items-center gap-[4rem] pt-[4rem] pb-[6rem] md:grid-cols-2 md:gap-[6rem] md:pt-[6.849rem] md:pb-[8rem] lg:grid-cols-[55.5rem_1fr] lg:gap-0 lg:pt-[6.849rem]"
    >
      {/* Copy */}
      <div className="flex flex-col">
        <h1 className="mb-[1rem] text-[3.6rem] leading-[1.4] font-medium text-ink md:mb-[2rem] md:text-[4.2rem] lg:text-[5rem]">
          Want anything to be easy with{" "}
          <span className="font-bold">LaslesVPN</span>.
        </h1>
        <p className="mb-[3rem] max-w-[55.5rem] text-[1.5rem] leading-[1.875] text-muted md:mb-[5rem] md:text-[1.6rem]">
          Provide a network for all your needs with ease and fun using{" "}
          <span className="font-medium">LaslesVPN</span> discover interesting
          features from us.
        </p>
        <a
          href="#pricing"
          className="shadow-main hover:shadow-main-hover w-fit rounded-card bg-primary px-[5.35rem] py-[1.35rem] text-[1.6rem] font-bold text-white transition-all duration-300 hover:bg-primary-tint md:px-[7.75rem] md:py-[1.75rem]"
        >
          Get Started
        </a>
      </div>

      {/* Illustration */}
      <div className="flex justify-center xl:translate-x-[6.7rem]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/illustration-hero.svg"
          alt="Person browsing securely with LaslesVPN"
          width={612}
          height={383}
          className="mx-auto h-auto w-full max-w-[46rem] md:max-w-none"
        />
      </div>
    </section>
  );
}
