# PowerFM Unofficial Refactor

A minimalist, no-framework web music player for PowerFM, built for fun and learning. This project demonstrates how to create a modern, interactive audio player using only vanilla JavaScript, HTML, CSS, SVG, and the Fetch API—no external libraries or frameworks.

## Project Overview

PowerFM Unofficial Refactor is a web-based music player that streams live audio from PowerFM and displays real-time song information, album art, and playback controls. The UI is inspired by a popular Dribbble design and aims to be visually appealing and responsive.

## Features

- 🎵 **Live Streaming:** Plays PowerFM's live radio stream.
- 🕒 **Real-Time Song Info:** Fetches and displays current song title, artist, album cover, and remaining time using the Fetch API.
- ⏯️ **Playback Controls:** Play, pause, next, and previous buttons with animated SVG icons.
- 🟠 **SVG Progress Circle:** Visualizes song progress with a circular SVG bar and album art fill.
- 📱 **Responsive Design:** Looks great on desktop and mobile.
- ⚡ **No Dependencies:** Pure HTML, CSS, and JavaScript—no frameworks or build tools.

## Tech Stack

- **HTML5**: Semantic markup for structure and accessibility.
- **CSS3**: Custom properties, grid, and modern layout techniques.
- **JavaScript (ES6+)**: DOM manipulation, Fetch API, and audio control.
- **SVG**: For dynamic progress visualization and icons.
- **[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)**: To retrieve song metadata from PowerFM's API.
- **[HTML Audio Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)**: For audio playback.

## File Structure

```
native-player/
├── assets/
│   ├── javascripts/
│   │   └── app.js           # Main player logic and API integration
│   └── stylesheets/
│       └── application.css  # Player styles and layout
├── index.html               # Main HTML file and player UI
├── screenshot.png           # UI preview image
└── README.md                # Project documentation
```

## Usage

### Online Preview

Try the player live: [PowerFM Native Player](https://coskuntekin.github.io/native-player)

### Run Locally

1. **Clone the repository:**
   ```
   git clone https://github.com/coskuntekin/native-player.git
   cd native-player
   ```

2. **Start a local server:**

   - **Python 3:**
     ```
     python3 -m http.server
     ```
   - **Python 2:**
     ```
     python -m SimpleHTTPServer
     ```

3. **Open your browser and visit:**  
   [http://localhost:8000](http://localhost:8000)

## How It Works

- The player fetches live song data from PowerFM's public API:
  ```
  https://api.powergroup.com.tr/Channels/powerFM/?appRef=iPowerWebV4&qualityIndex=0&lang=tr&apiVersion=28
  ```
- Song info, artist, and album art are updated in real time.
- The audio stream is played via:
  ```
  https://powerfm.listenpowerapp.com/powerfm/mpeg/icecast.audio
  ```
- The SVG progress circle animates as the song plays.

## Screenshots

![PowerFM UI](screenshot.png)

## Credits & Assets

- **Stream Source:** [PowerFM](http://www.powerapp.com.tr/powerfm)
- **UI Design Inspiration:** [Dribbble - Music Player](https://dribbble.com/shots/1007664-Music-Player)
- **Icons:** [FontAwesome](https://fontawesome.com)

## Contributing

Contributions, bug reports, and suggestions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Commit your changes with clear messages.
4. Open a pull request describing your changes.

## License

This project is for educational and non-commercial use only. All rights to the PowerFM stream and branding belong to their respective owners.

---

Enjoy the music! 🎶