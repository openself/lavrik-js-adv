
export default class Timer {
    constructor(el, time) {
        this.el = el
        this.time = time
        this.id

        this.render()
        this.start()
    }

    start() {
        this.id = window.setInterval(this.tick, 1000)
    }

    stop() {
        window.clearInterval(this.id)
    }

    tick = () => {
        this.time--
        this.render()
        if (this.time <= 0) {
            this.stop()
        }
    }

    render() {
        this.el.innerHTML = this.time
    }
}