// show menu
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

// remove menu in mobile/ click menu
const navLink = document.querySelectorAll('.nav__link')

    function linkAction(){
        const navMenu = document.getElementById('nav-menu')
        navMenu.classList.remove('show-menu')
    }
    navLink.forEach(n => n.addEventListener('click', linkAction))

// link active scroll
const ul = document.querySelector('ul');
const li = document.querySelectorAll('li');
li.forEach(el => {
    el.addEventListener('click', function() {
        ul.querySelector('.active-link').classList.remove('active-link');
        el.classList.add('active-link');
    })
})


// scrolltop
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    if(this.scrollY >= 200) scrollTop.classList.add('show-scroll'); 
    else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

function scrolltop(){
    window.scrollTo(0, 0)
}

// change theme light/dark
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// download
function scaleCv() {
    document.body.classList.add('scale-cv')
}
function removeScaleCv() {
    document.body.classList.remove('scale-cv')
}

const areaCv = document.getElementById('area-cv')
const resumeButton = document.getElementById('resume-button')

let opt = {
    margin: 0,
    width: 968,
    filename: 'myResumeCv.pdf',
    image: {type: 'jpeg', quality: 100},
    html2canvas: {scale: 2},
    jsPDF: {format: 'a4', orientation: 'portrait'}
};


function generateResume() {
    html2pdf(areaCv, opt)
}
resumeButton.addEventListener('click', () => {
    scaleCv()
    generateResume()
    setTimeout(removeScaleCv,5000)
})
