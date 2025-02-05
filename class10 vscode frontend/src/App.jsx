import { useState } from "react";
import { LuFiles } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";
import axios from "axios";
import { useEffect } from "react";
import { FaRegWindowMinimize } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { PiScreencastBold } from "react-icons/pi";
import { IoSearchSharp } from "react-icons/io5";

const App = () => {
  const [createFile, setcreateFile] = useState(false);
  const [FileName, setFileName] = useState('');
  const [files, setfiles] = useState([]);
  const [readData, setreadData] = useState([])
  const [currentFileName, setcurrentFileName] = useState(null)
  const [updateData, setupdateData] = useState("")
  const [deletefile,setdeletefile] = useState([])
 
  const clickHandeler = () => {
    setcreateFile(true);
    console.log(createFile);
  };

  const submitHandeler = () => {
    axios.post("http://localhost:3000/create" , {fileName:FileName , fileData:""})
    setcreateFile(false);
    getAllData();
    console.log(FileName);
    
  };

  useEffect(()=>{
    getAllData()
  },[])
  
  const getAllData = async() => {
    const res = await axios.get("http://localhost:3000/get-all");
    setfiles(res.data)
  };

  const getReadData =async (fileName)=>{
  setcurrentFileName(fileName)
   const res = await axios.get("http://localhost:3000/read/"+ fileName )
   console.log(res.data);
   setreadData(res.data)
   
  }

  const updatedata =  async ()=>{
   const res = await axios.patch("http://localhost:3000/update/" ,{fileName:currentFileName , fileData:readData})
   console.log(res.data);
  //  console.log(readData);
   setreadData(res.data)
   getAllData()
   
  }


  const deleteData = async(fileName)=>{
    const res = await axios.delete("http://localhost:3000/delete/"+ fileName)
    console.log(res.data);
    console.log(fileName);
    getAllData()
    
    
    
  }
  return (
    <div>
      <div className="navbar h-8  w-full bg-gray-800 text-white flex items-center justify-between">
        <div className="files flex items-center gap-3 text-sm pl-1">
          <img className="h-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png" alt="" />
          <h4>File</h4>
          <h4>Edit</h4>
          <h4>Selection</h4>
          <h4>View</h4>
          <h4>Go</h4>
          <h4>Run</h4>
          {/* <h4 className="text-/xl">...</h4> */}
        </div>
        <div className="search">
          <input className="border-2 rounded-md border-gray-500 w-96 pl-40" type="text" placeholder= "Search" />
        </div>
        <div className="close flex items-center gap-6 pr-3">
        <FaRegWindowMinimize className="mb-2" />
        <PiScreencastBold className="text-xl"/>
        <IoClose className="text-2xl w-10  hover:text-white hover:bg-red-500" />
        </div>
      </div>
    <div className="h-screen w-full flex ">
 
      <div className="leftDiv h-screen w-[25%] bg-gray-800  p-3 text-white ">
        <div className="top flex items-start justify-between">
          <h1>EXPLORE</h1>
          <button
            onClick={clickHandeler}
            className="text-xs px-2 py-1 border-2 border-white rounded-lg"
          >
            Make File +
          </button>
        </div>

        {files.map((data, idx) => (
          <div key={idx} className="files flex items-center justify-between mt-4">
            <h1 onClick={()=>{getReadData(data)}} className="flex items-center gap-2">
              <LuFiles />
              {data}
              
            </h1>
            <h2 className="text-xl">
              < MdDeleteOutline onClick={()=>{deleteData(data)}} />
            </h2>
          </div>
        ))}
      </div>
 
     <textarea onChange={(e)=>{setreadData(e.target.value)}}  value={readData} className="bg-black text-white w-full" name="" id="">
    
     </textarea>
     <button onClick={updatedata} className="">send Data</button>
      {createFile && (
          <div className=" createFile   absolute top-0 h-screen w-full bg-gray-400 flex   items-center justify-center">
            <div className="h-60 w-80 rounded-lg p-5 bg-white text-black">
              <h1 className="text-2xl">Create new file</h1>
              <input
                onChange={(e) => setFileName(e.target.value)}
                type="text"
                value={FileName}
                className="border border-2 mt-10 "
              />
              <button className="px-4 py-1 bg-gray-800 text-white ml-2" onClick={submitHandeler} >submit</button>
            </div>
          </div>
        )}
      
    </div>
    </div>
  );
};

export default App;
