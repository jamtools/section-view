import './App.css';
import './SectionView.css';

function App() {
  return (
    <div className="parent">
      <div className="section-title">
        <div className='text'>
          <h1> Intro </h1>
          <p>This intro section consists of a tuba quartet in the style of DJ Templeton & The Windsurfers</p>
        </div>
        <div className='buttons'>
          <button> 42 revisions </button>
          <button> save revision </button>
        </div>
      </div>
      <div className="chords">
        <ol>
          <li>C</li>
          <li>Dm</li>
          <li>F</li>
          <li>G</li>
        </ol>
      </div>
      <div className="files">
        <span>+ Files</span>
          <div>Bass.mp3 <br></br> <br></br> 2 Comments</div>
          <div>Drums.mp3 <br></br> <br></br> 2 Comments</div>
          <div>Yodeling.mp3 <br></br> <br></br> 2 Comments  </div>
          <div>Tuba.mp3 <br></br> <br></br> 2 Comments  </div>
      </div>
      <div className="comments">
        <span>3 Comments</span>
      </div>
      <div className="submit"> Yah submit </div>
    </div>
  );
}

export default App;
