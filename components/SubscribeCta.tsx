export default function SubscribeCta() {
  return (
    <section className="mx-auto w-full max-w-[114rem]">
      <div className="shadow-card flex flex-col items-center gap-[3rem] rounded-card bg-white px-[3rem] py-[5rem] text-center md:flex-row md:justify-between md:gap-[4rem] md:px-[7rem] md:py-[5.85rem] md:text-left">
        <div className="md:max-w-[70rem]">
          <h2 className="mb-[1.5rem] text-[2.8rem] leading-[1.424] font-medium text-ink md:mb-[2rem] md:text-[3.2rem] lg:text-[3.5rem]">
            Subscribe Now for Get Special Features!
          </h2>
          <p className="text-[1.5rem] leading-[1.875] text-muted md:text-[1.6rem]">
            Let&apos;s subscribe with us and find the fun.
          </p>
        </div>

        <a
          href="#"
          className="shadow-main hover:shadow-main-hover shrink-0 rounded-card bg-primary px-[5rem] py-[1.5rem] text-[1.6rem] font-bold text-white transition-all duration-300 hover:bg-primary-tint md:px-[6.5rem] md:py-[1.75rem]"
        >
          Subscribe Now
        </a>
      </div>
    </section>
  );
}
