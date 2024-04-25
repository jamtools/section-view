
import * as Types from './types'

const sectionData:Types.sectionData = {
    name: 'Intro',
    description: 'This intro section consists of a tuba quartet in the style of DJ Templeton & The Windsurfers',
    numRevisions: 42,
  };

  const currentChordProgression:Types.chordProgression = ['C', 'Dm', 'F', 'G']

  const files:Types.file[] = [
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


  const comments:Types.comment[] = [
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
