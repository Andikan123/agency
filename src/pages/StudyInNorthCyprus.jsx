import { Link } from "react-router-dom";
import {
  IoArrowForward,
  IoCheckmarkCircleOutline,
  IoHomeOutline,
  IoLocationOutline,
  IoPeopleOutline,
  IoSchoolOutline,
  IoSunnyOutline,
  IoBusOutline,
  IoWalletOutline,
} from "react-icons/io5";

const benefits = [
  {
    icon: <IoSchoolOutline />,
    title: "International Education",
    text: "Study in an international academic environment with students from different parts of the world.",
  },
  {
    icon: <IoWalletOutline />,
    title: "Accessible Education",
    text: "Explore universities offering a wide range of programs and scholarship opportunities.",
  },
  {
    icon: <IoPeopleOutline />,
    title: "Multicultural Student Life",
    text: "Meet students from different cultures and build an international network.",
  },
  {
    icon: <IoSunnyOutline />,
    title: "Mediterranean Lifestyle",
    text: "Enjoy a beautiful island environment, warm weather and a relaxed coastal lifestyle.",
  },
];

const studentLife = [
  {
    icon: <IoHomeOutline />,
    title: "Accommodation",
    text: "Choose from university residences and other accommodation options depending on your university and budget.",
  },
  {
    icon: <IoBusOutline />,
    title: "Getting Around",
    text: "Students can use local transportation options to move between university campuses, cities and surrounding areas.",
  },
  {
    icon: <IoPeopleOutline />,
    title: "Community",
    text: "International student communities make it easier to meet people, make friends and settle into university life.",
  },
  {
    icon: <IoSunnyOutline />,
    title: "Lifestyle",
    text: "From beaches and cafés to historic towns and outdoor activities, there is plenty to experience outside the classroom.",
  },
];

const cities = [
  {
    name: "Nicosia",
    subtitle: "The capital",
    description:
      "A lively university city with shopping, restaurants, cultural attractions and several major universities.",
    image: "/images/nicosia.jpg",
  },
  {
    name: "Kyrenia",
    subtitle: "The coastal city",
    description:
      "A beautiful Mediterranean city known for its harbour, mountains, beaches and relaxed student lifestyle.",
    image: "/images/kyrenia.jpg",
  },
  {
    name: "Famagusta",
    subtitle: "The historic city",
    description:
      "A university city with a rich history, beaches and a strong student population.",
    image: "/images/famagusta.jpg",
  },
  {
    name: "Lefke",
    subtitle: "The peaceful side",
    description:
      "A quieter coastal town surrounded by nature and suited to students who prefer a peaceful environment.",
    image: "/images/lefke.jpg",
  },
];

const thingsToKnow = [
  "Universities offer programs across many academic disciplines.",
  "English is widely used as the language of instruction at international universities.",
  "Students come from many different countries and backgrounds.",
  "Accommodation options vary by university and location.",
  "Living costs depend heavily on your lifestyle, accommodation and location.",
  "Admission requirements vary depending on the university and program.",
];

const StudyInNorthCyprus = () => {
  return (
    <main className="bg-white">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative min-h-[680px] overflow-hidden">
        <img
          src="/images/north-cyprus.jpg"
          alt="North Cyprus"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />

        <div className="relative z-10 mx-auto flex min-h-[680px] max-w-7xl items-end px-6 pb-20 lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#C79A45]">
              Your guide to North Cyprus
            </p>

            <h1 className="font-serif text-5xl leading-[1.05] text-white md:text-6xl lg:text-7xl">
              Study somewhere
              <br />
              <span className="text-[#C79A45]">different.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
              Discover what it is like to study, live and build your future in
              North Cyprus.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/universities"
                className="inline-flex items-center justify-center gap-3 bg-[#C79A45] px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-[#173B5F]"
              >
                Explore Universities
                <IoArrowForward />
              </Link>

              <Link
                to="/apply"
                className="inline-flex items-center justify-center gap-3 border border-white/30 px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-[#173B5F]"
              >
                Get Free Guidance
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ====================================================== */}
      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C79A45]">
              Why North Cyprus?
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#173B5F] md:text-5xl">
              More than a place to study.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-9 text-slate-600">
              North Cyprus offers an international university experience in the
              Mediterranean. Students can choose from universities and programs
              across fields such as medicine, nursing, engineering, business,
              technology and more.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-500">
              But choosing where to study is about more than finding a
              university. It is also about finding a place where you can learn,
              live, meet people and grow.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          BENEFITS
      ====================================================== */}
      <section className="bg-slate-50 px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#C79A45]">
              The experience
            </p>

            <h2 className="font-serif text-4xl text-[#173B5F] md:text-5xl">
              Why students choose North Cyprus
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group border border-slate-200 bg-white p-7 transition duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-8 flex h-12 w-12 items-center justify-center bg-[#173B5F] text-2xl text-[#C79A45] transition group-hover:bg-[#C79A45] group-hover:text-white">
                  {benefit.icon}
                </div>

                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  0{index + 1}
                </p>

                <h3 className="font-serif text-2xl text-[#173B5F]">
                  {benefit.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          STUDENT LIFE
      ====================================================== */}
      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="relative">
              <img
                src="/images/student-life-cyprus.jpg"
                alt="Student life in North Cyprus"
                className="h-[560px] w-full object-cover"
              />

              <div className="absolute -bottom-6 -right-6 hidden bg-[#173B5F] p-7 text-white md:block">
                <p className="text-3xl font-serif text-[#C79A45]">Learn.</p>

                <p className="mt-1 text-3xl font-serif">Live.</p>

                <p className="mt-1 text-3xl font-serif">Grow.</p>
              </div>
            </div>

            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#C79A45]">
                Beyond the classroom
              </p>

              <h2 className="font-serif text-4xl leading-tight text-[#173B5F] md:text-5xl">
                What is student life like?
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-500">
                University life is not just lectures and assignments. Your
                environment plays a major role in your overall experience.
              </p>

              <div className="mt-10 space-y-7">
                {studentLife.map((item, index) => (
                  <div key={index} className="flex gap-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-slate-200 text-xl text-[#C79A45]">
                      {item.icon}
                    </div>

                    <div>
                      <h3 className="font-serif text-xl text-[#173B5F]">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-slate-500">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CITIES
      ====================================================== */}
      <section className="bg-[#173B5F] px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#C79A45]">
              Find your environment
            </p>

            <h2 className="font-serif text-4xl text-white md:text-5xl">
              Explore the cities of North Cyprus
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/60">
              Different cities offer different experiences. Where you study can
              shape your student life just as much as your university.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {cities.map((city) => (
              <article
                key={city.name}
                className="group overflow-hidden bg-white"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                  <div className="absolute bottom-5 left-5">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-white/60">
                      {city.subtitle}
                    </p>

                    <h3 className="mt-1 font-serif text-3xl text-white">
                      {city.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-sm leading-7 text-slate-500">
                    {city.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          THINGS TO KNOW
      ====================================================== */}
      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#C79A45]">
                Before you apply
              </p>

              <h2 className="font-serif text-4xl leading-tight text-[#173B5F] md:text-5xl">
                Things you should know.
              </h2>

              <p className="mt-6 text-sm leading-7 text-slate-500">
                Choosing to study abroad is a big decision. We believe students
                should understand both the opportunities and the practical
                realities before making that decision.
              </p>
            </div>

            <div>
              {thingsToKnow.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 border-b border-slate-200 py-6 first:border-t"
                >
                  <IoCheckmarkCircleOutline className="mt-0.5 shrink-0 text-xl text-[#C79A45]" />

                  <p className="text-sm leading-7 text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW WE HELP
      ====================================================== */}
      <section className="bg-slate-50 px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#C79A45]">
                You don't have to figure it out alone
              </p>

              <h2 className="font-serif text-4xl leading-tight text-[#173B5F] md:text-5xl">
                From choosing a program
                <br />
                to starting university.
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-slate-500">
                Our job is to simplify the journey. We help students compare
                universities, choose programs, understand admission requirements
                and prepare their applications.
              </p>

              <Link
                to="/how-it-works"
                className="mt-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.17em] text-[#173B5F]"
              >
                See how it works
                <IoArrowForward />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-px bg-slate-200">
              {[
                ["01", "Choose a program"],
                ["02", "Compare universities"],
                ["03", "Prepare your documents"],
                ["04", "Submit your application"],
              ].map(([number, text]) => (
                <div key={number} className="bg-white p-7">
                  <p className="text-xs font-semibold text-[#C79A45]">
                    {number}
                  </p>

                  <p className="mt-8 font-serif text-xl text-[#173B5F]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="bg-[#173B5F] px-6 py-28 lg:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <IoLocationOutline className="mx-auto text-4xl text-[#C79A45]" />

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#C79A45]">
            Your Cyprus journey starts here
          </p>

          <h2 className="mt-5 font-serif text-4xl leading-tight text-white md:text-6xl">
            Could North Cyprus
            <br />
            be right for you?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/60">
            Tell us what you want to study and where you are coming from. We'll
            help you explore your options.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/apply"
              className="inline-flex items-center justify-center gap-3 bg-[#C79A45] px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-[#173B5F]"
            >
              Start Your Application
              <IoArrowForward />
            </Link>

            <Link
              to="/universities"
              className="inline-flex items-center justify-center gap-3 border border-white/20 px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-[#173B5F]"
            >
              Explore Universities
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default StudyInNorthCyprus;
