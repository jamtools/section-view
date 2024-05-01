
import * as Types from './types'

export const sectionData: Types.SectionData = {
  name: 'Intro',
  description: 'This intro section consists of a tuba quartet in the style of DJ Templeton & The Windsurfers',
  numRevisions: 42,
};

export const currentChordProgression: Types.ChordProgression = ['C', 'Dm', 'F', 'G']

export const files: Types.File[] = [
  {
    title: 'Bass.mp3',
    numComments: 2,
    id: 'change me to something better 0 '
  },
  {
    title: 'Drums.mp3',
    numComments: 2,
    id: 'change me to something better 1'
  },
  {
    title: 'Yodeling.mp3',
    numComments: 2,
    id: 'change me to something better 2'
  },
  {
    title: 'Tuba.mp3',
    numComments: 2,
    id: 'change me to something better 3'
  },
]


export const comments: Types.Comment[] = [
  {
    name: 'Jerry',
    commentText: 'My name is Schmoopie and I love this song. It reminds me of my grandpa'
  },
  {
    name: 'Lerry',
    commentText: 'jokes on you! Im deaf.'
  },
  {
    name: 'Jerry',
    commentText: 'Notice the tinnitus ringing in your ears, let the hiss from your damaged hearing remind you of peaceful ocean waves...'
  },
]
