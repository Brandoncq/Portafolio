import { useState, useRef, useEffect } from "react";

const Modal = ({
  isOpen,
  onClose,
  children,
  className,
  disableClose = false,
  hideCloseButton = false,
}) => {
  const [visible, setVisible] = useState(isOpen);
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
    } else {
      const timeout = setTimeout(() => setVisible(false), 350);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!disableClose && event.target.classList.contains("modal-overlay")) {
        onClose();
      }
    };

    const handleKeyDown = (event) => {
      if (!disableClose && event.key === "Escape") onClose();
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!visible) return null;

  return (
    <div
      className={`fixed w-full h-lvh inset-0 flex justify-center items-center z-50 transition-all duration-300 ease-in-out modal-overlay ${
        isOpen ? "bg-black/50" : "bg-black/10"
      }`}
    >
      <div
        ref={modalRef}
        className={`bg-white shadow-lg dark:shadow-md dark:shadow-zinc-700 relative transform transition-all duration-300 ease-out overflow-auto ${
          className ?? "w-[90%] h-[90%]"
        }`}
        style={{
          animation: isOpen
            ? "fadeIn 0.4s ease-out forwards"
            : "fadeOut 0.4s ease-in forwards",
        }}
      >
        {!disableClose && !hideCloseButton && (
          <button
            className="z-60 absolute top-0 right-0 lg:top-1 lg:right-1 text-gray-500 hover:text-gray-800  transition-all duration-300 ease-in-out w-6 h-6 text-2xl lg:text-4xl flex justify-center items-center cursor-pointer"
            onClick={onClose}
          >
            &times;
          </button>
        )}
        {children}
      </div>
    </div>
  );
};

export default Modal;
