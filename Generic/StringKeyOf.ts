export type Letters = 'a' | 'b' | 'c';

type RemoveC<TType> = TType extends 'c' ? 'd' : TType;

type WowWithoutC = RemoveC<Letters>;
// We can iterate over these letters in TS in a way as if they are a unit
// TS has it's own feature for this 
