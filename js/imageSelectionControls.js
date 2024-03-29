async function onSelectedImageChanged(uri) {
    const img = await faceapi.fetchImage(uri)
    $(`#inputImg`).get(0).src = img.src
    updateResults()
}

async function loadImageFromUrl(url) {
    const img = await requestExternalImage($('#imgUrlInput').val())
    $('#inputImg').get(0).src = img.src
    updateResults()
}

function renderImageSelectList(selectListId, onChange, initialValue, withFaceExpressionImages) {
  id="selectList"

    if (typeof images === 'undefined') {

        images = [1, 2, 3, 4, 5].map(idx => `images/bbt${idx}.jpg`)

        if (withFaceExpressionImages) {
            images = [
                'images/happy.jpg',
                'images/sad.jpg',
                'images/angry.jpg',
                'images/disgusted.jpg',
                'images/surprised.jpg',
                'images/fearful.jpg',
                'images/neutral.jpg'
            ].concat(images)
        }
    }

    function renderChildren(select) {
        images.forEach(imageName =>
            renderOption(
                select,
                imageName,
                imageName
            )
        )
    }

    renderSelectList(
        selectListId,
        onChange,
        initialValue,
        renderChildren
    )
}

function initImageSelectionControls(initialValue = 'images/bbt1.jpg', withFaceExpressionImages = false) {
    renderImageSelectList(
        '#selectList',
        async (uri) => {
                await onSelectedImageChanged(uri)
            },
            initialValue,
            withFaceExpressionImages
    )
    onSelectedImageChanged($('#selectList select').val())
}