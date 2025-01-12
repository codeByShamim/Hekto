import React, { useState, useEffect } from 'react';
import { FaUser, FaEnvelope, FaComment } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './BlogComments.module.css';

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({
    name: '',
    email: '',
    content: '',
    saveDetails: false,
  });

  // Sample initial comments (replace with your data)
  const initialComments = [
    { id: 1, name: 'John Doe', email: 'john@example.com', content: 'Great article!', date: '2024-12-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', content: 'Thanks for the info!', date: '2024-12-14' },
  ];

  // Load comments from localStorage or use initial comments
  useEffect(() => {
    const savedComment = localStorage.getItem('userComment');
    if (savedComment) {
      setComments([JSON.parse(savedComment), ...initialComments].slice(0, 3));
    } else {
      setComments(initialComments);
    }
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewComment((prevComment) => ({
      ...prevComment,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle comment submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure all fields are filled
    if (newComment.name && newComment.email && newComment.content) {
      // Prevent duplicate comments by the same user (based on email)
      if (comments.some((comment) => comment.email === newComment.email)) {
        toast.error('You have already submitted a comment.'); // Error toast
        return;
      }

      // Prepare new comment data
      const newCommentData = {
        id: Date.now(), // Use timestamp for unique ID
        ...newComment,
        date: new Date().toISOString().split('T')[0], // Current date
      };

      // Save new comment to localStorage and update comments list
      localStorage.setItem('userComment', JSON.stringify(newCommentData));
      setComments([newCommentData, ...initialComments].slice(0, 3));

      // Show success toast
      toast.success('Your comment has been submitted successfully!');

      // Clear the form
      setNewComment({ name: '', email: '', content: '', saveDetails: false });
    } else {
      toast.error('Please fill in all required fields.'); // Error toast if form is incomplete
    }
  };

  return (
    <div className={styles.commentSection}>
      {/* Render Comments */}
      <div className={styles.commentsList}>
        {comments.map((comment) => (
          <div key={comment.id} className={styles.comment}>
            <div className={styles.commentImage}>
              <img src="https://via.placeholder.com/100" alt={comment.name} />
            </div>
            <div className={styles.commentDetails}>
              <p className={styles.commentMeta}>
                <strong>{comment.name}</strong> <span>{comment.date}</span>
              </p>
              <p className={styles.commentContent}>{comment.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Comment Input Form */}
      <form className={styles.commentForm} onSubmit={handleSubmit}>
        <div className={styles.inputRow}>
          <div className={styles.inputGroup}>
            <FaUser className={styles.icon} />
            <input
              type="text"
              id="name"
              name="name"
              value={newComment.name}
              onChange={handleInputChange}
              required
              placeholder="Your Name*"
            />
          </div>
          <div className={styles.inputGroup}>
            <FaEnvelope className={styles.icon} />
            <input
              type="email"
              id="email"
              name="email"
              value={newComment.email}
              onChange={handleInputChange}
              required
              placeholder="Write Your Email*"
            />
          </div>
        </div>
        <div className={styles.textAreaGroup}>
          <FaComment className={styles.icon} />
          <textarea
            id="content"
            name="content"
            value={newComment.content}
            onChange={handleInputChange}
            required
            placeholder="Write your comment*"
          ></textarea>
        </div>
        <div className={styles.checkboxGroup}>
          <label>
            <input
              type="checkbox"
              name="saveDetails"
              checked={newComment.saveDetails}
              onChange={handleInputChange}
            />
            Save my details for the next time I comment.
          </label>
        </div>
        <button type="submit" className={styles.submitButton}>
          Submit Comment
        </button>
      </form>

      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
};

export default CommentSection;
