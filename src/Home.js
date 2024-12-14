// Home.js
import React, { useState } from 'react';
import Picpost from './Apppost';
import ImageItem from './Appitem'; // นำเข้า ImageItem เพื่อแสดงผลภาพ
import Pics from './Pics'; // นำเข้า Pics สำหรับข้อมูลภาพ

const Home = () => {
  const [selectedPic, setSelectedPic] = useState(null); // ตัวแปรสำหรับเก็บภาพที่เลือก
  const [searchText, setSearchText] = useState(''); // ตัวแปรสำหรับเก็บคำค้นหา

  // ฟังก์ชันเปิดป๊อบอัพเมื่อคลิกที่ภาพ
  const openPopup = (Pic) => {
    setSelectedPic(Pic);
  };

  // ฟังก์ชันปิดป๊อบอัพ
  const onPicCloseClick = () => {
    setSelectedPic(null);
  };

  // ฟังก์ชันกรองภาพตามคำค้นหา
  const filteredPics = Pics.filter((Pic) => {
    return Pic.title.toLowerCase().includes(searchText.toLowerCase()); // กรองภาพตามชื่อที่มีคำค้นหา
  });

  // สร้างกริดของภาพที่กรองแล้ว
  const PicItemElements = filteredPics.map((Pic, index) => {
    return <ImageItem key={index} Pic={Pic} onPicClick={openPopup} />;
  });

  return (
    <div className="home-page">
      
      
      {/* ช่องค้นหา */}
      <center><div className="search-container">
        <input
          type="text"
          placeholder="ค้นหาภาพ..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)} // เมื่อพิมพ์คำค้นหาจะอัพเดต searchText
        />
      </div></center>

      {/* กริดของภาพที่กรองแล้ว */}
      <div className="App-grid">
        {PicItemElements}
      </div>

      {/* ป๊อบอัพเมื่อเลือกภาพ */}
      {selectedPic && (
        <div className="popup-overlay" onClick={onPicCloseClick}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <Picpost Pic={selectedPic} onBgClick={onPicCloseClick} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
