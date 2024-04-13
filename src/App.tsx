import './App.css';
import './css_reset.css'
import './section_view.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';

function App() {



  const sectionData = {
    name: 'Intro',
    description: 'This intro section consists of a tuba quartet in the style of DJ Templeton & The Windsurfers',
    numRevisions: 42,
};

  const currentChordProgression = ['C', 'Dm', 'F', 'G']

  const files = [
    {title: 'Bass.mp3',
      numComments: 2,
    },
    {title: 'Drums.mp3',
      numComments: 2,
    },
    {title: 'Yodeling.mp3',
      numComments: 2,
    },
    {title: 'Tuba.mp3',
      numComments: 2,
    },
  ]


  const comments = [
    {name: 'Jerry', 
      commentText: 'My name is Schmoopie and I love this song. It reminds me of my grandpa'
    },
    {name: 'Lerry', 
      commentText: 'jokes on you! Im deaf.'
    },
    {name: 'Jerry', 
      commentText: 'Notice the tinnitus ringing in your ears, let the hiss from your damaged hearing remind you of peaceful ocean waves...'
    }
  ]


  // Components

  function Files() {
    return <>
      <span>+ Files</span>
      {files.map((file) =>
        <div>
        {file.title}
        <br></br> <br></br>
        {file.numComments + ' '} 
         Comments
        </div>)}
      </>
  }


  function ChordProgression() {
    return <ol>
      {currentChordProgression.map((chord,index) => <li>{chord}</li> )}
    </ol>
  }





  return (
    <div className="root">
      <div className="section-title">
        <div className='text'>
          <h1> {sectionData.name} </h1>
          <p>{sectionData.description}</p>
        </div>
        <div className='buttons'>
          <button> {sectionData.numRevisions} revisions </button>
          <button> Save revision </button>
        </div>
      </div>
      <div className="chords">
        <ChordProgression/>
      </div>
      <div className="files">
        <Files/>
      </div>
      <div className="comments">
        <span>3 Comments</span>
        <div className="display-comments">
        <p><FontAwesomeIcon icon={faFaceSmile} /> {comments[0].name}: {comments[0].commentText} </p>
        <p><FontAwesomeIcon icon={faFaceSmile} /> {comments[1].name}: {comments[1].commentText} </p>
        <p><FontAwesomeIcon icon={faFaceSmile} /> {comments[2].name}: {comments[2].commentText} </p>
        </div>
      </div>
      <div className="submit">
      <textarea placeholder="make a comment"></textarea>
      <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
