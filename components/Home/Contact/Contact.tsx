"use client";

import { useState } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaArrowRight,
  FaCheckCircle,
  FaUndo,
} from "react-icons/fa";

const Contact = () => {
  const [isOpeningGmail, setIsOpeningGmail] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  /* Handle Form Field Changes */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setSubmitError("");
  };

  /* Validate and Submit Contact Form */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isOpeningGmail) return;

    const name = formData.name.trim();
    const email = formData.email.trim();
    const subject = formData.subject.trim();
    const message = formData.message.trim();

    const newErrors = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };

    /* Form Validation */
    if (!name) {
      newErrors.name = "Please enter your full name.";
    } else if (name.length < 4) {
      newErrors.name = "Please provide your complete name.";
    }

    if (!email) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!subject) {
      newErrors.subject = "Please enter a subject.";
    } else if (subject.length < 5) {
      newErrors.subject = "Please enter a valid subject.";
    }

    if (!message) {
      newErrors.message = "Please tell me about your project or opportunity.";
    } else if (message.length < 20) {
      newErrors.message =
        "Please provide a little more detail about your project.";
    }

    setErrors(newErrors);

    if (
      newErrors.name ||
      newErrors.email ||
      newErrors.subject ||
      newErrors.message
    ) {
      setSubmitError("Please complete the required fields before continuing.");
      return;
    }

    setSubmitError("");
    setIsOpeningGmail(true);

    /* Prepare Professional Email Content */
    const emailBody = `Hello Shiva Kumar Godha,

I'm reaching out regarding a potential opportunity and would like to discuss the requirements, expectations, and next steps.

${message}

I look forward to connecting and discussing this opportunity further.

Best regards,
${name}
${email}`;

    /* Generate Gmail Compose URL */
    const gmailUrl =
      "https://mail.google.com/mail/?view=cm&fs=1" +
      `&to=${encodeURIComponent("shivakumar.godha1@gmail.com")}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(emailBody)}`;

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = gmailUrl;
    } else {
      window.open(gmailUrl, "_blank");
    }

    /* Display Gmail Confirmation State */
    setTimeout(() => {
      setIsOpeningGmail(false);
      setShowConfirmation(true);
    }, 800);
  };

  /* Confirm Successful Message Submission */
  const handleMessageSent = () => {
    setIsConfirmed(true);
    setShowConfirmation(false);
  };

  /* Return to Contact Form */
  const handleNotSent = () => {
    setShowConfirmation(false);
    setIsOpeningGmail(false);
  };

  /* Reset Form for a New Message */
  const handleSendAnother = () => {
    setIsConfirmed(false);
    setShowConfirmation(false);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setErrors({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setSubmitError("");
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden scroll-mt-12 bg-gradient-to-b from-white via-slate-50 to-white py-16 sm:py-20"
    >
      {/* Background Decorative Glow Effects */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-200/30 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-200/20 blur-3xl" />

      {/* Main Contact Container */}
      <div className="relative mx-auto w-[95%] max-w-7xl sm:w-[92%]">
        {/* Contact Section Header */}
        <div className="mb-14 text-center sm:mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Let's Work Together
          </h2>

          {/* Heading Accent Line */}
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600" />

          {/* Section Description */}
          <p className="mx-auto mt-5 max-w-2xl px-4 leading-7 text-slate-600">
            Have a project, opportunity, or collaboration in mind? I'd love to
            hear from you.
          </p>
        </div>

        {/* Contact Content Layout */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          {/* Contact Information */}
          <div className="lg:col-span-5">
            {/* Availability Status */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Open to Work
            </div>

            {/* Contact Introduction */}
            <h3 className="mt-7 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              Have a Project in
              <span className="block bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                Mind?
              </span>
            </h3>

            <p className="mt-5 max-w-md leading-8 text-slate-600">
              I'm available for frontend roles, freelance projects, and
              collaborations. If you have an idea or opportunity, I'd love to
              hear from you.
            </p>

            {/* Contact Details */}
            <div className="mt-10 space-y-4">
              {/* Email */}
              <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md">
                <div className="shrink-0 rounded-xl bg-indigo-100 p-4 text-indigo-600">
                  <FaEnvelope size={20} />
                </div>

                <div className="min-w-0">
                  <p className="text-sm text-slate-500">Email</p>

                  <a
                    href="mailto:shivakumar.godha1@gmail.com"
                    className="break-all font-semibold text-slate-700 transition hover:text-indigo-600"
                  >
                    shivakumar.godha1@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md">
                <div className="shrink-0 rounded-xl bg-indigo-100 p-4 text-indigo-600">
                  <FaPhoneAlt size={20} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">Phone</p>
                  <a
                    href="tel:+919515628637"
                    className="font-semibold text-slate-700 transition hover:text-indigo-600"
                  >
                    +91 9515628637
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md">
                <div className="shrink-0 rounded-xl bg-indigo-100 p-4 text-indigo-600">
                  <FaMapMarkerAlt size={20} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">Location</p>

                  <p className="font-semibold text-slate-700">
                    Hyderabad, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form & Submission States */}
          <div className="lg:col-span-7">
            {/* Message Sent Confirmation */}
            {isConfirmed ? (
              <div className="rounded-[32px] border border-emerald-200 bg-white p-8 text-center shadow-2xl shadow-emerald-100/60 sm:p-10 lg:p-12">
                {/* Success Icon */}
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                  <FaCheckCircle className="text-3xl text-emerald-600" />
                </div>

                {/* Success Message */}
                <h3 className="mt-6 text-3xl font-bold text-slate-900">
                  Message Sent
                </h3>

                <p className="mx-auto mt-4 max-w-lg leading-7 text-slate-500">
                  Thank you for reaching out. Your message has been sent
                  successfully. I look forward to connecting with you and
                  discussing the opportunity further.
                </p>

                {/* New Message Action */}
                <button
                  type="button"
                  onClick={handleSendAnother}
                  className="mt-7 rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-md"
                >
                  Send Another Message
                </button>
              </div>
            ) : showConfirmation ? (
              /* Gmail Submission Confirmation */
              <div className="rounded-[32px] border border-indigo-200 bg-white p-8 text-center shadow-2xl shadow-indigo-100/60 sm:p-10 lg:p-12">
                {/* Gmail Icon */}
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100">
                  <FaEnvelope className="text-2xl text-indigo-600" />
                </div>

                {/* Confirmation Message */}
                <h3 className="mt-6 text-3xl font-bold text-slate-900">
                  Did You Send the Message?
                </h3>

                <p className="mx-auto mt-4 max-w-lg leading-7 text-slate-500">
                  Your message has been prepared in Gmail. Review the details
                  and click{" "}
                  <span className="font-semibold text-slate-700">Send</span> in
                  Gmail.
                </p>

                {/* Confirmation Actions */}
                <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
                  {/* Confirm Sent */}
                  <button
                    type="button"
                    onClick={handleMessageSent}
                    className="group flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-4 font-semibold text-white shadow-lg shadow-indigo-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <FaCheckCircle />
                    Yes, I Sent It
                  </button>

                  {/* Return to Form */}
                  <button
                    type="button"
                    onClick={handleNotSent}
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-4 font-semibold text-slate-700 transition duration-300 hover:-translate-y-1 hover:border-slate-400 hover:shadow-md"
                  >
                    <FaUndo />
                    No, Not Yet
                  </button>
                </div>

                {/* Confirmation Note */}
                <p className="mx-auto mt-5 max-w-md text-xs leading-5 text-slate-400">
                  Your email is only sent after you click the Send button in
                  Gmail.
                </p>
              </div>
            ) : (
              /* Contact Form */
              <form
                onSubmit={handleSubmit}
                className="rounded-[32px] border border-slate-200 bg-white p-7 shadow-2xl shadow-slate-200/50 sm:p-9 lg:p-12"
              >
                {/* Form Header */}
                <div>
                  <h3 className="text-3xl font-bold leading-tight text-slate-900">
                    Start a Conversation
                  </h3>

                  <p className="mt-3 leading-7 text-slate-500">
                    Tell me about your project, opportunity, or collaboration.
                  </p>
                </div>

                {/* Form Fields */}
                <div className="mt-8 space-y-5">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Full Name
                    </label>

                    <input
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      autoComplete="name"
                      disabled={isOpeningGmail}
                      className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100/60 disabled:cursor-not-allowed disabled:bg-slate-50"
                    />

                    {errors.name && (
                      <p className="mt-2 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Email Address
                    </label>

                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@gmail.com"
                      autoComplete="email"
                      disabled={isOpeningGmail}
                      className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100/60 disabled:cursor-not-allowed disabled:bg-slate-50"
                    />

                    {errors.email && (
                      <p className="mt-2 text-sm text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Subject
                    </label>

                    <input
                      id="contact-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What would you like to discuss?"
                      disabled={isOpeningGmail}
                      className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100/60 disabled:cursor-not-allowed disabled:bg-slate-50"
                    />

                    {errors.subject && (
                      <p className="mt-2 text-sm text-red-500">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Message
                    </label>

                    <textarea
                      id="contact-message"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, opportunity, or requirements..."
                      disabled={isOpeningGmail}
                      className="w-full resize-none rounded-xl border border-slate-300 bg-white px-5 py-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100/60 disabled:cursor-not-allowed disabled:bg-slate-50"
                    />

                    {errors.message && (
                      <p className="mt-2 text-sm text-red-500">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isOpeningGmail}
                    className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 py-4 font-semibold text-white shadow-lg shadow-indigo-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                  >
                    {isOpeningGmail ? "Opening Gmail..." : "Send Your Message"}

                    {!isOpeningGmail && (
                      <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
                    )}
                  </button>

                  {/* Form Submission Error */}
                  {submitError && (
                    <p
                      role="alert"
                      className="text-center text-sm font-medium text-red-500"
                    >
                      {submitError}
                    </p>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
