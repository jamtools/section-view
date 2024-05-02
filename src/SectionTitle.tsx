import * as types from './types';

type SectionDataProps = {
  sectionData: types.SectionData
}

export const SectionTitle: React.FC<SectionDataProps> = ({ sectionData }) => {
  return (
    <div className="section-title">
      <div className='text'>
        <h1> {sectionData.name} </h1>
        <p>{sectionData.description}</p>
      </div>
      <div className='revisions'>
        <button> {sectionData.numRevisions} revisions </button>
        <button> Save revision </button>
      </div>
    </div>
  );
};
