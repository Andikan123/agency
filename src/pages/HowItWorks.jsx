import { Link } from "react-router-dom";
import {
  IoArrowForward,
  IoCheckmarkCircleOutline,
  IoChatbubblesOutline,
  IoDocumentTextOutline,
  IoSchoolOutline,
  IoSearchOutline,
  IoAirplaneOutline,
  IoHomeOutline,
  IoPeopleOutline,
  IoShieldCheckmarkOutline,
  IoTimeOutline,
} from "react-icons/io5";

const steps = [
  {
    number: "01",
    icon: IoChatbubblesOutline,
    title: "Tell us what you want",
    description:
      "Start with a simple conversation. Tell us about your academic background, preferred course, budget and what you hope to achieve.",
    points: [
      "Free initial consultation",
      "Academic background review",
      "Course and career discussion",
    ],
  },
  {
    number: "02",
    icon: IoSearchOutline,
    title: "Find the right university",
    description:
      "We help you compare universities and programs based on your academic goals, budget, preferences and long-term plans.",
    points: [
      "University recommendations",
      "Program comparison",
      "Scholarship guidance",
    ],
  },
  {
    number: "03",
    icon: IoDocumentTextOutline,
    title: "Prepare your application",
    description:
      "Once you choose your preferred option, we guide you through the application process and help you understand the documents required.",
    points: [
      "Application guidance",
      "Document checklist",
      "Application review",
    ],
  },
  {
    number: "04",
    icon: IoSchoolOutline,
    title: "Receive your admission",
    description:
      "We keep you informed as your application progresses and help you understand the next steps once an admission decision is available.",
    points: [
      "Application follow-up",
      "Admission information",
      "Next-step guidance",
    ],
  },
  {
    number: "05",
    icon: IoAirplaneOutline,
    title: "Prepare for your journey",
    description:
      "Getting admitted is only part of the journey. We help you prepare for your move and understand what to expect before travelling.",
    points: [
      "Pre-departure guidance",
      "Travel preparation",
      "Arrival planning",
    ],
  },
  {
    number: "06",
    icon: IoPeopleOutline,
    title: "Start your new chapter",
    description:
      "Arrive in North Cyprus with a clearer understanding of your next steps and begin your university journey with confidence.",
    points: ["Arrival support", "Student guidance", "Continued assistance"],
  },
];

const supportAreas = [
  {
    icon: IoSchoolOutline,
    title: "University Selection",
    text: "We help you understand your options instead of simply choosing a university for you.",
  },
  {
    icon: IoDocumentTextOutline,
    title: "Application Guidance",
    text: "From understanding requirements to preparing your application, we help make the process easier to follow.",
  },
  {
    icon: IoShieldCheckmarkOutline,
    title: "Clear Information",
    text: "We aim to give you straightforward information so you can make informed decisions about your education.",
  },
  {
    icon: IoHomeOutline,
    title: "Student Preparation",
    text: "We help you prepare for the practical side of moving abroad and beginning student life.",
  },
];

const HowItWorks = () => {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#173B5F]">
        <div className="absolute inset-0">
          <img
            src="/images/student-cyprus.jpg"
            alt="International student in North Cyprus"
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-[#173B5F]/85" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
          <div className="max-w-3xl">
            <span className="mb-6 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C79A45]">
              <span className="h-px w-10 bg-[#C79A45]" />
              HOW IT WORKS
            </span>

            <h1 className="font-serif text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              From your first question
              <span className="block text-[#C79A45]">
                to your first day on campus.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Studying abroad can feel complicated. We break the journey into
              clear steps and stay with you through each stage of the process.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/apply"
                className="inline-flex items-center justify-center gap-3 bg-[#C79A45] px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-[#173B5F]"
              >
                Start Your Application
                <IoArrowForward className="text-base" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center border border-white/30 px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition hover:border-white hover:bg-white hover:text-[#173B5F]"
              >
                Talk To Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C79A45]">
              A SIMPLE PROCESS
            </span>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#173B5F] sm:text-5xl">
              You don't have to figure everything out alone.
            </h2>
          </div>

          <div>
            <p className="max-w-2xl text-base leading-8 text-slate-600">
              Choosing where to study, selecting a program, preparing documents
              and moving to another country are big decisions. Our role is to
              make the journey easier to understand, one step at a time.
            </p>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="bg-[#F7F5F1] px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C79A45]">
              YOUR JOURNEY
            </span>

            <h2 className="mt-5 font-serif text-4xl text-[#173B5F] sm:text-5xl">
              Six steps. One clear direction.
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Every student's journey is different, but the overall process
              follows a simple path.
            </p>
          </div>

          <div className="relative mt-16">
            {/* Timeline line */}
            <div className="absolute left-[27px] top-0 hidden h-full w-px bg-[#C79A45]/30 lg:block" />

            <div className="space-y-8 lg:space-y-10">
              {steps.map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.number}
                    className="relative grid gap-8 lg:grid-cols-[90px_1fr] lg:gap-12"
                  >
                    {/* Number */}
                    <div className="relative z-10 hidden lg:flex">
                      <div className="flex h-14 w-14 items-center justify-center border border-[#C79A45] bg-[#F7F5F1] font-serif text-lg text-[#173B5F]">
                        {step.number}
                      </div>
                    </div>

                    {/* Card */}
                    <div className="group border border-slate-200 bg-white p-7 transition duration-500 hover:-translate-y-1 hover:border-[#C79A45]/50 hover:shadow-xl sm:p-9">
                      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex items-start gap-5">
                          <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-[#173B5F] text-xl text-[#C79A45] transition group-hover:bg-[#C79A45] group-hover:text-white">
                            <Icon />
                          </div>

                          <div>
                            <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C79A45] lg:hidden">
                              STEP {step.number}
                            </div>

                            <h3 className="font-serif text-2xl text-[#173B5F] sm:text-3xl">
                              {step.title}
                            </h3>
                          </div>
                        </div>

                        <span className="hidden font-serif text-5xl text-slate-100 sm:block">
                          {step.number}
                        </span>
                      </div>

                      <p className="mt-6 max-w-3xl leading-8 text-slate-600">
                        {step.description}
                      </p>

                      <div className="mt-7 grid gap-3 sm:grid-cols-3">
                        {step.points.map((point) => (
                          <div
                            key={point}
                            className="flex items-center gap-2 text-sm text-slate-600"
                          >
                            <IoCheckmarkCircleOutline className="shrink-0 text-[#C79A45]" />
                            {point}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C79A45]">
              OUR ROLE
            </span>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#173B5F] sm:text-5xl">
              More than sending an application.
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              We believe good student support is about more than filling out
              forms. It is about helping you understand your options and make
              decisions with confidence.
            </p>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#173B5F] transition hover:text-[#C79A45]"
            >
              Learn About Us
              <IoArrowForward />
            </Link>
          </div>

          <div className="grid gap-px bg-slate-200 sm:grid-cols-2">
            {supportAreas.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="bg-white p-8 transition hover:bg-[#F7F5F1]"
                >
                  <Icon className="text-3xl text-[#C79A45]" />

                  <h3 className="mt-6 font-serif text-2xl text-[#173B5F]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DOCUMENTS */}
      <section className="bg-[#173B5F] px-6 py-20 text-white lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C79A45]">
              BE PREPARED
            </span>

            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
              What will you need?
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-white/70">
              Requirements can vary depending on your chosen university, program
              and level of study. We help you understand what applies to your
              particular application.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-3 border border-white/30 px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] transition hover:border-[#C79A45] hover:bg-[#C79A45]"
            >
              Ask About Requirements
              <IoArrowForward />
            </Link>
          </div>

          <div className="border border-white/10 bg-white/5 p-7 sm:p-9">
            <h3 className="font-serif text-2xl">
              Common application information
            </h3>

            <div className="mt-7 space-y-4">
              {[
                "Valid identification or passport",
                "Academic certificates and transcripts",
                "Program-specific documents where applicable",
                "Passport-size photographs where required",
                "Additional documents requested by the university",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 border-b border-white/10 pb-4 text-sm text-white/75"
                >
                  <IoCheckmarkCircleOutline className="mt-0.5 shrink-0 text-[#C79A45]" />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-7 flex gap-3 border-t border-white/10 pt-6">
              <IoTimeOutline className="mt-1 shrink-0 text-[#C79A45]" />
              <p className="text-xs leading-6 text-white/50">
                Start early. Having your documents prepared can make the
                application process much smoother.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ STRIP */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="flex flex-col gap-8 border-b border-slate-200 pb-16 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C79A45]">
              HAVE QUESTIONS?
            </span>

            <h2 className="mt-4 font-serif text-4xl text-[#173B5F] sm:text-5xl">
              We probably have an answer.
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-slate-600">
              Explore our frequently asked questions or speak directly with our
              team if you need help with something specific.
            </p>
          </div>

          <Link
            to="/faq"
            className="inline-flex w-fit items-center gap-3 bg-[#173B5F] px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#C79A45]"
          >
            View FAQs
            <IoArrowForward />
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-20 lg:px-10 lg:pb-28">
        <div className="mx-auto max-w-7xl overflow-hidden bg-[#F7F5F1]">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
            <div className="px-7 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C79A45]">
                YOUR NEXT STEP
              </span>

              <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight text-[#173B5F] sm:text-5xl">
                Ready to start your journey?
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-slate-600">
                Tell us what you want to study and where you are in your
                journey. We'll help you understand what comes next.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/apply"
                  className="inline-flex items-center justify-center gap-3 bg-[#173B5F] px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#C79A45]"
                >
                  Start Your Application
                  <IoArrowForward />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center border border-slate-300 px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#173B5F] transition hover:border-[#173B5F]"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="relative min-h-[300px] overflow-hidden lg:min-h-full">
              <img
                src="/images/student-life-cyprus.jpg"
                alt="Student life in North Cyprus"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-[#173B5F]/20" />

              <div className="absolute bottom-6 left-6 right-6 border border-white/30 bg-[#173B5F]/85 p-5 backdrop-blur-sm">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C79A45]">
                  YOUR FUTURE
                </p>
                <p className="mt-2 font-serif text-xl text-white">
                  Starts with one decision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HowItWorks;
