// $('#myCarousel').on('click', () => {
//   console.log('jQuery is working');
// });

//---------------------- THEME
$("#themeBtn").on("click", function() {
  toggleTheme();
});


// function to set a given theme/color-scheme
function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}
// function to toggle between light and dark theme
function toggleTheme() {
if (localStorage.getItem('theme') === 'theme-dark'){
    setTheme('theme-light');
} else {
    setTheme('theme-dark');
}
}
// Immediately invoked function to set the theme on initial load
(function () {
if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-dark');
} else {
    setTheme('theme-light');
}
})();

//---------------------- Redirect
$('.linkHome').click(function(){
  window.location.href='index.html';
})

$('.linkWorks').click(function(){
  window.location.href='works.html';
})
