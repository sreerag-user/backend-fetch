const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors()); 

let backendURL = ""; // Store the uploaded backend URL

app.post("/api/upload-backend-url", (req, res) => {
    const { backendUrl } = req.body;
    
    if (!backendUrl || !backendUrl.startsWith("http")) {
        return res.status(400).json({ message: "Invalid URL format" });
    }

    backendURL = backendUrl;
    res.json({ message: "Backend URL uploaded successfully", backendURL });
});

app.get("/api/get-backend-url", (req, res) => {
    res.json({ backendURL });
});

const PORT = 3333;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
