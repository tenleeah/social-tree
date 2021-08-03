let theme = document.querySelector('.togle')
let backgroundColor = document.querySelector('body')
let buttomTheme = document.querySelector('.switcher')

theme.addEventListener('click', function () {
  backgroundColor.classList.toggle("themeColor")
  console.log('evento interruptor do botao')
  theme.classList.toggle('changes')

 buttomTheme.classList.toggle('themeButtom')
})
