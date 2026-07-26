"use client";

import { useState } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name.";
    } else if (formData.name.trim().length < 4) {
      newErrors.name = "Please provide your complete name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter a subject.";
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = "Subject must be at least 5 characters.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please tell me about your project.";
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Project details must be at least 20 characters.";
    }

    setErrors(newErrors);

    if (
      newErrors.name ||
      newErrors.email ||
      newErrors.subject ||
      newErrors.message
    ) {
      setSubmitError("Please fill in all required fields correctly.");
      return;
    }
    setSubmitError("");
    setIsSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden scroll-mt-12 py-16 bg-gradient-to-b from-white via-slate-50 to-white"
    >
      {/* Background Decorative Glow Effects */}

      <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-200/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-200/20 blur-3xl" />

      {/* Main Contact Container */}
      <div className="relative mx-auto w-[95%] sm:w-[97%] max-w-7xl">
        {/* Contact Section Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Let's Work Together
          </h2>

          {/* Heading Accent Line */}
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600" />

          <p className="mx-auto mt-5 max-w-2xl px-5 sm:px-2 text-center text-gray-600">
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

            <h3 className="mt-8 text-3xl font-bold leading-tight text-slate-900">
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

            {/* Contact Details Cards */}
            <div className="mt-10 space-y-4">
              {/* Email Contact Card */}
              <div
                className="
                          flex
                          items-center
                          gap-4
                          rounded-2xl
                          border
                          border-slate-200
                          bg-white
                          p-3 
                          sm:p-3
                          shadow-sm
                          transition
                          hover:-translate-y-0.5
                          hover:shadow-md
                         "
              >
                <div className="rounded-xl bg-indigo-100 p-4 text-indigo-600">
                  <FaEnvelope size={20} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">Email</p>

                  <p className="font-semibold text-slate-700">
                    shivakumar.godha1@gmail.com
                  </p>
                </div>
              </div>

              {/* Phone Contact Card */}
              <div
                className="
                          flex
                          items-center
                          gap-4
                          rounded-2xl
                          border
                          border-slate-200
                          bg-white
                          p-5
                          shadow-sm
                          transition
                          hover:-translate-y-0.5
                          hover:shadow-md
                         "
              >
                <div className="rounded-xl bg-indigo-100 p-4 text-indigo-600">
                  <FaPhoneAlt size={20} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">Phone</p>

                  <p className="font-semibold text-slate-700">+91 9876543210</p>
                </div>
              </div>

              {/* Location Contact Card */}
              <div
                className="
                          flex
                          items-center
                          gap-4
                          rounded-2xl
                          border
                          border-slate-200
                          bg-white
                          p-5
                          shadow-sm
                          transition
                          hover:-translate-y-0.5
                          hover:shadow-md
                         "
              >
                <div className="rounded-xl bg-indigo-100 p-4 text-indigo-600">
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

          {/* Contact Form Section */}
          <div className="lg:col-span-7">
            {isSubmitted ? (
              <div
                className="
                          rounded-[32px]
                          border
                          border-green-200
                          bg-white
                          p-8
                          text-center
                          shadow-2xl
                          shadow-green-100
                          lg:p-12
                        "
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <FaCheckCircle className="text-3xl text-green-600" />
                </div>

                <h3 className="mt-6 text-3xl font-bold text-slate-900">
                  Message Sent Successfully!
                </h3>

                <p className="mt-3 text-slate-500">
                  Thank you for contacting me. I'll get back to you within{" "}
                  <span className="font-semibold text-slate-700">
                    24 hours.
                  </span>
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="
                        rounded-[32px]
                        border
                        border-slate-200
                        bg-white
                        p-8
                        shadow-2xl
                        shadow-slate-200/50
                        lg:p-12
                       "
              >
                {/* Form Header */}
                <h3 className="text-3xl font-bold text-slate-900 leading-tight">
                  Start a Conversation
                </h3>

                <p className="mt-3 text-slate-500">
                  Tell me about your project, and I'll get back to you within 24
                  hours.
                </p>
                {/* Form Fields */}
                <div className="mt-8 space-y-5">
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="
                            w-full
                            rounded-xl
                            border
                            border-slate-300
                            bg-white
                            px-5
                            py-4
                            text-slate-900
                            placeholder:text-slate-400
                            outline-none
                            transition
                            focus:border-indigo-500
                            focus:ring-indigo-100
                            focus:ring-1
                            "
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500">{errors.name}</p>
                  )}
                  {/* Email Input */}
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="
                            w-full
                            rounded-xl
                            border
                            border-slate-300
                            bg-white
                            px-5
                            py-4
                            text-slate-900
                            placeholder:text-slate-400
                            outline-none
                            transition
                            focus:border-indigo-500
                            focus:ring-indigo-100
                            focus:ring-1
                           "
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">{errors.email}</p>
                  )}
                  {/* Subject Input */}
                  <input
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="
                            w-full
                            rounded-xl
                            border
                            border-slate-300
                            bg-white
                            px-5
                            py-4
                            text-slate-900
                            placeholder:text-slate-400
                            outline-none
                            transition
                            focus:border-indigo-500
                            focus:ring-indigo-100
                            focus:ring-1
                            "
                  />
                  {errors.subject && (
                    <p className="text-sm text-red-500">{errors.subject}</p>
                  )}
                  {/* Message Text Area */}
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="
                            w-full
                            rounded-xl
                            border
                            border-slate-300
                            bg-white
                            px-5
                            py-4
                            text-slate-900
                            placeholder:text-slate-400
                            outline-none
                            transition
                            focus:border-indigo-500
                            focus:ring-1
                            focus:ring-indigo-100
                            resize-none
                           "
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500">{errors.message}</p>
                  )}
                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="
                            group
                            flex
                            w-full
                            items-center
                            justify-center
                            gap-3
                            rounded-xl
                            bg-gradient-to-r
                            from-indigo-500
                            to-purple-600
                            py-4
                            font-semibold
                            text-white
                            shadow-lg
                            shadow-indigo-200
                            transition
                            hover:-translate-y-1
                            "
                  >
                    Send Your Message
                    <FaArrowRight className="transition group-hover:translate-x-2" />
                  </button>
                  {submitError && (
                    <p className="mt-4 text-center text-sm font-medium text-red-500">
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
