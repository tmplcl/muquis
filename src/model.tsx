export interface Note {
    readonly name: string;
    getInterval(interval: Interval): Note;
}

export enum Interval {
    PERFECT_UNISON = 0,
    MINOR_SECOND = 1,
    MAJOR_SECOND = 2,
    MINOR_THIRD = 3,
    MAJOR_THIRD = 4,
    PERFECT_FOURTH = 5,
    AUGMENTED_FOURTH = 6,
    PERFECT_FIFTH = 7,
    MINOR_SIXTH = 8,
    MAJOR_SIXTH = 9,
    MINOR_SEVENTH = 10,
    MAJOR_SEVENTH = 11,
    PERFECT_OCTAVE = 12
}

export interface Scale {
    readonly name: string;
    readonly notes: Note[];
}

export class C implements Note {
    name = "C";

    getInterval(interval: Interval): Note {
        throw new Error("Method not implemented.");
    }
};
