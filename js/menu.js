// ******************** MENU ********************
const menu = (toggler, menu) => {
    const d = document,
        togglerSelector = `.${toggler}`,
        menuSelector = `.${menu}`;
        
    d.addEventListener('click', (e) => {
        if (d.querySelector(menuSelector).classList.contains(`${menu}-visible`)) {
            d.querySelector(menuSelector).classList.toggle(`${menu}-visible`);
        } else {
            if (e.target.matches(togglerSelector)) {
                d.querySelector(menuSelector).classList.toggle(`${menu}-visible`);
            }
        }
    })
}
export default menu;