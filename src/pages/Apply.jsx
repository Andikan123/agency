import { useState } from "react";
import { Link } from "react-router-dom";
import {
  IoArrowBack,
  IoArrowForward,
  IoCheckmarkCircle,
  IoCheckmarkCircleOutline,
  IoChevronDown,
  IoChatbubblesOutline,
  IoDocumentTextOutline,
  IoLockClosedOutline,
  IoMailOutline,
  IoPersonOutline,
  IoSchoolOutline,
  IoShieldCheckmarkOutline,
  IoSparklesOutline,
} from "react-icons/io5";

const steps = [
  {
    number: 1,
    title: "About You",
    shortTitle: "Personal",
    icon: IoPersonOutline,
  },
  {
    number: 2,
    title: "Your Education",
    shortTitle: "Education",
    icon: IoSchoolOutline,
  },
  {
    number: 3,
    title: "Your Choice",
    shortTitle: "Study Plan",
    icon: IoDocumentTextOutline,
  },
  {
    number: 4,
    title: "Review",
    shortTitle: "Review",
    icon: IoCheckmarkCircleOutline,
  },
];

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  country: "",
  dateOfBirth: "",
  educationLevel: "",
  school: "",
  graduationYear: "",
  preferredUniversity: "",
  preferredProgram: "",
  studyLevel: "",
  startDate: "",
  accommodation: "",
  message: "",
};

const Apply = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#F7F5F1]">
        <section className="flex min-h-[75vh] items-center justify-center px-4 py-20 sm:px-6">
          <div className="w-full max-w-2xl text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#173B5F] text-3xl text-[#C79A45]">
              <IoCheckmarkCircle />
            </div>

            <span className="mt-8 block text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C79A45]">
              APPLICATION RECEIVED
            </span>

            <h1 className="mt-5 font-serif text-4xl leading-tight text-[#173B5F] sm:text-6xl">
              Your journey has officially begun.
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-600">
              Thank you for taking the first step. Our team will review the
              information you provided and get in touch with you about the next
              stage of your application.
            </p>

            <div className="mt-10 border border-slate-200 bg-white p-7 text-left shadow-sm">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#F7F5F1] text-xl text-[#C79A45]">
                  <IoMailOutline />
                </div>

                <div>
                  <h3 className="font-serif text-xl text-[#173B5F]">
                    What happens next?
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    We'll contact you using the details you provided and guide
                    you through the next steps.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-3 bg-[#173B5F] px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#C79A45]"
              >
                Back To Home
              </Link>

              <Link
                to="/universities"
                className="inline-flex items-center justify-center gap-3 border border-slate-300 px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#173B5F] transition hover:border-[#173B5F]"
              >
                Explore Universities
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-[#F7F5F1] text-slate-900">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#173B5F]">
        <div className="absolute inset-0">
          <img
            src="/images/student-cyprus.jpg"
            alt="Student preparing to study in North Cyprus"
            className="h-full w-full object-cover opacity-20"
          />

          <div className="absolute inset-0 bg-[#173B5F]/90" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.65fr] lg:items-end">
            <div>
              <span className="inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C79A45]">
                <span className="h-px w-10 bg-[#C79A45]" />
                START YOUR JOURNEY
              </span>

              <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.02] text-white sm:text-6xl lg:text-7xl">
                Your next chapter
                <span className="block text-[#C79A45]">starts here.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                Tell us a little about yourself, your academic goals and what
                you want to study. We'll help you understand your options and
                what comes next.
              </p>
            </div>

            <div className="border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <IoSparklesOutline className="mt-1 shrink-0 text-2xl text-[#C79A45]" />

                <div>
                  <p className="text-sm font-medium text-white">
                    No need to have everything figured out.
                  </p>

                  <p className="mt-2 text-sm leading-7 text-white/55">
                    If you're still deciding on a university or program, that's
                    okay. We'll help you work through your options.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          APPLICATION AREA
      ========================================================== */}
      <section className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto w-full max-w-7xl">
          {/* Progress */}
          <div className="mb-10 overflow-hidden border border-slate-200 bg-white">
            <div className="grid grid-cols-4">
              {steps.map((step) => {
                const Icon = step.icon;
                const active = currentStep === step.number;
                const completed = currentStep > step.number;

                return (
                  <div
                    key={step.number}
                    className={`relative border-r border-slate-200 p-4 last:border-r-0 sm:p-6 ${
                      active
                        ? "bg-[#173B5F] text-white"
                        : completed
                          ? "bg-[#F7F5F1]"
                          : "bg-white text-slate-400"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center ${
                          active
                            ? "bg-[#C79A45] text-white"
                            : completed
                              ? "bg-[#173B5F] text-white"
                              : "bg-slate-100"
                        }`}
                      >
                        {completed ? <IoCheckmarkCircle /> : <Icon />}
                      </div>

                      <div className="hidden sm:block">
                        <p className="text-[9px] font-semibold uppercase tracking-[0.18em] opacity-60">
                          STEP {step.number}
                        </p>

                        <p className="mt-1 text-sm font-medium">{step.title}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="border border-slate-200 bg-white"
            >
              <div className="border-b border-slate-200 px-6 py-7 sm:px-9">
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C79A45]">
                  STEP {currentStep} OF {steps.length}
                </span>

                <h2 className="mt-3 font-serif text-3xl text-[#173B5F] sm:text-4xl">
                  {steps[currentStep - 1].title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {currentStep === 1 &&
                    "Let's start with some basic information about you."}

                  {currentStep === 2 &&
                    "Tell us about your academic background."}

                  {currentStep === 3 && "Tell us what you would like to study."}

                  {currentStep === 4 &&
                    "Take a moment to review your information before sending it."}
                </p>
              </div>

              {/* STEP 1 */}
              {currentStep === 1 && (
                <div className="space-y-7 p-6 sm:p-9">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field
                      label="First Name"
                      required
                      value={form.firstName}
                      onChange={(value) => updateField("firstName", value)}
                      placeholder="Your first name"
                    />

                    <Field
                      label="Last Name"
                      required
                      value={form.lastName}
                      onChange={(value) => updateField("lastName", value)}
                      placeholder="Your last name"
                    />
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field
                      label="Email Address"
                      type="email"
                      required
                      value={form.email}
                      onChange={(value) => updateField("email", value)}
                      placeholder="you@example.com"
                    />

                    <Field
                      label="Phone Number"
                      required
                      value={form.phone}
                      onChange={(value) => updateField("phone", value)}
                      placeholder="+234..."
                    />
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field
                      label="Country"
                      required
                      value={form.country}
                      onChange={(value) => updateField("country", value)}
                      placeholder="Nigeria"
                    />

                    <Field
                      label="Date of Birth"
                      type="date"
                      value={form.dateOfBirth}
                      onChange={(value) => updateField("dateOfBirth", value)}
                    />
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {currentStep === 2 && (
                <div className="space-y-7 p-6 sm:p-9">
                  <SelectField
                    label="Highest Education Level"
                    required
                    value={form.educationLevel}
                    onChange={(value) => updateField("educationLevel", value)}
                    options={[
                      "Secondary School",
                      "Bachelor's Degree",
                      "Master's Degree",
                      "Other",
                    ]}
                  />

                  <Field
                    label="School / Institution"
                    required
                    value={form.school}
                    onChange={(value) => updateField("school", value)}
                    placeholder="Name of your school"
                  />

                  <SelectField
                    label="Graduation Year"
                    value={form.graduationYear}
                    onChange={(value) => updateField("graduationYear", value)}
                    options={[
                      "2026",
                      "2025",
                      "2024",
                      "2023",
                      "2022",
                      "Before 2022",
                      "Not yet graduated",
                    ]}
                  />
                </div>
              )}

              {/* STEP 3 */}
              {currentStep === 3 && (
                <div className="space-y-7 p-6 sm:p-9">
                  <SelectField
                    label="Preferred University"
                    value={form.preferredUniversity}
                    onChange={(value) =>
                      updateField("preferredUniversity", value)
                    }
                    options={[
                      "Near East University",
                      "University of Kyrenia",
                      "Cyprus International University",
                      "Eastern Mediterranean University",
                      "Final International University",
                      "European University of Lefke",
                      "I'm not sure yet",
                    ]}
                  />

                  <SelectField
                    label="Preferred Program"
                    required
                    value={form.preferredProgram}
                    onChange={(value) => updateField("preferredProgram", value)}
                    options={[
                      "Medicine",
                      "Nursing",
                      "Pharmacy",
                      "Physiotherapy",
                      "Computer Engineering",
                      "Civil Engineering",
                      "Business Administration",
                      "Maritime Business Administration",
                      "Other",
                      "I'm not sure yet",
                    ]}
                  />

                  <div className="grid gap-6 sm:grid-cols-2">
                    <SelectField
                      label="Study Level"
                      value={form.studyLevel}
                      onChange={(value) => updateField("studyLevel", value)}
                      options={[
                        "Undergraduate",
                        "Postgraduate",
                        "PhD",
                        "I'm not sure yet",
                      ]}
                    />

                    <SelectField
                      label="Preferred Start"
                      value={form.startDate}
                      onChange={(value) => updateField("startDate", value)}
                      options={[
                        "Next available intake",
                        "2026/2027",
                        "2027/2028",
                        "I'm not sure yet",
                      ]}
                    />
                  </div>

                  <SelectField
                    label="Accommodation Interest"
                    value={form.accommodation}
                    onChange={(value) => updateField("accommodation", value)}
                    options={[
                      "Yes, I need accommodation guidance",
                      "No, I already have accommodation",
                      "I'm not sure yet",
                    ]}
                  />

                  <div>
                    <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.16em] text-[#173B5F]">
                      Anything else you'd like us to know?
                    </label>

                    <textarea
                      rows="5"
                      value={form.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      placeholder="Tell us anything that may help us understand what you're looking for..."
                      className="w-full resize-none border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#C79A45]"
                    />
                  </div>
                </div>
              )}

              {/* STEP 4 */}
              {currentStep === 4 && (
                <div className="p-6 sm:p-9">
                  <div className="border border-slate-200 bg-[#F7F5F1] p-6 sm:p-8">
                    <div className="grid gap-8 sm:grid-cols-2">
                      <ReviewItem
                        label="Full Name"
                        value={`${form.firstName} ${form.lastName}`}
                      />

                      <ReviewItem
                        label="Email"
                        value={form.email || "Not provided"}
                      />

                      <ReviewItem
                        label="Phone"
                        value={form.phone || "Not provided"}
                      />

                      <ReviewItem
                        label="Country"
                        value={form.country || "Not provided"}
                      />

                      <ReviewItem
                        label="Education"
                        value={form.educationLevel || "Not provided"}
                      />

                      <ReviewItem
                        label="Institution"
                        value={form.school || "Not provided"}
                      />

                      <ReviewItem
                        label="University"
                        value={form.preferredUniversity || "Not decided yet"}
                      />

                      <ReviewItem
                        label="Program"
                        value={form.preferredProgram || "Not provided"}
                      />
                    </div>
                  </div>

                  <div className="mt-7 flex items-start gap-3">
                    <IoCheckmarkCircleOutline className="mt-0.5 shrink-0 text-xl text-[#C79A45]" />

                    <p className="text-sm leading-7 text-slate-500">
                      By submitting this application, you confirm that the
                      information provided is accurate to the best of your
                      knowledge and that you would like our team to contact you
                      regarding your study plans.
                    </p>
                  </div>
                </div>
              )}

              {/* BUTTONS */}
              <div className="flex flex-col-reverse gap-3 border-t border-slate-200 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-9">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={previousStep}
                    className="inline-flex items-center justify-center gap-3 border border-slate-200 px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#173B5F] transition hover:border-[#173B5F]"
                  >
                    <IoArrowBack />
                    Previous
                  </button>
                ) : (
                  <Link
                    to="/"
                    className="inline-flex items-center justify-center gap-3 border border-slate-200 px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#173B5F] transition hover:border-[#173B5F]"
                  >
                    <IoArrowBack />
                    Back
                  </Link>
                )}

                {currentStep < steps.length ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="inline-flex items-center justify-center gap-3 bg-[#173B5F] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#C79A45]"
                  >
                    Continue
                    <IoArrowForward />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-3 bg-[#C79A45] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#173B5F]"
                  >
                    Submit Application
                    <IoCheckmarkCircle />
                  </button>
                )}
              </div>
            </form>

            {/* SIDEBAR */}
            <aside className="space-y-5">
              <div className="border border-slate-200 bg-white p-7">
                <IoChatbubblesOutline className="text-3xl text-[#C79A45]" />

                <h3 className="mt-5 font-serif text-2xl text-[#173B5F]">
                  Need help deciding?
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  You don't need to know exactly what you want before applying.
                  We can help you explore your options.
                </p>

                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#173B5F] transition hover:text-[#C79A45]"
                >
                  Talk To Us
                  <IoArrowForward />
                </Link>
              </div>

              <div className="border border-slate-200 bg-white p-7">
                <div className="flex items-center gap-3">
                  <IoShieldCheckmarkOutline className="text-2xl text-[#C79A45]" />

                  <h3 className="font-serif text-xl text-[#173B5F]">
                    Your information
                  </h3>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  We use the information you provide to understand your study
                  plans and communicate with you about your application.
                </p>

                <div className="mt-5 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                  <IoLockClosedOutline />
                  Secure application
                </div>
              </div>

              <div className="border border-[#C79A45]/30 bg-[#173B5F] p-7 text-white">
                <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#C79A45]">
                  YOUR JOURNEY
                </span>

                <h3 className="mt-4 font-serif text-2xl">
                  One application.
                  <span className="block text-[#C79A45]">
                    A world of possibilities.
                  </span>
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/55">
                  Take the first step today and let us help you explore where
                  your education can take you.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* BOTTOM TRUST STRIP */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid w-full max-w-7xl divide-y divide-slate-200 px-4 sm:px-6 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-10">
          <TrustItem
            icon={IoSchoolOutline}
            title="University Guidance"
            text="Explore options that fit your goals."
          />

          <TrustItem
            icon={IoDocumentTextOutline}
            title="Application Support"
            text="Understand the process at every stage."
          />

          <TrustItem
            icon={IoChatbubblesOutline}
            title="Human Support"
            text="Speak with our team when you need help."
          />
        </div>
      </section>
    </main>
  );
};

/* =========================================================
   FORM COMPONENTS
========================================================= */

const Field = ({
  label,
  required,
  type = "text",
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div>
      <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.16em] text-[#173B5F]">
        {label}
        {required && <span className="ml-1 text-[#C79A45]">*</span>}
      </label>

      <input
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#C79A45]"
      />
    </div>
  );
};

const SelectField = ({ label, required, value, onChange, options }) => {
  return (
    <div>
      <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.16em] text-[#173B5F]">
        {label}
        {required && <span className="ml-1 text-[#C79A45]">*</span>}
      </label>

      <div className="relative">
        <select
          value={value}
          required={required}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none border border-slate-200 bg-white px-4 py-3.5 pr-10 text-sm text-slate-700 outline-none transition focus:border-[#C79A45]"
        >
          <option value="">Select an option</option>

          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <IoChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
      </div>
    </div>
  );
};

const ReviewItem = ({ label, value }) => {
  return (
    <div>
      <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#C79A45]">
        {label}
      </p>

      <p className="mt-2 break-words text-sm font-medium text-[#173B5F]">
        {value}
      </p>
    </div>
  );
};

const TrustItem = ({ icon: Icon, title, text }) => {
  return (
    <div className="flex gap-4 px-6 py-7 lg:px-8">
      <Icon className="mt-1 shrink-0 text-2xl text-[#C79A45]" />

      <div>
        <h3 className="font-serif text-lg text-[#173B5F]">{title}</h3>

        <p className="mt-1 text-xs leading-6 text-slate-500">{text}</p>
      </div>
    </div>
  );
};

export default Apply;
