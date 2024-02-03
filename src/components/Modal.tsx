import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

type ModalProps = {
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ children }) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("#modal-root");
    setMounted(true);
  }, []);

  return (
    mounted &&
    ref.current &&
    ReactDOM.createPortal(
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
        <div className="max-w-[400px] grow rounded-lg bg-white p-4 py-8 shadow-lg">
          {children}
        </div>
      </div>,
      ref.current,
    )
  );
};

export default Modal;
