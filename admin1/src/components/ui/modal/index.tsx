import React, { useState } from "react";
import { StyledModalBackdrop, StyledModalCon, StyledModalWrapper } from "./styled";
import { MdClose } from "react-icons/md";

const Modal = ({ isOpen, onClose, children }: { isOpen: boolean; onClose: () => void; children: React.ReactNode }) => {
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      onClose();
      setClosing(false);
    }, 150);
  };

  if (!isOpen && !closing) return null;

  return (
    <StyledModalWrapper>
      <StyledModalBackdrop closing={closing} onClick={handleClose} />
      <StyledModalCon closing={closing}>
        <button onClick={handleClose}>
          <MdClose />
        </button>
        {children}
      </StyledModalCon>
    </StyledModalWrapper>
  );
};

export default Modal;
