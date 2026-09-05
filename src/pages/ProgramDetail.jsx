import { Link, Navigate, useParams } from "react-router-dom";
import {
  IoArrowForward,
  IoCheckmarkCircleOutline,
  IoSchoolOutline,
  IoTimeOutline,
  IoLocationOutline,
} from "react-icons/io5";

import programs from "../data/programs";
import universities from "../data/universities";

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

const ProgramDetail = () => {
  const { id } = useParams();

  const program = programs.find((item) => item.id === id);

  if (!program) {
    return <Navigate to="/programs" replace />;
  }

  const availableUniversities = universities.filter((university) =>
    program.universities.includes(university.id),
  );

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative h-[560px] overflow-hidden">
        <img
          src={program.image}
          alt={program.name}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-6 pb-20 lg:px-12">
          <div className="max-w-4xl">
            <Link
              to="/programs"
              className="mb-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/70 transition hover:text-white"
            >
              ← Back to programs
            </Link>

            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#C79A45]">
              {program.category}
            </p>

            <h1 className="font-serif text-5xl leading-tight text-white md:text-6xl lg:text-7xl">
              {program.name}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/70">
              {program.description}
            </p>
          </div>
        </div>
      </section>

      {/* PROGRAM STATS */}
      <section className="bg-[#173B5F]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          <div className="border-r border-white/10 px-6 py-6">
            <p className="text-xl font-semibold text-white">{program.level}</p>

            <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/50">
              Level
            </p>
          </div>

          <div className="border-r-0 px-6 py-6 md:border-r md:border-white/10">
            <p className="text-xl font-semibold text-white">
              {program.duration}
            </p>

            <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/50">
              Duration
            </p>
          </div>

          <div className="border-r border-t border-white/10 px-6 py-6 md:border-t-0">
            <p className="text-xl font-semibold text-white">
              {availableUniversities.length}
            </p>

            <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/50">
              Universities
            </p>
          </div>

          <div className="border-t border-white/10 px-6 py-6 md:border-t-0">
            <p className="text-xl font-semibold text-white">{program.degree}</p>

            <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/50">
              Qualification
            </p>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#C79A45]">
              Program overview
            </p>

            <h2 className="font-serif text-4xl leading-tight text-[#173B5F] md:text-5xl">
              Build knowledge.
              <br />
              Build your career.
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600">
              {program.overview}
            </p>
          </div>

          <div className="border border-slate-200 bg-slate-50 p-7">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#173B5F]">
              Program details
            </p>

            <InfoRow
              icon={<IoSchoolOutline />}
              label="Level"
              value={program.level}
            />

            <InfoRow
              icon={<IoTimeOutline />}
              label="Duration"
              value={program.duration}
            />

            <InfoRow
              icon={<IoSchoolOutline />}
              label="Degree"
              value={program.degree}
            />

            <InfoRow
              icon={<IoLocationOutline />}
              label="Location"
              value="North Cyprus"
            />
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-slate-50 px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#C79A45]">
              What you'll experience
            </p>

            <h2 className="font-serif text-4xl text-[#173B5F] md:text-5xl">
              Program highlights
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {program.highlights.map((highlight, index) => (
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

      {/* CAREERS */}
      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#C79A45]">
              Where it can take you
            </p>

            <h2 className="font-serif text-4xl text-[#173B5F] md:text-5xl">
              Career opportunities
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {program.careerOptions.map((career, index) => (
              <div key={index} className="border border-slate-200 p-6">
                <p className="mb-3 text-xs font-semibold text-[#C79A45]">
                  0{index + 1}
                </p>

                <p className="font-serif text-xl text-[#173B5F]">{career}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UNIVERSITIES */}
      <section className="bg-slate-50 px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#C79A45]">
              Where you can study
            </p>

            <h2 className="font-serif text-4xl text-[#173B5F] md:text-5xl">
              Universities offering {program.name}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {availableUniversities.map((university) => (
              <Link
                key={university.id}
                to={`/universities/${university.id}`}
                className="group overflow-hidden bg-white shadow-sm ring-1 ring-slate-200 transition duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={university.image}
                    alt={university.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                  <div className="absolute bottom-4 left-5">
                    <p className="text-[10px] uppercase tracking-[0.15em] text-white/60">
                      {university.shortName}
                    </p>

                    <h3 className="font-serif text-xl text-white">
                      {university.name}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center justify-between p-5">
                  <span className="text-xs text-slate-500">
                    {university.location}
                  </span>

                  <IoArrowForward className="text-[#C79A45] transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#C79A45]">
                Admission
              </p>

              <h2 className="font-serif text-4xl text-[#173B5F] md:text-5xl">
                What you'll need
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500">
                Admission requirements can vary depending on your chosen
                university and academic background. Our team can help you
                understand exactly what you need.
              </p>
            </div>

            <div>
              {program.requirements.map((requirement, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 border-b border-slate-200 py-5"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#173B5F] text-xs text-white">
                    {index + 1}
                  </span>

                  <p className="text-sm text-slate-600">{requirement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#173B5F] px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#C79A45]">
            Take the next step
          </p>

          <h2 className="font-serif text-4xl leading-tight text-white md:text-5xl">
            Ready to study {program.name}?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/60">
            Start your application and let us help you find the right
            university, understand the requirements and prepare your
            application.
          </p>

          <Link
            to="/apply"
            className="mt-8 inline-flex items-center gap-3 bg-[#C79A45] px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-[#173B5F]"
          >
            Start Your Application
            <IoArrowForward />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ProgramDetail;
