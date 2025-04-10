//RAZJASNI

export default function CapBubb({ onClose }) {
  return (
    <div
      className="overlay"
      onClickCapture={() => {
        onClose(); // Zatvori modal ako je klik na pozadini
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
    >
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()} // Klik unutar modala neće zatvoriti modal
        style={{
          margin: "100px auto",
          padding: "20px",
          background: "white",
          width: "300px",
        }}
      >
        <h2>Modalni prozor</h2>
        <p>Ovo je sadržaj modala.</p>
      </div>
    </div>
  );
}
