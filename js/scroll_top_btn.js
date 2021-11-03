const w = window,
    d = document;
export default function scrollTop (btn) {
    const $scrollBtn = d.querySelector(btn)
    w.addEventListener('scroll', (e) => {
        if ($scrollBtn) {
            if (w.innerHeight < 850 || w.innerHeight === 915) {
                if (w.scrollY > 900 && w.scrollY < 2750) {
                    $scrollBtn.classList.remove('hidden')
                }
                else {
                    $scrollBtn.classList.add('hidden')
                }
            } else {
                if (w.scrollY > 900 && w.scrollY < 3650) {
                    $scrollBtn.classList.remove('hidden')
                }
                else {
                    $scrollBtn.classList.add('hidden')
                }
            }
        }
    })
    d.addEventListener('click', (e) => {
        if (e.target.matches(`${btn} img`)) {
            w.scrollTo({
                behavior: "smooth",
                top: 0,
            })
        }
    })
}