document.addEventListener('copy', (e) => {
    noMoreCopyPastingBitch(e)
}, true)

document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const button = target.closest('button')

    if (button) {
        const label = button.getAttribute('aria-label')

        if (label === 'Copy code' || label === 'Copy') {
            noMoreCopyPastingBitch(e)
        }
    }
}, true)

function noMoreCopyPastingBitch(e: Event) {
    e.preventDefault();
    e.stopPropagation();

    alert("type it out bruv. stop kneeling to a clanker. 💀")
}