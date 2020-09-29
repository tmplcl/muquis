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

export const majorIntervals: Interval[] = new Array<Interval>(
    Interval.PERFECT_UNISON,
    Interval.MAJOR_SECOND,
    Interval.MAJOR_THIRD,
    Interval.PERFECT_FOURTH,
    Interval.PERFECT_FIFTH,
    Interval.MAJOR_SIXTH,
    Interval.MAJOR_SEVENTH,
    Interval.PERFECT_OCTAVE
);
