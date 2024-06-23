import * as types from '../types/music_sniper_types';

type ChordProgressionProps = {
  chordProgression: types.ChordProgression
}


export const ChordProgression: React.FC<ChordProgressionProps> = ({ chordProgression }) => {
  return (
    <div className="chords">
      <ol>
        {chordProgression.map((chord, index) => <li key={index}>{chord}</li>)}
      </ol>
    </div>
  );
};
