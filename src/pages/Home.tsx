import { useParams } from 'react-router-dom';
import { Base64 } from "js-base64";



function Home() {

  const {id}= useParams();
  const link = Base64.decode(`${id}`)
  return (
   <>
    <div className="h-screen mt-20 ms-30 bg-[#1B1C1D]">
        <h1>hello world!</h1>
        <a href={link}className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Knowticed</a>
    </div>
   </>
  )
}

export default Home
