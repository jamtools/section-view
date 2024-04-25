import './App.css';
import './css_reset.css'
import './section_view.css';
import * as Types from './types';
import * as testData from './testData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';

function App() {


  // Components

  const Files:React.FC<Types.filesProps> = ({files}) => {
    return (
      <div className="files">
        <span>+ Files</span>
        {files.map((file) =>
          <div id={file.id}>
            {file.title}
            <br></br> <br></br>
            {file.numComments + ' '}
            Comments
          </div>)}
      </div>
    )
  }


  const ChordProgression:React.FC<Types.chordProgressionProps> = ({chordProgression}) => {
    return (
      <div className="chords">
        <ol>
          {chordProgression.map((chord, index) => <li>{chord}</li>)}
        </ol>
      </div>
    )
  }


  const Comments:React.FC<Types.commentsProps> = ({comments}) => {
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



  const SectionTitle: React.FC<Types.sectionDataProps> = ({ sectionData }) => {
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
      <SectionTitle sectionData={testData.sectionData} />
      <ChordProgression chordProgression={testData.currentChordProgression}  />
      <Files files={testData.files}/>
      <Comments comments={testData.comments}/>
      <Submit />
    </div>
  );
}

export default App;
