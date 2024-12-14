import './App.css';
import Navbar from './Navbar';
import { FaHamburger } from "react-icons/fa";
import { useState } from 'react';
import ImageItem from './Appitem';
import Pics from './Pics';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // ใช้ Routes แทน Switch
import CommentPage from './CommentPage'; // นำเข้า CommentPage
import Home from './Home'; // นำเข้า Home
import Contact from './Contact';

function App() {
  const [searchText, setSearchText] = useState('');
  const [selectedPic, setSelectedPic] = useState(null);
  const [showNav, setShowNav] = useState(false);

  // ฟังก์ชันเปิดป๊อบอัพ
  const openPopup = (Pic) => {
    setSelectedPic(Pic);
  };

  // ฟังก์ชันปิดป๊อบอัพ
  const onPicCloseClick = () => {
    setSelectedPic(null);
  };

  // ฟังก์ชันกรองภาพตามคำค้นหา
  const filteredPics = Pics.filter((Pic) => {
    return Pic.title.toLowerCase().includes(searchText.toLowerCase());
  });

  // สร้างอิลิเมนต์ของภาพจากข้อมูลที่กรองแล้ว
  const PicItemElements = filteredPics.map((Pic, index) => {
    return <ImageItem key={index} Pic={Pic} onPicClick={openPopup} />;
  });

  return (
    <Router>
      <div className="App">
        {/* ส่วนของ AppHeader */}
        <div className="AppHeader">
          <FaHamburger onClick={() => setShowNav(!showNav)} />
          
        </div>

        {/* เมนู Navbar */}
        <Navbar show={showNav} />

        

        {/* การกำหนด Routing สำหรับ CommentPage และ Home */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* หน้าแรก */}
          <Route path="/comment" element={<CommentPage />} /> {/* เส้นทางไปยังหน้า CommentPage */}
          <Route path="/contact" element={<Contact />} /> {/* หน้าติดต่อเรา */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
