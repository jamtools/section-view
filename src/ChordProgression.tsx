import * as Types from './types';

type ChordProgressionProps = {
  chordProgression: Types.ChordProgression
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
