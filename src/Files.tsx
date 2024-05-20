import {useGlobalStore} from './hooks/useGlobalStore';
import * as types from './types';

type FilesProps = {
    files: types.FileData[]
}

export const Files: React.FC<FilesProps> = ({files}) => {
    const globalStore = useGlobalStore();

    return (
        <div className="files">
            <span>+ Files</span>
            {files.map((file) => (
                <div id={file.id}>
                    {file.title}
                    <br></br> <br></br>
                    {globalStore.getCommentsForFile(file.id).length + ' '}
                    Comments
                </div>))}
        </div>
    );
};
