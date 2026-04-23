function Modal({ children, onClose }) {
  return (
    <div style={{ background: "#0008", position: "fixed", inset: 0 }}>
      <div style={{ background: "white", padding: 20, margin: "10% auto", width: "300px" }}>
        <button onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
