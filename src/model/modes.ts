import { Interval } from "./model";

export class Mode {
  constructor(
    public name: string,
    public start: number,
    public intervalSequence: Interval[]
  ) { };
}

export const Ionian = new Mode("Ionian", 1,
  [
    Interval.MAJOR_SECOND,
    Interval.MAJOR_SECOND,
    Interval.MINOR_SECOND,
    Interval.MAJOR_SECOND,
    Interval.MAJOR_SECOND,
    Interval.MAJOR_SECOND,
    Interval.MINOR_SECOND
  ]);

export const Dorian = new Mode("Dorian", 2,
  [
    Interval.MAJOR_SECOND,
    Interval.MINOR_SECOND,
    Interval.MAJOR_SECOND,
    Interval.MAJOR_SECOND,
    Interval.MAJOR_SECOND,
    Interval.MINOR_SECOND,
    Interval.MAJOR_SECOND
  ]);

export const Phrygian = new Mode("Phrygian", 3,
  [
    Interval.MINOR_SECOND,
    Interval.MAJOR_SECOND,
    Interval.MAJOR_SECOND,
    Interval.MAJOR_SECOND,
    Interval.MINOR_SECOND,
    Interval.MAJOR_SECOND,
    Interval.MAJOR_SECOND
  ]);

export const Lydian = new Mode("Lydian", 4,
  [
    Interval.MAJOR_SECOND,
    Interval.MAJOR_SECOND,
    Interval.MAJOR_SECOND,
    Interval.MINOR_SECOND,
    Interval.MAJOR_SECOND,
    Interval.MAJOR_SECOND,
    Interval.MINOR_SECOND
  ]);

export const Mixolydian = new Mode("Mixolydian", 5,
  [
    Interval.MAJOR_SECOND,
    Interval.MAJOR_SECOND,
    Interval.MINOR_SECOND,
    Interval.MAJOR_SECOND,
    Interval.MAJOR_SECOND,
    Interval.MINOR_SECOND,
    Interval.MAJOR_SECOND
  ]);

export const Aeolian = new Mode("Aeolian", 6,
  [
    Interval.MAJOR_SECOND,
    Interval.MINOR_SECOND,
    Interval.MAJOR_SECOND,
    Interval.MAJOR_SECOND,
    Interval.MINOR_SECOND,
    Interval.MAJOR_SECOND,
    Interval.MAJOR_SECOND
  ]);

export const Locrian = new Mode("Locrian", 7,
  [
    Interval.MINOR_SECOND,
    Interval.MAJOR_SECOND,
    Interval.MAJOR_SECOND,
    Interval.MINOR_SECOND,
    Interval.MAJOR_SECOND,
    Interval.MAJOR_SECOND,
    Interval.MAJOR_SECOND,
  ]);

