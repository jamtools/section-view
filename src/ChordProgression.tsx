import * as Types from './types';

export const ChordProgression: React.FC<Types.ChordProgressionProps> = ({ chordProgression }) => {
  return (
    <div className="chords">
      <ol>
        {chordProgression.map((chord, index) => <li>{chord}</li>)}
      </ol>
    </div>
  );
};
