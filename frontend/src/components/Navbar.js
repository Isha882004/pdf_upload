import React from 'react';
import Logo from '../assets/Logo.png';
import AddIcon from '../assets/add_upload.png';
import {useDispatch, useSelector} from 'react-redux';
import { openModal } from '../app/features/modalSlice';
import FileIcon from '../assets/file_icon.png';
import useWindowResize from '../hooks/useWindowResize';

const Navbar = () => {
  
  const dispatch = useDispatch();
  const doc = useSelector((state) => state.document.doc);
  const {width} = useWindowResize();

  return (
    <div className="flex items-center justify-between bg-white shadow-md px-4 py-4">
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="h-10 w-30 mr-4 px-6" />
      </div>
      <div className='flex flex-row '>
        {doc && (
          <div className="flex items-center mr-4">
            <img src={FileIcon} alt="File Icon" className="h-6 w-6 mr-2" />
            <p className="text-green-500 text-lg">{doc.title}</p>
          </div>
        )}
        {width>550?<button onClick={()=> dispatch(openModal())} className="flex items-center bg-white hover:bg-gray-100 text-black font-semibold py-2 px-8 rounded-lg border border-black" style={{borderWidth: "1.5px" }}>
          <img src={AddIcon} alt="Add Icon" className="h-6 w-6 mr-3" />
          Upload PDF
        </button>:<button onClick={()=> dispatch(openModal())} className="flex items-center bg-white hover:bg-gray-100 text-black font-semibold py-2 px-8 rounded-lg border border-black" style={{ padding: "13px", borderWidth: "1.5px" }}>
          <img src={AddIcon} alt="Add Icon" className="h-6 w-6" />
        </button>}
        
      </div>
    </div>
  );
};

export default Navbar;
