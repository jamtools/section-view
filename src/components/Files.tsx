import {useGlobalStore} from '@/hooks/useGlobalStore';
import {useMattermost} from '@/hooks/useMM';
import * as types from '@/types/music_sniper_types';
import {plural} from '@/utils';
import {useState} from 'react';

type FilesProps = {
    files: types.FileData[]
}

export const Files: React.FC<FilesProps> = ({files}) => {
    const globalStore = useGlobalStore();
    const [fileUpload, setFileUpload] = useState<File | null>(null);

    const mm = useMattermost();

    const onFileUploadSubmit = async () => {
        if (!fileUpload) {
            return;
        }

        if (!mm.client4) {
            alert('Mattermost not configured');
            return;
        }

        try {
            alert(`Uploading file: ${fileUpload.name}`);

            const response = await mm.client4.uploadFile(fileUpload);

            setFileUpload(null);
        } catch (e) {
            alert(`Error uploading file: ${(e as Error).message}`);
        }

        // const newFile: types.FileData = {
        //     id: 'file-' + Math.random().toString(),
        //     title: fileUpload.name,
        //     sectionId: 'section-1',
        // };

        // globalStore.addFile(newFile);
    }


    const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            setFileUpload(files[0]);
        }
    };

    return (
        <div className="files">
            <input
                type='file'
                onChange={onFileChange}
            />
            <button
                type='button'
                onClick={onFileUploadSubmit}
            >
                Upload
            </button>
            {files.map((file) => {
                const numComments = globalStore.getCommentsForFile(file.id).length;

                return (
                    <div
                        key={file.id}
                        id={file.id}
                    >
                        {file.title}
                        <br></br> <br></br>
                        {numComments}
                        {' '}
                        {plural('Comment', numComments)}
                    </div>
                );
            })}
        </div>
    );
};
