import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface NavigationProps {
  currentPage?: string;
  showActions?: boolean;
  transparent?: boolean;
}

interface ContactButtonProps {
  textToCopy: string;
  displayText: string;
  href: string;
  icon: React.ReactNode;
  className?: string;
}

const ContactButton = ({
  textToCopy,
  displayText,
  href,
  icon,
  className = "",
}: ContactButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <a
      href={href}
      onClick={handleCopy}
      className={`relative flex items-center gap-3 transition-colors ${className}`}
    >
      {icon}
      <div className="flex-1 min-w-0">
        <span className="block font-light truncate">{displayText}</span>
      </div>
      <div
        className={`
        absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-gray-900 text-white text-xs whitespace-nowrap
        transition-all duration-200
        ${
          copied
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-2 pointer-events-none"
        }
      `}
      >
        {copied ? "Copied!" : "Copy to clipboard"}
      </div>
    </a>
  );
};

const Navigation = ({
  currentPage,
  showActions = true,
  transparent = false,
}: NavigationProps) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isHomepage = router.pathname === "/" || router.pathname === "";

  const phoneNumber = "(778) 200-8827";
  const phoneNumberClean = "7782008827";
  const email = "dream@vanbathsnkitchens.com";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { text: "Home", url: "/" },
    { text: "Kitchens", url: "/kitchens" },
    { text: "Bathrooms", url: "/bathrooms" },
    { text: "About", url: "/about" },
    { text: "Contact", url: "/contact" },
  ];

  const navClasses = `
    w-full z-50 transition-all duration-300
    ${
      isHomepage && !isScrolled
        ? "absolute bg-transparent"
        : "fixed bg-white shadow-sm"
    }
  `;

  return (
    <nav className={navClasses}>
      {/* Mobile Navigation */}
      <div className="lg:hidden">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-light tracking-tight">
              <span
                className={
                  isHomepage && !isScrolled ? "text-white" : "text-black"
                }
              >
                Cloud
              </span>
              <span
                className={
                  isHomepage && !isScrolled ? "text-white/80" : "text-gray-500"
                }
              >
                {" "}
                Bathrooms & Kitchens
              </span>
            </span>
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 transition-colors ${
              isHomepage && !isScrolled ? "text-white" : "text-gray-800"
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="bg-white border-t border-gray-100">
            {navLinks.map((link) => (
              <Link
                key={link.url}
                href={link.url}
                className="block px-6 py-3 text-gray-800 hover:bg-gray-50 active:bg-gray-100 transition-colors font-light"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.text}
              </Link>
            ))}
            <div className="px-6 py-4 border-t border-gray-100 space-y-3">
              <ContactButton
                textToCopy={phoneNumber}
                displayText={phoneNumber}
                href={`tel:${phoneNumberClean}`}
                icon={<Phone className="w-4 h-4 text-gray-500" />}
                className="text-gray-800"
              />
              <ContactButton
                textToCopy={email}
                displayText={email}
                href={`mailto:${email}`}
                icon={<Mail className="w-4 h-4 text-gray-500" />}
                className="text-gray-800"
              />
            </div>
          </div>
        )}
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:block max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-light tracking-tight">
              <span
                className={
                  isHomepage && !isScrolled ? "text-white" : "text-black"
                }
              >
                Cloud
              </span>
              <span
                className={
                  isHomepage && !isScrolled ? "text-white/80" : "text-gray-500"
                }
              >
                {" "}
                Bathrooms & Kitchens
              </span>
            </span>
          </Link>

          <div className="flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.url}
                href={link.url}
                className={`text-sm tracking-wide ${
                  isHomepage && !isScrolled
                    ? "text-white hover:text-white/70"
                    : "text-gray-800 hover:text-gray-500"
                } transition-colors font-light`}
              >
                {link.text}
              </Link>
            ))}

            <div className="flex items-center gap-6 pl-6 border-l border-gray-200">
              <ContactButton
                textToCopy={phoneNumber}
                displayText={phoneNumber}
                href={`tel:${phoneNumberClean}`}
                icon={<Phone className="w-4 h-4" />}
                className={
                  isHomepage && !isScrolled
                    ? "text-white hover:text-white/70"
                    : "text-gray-800 hover:text-gray-500"
                }
              />
              <ContactButton
                textToCopy={email}
                displayText={email}
                href={`mailto:${email}`}
                icon={<Mail className="w-4 h-4" />}
                className={
                  isHomepage && !isScrolled
                    ? "text-white hover:text-white/70"
                    : "text-gray-800 hover:text-gray-500"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
