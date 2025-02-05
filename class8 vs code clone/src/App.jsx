import React, { useEffect, useState } from "react";
import { LuFiles } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import axios from "axios";

const App = () => {
  const [create, setcreate] = useState();
  const [show, setshow] = useState(false);
  const [fileName, setfileName] = useState("");
  const [file, setfile] = useState([])



  useEffect(()=>{
    getAllData()
  },[])
  
  const submitHandeler = ()=>{
    axios.post("http://localhost:3000/create" , {fileName:fileName , fileData:""})
    setshow(false)
    getAllData()

  }

  const getAllData = async ()=>{
  const res =  await axios.get("http://localhost:3000/get-all")
  setfile(res.data);
  
    
  }
  
  const showDiv = () => {
    setshow(true);
  };
  return (
    <div className="h-screen w-full text-white flex relative ">
      <div className="leftDiv h-full w-2/6 bg-gray-800  ">
        <div className="h-14 w-full bg-gray-600 flex justify-between p-5  items-center">
          <h2>EXPLORE</h2>
          <h2 onClick={showDiv} className="border border-black px-4 text-xs">
            + Make File
          </h2>
        </div>
        {show && (
          <div className=" createFile  absolute top-0 h-screen w-full bg-gray-400 flex   items-center justify-center">
            <div className="h-60 w-80 bg-white text-black">
              <h1>Create new file</h1>
              <input
                onChange={(e) => setfileName(e.target.value)}
                type="text"
                value={fileName}
                className="border border-2 "
              />
              <button onClick={submitHandeler} >submit</button>
            </div>
          </div>
        )}
        
       
         {file.map((data, idx)=> (
          <div key={idx} className="flex items-center justify-between p-1">
            <h4 className="flex items-center gap-2 ">
          <LuFiles />
          {data}
        </h4>
        <h4>
          <RiDeleteBinLine />
        </h4>
          </div>
    
         ))}
          
      
      </div>

      <div className="rightDiv h-screen w-full bg-gray-500">
        <h2 className="p-5 text-gray-200 text-sm">Write Code Here....</h2>
      </div>
    </div>
  );
};

export default App;
