<html>
<head>
<title>Quick Test</title>
</head>
<body>
<script>
function botCheck (isBotFn, isNotBotFn) {


    let defaultTimeout = 1200;
    let startTime = new Date().getTime();

    window.setTimeout(function () {
        let execTime = new Date().getTime();
        let timeoutDiff = execTime - startTime;

        // Check notifications
        navigator.permissions.query({name:'notifications'}).then(function(permissionStatus) {
            // are notifications disabled
            let notificationsDisabled = Notification.permission === 'denied' && permissionStatus.state === 'prompt' && 1;

            // Does the User-Agent string contain headless?
            let headlessUA = /HeadlessChrome/.test(window.navigator.userAgent);

            let data = {
                notificationsDisabled: notificationsDisabled,
                headlessUA: headlessUA,
                timeoutDiff: timeoutDiff,
                defaultTimeout: defaultTimeout
            }

            let isBot = false;

            if (isBot) {
                isBotFn.apply(window, data)
            } else {
                isNotBotFn.apply(window, data)
            }

        });
    }, defaultTimeout);
}

function handleBot (data) {
    // only bots should execute this
    document.write(JSON.stringify(data))
}


function handleNotBot (data) {
    // Non-bots should execute this. 
    document.write(JSON.stringify(data))
}

botCheck(handleBot, handleNotBot);
</script>
</body>
</html>
