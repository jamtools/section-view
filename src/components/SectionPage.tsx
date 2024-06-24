import * as types from '@/types/music_sniper_types';
import {Files} from './Files';
import {ChordProgression} from './ChordProgression';
import {Comments} from './Comments';
import {CreateComment} from './CreateComment';
import {SectionTitle} from './SectionTitle';
import {useGlobalStore} from '@/hooks/useGlobalStore';
import {MattermostConfigButton} from './MattermostConfigButton';

type SectionPageProps = {
    projectId: string;
    sectionId: string;
}

const SectionPage: React.FC<SectionPageProps> = ({projectId, sectionId}) => {
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
            <MattermostConfigButton/>
        </div>
    );
}

export default SectionPage;
