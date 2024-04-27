import './App.css';
import './css_reset.css'
import './section_view.css';
import * as Types from './types';
import { Files } from './Files';
import { ChordProgression } from './ChordProgression';
import { Comments } from './Comments';
import { Submit } from './Submit';
import { SectionTitle } from './SectionTitle';
import { useState } from 'react';



const App:React.FC<Types.appProps> = ({sectionData, chordProgression, comments, files}) => {

  const [commentsAsState, setCommentsAsState] = useState<Types.comment[]>(comments)

  return (
    <div className="root">
      <SectionTitle sectionData={sectionData} />
      <ChordProgression chordProgression={chordProgression}  />
      <Files files={files}/>
      <Comments comments={commentsAsState}/>
      <Submit comments={commentsAsState} setComments={setCommentsAsState}/>
    </div>
  );
}

export default App;
