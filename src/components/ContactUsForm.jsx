import React, { useState } from "react";
import validator from "validator";

const ContactUsForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null,
  });

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!validator.isEmail(form.email.trim()))
      e.email = "Please enter a valid email.";
    if (!form.email.trim()) e.email = "Please enter your email";
    if (!form.subject.trim()) e.subject = "Please add your subject.";
    // if(!form.phone.trim())
    //     e.phone = "Please enter your phone.";
    if (!form.message.trim()) e.message = "Please type your message.";
    return e;
  };

    async function handleSubmit (e) {
    e.preventDefault();
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length) return;

    setStatus({ loading: true, success: null, error: null });

    try {
      await new Promise((r) => setTimeout(r, 900));
      setStatus({
        loading: false,
        success: "Message sent — we will get back to you soon!",
        error: null,
      });
      setForm({ name: "", email: "", subject: "", phone: "", message: "" });
      setErrors({});
    } catch (err) {
      setStatus({
        loading: false,
        success: null,
        error: "Something went wrong. Please try again later.",
      });
    }
  };

  async function handleChange (e) {
    setForm((s) => ({...s, [e.target.name]: e.target.value}));
  }

  return (
    <section className="bg-white rounded-2xl shadow-md p-6 md:p-8">
      <h2 className="text-2xl md:text-3xl font-semibold mb-1">Contact us</h2>
      <p className="text-sm text-muted-foreground mb-6">
        Have a question, found a bug, or want to partner? Send us a message and
        we'll reply within 1-2 business days.
      </p>

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="flex flex-col">
            <span className="text-sm font-medium">Name</span>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className={`mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 ${
                errors.name ? "border-red-400" : "border-gray-200"
              }`}
              placeholder="Your full name"
              aria-invalid={!!errors.name}
            />
            {errors.name && (
              <span className="text-xs text-red-500 mt-1">{errors.name}</span>
            )}
          </label>

          <label className="flex flex-col">
            <span className="text-sm font-medium">Email</span>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              className={`mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 ${
                errors.email ? "border-red-400" : "border-gray-200"
              }`}
              placeholder="you@example.com"
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <span className="text-xs text-red-500 mt-1">{errors.email}</span>
            )}
          </label>
        </div>

        <label className="flex flex-col">
          <span className="text-sm font-medium">Subject</span>
          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className={`mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 ${
              errors.subject ? "border-red-400" : "border-gray-200"
            }`}
            placeholder="Short summary"
            aria-invalid={!!errors.subject}
          />
          {errors.subject && (
            <span className="text-xs text-red-500 mt-1">{errors.subject}</span>
          )}
        </label>

        <label className="flex flex-col">
          <span className="text-sm font-medium">Message</span>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={6}
            className={`mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 resize-y ${
              errors.message ? "border-red-400" : "border-gray-200"
            }`}
            placeholder="Tell us what's happening or how we can help"
            aria-invalid={!!errors.message}
          />
          {errors.message && (
            <span className="text-xs text-red-500 mt-1">{errors.message}</span>
          )}
        </label>

        <div className="flex items-center justify-between gap-4">
          <label className="flex-1 flex flex-col">
            <span className="text-sm font-medium">Phone (optional)</span>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 border-gray-200"
              placeholder="+91 98765 43210"
            />
          </label>

          <button
            type="submit"
            disabled={status.loading}
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-300 disabled:opacity-60"
          >
            {status.loading ? (
              <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                ></path>
              </svg>
            ) : (
              <span>Send message</span>
            )}
          </button>
        </div>

        {status.success && (
          <p className="text-sm text-green-600">{status.success}</p>
        )}
        {status.error && <p className="text-sm text-red-600">{status.error}</p>}
      </form>
    </section>
  );
};

export default ContactUsForm;
