import React from 'react'
import bell from "../assets/bell.png"
import profile from "../assets/profile.png"
import { useState, useRef } from 'react'
import excel from "../assets/excel.png"
import { FaRegBell } from "react-icons/fa";
const Rightdash = ({mode,changeTheme}) => {

  const [selectedFile, setSelectedFile] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [tags] = useState(Array.from({ length: 10 }, (_, i) => `Tag${i + 1}`));
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleUpload = () => {
    setTableData([
      {
        serialNo: '01',
        link: 'timesonline.co.uk',
        prefix: 'QB0GaK7',
        sample: 'Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance',
        tags: ['Technology', 'Fashion', 'Food']
      },
      {
        serialNo: '02',
        link: 'merriam-webster.com',
        prefix: '8oUTDyz',
        sample: 'Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance',
        tags: ['Education', 'Finance', 'Travel']
      },
      {
        serialNo: '03',
        link: 'newyorker.com',
        prefix: 'Z9i2o9o',
        sample: 'Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance',
        tags: ['Health', 'Art', 'Technology']
      },
      {
        serialNo: '04',
        link: 'angelfire.com',
        prefix: 'pW44f49',
        sample: 'Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance',
        tags: ['Music', 'Food', 'Fashion']
      },
      {
        serialNo: '05',
        link: 'rambler.ru',
        prefix: 'w1vDJvP',
        sample: 'Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance',
        tags: ['Sports', 'Education', 'Food']
      },
      {
        serialNo: '06',
        link: 'timesonline.co.uk',
        prefix: 'Uz3Uq87',
        sample: 'Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance',
        tags: ['Finance', 'Technology', 'Health']
      },
      {
        serialNo: '07',
        link: 'state.gov',
        prefix: 'PwT2wMc',
        sample: 'Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance',
        tags: ['Travel', 'Fashion', 'Education']
      },
      {
        serialNo: '08',
        link: 'youtube.com',
        prefix: 'c1TO1x6',
        sample: 'Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance',
        tags: ['Music', 'Art', 'Travel']
      },
      {
        serialNo: '09',
        link: 'washingtonpost.com',
        prefix: '4KtfXaU',
        sample: 'Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance',
        tags: ['Education', 'Health', 'Technology']
      },
      {
        serialNo: '10',
        link: 'icq.com',
        prefix: 'nh294Ty',
        sample: 'Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance',
        tags: ['Finance', 'Sports', 'Art']
      }
    ]);
  };

  const handleTagChange = (index, event) => {
    const newTableData = [...tableData];
    const selectedTag = event.target.value;

    if (!newTableData[index].tags.includes(selectedTag)) {
      newTableData[index].tags.push(selectedTag);
      setTableData(newTableData);
    }
  };

  const handleRemoveTag = (rowIndex, tag) => {
    const newTableData = [...tableData];
    newTableData[rowIndex].tags = newTableData[rowIndex].tags.filter(t => t !== tag);
    setTableData(newTableData);
  };
  
  return (
    <div className=' text-white'>
        <div className='w-[1067px] flex justify-between ml-[36px] mt-[42px]'>
            <p className={`text-[24px] font-semibold  ${mode? "text-black transition-all duration-500 ease-in-out" : "text-white transition-all duration-500 ease-in-out"}  `}>Upload CSV</p> 

            <div className='flex gap-7 items-center'>
              <div className={`${mode? "text-black transition-all duration-500 ease-in-out" : "text-white transition-all duration-500 ease-in-out"}  text-[23px]`}>
                  <FaRegBell />
              </div>
                <img className='rounded-full w-[30px] h-[30px]' src={profile}></img>
            </div>
        </div>



        <div className={`w-[596px] h-[367px] ml-[271px] mt-[130px] ${mode? "bg-[#FFFFFF] transition-all duration-500 ease-in-out" : "custom-darkblack transition-all duration-500 ease-in-out "} rounded-lg p-4 flex flex-col justify-between items-center`}>
      <div className="flex flex-col items-center justify-center flex-1 w-[564px] h-[258px] p-2 border-[1px] rounded-lg border-dashed border-gray-500 border-opacity-35">
        <img src={excel} alt="Excel Icon" className="text-green-500 mb-4" />
        <p className="text-gray-500">
          {selectedFile ? (
            <span className="flex items-center gap-2">
              {selectedFile.name}
              <button onClick={removeFile} className="text-red-500 ml-2">
                Remove file
              </button>
            </span>
          ) : (
            <>
              Drop your excel sheet here or{' '}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={triggerFileInput}
              >
                browse
              </span>
            </>
          )}
        </p>
        <input
          type="file"
          accept=".xlsx, .xls"
          onChange={handleFileChange}
          className="hidden"
          ref={fileInputRef}
        />
      </div>
      <button 
        className="w-[564px] h-[56px] bg-blue-500 text-white rounded-lg mt-4"
        disabled={!selectedFile}
        onClick={handleUpload}
      >
        Upload
      </button>

    </div>

  {/* TABLE:-------- */} 
   
  <div className='mt-[95px]'>
   
   <p className={`ml-[46px] text-[24px] font-semibold ${mode? "text-black transition-all duration-500 ease-in-out" : "text-white transition-all duration-500 ease-in-out"}`}>Uploads</p>

 {tableData.length > 0 && (
  <div className="w-[1065px] h-[300px] mt-4 ml-[46px] overflow-x-hidden overflow-y-scroll">
    <table className={`w-full ${mode?"custom-bckformwhite border-[#EAEAEA] transition-all duration-500 ease-in-out " : "bg-[#0D0D0D] border-[#0D0D0D] transition-all duration-500 ease-in-out"}  table-fixed border-x-[12px]  border-separate border-spacing-y-4`}>
      <thead>
        <tr className={`${mode?"text-black transition-all duration-500 ease-in-out" : "text-white transition-all duration-500 ease-in-out"}`}>
          <th className="p-2 text-left" style={{ width: '16.66%' }}>Serial No</th>
          <th className="p-2 text-left" style={{ width: '16.66%' }}>Links</th>
          <th className="p-2 text-left" style={{ width: '16.66%' }}>Prefix</th>
          <th className="p-2 text-left" style={{ width: '16.66%' }}>Add Tags</th>
          <th className="p-2 text-left" style={{ width: '16.66%' }}>Selected Tags</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, index) => (
          <tr
            key={index}
            className={`${mode?"bg-[#FFFFFF] text-black transition-all duration-500 ease-in-out":"bg-[#161616] text-white transition-all duration-500 ease-in-out"} `}
            style={{ maxWidth: '1034px', height: '58px' }}
          >
            <td className="p-2 pt-0 text-left rounded-s-lg" style={{ width: '16.66%' }}>{row.serialNo}</td>
            <td className="p-2 text-blue-500 text-left" style={{ width: '16.66%' }}>{row.link}</td>
            <td className="p-2 text-left" style={{ width: '16.66%' }}>{row.prefix}</td>
            <td className="p-2 text-left " style={{ width: '16.66%' }}>
              <select
                onChange={(e) => handleTagChange(index, e)}
                className={`${mode?"bg-[#FFFFFF] text-black transition-all duration-500 ease-in-out":"bg-[#161616] text-white transition-all duration-500 ease-in-out"}  border border-[0.2px] border-opacity-25 border-gray-700`}
                style={{ width: '150px', height: '32px' }}
              >
                <option value="">Select Tags</option>
                {tags.map((tag, i) => (
                  <option key={i} value={tag}>{tag}</option>
                ))}
              </select>
            </td>
            <td className="p-2 overflow-hidden rounded-e-lg" style={{ width: '16.66%' }}>
              <div className="flex gap-[4px] flex-wrap overflow-hidden">
                {row.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="flex items-center px-2 py-1 bg-[#605BFF] text-white rounded-md w-fit"
                    style={{  height: '24px' }}
                  >
                    {tag}
                    <button onClick={() => handleRemoveTag(index, tag)} className ={`${index>=10?"ml-6":"ml-0.2"} text-red-500`}>
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}

    </div>

   



   </div> 
  )
}

export default Rightdash
