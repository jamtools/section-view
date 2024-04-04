import './App.css';
import './SectionView.css';

function App() {
  return (
    <div className="parent">
      <div className="section-title">
        <h1> Intro </h1>
        <button> 42 revisions </button>
        <button> save revision </button>
      </div>
      <div className="chords"> Chordsa </div>
      <div className="files"> Files </div>
      <div className="comments"> Comments (big) </div>
      <div className="submit"> Yah submit </div>
    </div>
  );
}

export default App;
