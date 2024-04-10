type CSSValue = 
    // implies px
    | number
    // number + px | em | rem
    | `${number}px`
    | `${number}em`
    | `${number}rem`;

function size(input: CSSValue){
    return typeof input == 'number' ? input + 'px' : input;
}


size(123);
size('123px')
size('123em')
size('123rem')
// size('123ex') // throws error

/* Custom Use */

type Size = 'small' | 'medium' | 'large';
type Color = 'primary' | 'secondary';
type Style = `${Size}-${Color}`;

function applyStyle(style: Style){
    // ....
}

applyStyle('small-primary');
applyStyle('medium-primary');
applyStyle('large-secondary');
// Uses - provides autocomplete and helps avoid type errors
// applyStyle('md-primary'); // throws error