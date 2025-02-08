import express from "express";
import cors from "cors";

const app = express();

// parser
app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
    res.json({
        server: "Server is running...",
        time: new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" })
    })
})

export default app;