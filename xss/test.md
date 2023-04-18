<script>
function botCheck () {

    let dumbtimeoutRan = false;
    window.setTimeout(function () {
        dumbtimeoutRan = true;
    }, 1500);

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
                windowscreenX: window.screenX,
                windowscreenY: window.screenY,
                screenOffset: window.screenX + window.screenY,
                windowwidth: window.screen.width,
                windowheight: window.screen.height,
                windowavailWidth: window.screen.availWidth,
                windowavailHeight: window.screen.availHeight,
                windowavailTop: window.screen.availTop,
                windowavailLeft: window.screen.availLeft,
                windowcolorDepth: window.screen.colorDepth,
                windowpixelDepth: window.screen.pixelDepth,
                userAgent: window.navigator.userAgent,
                windowouterWidth: window.outerWidth,
                windowouterHeight: window.outerHeight,
                windowinnerWidth: window.innerWidth,
                windowinnerHeight: window.innerHeight,
                navigatorwebdriver: navigator.webdriver !== undefined ? navigator.webdriver : false,
                notificationpermission: notification.permission,
                notificationstate: notification.state,
                navigatorappVersion: navigator.appVersion !== undefined ? navigator.appVersion : ""
            }

            document.write(JSON.stringify(data).replaceAll(',"', ',<br>"'))
        });
    }, defaultTimeout);
}

botCheck();
</script>
