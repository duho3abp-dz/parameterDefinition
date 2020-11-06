function parameterDefinition({
    wrapperIdentifier,
    blocksIdentifier,
    fieldsIdentifier,
    fromScreenResolution
}) {
    const windowWidth = window.innerWidth;

    if (fromScreenResolution) {
        if (!(windowWidth <= fromScreenResolution)) { return; }
    }

    const wrapper = document.querySelector(wrapperIdentifier);
    const blocks = document.querySelectorAll(blocksIdentifier);
    const fields = document.querySelectorAll(fieldsIdentifier);

    if (!wrapper || !blocks.length || !fields.length) { return; }

    const marginLeftWrapper = window.getComputedStyle(wrapper).marginLeft;
    const paddingLeftWrapper = window.getComputedStyle(wrapper).paddingLeft;
    const indent = +marginLeftWrapper.replace(/px/, '') ? marginLeftWrapper : paddingLeftWrapper ;

    blocks.forEach((block, i) => {
        block.style.width = `${windowWidth}px`;
        block.style.left = `-${indent}`;
        fields[i].style.paddingLeft = indent;
        fields[i].style.paddingRight = indent;
    });
}

export default parameterDefinition;

// parameterDefinition({
//     wrapperIdentifier: '[data-parameters-mob-wrapper]',
//     blocksIdentifier: '[data-parameters-mob-block]',
//     fieldsIdentifier: '[data-parameters-mob-field]',
//     fromScreenResolution: '1024'
// });
