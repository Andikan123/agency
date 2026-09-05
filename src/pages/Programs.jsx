import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  IoArrowForward,
  IoBookOutline,
  IoSearchOutline,
} from "react-icons/io5";

import programs from "../data/programs";

const categories = [
  "All",
  "Health Sciences",
  "Engineering & Technology",
  "Business",
  "Business & Maritime",
];

const ProgramCard = ({ program }) => {
  return (
    <article className="group overflow-hidden bg-white shadow-sm ring-1 ring-slate-200 transition duration-500 hover:-translate-y-1 hover:shadow-2xl">
      {/* Image */}
      <div className="relative h-[250px] overflow-hidden">
        <img
          src={program.image}
          alt={program.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

        <div className="absolute left-5 top-5">
          <span className="bg-white px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#173B5F]">
            {program.category}
          </span>
        </div>

        <div className="absolute bottom-5 left-5">
          <p className="text-xs uppercase tracking-[0.16em] text-white/60">
            {program.level}
          </p>

          <h3 className="mt-1 font-serif text-2xl text-white">
            {program.name}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="mb-5 text-sm leading-7 text-slate-600">
          {program.description}
        </p>

        <div className="mb-6 grid grid-cols-2 gap-4 border-y border-slate-100 py-5">
          <div>
            <p className="text-sm font-semibold text-[#173B5F]">
              {program.duration}
            </p>

            <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-slate-400">
              Duration
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-[#173B5F]">
              {program.universities.length}
            </p>

            <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-slate-400">
              Universities
            </p>
          </div>
        </div>

        <Link
          to={`/programs/${program.id}`}
          className="group/link inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#173B5F]"
        >
          Explore Program
          <IoArrowForward className="transition-transform duration-300 group-hover/link:translate-x-1" />
        </Link>
      </div>
    </article>
  );
};

const Programs = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredPrograms = useMemo(() => {
    return programs.filter((program) => {
      const matchesSearch =
        program.name.toLowerCase().includes(search.toLowerCase()) ||
        program.category.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || program.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#173B5F] px-6 py-28 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#C79A45]">
              Find your direction
            </p>

            <h1 className="font-serif text-5xl leading-tight text-white md:text-6xl lg:text-7xl">
              Choose a program
              <br />
              <span className="text-[#C79A45]">built for your future.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/70">
              Explore programs across health sciences, engineering, business and
              other disciplines at universities in North Cyprus.
            </p>
          </div>
        </div>
      </section>

      {/* SEARCH */}
      <section className="border-b border-slate-200 bg-white px-6 py-10 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 lg:flex-row">
          <div className="relative flex-1">
            <IoSearchOutline className="absolute left-5 top-1/2 -translate-y-1/2 text-lg text-slate-400" />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for a program..."
              className="h-14 w-full border border-slate-200 bg-slate-50 pl-14 pr-5 text-sm outline-none transition focus:border-[#C79A45]"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] transition ${
                  category === item
                    ? "bg-[#173B5F] text-white"
                    : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAM LIST */}
      <section className="px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#C79A45]">
                Explore programs
              </p>

              <h2 className="font-serif text-4xl text-[#173B5F]">
                Find your field
              </h2>
            </div>

            <p className="hidden text-sm text-slate-400 md:block">
              {filteredPrograms.length} programs
            </p>
          </div>

          {filteredPrograms.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredPrograms.map((program) => (
                <ProgramCard key={program.id} program={program} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <IoBookOutline className="mx-auto mb-4 text-4xl text-slate-300" />

              <h3 className="font-serif text-2xl text-[#173B5F]">
                No programs found
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Try another program or category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#C79A45]">
            Need some direction?
          </p>

          <h2 className="font-serif text-4xl text-[#173B5F] md:text-5xl">
            Not sure what to study?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500">
            Tell us about your academic background and career goals and we'll
            help you find a program that fits.
          </p>

          <Link
            to="/apply"
            className="mt-8 inline-flex items-center gap-3 bg-[#173B5F] px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#C79A45]"
          >
            Get Program Guidance
            <IoArrowForward />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Programs;
