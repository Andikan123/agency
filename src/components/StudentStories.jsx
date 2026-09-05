import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";

const StudentStories = () => {
  const stories = [
    {
      name: "Student Story",
      university: "North Cyprus",
      quote:
        "The process felt much easier because I had someone guiding me through each step.",
      image: "/images/student-story-1.jpg",
    },
    {
      name: "Student Story",
      university: "North Cyprus",
      quote:
        "Finding the right university was the biggest decision. Having guidance made a huge difference.",
      image: "/images/student-story-2.jpg",
    },
    {
      name: "Student Story",
      university: "North Cyprus",
      quote:
        "From the application to preparing for my journey, I knew what to expect.",
      image: "/images/student-story-3.jpg",
    },
  ];

  return (
    <section className="bg-white px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C79A45]">
              Student stories
            </p>

            <h2 className="mt-5 font-[Raleway] text-4xl font-medium text-[#173B5F] sm:text-5xl">
              Real journeys. New beginnings.
            </h2>
          </div>

          <Link
            to="/student-stories"
            className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#173B5F] hover:text-[#C79A45]"
          >
            Read more stories
            <IoArrowForward size={17} />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {stories.map((story) => (
            <article
              key={story.quote}
              className="group overflow-hidden bg-[#F7F9FC]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={story.image}
                  alt={story.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-7">
                <p className="text-sm leading-7 text-gray-600">
                  “{story.quote}”
                </p>

                <div className="mt-6 border-t border-gray-200 pt-5">
                  <p className="text-sm font-semibold text-[#173B5F]">
                    {story.name}
                  </p>

                  <p className="mt-1 text-xs uppercase tracking-wider text-[#C79A45]">
                    {story.university}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentStories;
