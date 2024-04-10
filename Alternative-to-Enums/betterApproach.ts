// Uses type annotation and we can pass values without having to convert to special types
type LoginModeType = 'app' | 'email' | 'social';

function initiateLogin(loginMode: LoginModeType){
    // logic
}

// features - auto-complete, no need of creating enums for type literals, easy refactor
initiateLogin('app');


// works with refactoring as well