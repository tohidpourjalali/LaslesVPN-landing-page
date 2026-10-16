import { stats } from "@/lib/content";
import { UserIcon, LocationIcon, ServerIcon } from "./icons";

const icons = {
  user: UserIcon,
  location: LocationIcon,
  server: ServerIcon,
} as const;

export default function Stats() {
  return (
    <section className="container-page">
      <div className="shadow-card my-[6rem] flex flex-col rounded-card px-[2rem] py-[2rem] md:my-[8rem] md:flex-row md:justify-between md:py-[3.721rem] lg:my-[10.3rem] lg:mb-[9.58rem]">
        {stats.map((stat, i) => {
          const Icon = icons[stat.icon];
          return (
            <div
              key={stat.label}
              className={`flex h-auto items-center justify-start gap-[2.4rem] md:h-[12.5573rem] md:w-full md:justify-center md:gap-[3.65rem] ${
                i === 1
                  ? "my-[1.5rem] border-y-2 border-line-soft py-[2rem] md:my-0 md:border-y-0 md:border-l-2 md:border-r-2 md:py-0 md:mx-[1rem]"
                  : ""
              }`}
            >
              <span className="flex shrink-0 rounded-full bg-primary-light p-[1.55rem]">
                <Icon className="h-[2.5rem] w-[2.5rem] text-primary" />
              </span>
              <span className="flex flex-col md:flex-col">
                <span className="flex items-center text-[2rem] leading-[1.2] font-bold text-ink md:text-[2.5rem]">
                  {stat.value}
                  {stat.suffix}
                </span>
                <span className="text-[1.6rem] leading-[1.5] text-muted md:text-[2rem]">
                  {stat.label}
                </span>
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
