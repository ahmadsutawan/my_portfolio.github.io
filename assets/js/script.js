// portfolio
const tabs = document.querySelectorAll('[data-target]')
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)
        tabContents.forEach(tc => {
            tc.classList.remove('tabs_active')
        })
        target.classList.add('tabs_active')

        tabs.forEach(t => {
            t.classList.remove('tab-active')
        })
        tab.classList.add('tab-active')
    })
})
// end portfolio

// menu nav
// show menu
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show_menu')
        })
    }
}
showMenu('toggle_nav', 'nav_menu')

// remove menu in mobile/ click menu
const navLink = document.querySelectorAll('.nav_link')

    function linkAction(){
        const navMenu = document.getElementById('nav_menu')
        navMenu.classList.remove('show_menu')
    }
    navLink.forEach(n => n.addEventListener('click', linkAction))

// link active scroll
const ul = document.querySelector('ul')
const li = document.querySelectorAll('li')
li.forEach(el => {
    el.addEventListener('click', function() {
        ul.querySelector('.active-link').classList.remove('active-link')
        el.classList.add('active-link')
    })
})
// end menu nav


// dark mode
// change theme light/dark
const themeButton = document.getElementById('button_mode')
const darkTheme = 'dark-mode'
const iconTheme = 'bx-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// on / off toggle mode
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
// end dark mode


// scrolltop
function scrollTop(){
    const scrollTop = document.getElementById('scroll_top')
    if(this.scrollY >= 200) scrollTop.classList.add('show_scroll') 
    else scrollTop.classList.remove('show_scroll')
}
window.addEventListener('scroll', scrollTop)

function scrolltop(){
    window.scrollTo(0, 0)
}
// end scrolltop


// pdf
const areaCv = document.getElementById('area-cv')
const options = {
    filename: 'Resume CV - Ahmad Sutawan.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
}

const generateResume = () => html2pdf(areaCv, options)
const scaleCv = () => document.body.classList.add('scale-cv')
const removeScaleCv = () => document.body.classList.remove('scale-cv')

const resumeButton = document.getElementById('resume-button')
resumeButton.addEventListener('click', () => {
    scaleCv()
    generateResume()
    setTimeout(removeScaleCv, 3000)
})
// end pdf
