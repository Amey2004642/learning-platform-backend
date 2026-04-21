const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const courses = [
    { id: 1, title: "Full Stack Web Development", category: "Development", description: "Master React, Node.js, and MongoDB", duration: "12 weeks", level: "Intermediate", instructor: "Sarah Chen", price: 49.99, rating: 4.8, icon: "🌐" },
    { id: 2, title: "UI/UX Design Masterclass", category: "Design", description: "Figma, prototyping, user research", duration: "8 weeks", level: "Beginner", instructor: "James Wright", price: 39.99, rating: 4.9, icon: "🎨" },
    { id: 3, title: "Product Management 101", category: "Business", description: "Agile, roadmap planning", duration: "6 weeks", level: "All Levels", instructor: "Elena Martinez", price: 44.99, rating: 4.7, icon: "📈" }
];

app.get('/api/courses', (req, res) => {
    res.json({ success: true, courses: courses });
});

app.get('/api/stats', (req, res) => {
    res.json({ success: true, stats: { total_courses: courses.length, total_students: 1234, avg_rating: 4.8 } });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});