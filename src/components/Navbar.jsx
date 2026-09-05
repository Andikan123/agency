import { useState } from "react";
import {
  IoChevronDown,
  IoClose,
  IoGlobeOutline,
  IoMenu,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../assets/images/willandlogo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    {
      name: "UNIVERSITIES",
      path: "/universities",
    },
    {
      name: "PROGRAMS",
      path: "/programs",
    },
    {
      name: "STUDY IN CYPRUS",
      path: "/study-in-north-cyprus",
    },
    {
      name: "HOW IT WORKS",
      path: "/how-it-works",
    },
  ];

  const moreLinks = [
    {
      name: "ABOUT US",
      path: "/about",
    },
    {
      name: "STUDENT STORIES",
      path: "/student-stories",
    },
    {
      name: "FAQ",
      path: "/faq",
    },
    {
      name: "CONTACT",
      path: "/contact",
    },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <header className="fixed left-0 top-0 z-50 w-full border-b border-gray-100 bg-white">
        <div className="mx-auto flex h-20 max-w-[1700px]">
          {/* ================= 1. LOGO ================= */}

          <div className="flex w-[220px] shrink-0 items-center px-8">
            <Link to="/">
              <img src={logo} alt="Agency Logo" className="w-36" />
            </Link>
          </div>

          {/* ================= 2. NAV LINKS ================= */}

          <div className="flex flex-1 items-center justify-center">
            <nav className="hidden items-center gap-7 xl:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="
          whitespace-nowrap
          text-[13px]
          font-medium
          tracking-[0.04em]
          text-[#173B5F]
          transition
          duration-300
          hover:text-[#C79A45]
        "
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* ================= 3. MORE + LANGUAGE + APPLY ================= */}

          <div className="flex shrink-0 items-center">
            {/* MORE */}

            <div className="group relative hidden xl:block px-5">
              <button
                className="
            flex
            items-center
            gap-1
            whitespace-nowrap
            text-[13px]
            font-medium
            tracking-[0.04em]
            text-[#173B5F]
          "
              >
                MORE
                <IoChevronDown
                  size={13}
                  className="
              transition-transform
              duration-300
              group-hover:rotate-180
            "
                />
              </button>

              {/* MORE DROPDOWN */}

              <div
                className="
            invisible
            absolute
            right-0
            top-full
            mt-5
            w-72
            translate-y-2
            bg-white
            p-6
            opacity-0
            shadow-xl
            ring-1
            ring-black/5
            transition-all
            duration-300
            group-hover:visible
            group-hover:translate-y-0
            group-hover:opacity-100
          "
              >
                <div className="flex flex-col">
                  {moreLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="
                  border-b
                  border-gray-100
                  py-4
                  text-[12px]
                  font-medium
                  tracking-[0.08em]
                  text-[#173B5F]
                  transition
                  duration-300
                  hover:pl-2
                  hover:text-[#C79A45]
                "
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* LANGUAGE */}

            <div className="group relative hidden xl:block px-5">
              <button
                className="
            flex
            items-center
            gap-1
            whitespace-nowrap
            text-[13px]
            font-medium
            tracking-[0.08em]
            text-[#173B5F]
          "
              >
                <IoGlobeOutline size={17} />
                EN
                <IoChevronDown
                  size={13}
                  className="
              transition-transform
              duration-300
              group-hover:rotate-180
            "
                />
              </button>

              {/* LANGUAGE DROPDOWN */}

              <div
                className="
            invisible
            absolute
            right-0
            top-full
            mt-5
            w-36
            translate-y-2
            overflow-hidden
            bg-white
            opacity-0
            shadow-xl
            ring-1
            ring-black/10
            transition-all
            duration-300
            group-hover:visible
            group-hover:translate-y-0
            group-hover:opacity-100
          "
              >
                <button
                  className="
              block
              w-full
              border-b
              border-gray-100
              px-4
              py-3
              text-left
              text-[12px]
              uppercase
              tracking-wide
              text-[#173B5F]
              hover:bg-gray-50
              hover:text-[#C79A45]
            "
                >
                  English
                </button>

                <button
                  className="
              block
              w-full
              px-4
              py-3
              text-left
              text-[12px]
              uppercase
              tracking-wide
              text-[#173B5F]
              hover:bg-gray-50
              hover:text-[#C79A45]
            "
                >
                  Türkçe
                </button>
              </div>
            </div>

            {/* APPLY */}

            {/* ================= APPLY ================= */}

            <div className="group relative hidden xl:block">
              {/* APPLY BUTTON */}

              <Link
                to="/apply"
                className="
      relative
      z-20
      flex
      h-20
      w-[150px]
      items-center
      justify-center
      overflow-hidden
      bg-[#173B5F]
      text-center
    "
              >
                <span className="text-[12px] font-medium uppercase tracking-[0.15em] text-white">
                  APPLY NOW
                </span>
              </Link>

              {/* ================= APPLY PANEL ================= */}

              <div
                className="
      invisible
      absolute
      right-0
      top-full
      z-10
      w-[380px]
      translate-x-full
      bg-white
      opacity-0
      shadow-2xl
      ring-1
      ring-black/5
      transition-all
      duration-500
      ease-out

      group-hover:visible
      group-hover:translate-x-0
      group-hover:opacity-100
    "
              >
                {/* HEADER */}

                <div className="bg-[#173B5F] px-7 py-6">
                  <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#C79A45]">
                    Start your journey
                  </p>

                  <h3 className="mt-2 font-[Raleway] text-2xl font-medium text-white">
                    Study in North Cyprus
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/60">
                    Take the first step toward your international education.
                  </p>
                </div>

                {/* CONTENT */}

                <div className="p-7">
                  <div className="space-y-5">
                    {/* STEP 1 */}

                    <div className="flex gap-4">
                      <div
                        className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              bg-[#C79A45]/10
              text-xs
              font-semibold
              text-[#C79A45]
            "
                      >
                        01
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-[#173B5F]">
                          Choose your program
                        </h4>

                        <p className="mt-1 text-xs leading-5 text-gray-500">
                          Find a university and program that fits your goals.
                        </p>
                      </div>
                    </div>

                    {/* STEP 2 */}

                    <div className="flex gap-4">
                      <div
                        className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              bg-[#C79A45]/10
              text-xs
              font-semibold
              text-[#C79A45]
            "
                      >
                        02
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-[#173B5F]">
                          Submit your application
                        </h4>

                        <p className="mt-1 text-xs leading-5 text-gray-500">
                          We'll guide you through the required documents.
                        </p>
                      </div>
                    </div>

                    {/* STEP 3 */}

                    <div className="flex gap-4">
                      <div
                        className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              bg-[#C79A45]/10
              text-xs
              font-semibold
              text-[#C79A45]
            "
                      >
                        03
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-[#173B5F]">
                          Begin your journey
                        </h4>

                        <p className="mt-1 text-xs leading-5 text-gray-500">
                          Get ready to begin your studies in North Cyprus.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}

                  <Link
                    to="/apply"
                    className="
          group/apply
          mt-7
          flex
          w-full
          items-center
          justify-between
          bg-[#C79A45]
          px-5
          py-4
          text-xs
          font-semibold
          uppercase
          tracking-[0.12em]
          text-white
          transition
          hover:bg-[#173B5F]
        "
                  >
                    Start Application
                    <span className="text-lg transition-transform duration-300 group-hover/apply:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE BUTTON */}

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="
        ml-auto
        px-5
        text-[#173B5F]
        xl:hidden
      "
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
          </button>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}

      {isMobileMenuOpen && (
        <div
          className="
            fixed
            inset-0
            z-40
            overflow-y-auto
            bg-white
            pt-20
            text-[#173B5F]
            xl:hidden
          "
        >
          <nav className="flex flex-col px-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="
                  border-b
                  border-gray-200
                  py-5
                  text-[13px]
                  font-medium
                  tracking-[0.08em]
                  transition
                  hover:text-[#C79A45]
                "
              >
                {link.name}
              </Link>
            ))}

            {moreLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="
                  border-b
                  border-gray-200
                  py-5
                  text-[13px]
                  font-medium
                  tracking-[0.08em]
                  transition
                  hover:text-[#C79A45]
                "
              >
                {link.name}
              </Link>
            ))}

            {/* MOBILE APPLY */}

            <Link
              to="/apply"
              onClick={() => setIsMobileMenuOpen(false)}
              className="
                mt-6
                flex
                items-center
                justify-center
                bg-[#173B5F]
                px-6
                py-4
                text-[12px]
                font-medium
                uppercase
                tracking-[0.15em]
                text-white
              "
            >
              START YOUR APPLICATION
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
