import * as Types from './types';

export const SectionTitle: React.FC<Types.SectionDataProps> = ({ sectionData }) => {
  return (
    <div className="section-title">
      <div className='text'>
        <h1> {sectionData.name} </h1>
        <p>{sectionData.description}</p>
      </div>
      <div className='buttons'>
        <button> {sectionData.numRevisions} revisions </button>
        <button> Save revision </button>
      </div>
    </div>
  );
};
