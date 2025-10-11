# Cineverse 🎬

### Project Overview
Cineverse is a modern, responsive web application designed for comprehensive movie and TV show discovery. It is built as a full-stack secure service, demonstrating best practices for protecting sensitive data while delivering a smooth client-side experience.

<p align="center">
  <img width="964" height="895" alt="image" src="https://github.com/user-attachments/assets/0361e76c-7622-40f8-8dac-9a5831fe9151" />
  <img width="673" height="723" alt="image" src="https://github.com/user-attachments/assets/2b189038-22c7-473c-90c5-4d520c2c4862" />


  
</p>

---
### Tools & Technologies

-   **Frontend:**
    -   **HTML5:** The core markup language used for the structure of the web page.
    -   **CSS3:** Custom styles for a dark theme and modal animations.
    -   **JavaScript (ES6+):** Powers all dynamic features, including API calls, DOM manipulation, and event handling.
    -   **Tailwind CSS:** A utility-first CSS framework for building custom, responsive designs quickly.
-   **APIs & Data:**
    -   **The Movie Database (TMDB) API:** The primary source for all movie, TV show, cast, and image data.
-   **Development Tools:**
    -   **Visual Studio Code:** The code editor used for development.
    -   **Git:** Version control system for tracking changes.

---
 
### API Key Source

The project uses a single API key from The Movie Database (TMDB) to fetch all its content. For simplicity and ease of use in a static project, the API key is included directly in the `index.html` file.

**Note:** For production-level applications with a backend server, it is highly recommended to use environment variables (`.env`) and keep API keys on the server side to prevent them from being publicly exposed.

---

### Key Features

-   **Comprehensive Content Display:** Features multiple content sections, including:
    -   **On-Air Movies & Shows:** Content currently in theaters or airing.
    -   **Popular Movies & Series:** Top-rated content based on audience popularity.
    -   **High-Rated Movies & Series:** Critically acclaimed films and shows.
    -   **Special Collections:** Curated lists for specific franchises like Marvel and DC, as well as movies and shows by language (Hindi, Telugu, Korean, etc.).
-   **Interactive UI with Detailed Information:**
    -   Clicking on a movie or show opens a modal with a wealth of information to help you decide what to watch.
    -   **Detailed Information:** View the title, release date, and original language.
    -   **Ratings & Plot:** See the IMDb rating and a comprehensive plot summary.
    -   **Cast & Crew:** Explore the main cast members with character names and photos, as well as the film's director.
    -   **Photos & Videos:** Browse a gallery of high-quality backdrops and watch trailers and video clips directly within the modal.
-   **Advanced Recommendation System:**
    -   A dedicated "Get Recommendation" button opens a modal with a set of powerful filters.
    -   Users can create customized content lists based on:
        -   Content Type (Movies, Shows, Animation, Kids)
        -   Genres (Action, Drama, Sci-Fi, etc.)
        -   Languages (English, Hindi, Telugu, etc.)
        -   Production Studios (Marvel, DC, Netflix, etc.)
        -   Minimum Rating, Release Year, and Runtime.
-   **Dynamic Search:**
    -   The search bar allows users to search the entire TMDB library for movies, shows, and more.
    -   Search results are displayed in a separate, vertically scrolling grid with infinite loading.

---
### Folder Structure
The project maintains a flat, efficient structure suitable for small, single-page applications served by a minimalist backend.
<img width="799" height="196" alt="image" src="https://github.com/user-attachments/assets/1c9e6eca-679c-4740-ab9c-58812737da52" />


-----
### 👤 Author

-   **Author Name:** Thiruveedhula Lok Vinay
-   **GitHub:** https://github.com/LokVinay [LINK]
-   **Portfolio/Website:** https://lokvinay-portfolio.netlify.app/ [LINK]

---
