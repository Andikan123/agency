import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  IoArrowForward,
  IoLocationOutline,
  IoSearchOutline,
  IoSchoolOutline,
} from "react-icons/io5";

import universities from "../data/universities";

const UniversityCard = ({ university }) => {
  return (
    <article className="group overflow-hidden bg-white shadow-sm ring-1 ring-slate-200 transition duration-500 hover:-translate-y-1 hover:shadow-2xl">
      {/* Image */}
      <div className="relative h-[280px] overflow-hidden">
        <img
          src={university.image}
          alt={university.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <div className="absolute left-5 top-5">
          <span className="bg-white px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#173B5F]">
            {university.type}
          </span>
        </div>

        <div className="absolute bottom-5 left-5 right-5">
          <p className="mb-1 text-xs uppercase tracking-[0.18em] text-white/70">
            {university.shortName}
          </p>

          <h3 className="font-serif text-2xl text-white">{university.name}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-5 flex items-center gap-2 text-sm text-slate-500">
          <IoLocationOutline className="text-[#C79A45]" />
          {university.location}
        </div>

        <p className="mb-6 line-clamp-3 text-sm leading-7 text-slate-600">
          {university.description}
        </p>

        <div className="mb-6 grid grid-cols-2 gap-4 border-y border-slate-100 py-5">
          <div>
            <p className="text-xl font-semibold text-[#173B5F]">
              {university.programCount}
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-slate-400">
              Programs
            </p>
          </div>

          <div>
            <p className="text-xl font-semibold text-[#173B5F]">
              {university.nationalities}
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-slate-400">
              Nationalities
            </p>
          </div>
        </div>

        <Link
          to={`/universities/${university.id}`}
          className="group/link inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#173B5F]"
        >
          Explore University
          <IoArrowForward className="transition-transform duration-300 group-hover/link:translate-x-1" />
        </Link>
      </div>
    </article>
  );
};

const Universities = () => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");

  const filteredUniversities = useMemo(() => {
    return universities.filter((university) => {
      const matchesSearch =
        university.name.toLowerCase().includes(search.toLowerCase()) ||
        university.location.toLowerCase().includes(search.toLowerCase());

      const matchesType = type === "All" || university.type === type;

      return matchesSearch && matchesType;
    });
  }, [search, type]);

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#173B5F] px-6 py-28 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#C79A45]">
              Explore your options
            </p>

            <h1 className="font-serif text-5xl leading-tight text-white md:text-6xl lg:text-7xl">
              Find the university
              <br />
              <span className="text-[#C79A45]">that fits your future.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/70">
              Explore universities across North Cyprus and discover the
              programs, environment and opportunities that match your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          <div className="border-r border-slate-200 px-6 py-8 text-center">
            <p className="text-3xl font-semibold text-[#173B5F]">
              {universities.length}+
            </p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-slate-400">
              Universities
            </p>
          </div>

          <div className="border-r-0 border-slate-200 px-6 py-8 text-center md:border-r">
            <p className="text-3xl font-semibold text-[#173B5F]">100+</p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-slate-400">
              Programs
            </p>
          </div>

          <div className="border-r border-t border-slate-200 px-6 py-8 text-center md:border-t-0">
            <p className="text-3xl font-semibold text-[#173B5F]">50+</p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-slate-400">
              Countries
            </p>
          </div>

          <div className="border-t border-slate-200 px-6 py-8 text-center md:border-t-0">
            <p className="text-3xl font-semibold text-[#173B5F]">1:1</p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-slate-400">
              Guidance
            </p>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="px-6 py-12 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 lg:flex-row">
          <div className="relative flex-1">
            <IoSearchOutline className="absolute left-5 top-1/2 -translate-y-1/2 text-lg text-slate-400" />

            <input
              type="text"
              placeholder="Search universities or cities..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-14 w-full border border-slate-200 bg-slate-50 pl-14 pr-5 text-sm outline-none transition focus:border-[#C79A45]"
            />
          </div>

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="h-14 border border-slate-200 bg-slate-50 px-5 text-sm text-slate-600 outline-none focus:border-[#C79A45]"
          >
            <option value="All">All Universities</option>
            <option value="Private University">Private Universities</option>
            <option value="Public University">Public Universities</option>
          </select>
        </div>
      </section>

      {/* Universities */}
      <section className="px-6 pb-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#C79A45]">
                Our university partners
              </p>

              <h2 className="font-serif text-4xl text-[#173B5F]">
                Explore universities
              </h2>
            </div>

            <p className="hidden text-sm text-slate-400 md:block">
              {filteredUniversities.length} universities
            </p>
          </div>

          {filteredUniversities.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredUniversities.map((university) => (
                <UniversityCard key={university.id} university={university} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <IoSchoolOutline className="mx-auto mb-4 text-4xl text-slate-300" />

              <h3 className="font-serif text-2xl text-[#173B5F]">
                No universities found
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Try another university name or location.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#C79A45]">
            Need help choosing?
          </p>

          <h2 className="font-serif text-4xl text-[#173B5F] md:text-5xl">
            Not sure which university is right for you?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500">
            Tell us about your academic background and career goals. We'll help
            you find universities and programs that make sense for you.
          </p>

          <Link
            to="/apply"
            className="mt-8 inline-flex items-center gap-3 bg-[#173B5F] px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#C79A45]"
          >
            Get Free Guidance
            <IoArrowForward />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Universities;
