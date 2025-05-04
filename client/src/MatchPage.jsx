// client/src/MatchPage.jsx
import { useState } from 'react';
import axios from 'axios';

function MatchPage() {
  const [form, setForm] = useState([3, 3, 3, 3, 3]);
  const [result, setResult] = useState(null);

  const handleChange = (index, value) => {
    const updated = [...form];
    updated[index] = Number(value);
    setForm(updated);
  };

  const submitForm = async () => {
    try {
      const res = await axios.post('http://localhost:5000/match', {
        answers: form
      });
      setResult(res.data);
    } catch (error) {
      console.error("Match failed", error);
    }
  };

  const questions = [
    "Cleanliness Preference",
    "Preferred Sleep Time",
    "Noise Tolerance",
    "Comfort with Guests",
    "Willingness to Share Items"
  ];

  return (
    <div className="App" style={{ padding: '2rem', maxWidth: '500px', margin: 'auto' }}>
      <h1>VibeMatch 💫</h1>
      <p>Rate each from 1 (low) to 5 (high)</p>
      {questions.map((q, i) => (
        <div key={i} style={{ marginBottom: '1rem' }}>
          <label>{q}: </label>
          <input
            type="range"
            min="1"
            max="5"
            value={form[i]}
            onChange={e => handleChange(i, e.target.value)}
          />
          <span style={{ marginLeft: '10px' }}>{form[i]}</span>
        </div>
      ))}
      <button onClick={submitForm}>Find My Roommate</button>

      {result && (
        <div style={{ marginTop: '2rem' }}>
          <h3>✅ Best Match: {result.match}</h3>
          <p>Compatibility Score: {result.score.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}

export default MatchPage;
