enum LoginMode{
    app = 2,
    email = 0,
    social = 1,
}

/* If more values are added to this enum then the order would be hampered to make sure it doesn't happen we should always assign values to enums */

console.log(LoginMode.email); // 1 now -> 0
console.log(LoginMode.social); // 2 now -> 1

// getting keys only
const keys = Object.keys(LoginMode);

console.log(keys);
// wanted - ['app', 'email', 'social']
// got - [ '0', '1', '2', 'app', 'email', 'social' ]
// thus numeric enums are not great in this ascpect although they maintain proper order

/*if we use string enums then we are getting repetative but it resolves these previous issues mentioned */


