import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";
import neareast from "../assets/images/neareast.png";
import kyrenia from "../assets/images/kyrenia.jpg";
import ciu from "../assets/images/ciu.png";

const FeaturedUniversities = () => {
  const universities = [
    {
      name: "Near East University",
      location: "Nicosia, North Cyprus",
      image: neareast,
    },
    {
      name: "University of Kyrenia",
      location: "Kyrenia, North Cyprus",
      image: kyrenia,
    },
    {
      name: "Cyprus International University",
      location: "Nicosia, North Cyprus",
      image: ciu,
    },
  ];

  return (
    <section className="bg-white px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C79A45]">
              Find your destination
            </p>

            <h2 className="mt-5 font-[Raleway] text-4xl font-medium text-[#173B5F] sm:text-5xl">
              Explore leading universities.
            </h2>
          </div>

          <Link
            to="/universities"
            className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.1em] text-[#173B5F] transition hover:text-[#C79A45]"
          >
            View all universities
            <IoArrowForward size={17} />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {universities.map((university) => (
            <Link key={university.name} to="/universities" className="group">
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={university.image}
                  alt={university.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 p-7 text-white">
                  <p className="text-xs uppercase tracking-[0.15em] text-[#C79A45]">
                    University
                  </p>

                  <h3 className="mt-2 text-2xl font-medium">
                    {university.name}
                  </h3>

                  <p className="mt-2 text-sm text-white/70">
                    {university.location}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedUniversities;
