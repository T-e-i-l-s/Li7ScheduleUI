import "./QRCodeView.css";

// View с временем и датой
function QRCodeView() {
  return (
    <div className="qrCodeContainer">
      <img src="/qr.png" height={"130rem"} />
      <p className="qrTitle">Присоединяйтесь к нашему каналу!</p>
    </div>
  );
}

export default QRCodeView;
