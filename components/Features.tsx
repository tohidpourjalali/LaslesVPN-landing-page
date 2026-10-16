import { featureItems } from "@/lib/content";
import { CheckCircleIcon } from "./icons";

export default function Features() {
  return (
    <section
      id="features"
      className="container-page flex flex-col items-center justify-between gap-[4rem] pb-[8rem] md:flex-row md:gap-[6rem] md:pb-[9rem] lg:pb-[12.673rem]"
    >
      {/* Illustration — left on desktop, stacked above the copy on mobile */}
      <div className="flex w-full justify-center md:w-1/2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/illustration-features.svg"
          alt="LaslesVPN protection illustration"
          width={510}
          height={416}
          className="mx-auto h-auto w-full max-w-[42rem] md:max-w-[51rem]"
        />
      </div>

      {/* Copy */}
      <div className="flex w-full max-w-[43.5rem] flex-col gap-[2rem] md:w-1/2">
        <h2 className="text-[2.8rem] leading-[1.424] font-medium text-ink md:text-[3.2rem] lg:text-[3.5rem]">
          We Provide Many Features You Can Use
        </h2>
        <p className="text-[1.5rem] leading-[1.875] text-muted md:text-[1.6rem]">
          You can explore the features that we provide with fun and have their
          own functions each feature.
        </p>
        <ul className="flex flex-col gap-[1.5rem]">
          {featureItems.map((item) => (
            <li
              key={item}
              className="flex items-center gap-[1.08rem] text-[1.4rem] leading-[2.142] text-muted"
            >
              <CheckCircleIcon className="h-[2.5rem] w-[2.5rem] shrink-0 text-check" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
