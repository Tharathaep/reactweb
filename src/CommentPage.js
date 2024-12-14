import React, { useState } from 'react';

const CommentPage = () => {
  // สถานะสำหรับเก็บชื่อผู้โพสต์และข้อความ
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]); // เก็บความคิดเห็นทั้งหมด
  const [reply, setReply] = useState(''); // เก็บข้อความตอบกลับ

  // ฟังก์ชันสำหรับการโพสต์ความคิดเห็น
  const handlePostComment = () => {
    if (name && comment) {
      const newComment = {
        id: comments.length + 1,
        name,
        comment,
        time: new Date().toLocaleString(), // เก็บเวลาปัจจุบัน
        replies: [], // เริ่มต้นด้วยคำตอบว่าง
      };
      setComments([...comments, newComment]); // เพิ่มความคิดเห็นใหม่ไปที่สถานะ
      setName(''); // ล้างชื่อ
      setComment(''); // ล้างข้อความ
    } else {
      alert('กรุณากรอกชื่อและความคิดเห็น');
    }
  };

  // ฟังก์ชันสำหรับการโพสต์ตอบกลับ
  const handlePostReply = (commentId) => {
    if (reply) {
      const updatedComments = comments.map((comment) => {
        if (comment.id === commentId) {
          // เพิ่มคำตอบเข้าไปในคำตอบของความคิดเห็นนั้น ๆ
          return {
            ...comment,
            replies: [
              ...comment.replies,
              { name, reply, time: new Date().toLocaleString() }, // เก็บเวลาของคำตอบ
            ],
          };
        }
        return comment;
      });
      setComments(updatedComments);
      setReply(''); // ล้างข้อความตอบกลับ
    } else {
      alert('กรุณากรอกข้อความตอบกลับ');
    }
  };

  return (
    <div className="comment-page">
      <h2>หน้าแสดงความคิดเห็น</h2>

      {/* ฟอร์มการโพสต์ความคิดเห็น */}
      <div className="comment-form">
        <input
          type="text"
          placeholder="ชื่อของคุณ"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="แสดงความคิดเห็นของคุณ"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={handlePostComment}>โพสต์ความคิดเห็น</button>
      </div>

      {/* แสดงรายการความคิดเห็น */}
      <div className="comment-list">
        <h3>ความคิดเห็นทั้งหมด</h3>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id} className="comment-item">
              <h4>{comment.name}</h4>
              <p>{comment.comment}</p>
              <small>โพสต์เมื่อ: {comment.time}</small>

              {/* ฟอร์มการตอบกลับ */}
              <div className="reply-form">
                <input
                  type="text"
                  placeholder="ตอบกลับความคิดเห็น"
                  value={reply}
                  onChange={(e) => setReply(e.target.value)}
                />
                <button onClick={() => handlePostReply(comment.id)}>ตอบกลับ</button>
              </div>

              {/* แสดงความคิดเห็นย่อย (ตอบกลับ) */}
              {comment.replies.length > 0 && (
                <div className="replies">
                  {comment.replies.map((reply, index) => (
                    <div key={index} className="reply-item">
                      <strong>{reply.name}</strong>: {reply.reply}
                      <br />
                      <small>ตอบเมื่อ: {reply.time}</small>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        ) : (
          <p>ยังไม่มีความคิดเห็น</p>
        )}
      </div>
    </div>
  );
};

export default CommentPage;
