import { Aeolian, Mode } from "./modes";

class Note {
  constructor(public name: string) { };

  getInterval(interval: Interval): Note {
    const i: number = notes.findIndex((value) => value.name == this.name)
    const sum: number = i + interval.valueOf()
    const res = (sum < notes.length) ? sum : sum - notes.length
    return notes[res]
  }

  getMajorScale(): Scale {
    const notesInScale: Note[] = new Array<Note>();
    majorIntervals.forEach(
      intervalValue => notesInScale.push(this.getInterval(intervalValue)))
    return {
      name: this.name + " major scale",
      notes: notesInScale
    }
  }

  getNaturalMinorScale(): Scale {
    return this.getDiatonicScale(Aeolian);
  }

  getDiatonicScale(mode: Mode): Scale {
    const notesInScale: Note[] = new Array<Note>();
    let indexNote = this.getMajorScale().notes[mode.start - 1];
    mode.intervalSequence.forEach(
      nextInterval => {
        notesInScale.push(indexNote);
        indexNote = indexNote.getInterval(nextInterval);
      }
    );
    return {
      name: this.name + " " + mode.name + " scale",
      notes: notesInScale
    }
  }

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

const majorIntervals: Interval[] = new Array<Interval>(
  Interval.PERFECT_UNISON,
  Interval.MAJOR_SECOND,
  Interval.MAJOR_THIRD,
  Interval.PERFECT_FOURTH,
  Interval.PERFECT_FIFTH,
  Interval.MAJOR_SIXTH,
  Interval.MAJOR_SEVENTH,
  Interval.PERFECT_OCTAVE
);

export interface Scale {
  readonly name: string;
  readonly notes: Note[];
}

export const C = new Note("C");
export const Db = new Note("Db");
export const D = new Note("D");
export const Eb = new Note("Eb");
export const E = new Note("E");
export const F = new Note("F");
export const Gb = new Note("Gb");
export const G = new Note("G");
export const Ab = new Note("Ab");
export const A = new Note("A");
export const Bb = new Note("Bb");
export const B = new Note("B");

let notes: Array<Note> = [C, Db, D, Eb, E, F, Gb, G, Ab, A, Bb, B];