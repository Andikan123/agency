const TrustBar = () => {
  const stats = [
    {
      number: "10+",
      label: "Universities",
    },
    {
      number: "100+",
      label: "Programs",
    },
    {
      number: "1:1",
      label: "Personal Guidance",
    },
    {
      number: "01",
      label: "Dedicated Journey",
    },
  ];

  return (
    <section className="border-b border-gray-100 bg-white">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="
              border-gray-100
              px-6
              py-8
              text-center
              lg:border-r
              lg:last:border-r-0
            "
          >
            <p className="text-3xl font-medium text-[#173B5F]">{stat.number}</p>

            <p className="mt-1 text-xs uppercase tracking-[0.15em] text-gray-500">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustBar;
