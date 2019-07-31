export default {
    superClass: 'Button',
    init(obj) {
        this.superInit({
            x: obj.x,
            y: obj.y,
            width: 150,
            height: 100,
            text: obj.text,
            fontSize: 45,
            fontColor: 'white',
            cornerRadius: 10,
            fill: obj.color,
        })
        this.onpointend = obj.onclickAction
    }
}
