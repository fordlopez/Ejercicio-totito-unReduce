import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();
console.log(process.env.OPENAI_API_KEY.length);
const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Servidor funcionando");
});

app.get("/ia", async (req, res) => {
    try {
        const respuesta = await client.responses.create({
            model: "gpt-5",
            input: "Responde únicamente con la palabra: Hola",
        });

        res.json({
            respuesta: respuesta.output_text,
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: "Ocurrió un error",
        });
    }
});

app.listen(3000, () => {
    console.log("Servidor iniciado");
});