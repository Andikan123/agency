import { Link } from "react-router-dom";
import { IoArrowForward, IoCheckmarkCircle } from "react-icons/io5";
import hero from "../assets/images/hero.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#F7F9FC]">
      {/* BACKGROUND DECORATION */}

      <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#C79A45]/10 blur-3xl" />

      <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-[#173B5F]/10 blur-3xl" />

      <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-[1700px] grid-cols-1 items-center gap-16 px-6 pb-20 pt-32 lg:grid-cols-[1fr_0.9fr] lg:px-12 lg:pb-24">
        {/* ================= CONTENT ================= */}

        <div className="max-w-3xl">
          {/* EYEBROW */}

          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-10 bg-[#C79A45]" />

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C79A45]">
              Your journey starts here
            </span>
          </div>

          {/* HEADING */}

          <h1 className="font-[Raleway] text-5xl font-medium leading-[1.02] tracking-[-0.03em] text-[#173B5F] sm:text-6xl lg:text-7xl xl:text-[88px]">
            Your future starts
            <span className="block text-[#C79A45]">with the right</span>
            university.
          </h1>

          {/* DESCRIPTION */}

          <p className="mt-8 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            We help students from Nigeria discover the right university and
            program in North Cyprus — with guidance from your first application
            to your arrival on campus.
          </p>

          {/* BUTTONS */}

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/apply"
              className="
                group
                flex
                items-center
                justify-center
                gap-3
                bg-[#173B5F]
                px-7
                py-4
                text-sm
                font-semibold
                uppercase
                tracking-[0.12em]
                text-white
                transition
                duration-300
                hover:bg-[#C79A45]
              "
            >
              Start Your Application
              <IoArrowForward
                className="transition-transform duration-300 group-hover:translate-x-1"
                size={18}
              />
            </Link>

            <Link
              to="/universities"
              className="
                flex
                items-center
                justify-center
                border
                border-gray-300
                bg-white
                px-7
                py-4
                text-sm
                font-semibold
                uppercase
                tracking-[0.12em]
                text-[#173B5F]
                transition
                duration-300
                hover:border-[#173B5F]
              "
            >
              Explore Universities
            </Link>
          </div>

          {/* TRUST POINTS */}

          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-4">
            {[
              "University guidance",
              "Application support",
              "Visa guidance",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <IoCheckmarkCircle className="text-[#C79A45]" size={18} />

                <span className="text-sm text-gray-600">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ================= IMAGE ================= */}

        <div className="relative mx-auto w-full max-w-[620px]">
          {/* IMAGE */}

          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={hero}
              alt="International student studying in North Cyprus"
              className="h-full w-full object-cover"
            />

            {/* OVERLAY */}

            <div className="absolute inset-0 bg-gradient-to-t from-[#173B5F]/60 via-transparent to-transparent" />
          </div>

          {/* FLOATING CARD */}

          <div className="absolute -bottom-8 -left-8 hidden w-64 bg-white p-6 shadow-2xl sm:block">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C79A45]">
              Study Abroad
            </p>

            <p className="mt-2 text-xl font-medium leading-7 text-[#173B5F]">
              From Nigeria to your new campus.
            </p>

            <Link
              to="/how-it-works"
              className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#173B5F]"
            >
              How it works
              <IoArrowForward size={15} />
            </Link>
          </div>

          {/* DECORATIVE NUMBER */}

          <div className="absolute -right-6 top-10 hidden text-[120px] font-light leading-none text-[#173B5F]/5 lg:block">
            01
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
