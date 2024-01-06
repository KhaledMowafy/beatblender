
function home() {
  return (
   <>
    <div className="h-screen mt-20 ms-30 bg-[#1B1C1D]">
        <h1>hello world!</h1>
        <a href="knowticed://signin" className="text-white">Knowticed</a>
        <a href="knowticed://qrCodeView" className="text-white">QR Code View</a>
        <br/>
        <a href="knowticed://qrCodeView/0Xvbug093hf3vZ5XLETaMd3WyCk1" className="text-white">USER ID</a>
    </div>
   </>
  )
}

export default home
