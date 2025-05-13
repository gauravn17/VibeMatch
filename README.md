# VibeMatch
AI-powered roommate matcher
![VibeMatch logo](https://github.com/user-attachments/assets/0b11f897-76f2-41c5-b026-c12f3f412fc3)

# 💫 VibeMatch — Find Your Ideal Roommate with AI

VibeMatch is a machine learning-powered roommate matching web application that helps users find the most compatible roommates based on lifestyle preferences and personal summaries. It features a neon-themed, futuristic UI, BERT-based semantic bio comparison, and a slider-based preference engine.

![VibeMatch Logo](./client/public/vm1.jpeg)

---

## 🚀 Features

- 🎯 Lifestyle-based matching (sliders for sleep, noise, guests, cleanliness)
- 🧠 BERT-powered bio matching using SentenceTransformers
- 📝 Signup with profile picture and summary
- 💾 Profile and bio embedding storage
- ⚡ Glowing neon UI inspired by sci-fi themes
- 🧪 KNN-based similarity search
- 🎨 Responsive React frontend using Tailwind CSS
- 🔐 Flask backend API with ML integration

---

## 🧱 Project Structure

VibeMatch/
├── client/                 # React + Tailwind frontend
│   ├── public/
│   │   └── vm1.jpeg        # Neon ring image (logo/theme)
│   ├── src/
│   │   ├── App.js
│   │   ├── Signup.jsx
│   │   ├── MatchPage.jsx
│   │   ├── Navbar.jsx
│   │   └── index.css       # Tailwind imports
│   └── tailwind.config.js
├── server/                 # Flask backend
│   ├── app.py              # Main app with match & register routes
│   ├── auth.py             # Handles registration and file upload
│   ├── uploads/            # Profile image uploads
│   └── embeddings.json     # (Optional) Stores BERT vectors
└── README.md

---

## 💻 Tech Stack

| Layer         | Technology                                   |
|---------------|-----------------------------------------------|
| Frontend      | React, Tailwind CSS, React Router             |
| Backend       | Flask, Flask-CORS                             |
| ML Matching   | scikit-learn (KNN), SentenceTransformers (BERT) |
| Storage       | Local JSON or upgradeable to MongoDB/PostgreSQL |
| Image Uploads | `werkzeug.utils.secure_filename`, Flask static |

---

## 🔧 Getting Started

### ✅ Prerequisites

- Node.js + npm
- Python 3.8+
- pip + virtualenv

---

### 📦 Backend Setup (Flask)

```bash
cd server
python3 -m venv venv
source venv/bin/activate
pip install flask flask-cors sentence-transformers scikit-learn python-dotenv
