import React, { useState } from 'react';

function CommentBox() {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const [reply, setReply] = useState('');
  const [replies, setReplies] = useState({});

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleReplyChange = (e) => {
    setReply(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && comment.trim()) {
      const newComment = {
        id: Date.now(),
        name: name,
        comment: comment,
        replies: [] // เริ่มต้นด้วยความคิดเห็นย่อยที่เป็นค่าว่าง
      };
      setComments([newComment, ...comments]);
      setName('');
      setComment('');
    }
  };

  const handleReplySubmit = (e, commentId) => {
    e.preventDefault();
    if (reply.trim()) {
      const updatedComments = comments.map((comment) => {
        if (comment.id === commentId) {
          // เพิ่มความคิดเห็นย่อยลงในความคิดเห็นที่ถูกตอบ
          return { ...comment, replies: [...comment.replies, { name, reply }] };
        }
        return comment;
      });
      setComments(updatedComments);
      setReply('');
    }
  };

  return (
    <div className="comment-box">
      <h2>แสดงความคิดเห็นของคุณ</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ชื่อ:</label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="ใส่ชื่อของคุณ"
            required
          />
        </div>
        <div>
          <label>ความคิดเห็น:</label>
          <textarea
            value={comment}
            onChange={handleCommentChange}
            placeholder="พิมพ์ความคิดเห็นของคุณที่นี่"
            required
          />
        </div>
        <button type="submit">ส่งความคิดเห็น</button>
      </form>

      <h3>ความคิดเห็นที่โพสต์:</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <strong>{comment.name}</strong>: {comment.comment}
            <div>
              {/* แบบฟอร์มสำหรับตอบกลับความคิดเห็น */}
              <form onSubmit={(e) => handleReplySubmit(e, comment.id)}>
                <label>ตอบกลับ:</label>
                <input
                  type="text"
                  value={reply}
                  onChange={handleReplyChange}
                  placeholder="พิมพ์ตอบกลับที่นี่"
                />
                <button type="submit">ตอบกลับ</button>
              </form>

              {/* แสดงความคิดเห็นย่อย */}
              {comment.replies.length > 0 && (
                <ul>
                  {comment.replies.map((reply, index) => (
                    <li key={index}>
                      <strong>{reply.name}</strong>: {reply.reply}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentBox;
