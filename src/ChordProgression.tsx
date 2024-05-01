import * as types from './types';

type ChordProgressionProps = {
  chordProgression: types.ChordProgression
}


export const ChordProgression: React.FC<ChordProgressionProps> = ({ chordProgression }) => {
  return (
    <div className="chords">
      <ol>
        {chordProgression.map((chord, index) => <li>{chord}</li>)}
      </ol>
    </div>
  );
};
