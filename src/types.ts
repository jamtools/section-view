
export type sectionData = {
    name: string,
    description: string,
    numRevisions: number
}

export type sectionDataProps = {
    sectionData:sectionData
}




export type chordProgression = string[]

export type chordProgressionProps = {
    chordProgression: chordProgression
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
