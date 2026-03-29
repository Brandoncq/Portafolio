import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";

export default function Contact({ service, template, publickey, captcha }) {
  const form = useRef();
  const refCaptcha = useRef();

  const [captchaResolved, setCaptchaResolved] = useState(false);
  const [status, setStatus] = useState({
    message: "",
    type: "",
  });

  const handleCaptchaChange = (value) => {
    setCaptchaResolved(!!value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!captchaResolved) {
      setStatus({
        message: "Resuelve el captcha",
        type: "text-red-500",
      });
      return;
    }

    setStatus({ message: "Enviando...", type: "text-gray-500" });

    emailjs
      .sendForm(service, template, form.current, publickey)
      .then(() => {
        setStatus({
          message: "Mensaje enviado con éxito",
          type: "text-green-500",
        });

        form.current.reset();
        refCaptcha.current.reset();
        setCaptchaResolved(false);
      })
      .catch(() => {
        setStatus({
          message: "Failed to send message",
          type: "text-red-500",
        });
      });
  };

  return (
    <section className="py-24 px-8 max-w-3xl mx-auto" id="contact">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-extrabold tracking-tighter text-primary-container mb-4">
          Let's Connect
        </h2>
        <p className="text-on-surface-variant text-lg">
          Ready to build something amazing together? Drop me a message.
        </p>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="space-y-6 bg-surface-container-lowest p-8 md:p-12 rounded-2xl shadow-xl border border-outline-variant/15"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-bold uppercase tracking-widest text-on-surface-variant">
              Name
            </label>
            <input
              name="from_name"
              className="w-full placeholder:select-none bg-slate-100 border border-transparent rounded-lg p-4 focus:outline-none focus:border-primary-fixed-dim/40 focus:ring-2 focus:ring-slate-400 transition-all duration-300 ease-out"
              placeholder="Your full name"
              type="text"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-bold uppercase tracking-widest text-on-surface-variant">
              Email
            </label>
            <input
              name="from_email"
              className="w-full placeholder:select-none bg-slate-100 border border-transparent rounded-lg p-4 focus:outline-none focus:border-primary-fixed-dim/40 focus:ring-2 focus:ring-slate-400 transition-all duration-300 ease-out"
              placeholder="your@email.com"
              type="email"
              required
            />
          </div>
        </div>

        {/* 👇 agregado clave */}
        <div className="space-y-2">
          <label className="block text-sm font-bold uppercase tracking-widest text-on-surface-variant">
            Subject
          </label>
          <input
            name="from_asunto"
            className="w-full placeholder:select-none bg-slate-100 border border-transparent rounded-lg p-4 focus:outline-none focus:border-primary-fixed-dim/40 focus:ring-2 focus:ring-slate-400 transition-all duration-300 ease-out"
            placeholder="Project inquiry / Collaboration / Job opportunity"
            type="text"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-bold uppercase tracking-widest text-on-surface-variant">
            Message
          </label>
          <textarea
            name="message"
            className="w-full placeholder:select-none bg-slate-100 border border-transparent rounded-lg p-4 focus:outline-none focus:border-primary-fixed-dim/40 focus:ring-2 focus:ring-slate-400 transition-all duration-300 ease-out"
            placeholder="Briefly describe your project, goals, timeline, or any specific requirements..."
            rows="5"
            required
          ></textarea>
        </div>

        {/* 👇 CAPTCHA */}
        <div className="flex justify-center">
          <ReCAPTCHA
            sitekey={captcha}
            ref={refCaptcha}
            theme="light"
            onChange={handleCaptchaChange}
          />
        </div>

        {/* 👇 STATUS */}
        <p className={`text-center ${status.type}`}>{status.message}</p>

        <button
          type="submit"
          className="w-full bg-slate-700 text-white py-5 rounded-lg font-bold text-xl hover:shadow-2xl active:scale-[0.98] transition-all ease-in-out duration-300 select-none"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
