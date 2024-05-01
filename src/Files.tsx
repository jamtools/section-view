import * as Types from './types';

type FilesProps = {
  files: Types.File[]
}

export const Files: React.FC<FilesProps> = ({ files }) => {
  return (
    <div className="files">
      <span>+ Files</span>
      {files.map((file) => <div id={file.id}>
        {file.title}
        <br></br> <br></br>
        {file.numComments + ' '}
        Comments
      </div>)}
    </div>
  );
};
