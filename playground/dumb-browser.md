<style>
    label, input, textarea {
        display: block;
        width: 90%;
    }

    #field-template {
        display: none;
    }

    .field-set {
        border: 1px solid #333;
        padding: 4px;
        margin: 2px;
    }
</style>


<form onsubmit="handleFormSubmit(event)">
    <label>
        Form Action:
        <input type="text" name="formAction" />
    </label>
    <label>
        Form Method:
        <input list="form-methods" name="formMethod" placeholder="Start typing...">
    </label>
    <input type="submit" value="go" />


    <datalist id="form-methods">
        <option>get</option>
        <option>post</option>
        <option>delete</option>
        <option>put</option>
        <option>patch</option>
    </datalist>

    <div id="field-template" class="field-set">
        <label>
            Field Name:
            <input type="text" name="fieldName">
        </label>
        <label>
            Field: value
            <textarea name="fieldValue"></textarea>
        </label>
        <button type="button" onclick="removefield(event)">remove</button>
    </div>

    <div id="field-container"></div>
    <button type="button" onclick="addFields()">Add Field</button>

</form>
<form id="dumb-form" target="dumb-frame"></form>
<iframe id="dumb-frame" name="dumb-frame" style="height: 100%; width: 100%; min-height: 500px;min-width: 800px;"></iframe>
<textarea id="log"></textarea>
<button type="button" onclick="clearLog()">Clear Log</button>

<textarea id="js-console"></textarea>
<button type="button" onclick="evalJs()">Eval JS</button>

<script>
    const dumbFrame = document.getElementById('dumb-frame');
    const dumbForm = document.getElementById('dumb-form');
    dumbFrame.addEventListener('load', function () {
        console.log(dumbFrame);
        document.getElementById('log').value += dumbFrame.src + "\n";
    });
    dumbFrame.addEventListener('error', function () {
        console.log(dumbFrame);
        document.getElementById('log').value += dumbFrame.src + "\n";
    })
    function handleFormSubmit(e) {
        e.preventDefault();
        console.log(e);

        dumbForm.innerHTML = "";

        dumbForm.action = e.srcElement.formAction.value;
        dumbForm.method = e.srcElement.formMethod.value;
        

        for(let i=1; i<e.srcElement.fieldName.length; i++) {
            let name = e.srcElement.fieldName[i].value,
                value = e.srcElement.fieldValue[i].value,
                input = document.createElement('input');
            
            input.setAttribute("name", name);
            input.setAttribute("value", value);
            dumbForm.appendChild(input);
        }
        
        dumbForm.submit();
    }

    let fieldTemplate = document.getElementById('field-template');
    let fieldContainer = document.getElementById('field-container');

    function addFields(){
        let newEl = fieldTemplate.cloneNode(true);
        newEl.setAttribute("id", "fields-" + new Date().getTime());
        fieldContainer.appendChild(newEl);
    }

    function removefield(e){
        e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    }

    function evalJs() {
        let js = document.getElementById('js-console').value,
            rs = null;

        try {
            eval('rs = '+ js);
            document.getElementById('log').value += rs + "\n";
        } catch (err) {
            document.getElementById('log').value += rs + "\n";
        }
    }

    function clearLog() {
        document.getElementById('log').value = "";
    }
</script>
