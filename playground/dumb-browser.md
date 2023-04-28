

<form onsubmit="handleFormSubmit(event)">
    <input type="text" name="url" />
    <input type="submit" value="go" />
</form>

<iframe id="dumb-frame" style="height: 100%; width: 100%;"></iframe>
<textarea id="log"></textarea>
<script>
    const dumbFrame = document.getElementById('dumb-frame');
    dumbFrame.addEventListener('load', function (){
        console.log(dumbFrame);
        document.getElementById('log').value += dumbFrame.src +"\n";
    })
    function handleFormSubmit(e) {
        e.preventDefault();
        console.log(e)
        dumbFrame.src = e.srcElement.url.value;
    }
</script>
