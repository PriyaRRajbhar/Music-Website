import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [term, setTerm] = useState('');
  const [dark, setDark] = useState(true);

  // switch theme by flipping <body> class
  const toggleTheme = () => {
    document.body.className = dark ? 'light' : 'dark';
    setDark(!dark);
  };

  // hit Express API
  const handleSubmit = async (e) => {
    e.preventDefault();
    const r = await fetch(`http://localhost:5000/api/search?term=${term}`);
    const json = await r.json();
    alert(json.message);              // demo response
    setTerm('');                      // clear box
  };

  return (
    <nav className="nav">
      {/* logo */}
      <div className="logo">
        <span className="logo-red">Tune</span>
        <span className="logo-white">Nest</span>
      </div>

      {/* search */}
      <form onSubmit={handleSubmit} className="search-box">
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search..."
        />
        <button>🔍</button>
      </form>

      {/* icons */}
      <div className="icons">
        <button onClick={toggleTheme} title="Toggle theme">
          {dark ? '☀️' : '🌙'}
        </button>
        <span title="Profile">👤</span>
      </div>
    </nav>
  );
}
