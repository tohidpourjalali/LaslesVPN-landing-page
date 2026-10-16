import { footerNav, socials } from "@/lib/content";
import { FacebookIcon, TwitterIcon, InstagramIcon } from "./icons";

const socialIcons = {
  facebook: FacebookIcon,
  twitter: TwitterIcon,
  instagram: InstagramIcon,
} as const;

export default function Footer() {
  return (
    <footer
      id="help"
      className="bg-surface -mt-[13rem] pt-[22rem] pb-[8rem] md:-mt-[11rem] md:pt-[20rem] lg:-mt-[10.8rem] lg:pt-[18rem] lg:pb-[10rem]"
    >
      <div className="container-page grid gap-[5rem] md:grid-cols-2 md:gap-[4rem]">
        {/* Brand column */}
        <div className="max-w-[34rem]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo.svg"
            alt="LaslesVPN"
            width={149}
            height={37}
            className="h-auto w-[13rem]"
          />
          <p className="my-[2rem] text-[1.5rem] leading-[1.875] text-muted md:mb-[3rem] md:text-[1.6rem]">
            <span className="font-medium">LaslesVPN</span> is a private virtual
            network that has unique features and has high security.
          </p>

          <div className="mb-[3rem] flex gap-[2rem]">
            {socials.map((social) => {
              const Icon = socialIcons[social.icon];
              return (
                <a
                  key={social.name}
                  href="#"
                  aria-label={social.name}
                  title={social.name}
                  className="shadow-social flex h-[3.36rem] w-[3.36rem] items-center justify-center rounded-full bg-white transition-shadow duration-300 hover:shadow-none"
                >
                  <Icon className="h-[1.9rem] w-[1.9rem] text-primary" />
                </a>
              );
            })}
          </div>

          <p className="text-[1.4rem] text-faint md:text-[1.6rem]">
            &copy;2020Lasles<span className="font-medium">VPN</span>
          </p>
        </div>

        {/* Link columns */}
        <nav
          aria-label="Footer"
          className="flex flex-wrap justify-between gap-[3rem] md:justify-end md:gap-[4rem] lg:gap-[6rem]"
        >
          {footerNav.map((column) => (
            <ul key={column.title} className="flex flex-col gap-[1rem]">
              <li className="mb-[0.5rem] text-[1.8rem] font-medium text-ink">
                {column.title}
              </li>
              {column.links.map((link) => (
                <li
                  key={link}
                  className="text-[1.4rem] leading-[1.8] text-muted md:text-[1.6rem]"
                >
                  <a href="#" className="transition-colors hover:text-primary">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </nav>
      </div>
    </footer>
  );
}
