import './App.css';
import './css_reset.css'
import './section_view.css';
import * as types from './types';
import { Files } from './Files';
import { ChordProgression } from './ChordProgression';
import { Comments } from './Comments';
import { CreateComment } from './CreateComment';
import { SectionTitle } from './SectionTitle';
import { useState } from 'react';




type AppProps = {
  sectionData: types.SectionData,
  chordProgression: types.ChordProgression,
  files: types.File[],
  comments: types.Comment[]
}

const App:React.FC<AppProps> = ({sectionData, chordProgression, comments, files}) => {

  const [commentsAsState, setCommentsAsState] = useState<types.Comment[]>(comments)

  return (
    <div className="root">
      <SectionTitle sectionData={sectionData} />
      <ChordProgression chordProgression={chordProgression}  />
      <Files files={files}/>
      <Comments comments={commentsAsState}/>
      <CreateComment comments={commentsAsState} setComments={setCommentsAsState}/>
    </div>
  );
}

export default App;
