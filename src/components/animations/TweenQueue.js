export class TweenQueue {

    constructor(maxSize) {
        this.maxSize = maxSize;
        this.currentTween = null;
        this.q = [];
    }

    get current() {
        return this.currentTween;
    }

    queue = (tweenAction) => {

        if (this.q.length >= this.maxSize) {
            return;
        }

        this.q.push(tweenAction);
        this.runNext();
    }

    runNext = () => {

        if (this.currentTween && this.currentTween?.isActive()) {
            return;
        }

        const func = this.q.pop();

        if (func) {
            this.currentTween = func();
            this.currentTween.then(this.runNext);
        }
        else {
            this.currentTween = null;
        }
    }

}