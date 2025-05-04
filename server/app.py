from flask import Flask, request, jsonify
from flask_cors import CORS
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np

app = Flask(__name__)
CORS(app)

# Dummy roommate profiles
profiles = [
    {"name": "Alex", "vector": [3, 1, 5, 2, 4]},
    {"name": "Jordan", "vector": [1, 5, 2, 4, 3]},
    {"name": "Taylor", "vector": [4, 4, 4, 4, 4]}
]

@app.route('/match', methods=['POST'])
def match():
    user_input = request.json['answers']
    user_vec = np.array(user_input).reshape(1, -1)
    sims = [(p["name"], cosine_similarity([p["vector"]], user_vec)[0][0]) for p in profiles]
    best_match = max(sims, key=lambda x: x[1])
    return jsonify({"match": best_match[0], "score": best_match[1]})

if __name__ == '__main__':
    app.run(debug=True)

    