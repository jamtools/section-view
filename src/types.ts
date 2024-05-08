

export type SectionData = {
    name: string,
    description: string,
    numRevisions: number
}



export type ChordProgression = string[]


export type File = {
    title: string,
    numComments: number,
    id: string,
}


export type Comment = {
    name: string,
    commentText: string
}

export type commentsProps = {
    comments: Comment[]
    setComments: (comments: Comment[]) => void;
}
