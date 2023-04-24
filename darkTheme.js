const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]')

const darkThemeHandler = e => {
	if (e.target.checked) {
		document.documentElement.setAttribute('data-theme', 'dark')
	} else {
		document.documentElement.setAttribute('data-theme', 'light')
	}
}

toggleSwitch.addEventListener('change', darkThemeHandler)
