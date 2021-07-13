import "./App.css";
import "./main.js";

function App() {
  return (
    <section class="single-song">
      <div class="container">
        <div class="row main-song">
          <img src="1.jpg" alt="Album-hora" />
          <p class="title" id="track-title">
            Track Title
          </p>
          <p class="artist" id="artist">
            Artist
          </p>
          <p class="album" id="album">
            Album
          </p>
          <button type="submit">Select</button>
        </div>
      </div>
    </section>
  );
}

export default App;
