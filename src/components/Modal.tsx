import React from "react";
import ReactDOM from "react-dom";

type ModalProps = {
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ children }) => {
  const modalRoot = document.getElementById("modal-root");
  const el = document.createElement("div");

  React.useEffect(() => {
    modalRoot?.appendChild(el);
    return () => {
      modalRoot?.removeChild(el);
    };
  }, [el, modalRoot]);

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="max-w-[400px] grow rounded-lg bg-white p-4 py-8 shadow-lg">
        {children}
      </div>
    </div>,
    el,
  );
};

export default Modal;
