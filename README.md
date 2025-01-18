# Text2Image Project

This project is a web application that transforms text inputs into images using artificial intelligence. The project consists of a modern web interface (React) and a powerful backend API.

## 🚀 Getting Started

This section explains step by step how to run the project in your local development environment.

### Prerequisites

The following software must be installed on your computer to run the project:

- Node.js (v16 or higher)
- Python (3.8 or higher)
- Jupyter Notebook
- npm or yarn
- Git
- Ngrok (Optional - For external access)

### Project Structure

```
text2image-project/
├── text2image-ui/     # React frontend application
└── model_api.ipynb    # Jupyter notebook backend API
```

### Installation Steps

1. **Clone the Project**
   ```bash
   git clone [project-url]
   cd [project-folder]
   ```

2. **Frontend Setup**
   ```bash
   cd text2image-ui
   npm install
   ```

3. **Backend Setup**
   ```bash
   pip install -r requirements.txt
   jupyter notebook
   ```
   When Jupyter Notebook opens:
   - Open the `model_api.ipynb` file
   - Run all cells in sequence (Run All)

### Running the Application

1. **Starting the Backend API**
   - Open `model_api.ipynb` in Jupyter Notebook
   - Run all cells
   - The API will run at `http://localhost:5000` by default

2. **Starting the Frontend**
   ```bash
   cd text2image-ui
   npm start
   ```
   The frontend application will run at `http://localhost:3000` by default.

### Ngrok External Access Configuration (Optional)

If you want to expose your application to the outside world, you can use Ngrok:

1. **Ngrok Setup**
   - [Download and install Ngrok](https://ngrok.com/download)
   - Create a Ngrok account and set up your auth token

2. **Expose Backend API with Ngrok**
   ```bash
   ngrok http 5000
   ```
   This command will give you a unique URL (e.g., `https://abc123.ngrok.io`)

3. **Configure Ngrok URL in Frontend**
   - Open `text2image-ui/.env` file
   - Update the API URL with the Ngrok URL:
   ```env
   REACT_APP_API_URL=https://abc123.ngrok.io
   ```
   - Restart the frontend application

⚠️ **Important Notes:**
- Make sure the Backend API is running
- Ensure the API URL in the `.env` file is correct before starting the frontend application
- Use `http://localhost:5000` for local development
- Pay attention to running cells in sequence in Jupyter Notebook
- When using Ngrok:
  - You'll get a new URL at the start of each session
  - Free account session duration is 2 hours
  - Don't forget to update the `.env` file when the URL changes

## Demo

Client URL: [https://text2image-ui.vercel.app/](https://text2image-ui.vercel.app/)