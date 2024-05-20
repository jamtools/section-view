import {useGlobalStore} from './hooks/useGlobalStore';
import * as types from './types';
import {plural} from './utils';

type FilesProps = {
    files: types.FileData[]
}

export const Files: React.FC<FilesProps> = ({files}) => {
    const globalStore = useGlobalStore();

    return (
        <div className="files">
            <span>+ Files</span>
            {files.map((file) => {
                const numComments = globalStore.getCommentsForFile(file.id).length;

                return (
                    <div id={file.id}>
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
