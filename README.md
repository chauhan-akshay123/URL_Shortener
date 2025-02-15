# URL Shortener 🔗

A simple and efficient URL shortener service with custom short codes and QR code generation capabilities.

## 🚀 Features

- **Shorten URLs** - Convert long URLs into short, shareable links
- **Custom Short Codes** - Create your own custom short links
- **QR Code Generation** - Each shortened link comes with a QR code for easy scanning
- **Copy Button** - Quickly copy the shortened link
- **Go Button** - Open the shortened link in a new tab
- **Auto-focus on Input** - Input field is automatically focused when the page loads
- **Clear Input After Submission** - Input fields are cleared after shortening

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js, MongoDB
- **Frontend**: HTML, CSS, JavaScript
- **Database ORM**: Mongoose
- **Other**: dotenv (for environment variables), QR Code API

## ⚙️ Installation Guide

### 1. Clone the Repository

```bash
git clone https://github.com/chauhan-akshay123/URL_Shortener.git
cd URL_Shortener
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory and add:

```ini
PORT=3000
MONGO_URI=your_mongodb_connection_string
BASE_URL=http://localhost:3000
```

### 4. Start the Server

```bash
npm start
```

The backend will run on `http://localhost:5000`.

## 📌 How to Use

1. Open `index.html` in a browser
2. Enter a long URL in the input field
3. (Optional) Enter a custom short code (e.g., "mycustomcode")
4. Click "Shorten" to generate a short URL
5. Click "Copy" to copy the short link
6. Click "Go" to visit the shortened URL
7. Scan the generated QR code for easy sharing

## 📡 API Endpoints

### Shorten URL

**POST** `/shorten`

Request Body:
```json
{
    "longUrl": "https://www.example.com",
    "customCode": "myshort"  // optional
}
```

Response:
```json
{
    "shortUrl": "http://localhost:5000/myshort",
    "qrCodeUrl": "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=http://localhost:5000/myshort"
}
```

### Redirect to Original URL

**GET** `/:shortId`

Example:
```bash
GET http://localhost:5000/myshort
```

Response:
- 302 Redirect to the original URL
- If short ID not found:
```json
{
    "error": "Short URL not found"
}
```

## 📄 Project Structure

```
url-shortener/
│── config/
│   ├── db.connect.js        # MongoDB Connection
│── models/
│   ├── Url.js              # URL Schema
│── routes/
│   ├── urlRoutes.js        # API Routes
│── controllers/
│   ├── urlController.js    # Logic for Shortening & Redirecting URLs
│── public/
│   ├── index.html          # Frontend UI
│── .env
│── server.js
│── package.json
```

## 🚀 Future Improvements

- Add click tracking to count visits per short link
- Implement link expiration (auto-delete after some time)
- Add user authentication to manage short links

## 📜 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Made by Akshay Chauhan

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## ⭐ Show your support

Give a ⭐️ if this project helped you!
