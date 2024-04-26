import './App.css';
import './css_reset.css'
import './section_view.css';
import * as Types from './types';
import { Files } from './Files';
import { ChordProgression } from './ChordProgression';
import { Comments } from './Comments';
import { Submit } from './Submit';
import { SectionTitle } from './SectionTitle';



const App:React.FC<Types.appProps> = ({sectionData, chordProgression, comments, files}) => {


  return (
    <div className="root">
      <SectionTitle sectionData={sectionData} />
      <ChordProgression chordProgression={chordProgression}  />
      <Files files={files}/>
      <Comments comments={comments}/>
      <Submit />
    </div>
  );
}

export default App;
