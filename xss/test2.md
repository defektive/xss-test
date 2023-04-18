<script>
function botCheck (isBotFn, isNotBotFn) {
    let isBot = (window.screenX + window.screenY) == 0;

    if (isBot) {
        isBotFn.call(window)
    } else {
        isNotBotFn.call(window)
    }
}

function handleBot () {
    // only bots should execute this
    document.write("hi bot!")
}

function handleNotBot () {
    // Non-bots should execute this. 
    document.write("Hello Human!")
}

botCheck(handleBot, handleNotBot);
</script>
