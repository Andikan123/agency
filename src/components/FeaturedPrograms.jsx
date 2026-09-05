import {
  IoArrowForward,
  IoMedicalOutline,
  IoCodeSlashOutline,
  IoBusinessOutline,
  IoConstructOutline,
  IoSchoolOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";

const FeaturedPrograms = () => {
  const programs = [
    {
      title: "Medicine",
      icon: IoMedicalOutline,
    },
    {
      title: "Nursing",
      icon: IoSchoolOutline,
    },
    {
      title: "Engineering",
      icon: IoConstructOutline,
    },
    {
      title: "Computer Science",
      icon: IoCodeSlashOutline,
    },
    {
      title: "Business",
      icon: IoBusinessOutline,
    },
  ];

  return (
    <section className="bg-[#F7F9FC] px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C79A45]">
            Find your path
          </p>

          <h2 className="mt-5 font-[Raleway] text-4xl font-medium text-[#173B5F] sm:text-5xl">
            Choose a program built around your future.
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-600">
            Explore popular fields of study and discover universities offering
            programs that match your goals.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {programs.map((program) => {
            const Icon = program.icon;

            return (
              <Link
                key={program.title}
                to="/programs"
                className="
                  group
                  border
                  border-gray-200
                  bg-white
                  p-7
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#C79A45]
                  hover:shadow-xl
                "
              >
                <Icon size={32} className="text-[#C79A45]" />

                <h3 className="mt-12 text-lg font-medium text-[#173B5F]">
                  {program.title}
                </h3>

                <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-500 transition group-hover:text-[#173B5F]">
                  Explore
                  <IoArrowForward
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-10">
          <Link
            to="/programs"
            className="inline-flex items-center gap-3 bg-[#173B5F] px-7 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#C79A45]"
          >
            Explore all programs
            <IoArrowForward size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;
