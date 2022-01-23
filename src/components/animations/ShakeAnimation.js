import gsap, { Linear } from "gsap";
import { RoughEase } from "gsap/all";


export class ShakeAnimation {

    constructor(target, repeat) {
        this.target = target;
        this.repeat = repeat;
        this.tween = undefined;
        this.ease = RoughEase.ease.config({ strength: 8, points: 20, template: Linear.easeNone, randomize: false });
    }

    start() {
        this.tween = gsap.fromTo(this.target,
            { duration: 0.2, x: -1, repeat: this.repeat },
            { duration: 0.2, x: 1, clearProps: "x", ease: this.ease, repeat: this.repeat });
    }

    stop() {
        if (this.tween !== undefined)
            this.tween.kill();
    }

}