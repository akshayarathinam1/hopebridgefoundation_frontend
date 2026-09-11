import Link from "next/link";
import Image from "next/image";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiYoutube,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Programs", href: "/programs" },
  { label: "Impact Stories", href: "/impact" },
  { label: "Blog & News", href: "/blog" },
  { label: "Annual Reports", href: "/impact#reports" },
];

const programs = [
  { label: "Education", href: "/programs/education" },
  { label: "Old Age Care", href: "/programs/old-age" },
  { label: "Orphanage Support", href: "/programs/orphanage" },
  { label: "Medical Help", href: "/programs/medical" },
  { label: "Social Services", href: "/programs/social-service" },
];

const socials = [
  { icon: FiFacebook, href: "#", label: "Facebook" },
  { icon: FiTwitter, href: "#", label: "Twitter" },
  { icon: FiInstagram, href: "#", label: "Instagram" },
  { icon: FiYoutube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white">
      {/* Main Footer */}
      <div className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5" aria-label="HopeBridge Foundation home">
              <div className="bg-white rounded-xl p-2 inline-flex items-center justify-center shadow-md">
                <Image
                  src="/assets/hopebridge_logo.jpeg"
                  alt="HopeBridge Foundation"
                  width={200}
                  height={200}
                  className="h-14 w-auto object-contain"
                  unoptimized
                />
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Building Hope • Changing Lives. Dedicated to uplifting vulnerable
              communities through education, care, and compassion since 2016.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-gray-300 hover:bg-brand-red hover:text-white transition-all duration-200"
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold tracking-widest uppercase text-white mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-brand-red transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="block w-1.5 h-1.5 rounded-full bg-brand-red opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-sm font-bold tracking-widest uppercase text-white mb-5">
              Programs
            </h3>
            <ul className="space-y-3">
              {programs.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-brand-red transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="block w-1.5 h-1.5 rounded-full bg-brand-red opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold tracking-widest uppercase text-white mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@hopebridgefoundation.org"
                  className="flex items-start gap-3 text-sm text-gray-400 hover:text-brand-red transition-colors group"
                >
                  <FiMail className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-red" aria-hidden="true" />
                  info@hopebridgefoundation.org
                </a>
              </li>
              <li>
                <a
                  href="tel:+911234567890"
                  className="flex items-start gap-3 text-sm text-gray-400 hover:text-brand-red transition-colors"
                >
                  <FiPhone className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-red" aria-hidden="true" />
                  +91 12345 67890
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <FiMapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-red" aria-hidden="true" />
                <span>123, Hope Street, Chennai, Tamil Nadu, India — 600001</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} HopeBridge Foundation. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            NITI Aayog Reg. No:{" "}
            <span className="text-gray-400">TN/2016/0123456</span>
            {" · "}
            80G Tax Benefit Applicable
          </p>
        </div>
      </div>
    </footer>
  );
}
