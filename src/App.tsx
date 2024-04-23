import './App.css';
import './css_reset.css'
import './section_view.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';

function App() {

  type sectionDataProps = {
    sectionData: {
      name: string,
      description: string,
      numRevisions: number
    }

  }

  type chordProgressionProps = {
    chordProgression: string[]
  }


  const sectionData = {
    name: 'Intro',
    description: 'This intro section consists of a tuba quartet in the style of DJ Templeton & The Windsurfers',
    numRevisions: 42,
  };

  const currentChordProgression = ['C', 'Dm', 'F', 'G']

  const files = [
    {
      title: 'Bass.mp3',
      numComments: 2,
    },
    {
      title: 'Drums.mp3',
      numComments: 2,
    },
    {
      title: 'Yodeling.mp3',
      numComments: 2,
    },
    {
      title: 'Tuba.mp3',
      numComments: 2,
    },
  ]


  const comments = [
    {
      name: 'Jerry',
      commentText: 'My name is Schmoopie and I love this song. It reminds me of my grandpa'
    },
    {
      name: 'Lerry',
      commentText: 'jokes on you! Im deaf.'
    },
    {
      name: 'Jerry',
      commentText: 'Notice the tinnitus ringing in your ears, let the hiss from your damaged hearing remind you of peaceful ocean waves...'
    },
  ]


  // Components

  function Files() {
    return (
      <div className="files">
        <span>+ Files</span>
        {files.map((file) =>
          <div>
            {file.title}
            <br></br> <br></br>
            {file.numComments + ' '}
            Comments
          </div>)}
      </div>
    )
  }


  const ChordProgression:React.FC<chordProgressionProps> = ({chordProgression}) => {
    return (
      <div className="chords">
        <ol>
          {chordProgression.map((chord, index) => <li>{chord}</li>)}
        </ol>
      </div>
    )
  }


  function Comments() {
    return (
      <div className="comments">
        <span>3 Comments</span>
        <div className="display-comments">
          {comments.map((comment, index) => {
            return <>
              <p><FontAwesomeIcon icon={faFaceSmile} /> {comments[index].name}: {comments[index].commentText}</p>
            </>
          })}
        </div>
      </div>
    )
  }

  function Submit() {
    return (
      <div className="submit">
        <textarea placeholder="make a comment"></textarea>
        <button>Submit</button>
      </div>
    )
  }



  const SectionTitle: React.FC<sectionDataProps> = ({ sectionData }) => {
    return (
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
    )
  }

  return (
    <div className="root">
      <SectionTitle sectionData={sectionData} />
      <ChordProgression chordProgression={currentChordProgression}  />
      <Files />
      <Comments />
      <Submit />
    </div>
  );
}

export default App;
