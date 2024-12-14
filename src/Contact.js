import React from 'react';
import './Contact.css';


const Contact = () => {
  return (
    <div className="contact-page">
      <h2>ติดต่อเรา</h2>
      <p>หากคุณมีคำถามหรือข้อเสนอแนะ กรุณาติดต่อเราผ่านแบบฟอร์มด้านล่าง</p>
      
      {/* ฟอร์มการติดต่อ */}
      <form className="contact-form">
        <div className="form-group">
          <label>ชื่อ:</label>
          <input type="text" placeholder="ใส่ชื่อของคุณ" required />
        </div>
        <div className="form-group">
          <label>อีเมล:</label>
          <input type="email" placeholder="ใส่อีเมลของคุณ" required />
        </div>
        <div className="form-group">
          <label>ข้อความ:</label>
          <textarea placeholder="พิมพ์ข้อความของคุณที่นี่" required></textarea>
        </div>
        <button type="submit" className="submit-button">ส่งข้อความ</button>
      </form>

      {/* นามบัตร */}
      <div className="business-card">
        <div className="business-card-icon">
          
        </div>
        <h3>ข้อมูลการติดต่อ</h3>
        <p><strong>ชื่อ:</strong> บริษัท Garden จำกัด</p>
        <p><strong>ที่อยู่:</strong> 68/368 ต.รัษฎา อ.เมือง จ.ภูเก็ต 83000</p>
        <p><strong>โทรศัพท์:</strong> 095-026-9849</p>
        <p><strong>อีเมล:</strong>tharathaep3@gmail.com</p>
      </div>
    </div>
  );
};

export default Contact;
