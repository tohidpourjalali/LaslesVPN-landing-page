import { plans } from "@/lib/content";
import { CheckCircleIcon } from "./icons";

export default function Pricing() {
  return (
    <section id="pricing" className="container-page mb-[8rem] md:mb-[11rem] lg:mb-[15rem]">
      <div className="mb-[4rem] flex flex-col items-center text-center md:mb-[6rem]">
        <h2 className="mb-[1.5rem] max-w-[43.5rem] text-[2.8rem] leading-[1.424] font-medium text-ink md:mb-[2rem] md:text-[3.2rem] lg:text-[3.5rem]">
          Choose Your Plan
        </h2>
        <p className="max-w-[55.5rem] text-[1.5rem] leading-[1.875] text-muted md:text-[1.6rem]">
          Let&apos;s choose the package that is best for you and explore it
          happily and cheerfully.
        </p>
      </div>

      <div className="flex flex-col items-center gap-[4rem] md:flex-row md:justify-center md:gap-[5rem]">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`flex w-full max-w-[40rem] flex-col items-center gap-[2.5rem] rounded-card border-2 md:max-w-[33rem] px-[2rem] py-[4rem] transition-colors duration-300 md:h-[72rem] md:flex-1 md:gap-[3rem] md:px-0 md:pt-[5rem] lg:h-[76rem] lg:pt-[7.963rem] ${
              plan.featured
                ? "border-primary shadow-card"
                : "border-line hover:border-primary"
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={plan.image}
              alt=""
              width={146}
              height={167}
              className="h-auto w-[12rem] md:w-[14.6rem]"
            />

            <h3 className="text-[1.8rem] leading-[1.6] font-medium text-ink">
              {plan.name}
            </h3>

            <ul className="flex flex-col gap-[1rem]">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-[2.01rem] text-[1.4rem] leading-[2.142] text-muted"
                >
                  <CheckCircleIcon className="h-[2.5rem] w-[2.5rem] shrink-0 text-check" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-col items-center gap-[2rem]">
              <p className="text-[2rem] leading-[1.2] font-medium text-ink md:text-[2.5rem]">
                {plan.price}
                {plan.period && (
                  <span className="text-muted">{plan.period}</span>
                )}
              </p>

              {plan.featured ? (
                <a
                  href="#"
                  className="shadow-main hover:shadow-main-hover rounded-pill bg-primary px-[4.5rem] py-[1rem] text-[1.5rem] font-bold text-white transition-all duration-300 hover:bg-primary-tint md:px-[6.294rem] md:py-[1.3rem] md:text-[1.6rem]"
                >
                  Select
                </a>
              ) : (
                <a
                  href="#"
                  className="rounded-pill border-2 border-primary px-[4.5rem] py-[1rem] text-[1.5rem] font-bold text-primary transition-colors duration-300 hover:bg-primary hover:text-white md:px-[6.294rem] md:py-[1.3rem] md:text-[1.6rem]"
                >
                  Select
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
