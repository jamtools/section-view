import {useActions} from '../actions/useActions';
import {useGlobalStore} from '../hooks/useGlobalStore';
import React, {useState, FormEvent} from 'react';
import {SectionData} from '../types/music_sniper_types';

type SectionDataProps = {
    sectionId: string;
}

export const SectionTitle: React.FC<SectionDataProps> = ({sectionId}) => {
    const actions = useActions();

    const globalStore = useGlobalStore();
    const section = globalStore.getSection(sectionId);

    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const [draftTitle, setDraftTitle] = useState(section.title);

    const handleDraftTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDraftTitle(e.target.value);
    };

    const handleToggleForm = () => {
        console.log('button clicked');
        setIsEditingTitle(!isEditingTitle);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newTitle = draftTitle;
        const newSection: SectionData = {
            ...section,
            title: newTitle,
        }

        actions.updateSection(sectionId, newSection);
        // setDraftTitle(newTitle);
        setIsEditingTitle(false);
    };

    return (
        <div className='section-title'>
            <div className='text'>
                <h1>{section.title}</h1>
                <p>{section.description}</p>
                <button onClick={handleToggleForm}>
                    {isEditingTitle ? 'Cancel Editing' : 'Rename Section'}
                </button>
            </div>
            {isEditingTitle && (
                <form onSubmit={handleSubmit}>
                    <label htmlFor='newName'>New Name:</label>
                    <input
                        value={draftTitle}
                        onChange={handleDraftTitleChange}
                        id='newName'
                        name='newName'
                        type='text'
                        placeholder='Enter new section name'
                    />
                    <button type="submit">Update Name</button>
                </form>
            )}
            <div className='revisions'>
                <button>{section.numRevisions} revisions</button>
                <button>Save revision</button>
            </div>
        </div>
    );
};
