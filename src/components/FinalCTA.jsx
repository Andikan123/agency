import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";

const FinalCTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#173B5F] px-6 py-24 lg:px-12 lg:py-32">
      {/* DECORATION */}

      <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-white/10" />

      <div className="absolute -bottom-60 -left-40 h-[500px] w-[500px] rounded-full border border-[#C79A45]/20" />

      <div className="relative mx-auto max-w-[1100px] text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C79A45]">
          Your next chapter
        </p>

        <h2 className="mt-6 font-[Raleway] text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-6xl">
          Ready to start your journey
          <span className="block text-[#C79A45]">to North Cyprus?</span>
        </h2>

        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/60">
          Tell us about your goals and let us help you find the right university
          and program for your future.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/apply"
            className="group flex items-center justify-center gap-3 bg-[#C79A45] px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-[#173B5F]"
          >
            Start Your Application
            <IoArrowForward
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>

          <Link
            to="/contact"
            className="flex items-center justify-center border border-white/30 px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:border-white"
          >
            Talk to us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
