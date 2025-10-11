// server.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import fetch from 'node-fetch'; 
import path from 'path';
import { fileURLToPath } from 'url';

// --- Configuration ---
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const TMDB_API_KEY = process.env.TMDB_API_KEY;
const TMDB_BASE_URL = "https://api.themoviedb.org/3";

// --- Middleware ---
// Allow cross-origin requests
app.use(cors()); 

// Serve static files (your index.html, CSS, JS) from the root directory
app.use(express.static(path.join(__dirname))); 

// --- Secure Proxy Endpoint ---
// This route captures all requests starting with /api/
// The path parameter (req.params[0]) is the actual TMDB endpoint (e.g., 'movie/popular')
app.get('/api/*', async (req, res) => {
    
    // The path is the part of the URL that follows /api/
    // Example: if client requests /api/movie/popular, tmdbPath is 'movie/popular'
    const tmdbPath = req.params[0]; 
    
    // Get all query parameters from the client's request (e.g., language=en-US)
    const queryParams = new URLSearchParams(req.query);
    
    // Inject the SECRET API key into the parameters list
    queryParams.set('api_key', TMDB_API_KEY);
    
    // Construct the full, secure TMDB URL
    const tmdbUrl = `${TMDB_BASE_URL}/${tmdbPath}?${queryParams.toString()}`;

    try {
        if (!TMDB_API_KEY) {
            console.error('ERROR: TMDB_API_KEY is missing from .env file or environment variables.');
            return res.status(500).json({ error: 'Server configuration error: Missing API key.' });
        }
        
        // Fetch data from TMDB
        const response = await fetch(tmdbUrl);
        
        if (!response.ok) {
            // Forward non-success status codes and messages from TMDB
            const errorBody = await response.text();
            console.error(`TMDB API Error (${response.status}): ${errorBody} for URL: ${tmdbUrl}`);
            return res.status(response.status).json({ error: `TMDB API failed: ${response.statusText}` });
        }

        // Send the JSON response back to the client
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('General Proxy Error:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Catch-all to serve index.html for root requests
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// --- Server Startup ---
app.listen(PORT, () => {
    console.log(`Server running securely at http://localhost:${PORT}`);
    console.log(`Open your browser to: http://localhost:${PORT}`);
});