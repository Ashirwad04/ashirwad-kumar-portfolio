import "./Books.css";
import { useNavigate } from "react-router-dom";
import useMeta from "../../hooks/useMeta";

function Books() {
  const navigate = useNavigate();
  useMeta({
    title: "Books — Ashirwad Kumar",
    description: "Books that shaped Ashirwad Kumar's thinking — Kafka, Dostoevsky, Orwell, Premchand and more.",
    keywords: "Ashirwad Kumar books, reading list, Kafka, Dostoevsky, George Orwell, Munshi Premchand",
    url: "https://ashirwadkumar.com/books",
  });

  const books = [
    {
      emoji: "📚",
      title: "Metamorphosis",
      author: "Franz Kafka",
      theme: "Identity • Alienation • Transformation",
      desc: "A thought-provoking novella that explores identity and human connections."
    },
    {
      emoji: "📚",
      title: "Crime and Punishment",
      author: "Fyodor Dostoevsky",
      theme: "Morality • Guilt • Redemption",
      desc: "A psychological masterpiece examining conscience and redemption."
    },
    {
      emoji: "📚",
      title: "White Nights",
      author: "Fyodor Dostoevsky",
      theme: "Loneliness • Love • Dreams",
      desc: "A beautiful story about hope and fleeting human connections."
    },
    {
      emoji: "📚",
      title: "Notes from Underground",
      author: "Fyodor Dostoevsky",
      theme: "Human Nature • Society • Self-awareness",
      desc: "A philosophical work exploring contradictions in human behavior."
    },
    {
      emoji: "📚",
      title: "Godan",
      author: "Munshi Premchand",
      theme: "Rural Life • Social Injustice",
      desc: "A timeless classic portraying the struggles of ordinary people."
    },
    {
      emoji: "📚",
      title: "Do Bailon Ki Katha",
      author: "Munshi Premchand",
      theme: "Friendship • Loyalty • Compassion",
      desc: "A touching story highlighting values through animals."
    },
    {
      emoji: "📚",
      title: "Gunda",
      author: "Pandey Bechan Sharma 'Ugra'",
      theme: "Society • Culture",
      desc: "A powerful work reflecting social realities."
    },
    {
      emoji: "📚",
      title: "Deewar Mein Ek Khidki Rahti Thi",
      author: "Vinod Kumar Shukla",
      theme: "Simplicity • Imagination • Everyday Life",
      desc: "A poetic novel that discovers beauty in ordinary experiences."
    },
    {
      emoji: "📚",
      title: "1984",
      author: "George Orwell",
      theme: "Totalitarianism • Surveillance • Freedom",
      desc: "A dystopian classic that explores the dangers of authoritarianism and the loss of individual freedom."
    },
    {
      emoji: "📚",
      title: "Animal Farm",
      author: "George Orwell",
      theme: "Power • Politics • Revolution",
      desc: "A satirical novella that uses animals to portray how power can corrupt ideals and societies."
    },
    {
      emoji: "📚",
      title: "The Trial",
      author: "Franz Kafka",
      theme: "Bureaucracy • Alienation • Absurdity",
      desc: "A haunting novel about a man trapped in an incomprehensible legal system."
    },
    {
      emoji: "📚",
      title: "Letter to His Father",
      author: "Franz Kafka",
      theme: "Family • Conflict • Self-Reflection",
      desc: "A deeply personal and emotional letter revealing Kafka's inner struggles."
    }
  ];

  return (
    <section className="books-page">
      <button
        className="back-btn"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <div className="books-header">
        <h1>📚 My Library</h1>

        <p>
          Books have shaped the way I think, observe and understand
          people, society and life.
        </p>
      </div>

      <div className="books-grid">
        {books.map((book, index) => (
          <div className="book-card" key={index}>
            <div className="book-icon">{book.emoji}</div>

            <h2>{book.title}</h2>

            <h4>{book.author}</h4>

            <span>{book.theme}</span>

            <p>{book.desc}</p>
          </div>
        ))}
      </div>

      <div className="author-section">
        <h1>✍ Favorite Authors</h1>

        <div className="authors">
          <div className="author-card">🇮🇳 Munshi Premchand</div>
          <div className="author-card">🇷🇺 Fyodor Dostoevsky</div>
          <div className="author-card">🇨🇿 Franz Kafka</div>
          <div className="author-card">🇬🇧 George Orwell</div>
        </div>
      </div>

      <div className="exploring-section">
        <h1>🔎 Currently Exploring</h1>

        <div className="topics">
          <div className="topic-card">Philosophy</div>
          <div className="topic-card">Russian Literature</div>
          <div className="topic-card">Hindi Literature</div>
          <div className="topic-card">Psychology</div>
          <div className="topic-card">Human Nature</div>
        </div>
      </div>
    </section>
  );
}

export default Books;