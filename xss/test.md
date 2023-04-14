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
            // are notifications disabled
            let notificationsDisabled = Notification.permission === 'denied' && permissionStatus.state === 'prompt' && 1;

            // Does the User-Agent string contain headless?
            let headlessUA = /HeadlessChrome/.test(window.navigator.userAgent);

            let data = {
                notificationsDisabled: notificationsDisabled,
                headlessUA: headlessUA,
                timeoutDiff: timeoutDiff,
                defaultTimeout: defaultTimeout,
                dumbtimeoutRan: dumbtimeoutRan
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
    document.write(JSON.stringify(data))
}


function handleNotBot (data) {
    // Non-bots should execute this. 
    document.write(JSON.stringify(data))
}

botCheck(handleBot, handleNotBot);
</script>

