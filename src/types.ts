
import React, { Dispatch } from "react"

export type sectionData = {
    name: string,
    description: string,
    numRevisions: number
}

export type sectionDataProps = {
    sectionData: sectionData
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



export type CreateCommentProps = {
    comments: comment[],
    setComments: (comments: comment[]) => void;
}


export type appProps = {
    sectionData: sectionData,
    chordProgression: chordProgression,
    files: file[],
    comments: comment[]
}
