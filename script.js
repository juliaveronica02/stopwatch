class Stopwatch {
    constructor(obj = {}) {
        this.start = obj.start
        this.start2 = obj.start2
        this.berhenti = obj.berhenti
        this.berhenti2 = obj.berhenti2
        this.duration = parseInt(this.berhenti) + parseInt(this.start) - parseInt(this.berhenti2) * parseInt(this.start2);
    }
    // getDuration(){
    //     console.log(`stoptwatch start at ${this.duration}`);
    // }
}
const waktu = new Stopwatch({
    start: new Date().toLocaleString('id-ID', {
        timezone: 'Asia/Jakarta',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    }),
    start2: new Date().toLocaleString('zh-CN', {
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    }),
    berhenti: new Date().toLocaleString('en-NZ', {
        timezone: 'New Zealand/Auckland',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    }),
    berhenti2: new Date().toLocaleString('ko-KR', {
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    })
    // duration: {},
})
// console.log(waktu);