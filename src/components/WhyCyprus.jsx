import {
  IoGlobeOutline,
  IoSchoolOutline,
  IoCashOutline,
  IoShieldCheckmarkOutline,
} from "react-icons/io5";
import cyprus from "../assets/images/cyprus.jpg";

const WhyCyprus = () => {
  const benefits = [
    {
      icon: IoSchoolOutline,
      title: "Quality Education",
      text: "Access a wide range of undergraduate and postgraduate programs.",
    },
    {
      icon: IoCashOutline,
      title: "Affordable Options",
      text: "Explore study options designed to offer strong value for international students.",
    },
    {
      icon: IoGlobeOutline,
      title: "International Community",
      text: "Study alongside students from different countries and cultures.",
    },
    {
      icon: IoShieldCheckmarkOutline,
      title: "Student Lifestyle",
      text: "Experience a welcoming environment designed around student life.",
    },
  ];

  return (
    <section className="bg-[#F7F9FC] px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto grid max-w-[1400px] items-center gap-16 lg:grid-cols-2">
        {/* IMAGE */}

        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src={cyprus}
              alt="North Cyprus"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-8 -right-8 hidden w-56 bg-[#C79A45] p-7 text-white md:block">
            <p className="text-4xl font-light">CY</p>

            <p className="mt-2 text-xs uppercase tracking-[0.15em]">
              Your next chapter
            </p>
          </div>
        </div>

        {/* CONTENT */}

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C79A45]">
            Why North Cyprus?
          </p>

          <h2 className="mt-5 font-[Raleway] text-4xl font-medium leading-tight text-[#173B5F] sm:text-5xl">
            A new environment.
            <span className="block text-[#C79A45]">A new opportunity.</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-gray-600">
            North Cyprus has become an attractive destination for international
            students looking for quality education and an international student
            experience.
          </p>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div key={benefit.title}>
                  <Icon size={27} className="text-[#C79A45]" />

                  <h3 className="mt-4 font-medium text-[#173B5F]">
                    {benefit.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {benefit.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCyprus;
