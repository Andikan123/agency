const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Choose your program",
      text: "Explore universities and find a program that matches your goals.",
    },
    {
      number: "02",
      title: "Submit your application",
      text: "We help you prepare and submit the required documents.",
    },
    {
      number: "03",
      title: "Receive your admission",
      text: "Get your admission and understand the next steps clearly.",
    },
    {
      number: "04",
      title: "Prepare for Cyprus",
      text: "We guide you through your final preparations before departure.",
    },
  ];

  return (
    <section className="bg-[#173B5F] px-6 py-24 text-white lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C79A45]">
            Simple. Clear. Guided.
          </p>

          <h2 className="mt-5 font-[Raleway] text-4xl font-medium leading-tight sm:text-5xl">
            From Nigeria to North Cyprus,
            <span className="text-[#C79A45]"> we guide you through it.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden bg-white/10 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-[#173B5F] p-8 transition duration-300 hover:bg-[#204a72]"
            >
              <span className="text-sm font-medium text-[#C79A45]">
                {step.number}
              </span>

              <h3 className="mt-12 text-xl font-medium">{step.title}</h3>

              <p className="mt-4 text-sm leading-7 text-white/60">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
