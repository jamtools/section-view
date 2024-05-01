import * as Types from './types';

export const Files: React.FC<Types.FilesProps> = ({ files }) => {
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
