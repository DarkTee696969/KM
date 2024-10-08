const express = require('express');
const router = express.Router();
const Post = require('../models/createpost');

// ตัวอย่างการใช้ Express และ MongoDB
app.get('/show', (req, res) => {
    const userEmail = req.session.userEmail; // ดึง email จาก session ของผู้ใช้ที่เข้าสู่ระบบ
  
    if (!userEmail) {
      return res.status(401).json({ error: 'Unauthorized: No email found in session' });
    }
  
    // ค้นหาโพสต์ตาม email
    Post.find({ email: userEmail }, (err, posts) => {
      if (err) {
        return res.status(500).json({ error: 'Error fetching data' });
      }
      res.json(posts); // ส่งข้อมูลโพสต์ที่ตรงกับ email ไปยัง frontend
    });
  });

module.exports = router;
