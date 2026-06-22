import "./Blogs.css";
import { useNavigate } from "react-router-dom";
import useMeta from "../../hooks/useMeta";

function Blogs() {
  const navigate = useNavigate();
  useMeta({
    title: "Blogs — Ashirwad Kumar",
    description: "Thoughts and blogs by Ashirwad Kumar on software development, React, Zoho, photography, travel, books, and personal growth.",
    keywords: "Ashirwad Kumar blog, software development, React, Zoho, photography, travel, books",
    url: "https://ashirwadkumar.com/blogs",
  });

  const blogs = [
    {
      emoji: "💻",
      title: "My Journey into Software Development",
      desc: "How I started programming, what motivated me to pursue software development, and the lessons I've learned along the way."
    },
    {
      emoji: "🚀",
      title: "Why I Enjoy Building with React",
      desc: "My experience with React, component-based development, and creating interactive user experiences."
    },
    {
      emoji: "📚",
      title: "Books That Changed My Thinking",
      desc: "Books that influenced my mindset and helped me grow personally and professionally."
    },
    {
      emoji: "🌍",
      title: "What Traveling Across India Taught Me",
      desc: "Experiences, cultures, memories, and lessons gained while exploring different places."
    },
    {
      emoji: "📸",
      title: "Why Photography Became One of My Favorite Hobbies",
      desc: "How photography changed the way I see moments, light, and everyday life."
    },
    {
      emoji: "⚙️",
      title: "My Experience with Zoho Creator and Zoho CRM",
      desc: "Building business solutions, automation, and solving real-world problems with Zoho."
    },
    {
      emoji: "♟️",
      title: "What Chess Has Taught Me About Problem Solving",
      desc: "Patience, planning, strategy, and how chess relates to software engineering."
    },
    {
      emoji: "🌱",
      title: "Technologies I'm Currently Learning",
      desc: "React, Spring Boot, AWS, system design, and modern development tools."
    },
    {
      emoji: "🎯",
      title: "Goals I Want to Achieve in the Next Five Years",
      desc: "My ambitions as a developer, photographer, traveler, and lifelong learner."
    },
    {
      emoji: "✨",
      title: "Lessons I've Learned So Far",
      desc: "Thoughts and experiences collected through books, work, failures, and growth."
    },
    {
      emoji: "🎸",
      title: "How Music Helps Me Stay Creative",
      desc: "Playing guitar, listening to music, and maintaining creativity while coding."
    },
    {
      emoji: "☕",
      title: "Balancing Work, Learning and Life",
      desc: "Managing productivity, avoiding burnout, and staying consistent every day."
    }
  ];

  return (
    <section className="blogs-page">

      <button
        className="back-btn"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <div className="blogs-header">
        <h1>Blogs & Thoughts</h1>

        <p>
          Thoughts, experiences, books, technology, photography,
          travel, and lessons that shape my journey.
        </p>
      </div>

      <div className="blogs-grid">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>

            <div className="blog-icon">
              {blog.emoji}
            </div>

            <h2>{blog.title}</h2>

            <p>{blog.desc}</p>

            <button className="read-btn">
              Read More →
            </button>

          </div>
        ))}
      </div>

    </section>
  );
}

export default Blogs;