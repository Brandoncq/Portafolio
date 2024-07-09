import { useRef, useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";

export const Formulario = ({ service, template, publickey, captcha }) => {
  const refCaptcha = useRef();
  const form = useRef();
  const [captchaResolved, setCaptchaResolved] = useState(false);
  const [error, setError] = useState({
    message: "",
    type: "",
  });

  useEffect(() => {
    const img = new Image();
    img.src =
      "https://res.cloudinary.com/dmo6ofy2z/image/upload/v1711725922/updatemap_dtxdh2.svg";
  });

  const handleCaptchaChange = (value) => {
    if (value) {
      setCaptchaResolved(true);
    } else {
      setCaptchaResolved(false);
    }
  };
  const sendEmail = (event) => {
    event.preventDefault();
    const btn = document.getElementById("button");
    if (!captchaResolved) {
      setError({
        message: "Por favor, resuelve el ReCAPTCHA.",
        type: "text-red-500",
      });
      return;
    } else {
      setError("");
    }
    btn.value = "Enviando...";
    setError({ message: "", type: "text-red" });
    const serviceID = service;
    const templateID = template;
    const publickeyC = publickey;
    emailjs.sendForm(serviceID, templateID, form.current, publickeyC).then(
      () => {
        btn.value = "Enviar";
        setError({
          message: "Mensaje enviado con exito.",
          type: "text-green-500",
        });
      },
      (error) => {
        console.log(error.text);
        setError({
          message: "Eror, al enviar mensaje.",
          type: "text-red-500",
        });
      }
    );
    refCaptcha.current.reset();
    setCaptchaResolved(false);
  };
  return (
    <form
      className="w-full mx-auto bg-blur p-5 shadow-lg"
      onSubmit={sendEmail}
      ref={form}
    >
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="from_name"
            id="from_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="from_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Nombres
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="from_apellido"
            id="from_apellido"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="from_apellido"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Apellidos
          </label>
        </div>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="email"
          name="from_email"
          id="from_email"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="from_email"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Email
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="from_asunto"
          id="from_asunto"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="from_asunto"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Asunto
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <textarea
          name="message"
          id="message"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        ></textarea>

        <label
          htmlFor="message"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Mensaje
        </label>
      </div>
      <div className="w-full flex justify-center items-center min-h-24">
        <ReCAPTCHA
          className="g-recaptcha mb-4"
          sitekey={captcha}
          ref={refCaptcha}
          theme="dark"
          onChange={handleCaptchaChange}
        />
      </div>
      <p className={`${error.type} mb-5 min-h-7 w-full text-center`}>
        {error.message}
      </p>
      <div className="w-full flex justify-center items-center">
        <input
          type="submit"
          id="button"
          className="cursor-pointer text-black m-0 lg:w-1/3 w-1/2 p-2 font-medium text-ss bg-white rounded-lg hover:bg-neutral-600 hover:text-white text-center"
        />
      </div>
    </form>
  );
};

export default Formulario;
