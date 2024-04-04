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
      <div className="chords"> Chordsa </div>
      <div className="files"> Files </div>
      <div className="comments"> Comments (big) </div>
      <div className="submit"> Yah submit </div>
    </div>
  );
}

export default App;
