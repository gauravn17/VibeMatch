# server/auth.py
import os
from flask import request, jsonify
from werkzeug.utils import secure_filename

UPLOAD_FOLDER = "uploads"
ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg"}

users = []  # TEMP: use a DB or JSON later

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def register_user():
    first_name = request.form.get('firstName')
    last_name = request.form.get('lastName')
    email = request.form.get('email')
    bio = request.form.get('bio')
    file = request.files.get('profilePic')

    if not all([first_name, last_name, email, bio, file]):
        return jsonify({"error": "All fields required"}), 400

    if not allowed_file(file.filename):
        return jsonify({"error": "Invalid file type"}), 400

    filename = secure_filename(file.filename)
    save_path = os.path.join(UPLOAD_FOLDER, filename)
    file.save(save_path)

    users.append({
        "name": f"{first_name} {last_name}",
        "email": email,
        "bio": bio,
        "pic": save_path
    })

    return jsonify({"message": "User registered successfully", "path": save_path})