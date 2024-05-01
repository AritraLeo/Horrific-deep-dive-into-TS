export type Class = new (...args: any[]) => any;

export function DisposableMixin<Base extends Class>(base: Base) {
    return class extends base {
        isDisposed: boolean = false;
        dispose() {
            this.isDisposed = true;
        }
    };
}

export function ActivatableMixin<Base extends Class>(base: Base) {
    return class extends base {
        isActive: boolean = false;
        activate() {
            this.isActive = true;
        }
        deactivate() {
            this.isActive = false;
        }
    };
}