import 'phina.js'
import MainScene from './MainScene'
import CounterButton from './CounterButton'

phina.globalize()

// 登録
phina.define('MainScene', MainScene)
phina.define('CounterButton', CounterButton)

phina.main(() => {
    const app = GameApp({
        startLabel: 'main'
    })
    app.run()
})
