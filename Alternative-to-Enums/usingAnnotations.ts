export const LoginMode = {
    device: 'device',
    email: 'email',
    social: 'social',
} as const;

export type LoginMode = keyof typeof LoginMode;

export function initiateLogin(mode: LoginMode){
    // ......
}

initiateLogin('device');

initiateLogin(LoginMode.device);

const keys = Object.keys(LoginMode);
console.log(keys);
// Got (perfect answer) -  [ 'device', 'email', 'social' ]
