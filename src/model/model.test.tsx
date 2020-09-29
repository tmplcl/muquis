import {A, B, C, D, E, F, G} from './model';
import {Dorian} from './modes';

test('diatonicDorian', () => {
    // console.log(Gb.getDiatonicScale(Dorian))
    // console.log(B.getInterval(Interval.AUGMENTED_FOURTH))
    // console.log(C.getDiatonicScale(Dorian))

    expect(C.getDiatonicScale(Dorian).notes).toEqual([
        D, E, F, G, A, B, C
    ])
});
