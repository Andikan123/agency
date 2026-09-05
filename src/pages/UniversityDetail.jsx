import { Link, Navigate, useParams } from "react-router-dom";
import {
  IoArrowForward,
  IoCheckmarkCircleOutline,
  IoLocationOutline,
  IoSchoolOutline,
  IoTimeOutline,
} from "react-icons/io5";

import universities from "../data/universities";

const Stat = ({ value, label }) => {
  return (
    <div className="border-r border-white/10 px-6 py-5 last:border-r-0">
      <p className="text-2xl font-semibold text-white">{value}</p>

      <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/50">
        {label}
      </p>
    </div>
  );
};

const InfoRow = ({ icon, label, value }) => {
  return (
    <div className="flex items-center justify-between border-b border-slate-100 py-4 last:border-b-0">
      <div className="flex items-center gap-3">
        <span className="text-lg text-[#C79A45]">{icon}</span>

        <span className="text-sm text-slate-500">{label}</span>
      </div>

      <span className="text-sm font-medium text-[#173B5F]">{value}</span>
    </div>
  );
};

const UniversityDetail = () => {
  const { id } = useParams();

  /*
   * This is the key part.
   *
   * Example:
   * /universities/near-east-university
   *
   * id = "near-east-university"
   *
   * Then we find that university inside universities.js.
   */
  const university = universities.find((item) => item.id === id);

  // If someone enters an invalid university URL
  if (!university) {
    return <Navigate to="/universities" replace />;
  }

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative h-[600px] overflow-hidden">
        <img
          src={university.image}
          alt={university.name}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-6 pb-20 lg:px-12">
          <div className="max-w-4xl">
            <Link
              to="/universities"
              className="mb-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/70 transition hover:text-white"
            >
              ← Back to universities
            </Link>

            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#C79A45]">
              {university.shortName} · {university.type}
            </p>

            <h1 className="font-serif text-5xl leading-tight text-white md:text-6xl lg:text-7xl">
              {university.name}
            </h1>

            <div className="mt-6 flex items-center gap-2 text-sm text-white/70">
              <IoLocationOutline className="text-[#C79A45]" />

              {university.location}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#173B5F]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          <Stat value={university.established} label="Established" />

          <Stat value={university.students} label="Students" />

          <Stat value={university.programCount} label="Programs" />

          <Stat value={university.nationalities} label="Nationalities" />
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#C79A45]">
              About the university
            </p>

            <h2 className="font-serif text-4xl leading-tight text-[#173B5F] md:text-5xl">
              A place to build your
              <br />
              next chapter.
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600">
              {university.description}
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              Our team can help you understand the admission requirements,
              available programs, scholarship opportunities and application
              process for this university.
            </p>
          </div>

          {/* At a glance */}
          <div className="border border-slate-200 bg-slate-50 p-7">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#173B5F]">
              At a glance
            </p>

            <InfoRow
              icon={<IoLocationOutline />}
              label="Location"
              value={university.location}
            />

            <InfoRow
              icon={<IoSchoolOutline />}
              label="Type"
              value={university.type}
            />

            <InfoRow
              icon={<IoTimeOutline />}
              label="Established"
              value={university.established}
            />

            <InfoRow
              icon={<IoSchoolOutline />}
              label="Programs"
              value={university.programCount}
            />
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-slate-50 px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#C79A45]">
              Why consider {university.shortName}
            </p>

            <h2 className="font-serif text-4xl text-[#173B5F] md:text-5xl">
              What makes this university stand out?
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {university.highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex gap-4 border border-slate-200 bg-white p-6 transition hover:shadow-lg"
              >
                <IoCheckmarkCircleOutline className="mt-0.5 shrink-0 text-2xl text-[#C79A45]" />

                <p className="text-sm leading-7 text-slate-600">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#C79A45]">
                Study options
              </p>

              <h2 className="font-serif text-4xl text-[#173B5F] md:text-5xl">
                Popular programs
              </h2>
            </div>

            <Link
              to="/programs"
              className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#173B5F]"
            >
              View all programs
              <IoArrowForward />
            </Link>
          </div>

          <div className="overflow-hidden border border-slate-200">
            {/* Desktop heading */}
            <div className="hidden grid-cols-[1.5fr_1fr_1fr_auto] bg-[#173B5F] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-white md:grid">
              <span>Program</span>
              <span>Level</span>
              <span>Duration</span>
              <span></span>
            </div>

            {university.programs.map((program, index) => (
              <div
                key={index}
                className="grid gap-3 border-b border-slate-100 px-6 py-6 last:border-b-0 md:grid-cols-[1.5fr_1fr_1fr_auto] md:items-center"
              >
                <div>
                  <p className="font-serif text-xl text-[#173B5F]">
                    {program.name}
                  </p>

                  <p className="mt-1 text-xs text-slate-400 md:hidden">
                    {program.level} · {program.duration}
                  </p>
                </div>

                <p className="hidden text-sm text-slate-500 md:block">
                  {program.level}
                </p>

                <p className="hidden text-sm text-slate-500 md:block">
                  {program.duration}
                </p>

                <Link
                  to={`/programs/${program.name
                    .toLowerCase()
                    .replaceAll(" ", "-")}`}
                  className="mt-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#173B5F] md:mt-0"
                >
                  Explore
                  <IoArrowForward />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADMISSION */}
      <section className="bg-[#173B5F] px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#C79A45]">
                Your application
              </p>

              <h2 className="font-serif text-4xl leading-tight text-white md:text-5xl">
                Ready to explore
                <br />
                {university.name}?
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/60">
                Start your application journey with our team. We'll guide you
                through program selection, documentation, admission and the next
                steps.
              </p>

              <Link
                to="/apply"
                className="mt-8 inline-flex items-center gap-3 bg-[#C79A45] px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-[#173B5F]"
              >
                Start Your Application
                <IoArrowForward />
              </Link>
            </div>

            <div className="border border-white/10 p-7">
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                Application support
              </p>

              <div className="space-y-5">
                {[
                  "Choose the right program",
                  "Check admission requirements",
                  "Prepare your documents",
                  "Submit your application",
                ].map((step, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 border-b border-white/10 pb-5 last:border-b-0 last:pb-0"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#C79A45] text-xs text-[#C79A45]">
                      0{index + 1}
                    </span>

                    <p className="text-sm text-white/70">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default UniversityDetail;
