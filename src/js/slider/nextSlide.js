export const nextSlide = (el)=> {
    let slider = document.getElementById(el)
    let currentSlideNumber = Number(slider.dataset.slide)
    let currentSlide = slider.children[currentSlideNumber]
    let newSlide = currentSlide.nextElementSibling
    let newNextSlide = newSlide.nextElementSibling
    if(currentSlide.classList.contains('half')){
        if(currentSlideNumber === 0) slider.style.marginLeft = 0
        else slider.style.marginLeft = `calc(0px - (((100vw / 14) * 4) * ${currentSlideNumber}))`
    }else if(currentSlide.classList.contains('full')){
        if(currentSlideNumber === 0) slider.style.transform = `translateX(calc(0px - ((100vw / 14) * 8)))`
        else slider.style.transform = `translateX(calc(0px - (((100vw / 14) * 8) * ${currentSlideNumber + 1})))`
    }
    currentSlide.classList.remove('in-view')
    currentSlide.classList.add('seen')
    newSlide.classList.remove('up-next')
    newSlide.classList.add('in-view')
    newNextSlide.classList.add('up-next')
    slider.dataset.slide = currentSlideNumber + 1
}