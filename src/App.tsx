import './App.css';
import './css_reset.css'
import './section_view.css';
import * as types from './types';
import {Files} from './Files';
import {ChordProgression} from './ChordProgression';
import {Comments} from './Comments';
import {CreateComment} from './CreateComment';
import {SectionTitle} from './SectionTitle';
import {useGlobalStore} from './hooks/useGlobalStore';

type AppProps = {
    projectId: string;
    sectionId: string;
}

const App: React.FC<AppProps> = ({projectId, sectionId}) => {
    const globalStore = useGlobalStore();
    const section = globalStore.getSection(sectionId);
    const files = globalStore.getFilesForSection(sectionId);

    const sectionPointer: types.EntityPointer = {
        entityId: sectionId,
        entityType: types.EntityType.SECTION,
    };

    return (
        <div className="root">
            <SectionTitle sectionId={sectionId} />
            <ChordProgression chordProgression={section.chordProgression} />
            <Files files={files} />
            <Comments entityPointer={sectionPointer} />
            <CreateComment entityPointer={sectionPointer} />
        </div>
    );
}

export default App;
