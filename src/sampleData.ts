
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
    name: 'Sample User',
    commentText: 'Hey! This is a comment'
  },
  {
    name: 'Sample User',
    commentText: 'Hey! This is a comment'
  },
]
