# SpheraTech
SpheraTech: Leveraging AI and 3D Gaussian Splatting Immersive Historical Simulations.

# Immersive Historical Learning Platform

This project provides an open-source educational platform to explore historical environments through AI-driven 3D interactions, Pixel Streaming, and modern technologies. Users can enjoy features like AI-generated historical narratives, dialogues with AI-powered historical figures, dynamic quizzes, and more. Below is a detailed guide to set up and run the platform.

---

## **Project Features**
- **3D Historical Environments:** Explore iconic locations like the Taj Mahal, Scotland, Korean Palace, Museum, and Egypt with AI-powered immersive experiences.
- **AI-Driven Features:** Interact with historical figures and learn through AI-generated narratives and quizzes.
- **Pixel Streaming:** Delivers high-quality 3D rendering for seamless exploration.
- **Integrated Teacher's React App:** Manage educational content with a backend powered by Node.js and MongoDB.

---

## **Folder Structure**
1. **Frontend (React-based Teacher App):**
   - Located in the `frontend` folder.
   - Allows teachers to create and manage quizzes, courses, and personalized educational content.
2. **Backend (Node.js with MongoDB):**
   - Located in the `backend` folder.
   - Handles API requests, database connections, and quiz management.
3. **Web Pages (HTML, CSS, JS with Bootstrap):**
   - Core user-facing website, with interlinked pages starting from `video.html`.
   - Features standalone quizzes and links to React apps and historical environments.
4. **GeoJson Historical Map:**
   - Converted GeoJson to svg in using R and displayed in website all the timeline earth map`.
  

---

## **Installation and Setup**

### **General Requirements**
Ensure you have the following installed:
- Node.js (version 14+)
- npm (Node Package Manager)
- A web browser (Chrome or equivalent)

### **Frontend Setup**
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend React application:
   ```bash
   npm start
   ```
   - The app runs on a unique port and can be accessed via the main HTML page.

### **Backend Setup**
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   node server.js
   ```

### **Website Setup**
1. Open `video.html` in a browser. 
   - This serves as the entry point to the main website.
   - From here, you can navigate to other interlinked pages and features.

---

## **Pixel Streaming Setup**
- Use the following links to access high-quality 3D environments hosted on Google Drive:
  - [Taj Mahal](https://drive.google.com/drive/folders/1cg-H7EhzbzjNxDtPr0MgNJIO7ip-G5R5?usp=sharing)
  - [Scotland](https://drive.google.com/drive/folders/1UjvQw9nKKw0QWxmeT0-III6VB1MM_O8c?usp=sharing)
  - [Korean Palace](https://drive.google.com/drive/folders/1THGIK584NW8exFPb3jtLP_hZ1D2rYYBw?usp=sharing)
  - [Museum](https://drive.google.com/drive/folders/1ZdiYjmUn4z0ygF9XOkA01PYGXI4z0Gt2?usp=sharing)
  - [Egypt](https://drive.google.com/drive/folders/1A1yFs2RAoUPhXS-VUMp9jjj2el7amvnJ?usp=sharing)

To integrate Pixel Streaming:
1. Use a streaming service capable of rendering the 3D content hosted in the drive.
2. Add links to the respective environments directly into the website for seamless navigation.

---

## **Key Notes**
- Ensure the frontend React app runs on a unique port (e.g., `3000`) to avoid conflicts.
- MongoDB connection strings and server configuration should be properly set in the backend.
- Use the website’s main page (`video.html`) as the gateway to the entire system.

---

## **License**
This project is open-source and distributed under the MIT License. Feel free to contribute and enhance the platform for educational purposes.

---

## **Support**
For any issues or queries, feel free to reach out to the contributors or open an issue in the repository.

**Happy Learning!**
