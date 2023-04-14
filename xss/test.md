+++
title = "Bot Detection"
weight = 90
+++



### What are bots?

Bots are usually headless browsers that visit links in email and analyze them for threats. This includes looking for logins, especially popular ones that are not on the correct domain. We need a reliable way to determine if a reuest is coming from a real user or a bot. 

### How can we detect bots?

To do this we can use javascript to inspect the browser that is visiting our page. There are a number of decent articles out there on how to do this. I'll combine a few of the techniques that have worked for me.

```js
<script>
function botCheck (isBotFn, isNotBotFn) {
    let dumbtimeoutRan = false;
    window.setTimeout(function () {
        dumbtimeoutRan = true;
    }, 10000);

    let defaultTimeout = 1200;
    let startTime = new Date().getTime();

    window.setTimeout(function () {
        let execTime = new Date().getTime();
        let timeoutDiff = execTime - startTime;

        // Check notifications
        navigator.permissions.query({name:'notifications'}).then(function(permissionStatus) {
            let data = {
                notificationsDisabled: Notification.permission === 'denied' && permissionStatus.state === 'prompt' && 1,
                headlessUA: /HeadlessChrome/.test(window.navigator.userAgent),
                timeoutDiff: timeoutDiff,
                defaultTimeout: defaultTimeout,
                dumbtimeoutRan: dumbtimeoutRan,
                evalString: eval.toString().length,
                screenOffset: window.screenX + window.screenY,
                windowwidth: window.screen.width,
                windowheight: window.screen.height,
                windowavailWidth: window.screen.availWidth,
                windowavailHeight: window.screen.availHeight,
                windowavailTop: window.screen.availTop,
                windowavailLeft: window.screen.availLeft,
                windowcolorDepth: window.screen.colorDepth,
                windowpixelDepth: window.screen.pixelDepth,
            }

            let isBot = false;

            if (isBot) {
                isBotFn.call(window, data)
            } else {
                isNotBotFn.call(window, data)
            }

        });
    }, defaultTimeout);
}

function handleBot (data) {
    // only bots should execute this
    document.write(JSON.stringify(data).replaceAll(",",",<br>"))
}


function handleNotBot (data) {
    // Non-bots should execute this. 
    document.write(JSON.stringify(data).replaceAll(",",",<br>"))
}

botCheck(handleBot, handleNotBot);
</script>


```
