export default {
    superClass: 'DisplayScene',
    init() {
        this.superInit()
        // 背景色指定
        this.backgroundColor = 'gray'
        // カウントの数
        var cnt = 0
        // ラベル表示
        var label = Label({
            x: this.gridX.center(),
            y: this.gridY.center(),
            text: cnt,
            fill: 'white',
            fontSize: 70,
        }).addChildTo(this)
        // ＋ボタンの表示
        CounterButton({
            x: this.gridX.center() + 100,
            y: this.gridX.center() + 400,
            text: "＋",
            color: 'green',
            onclickAction: () => { label.text = ++cnt },
        }).addChildTo(this)
        // ーボタンの表示
        CounterButton({
            x: this.gridX.center() - 100,
            y: this.gridX.center() + 400,
            text: "ー",
            color: 'red',
            onclickAction: () => { label.text = --cnt },
        }).addChildTo(this)
    }
}
