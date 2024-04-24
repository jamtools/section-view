export type sectionDataProps = {
    sectionData: {
      name: string,
      description: string,
      numRevisions: number
    }

  }

  export type chordProgressionProps = {
    chordProgression: string[]
  }


  export type file = {
    title: string,
    numComments: number,
    id: string,
  }
  

  export type filesProps = {
    files: file[]
  }


  export type comment = {
    name: string,
    commentText: string
  }

  export type commentsProps = {
    comments: comment[]
  }
