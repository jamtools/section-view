import './App.css';
import './SectionView.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';

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
        <div className="display-comments">
        <p><FontAwesomeIcon icon={faFaceSmile} /> Jerry: My name is Schmoopie and I love this song. It reminds me of my grandpa</p>
        <p><FontAwesomeIcon icon={faFaceSmile} /> Larry: jokes on you! Im deaf.</p>
        <p><FontAwesomeIcon icon={faFaceSmile} /> Terry: Notice the tinnitus ringing in your ears, let the hiss from your damaged hearing remind you of peaceful ocean waves...</p>
        </div>
      </div>
      <div className="submit">
         I'm making a comment
      </div>
    </div>
  );
}

export default App;
