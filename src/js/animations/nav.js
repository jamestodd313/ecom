const options = {
    threshold: 0.75,
    margin: "75px 0px"
}
const sectionObserver = new IntersectionObserver((entires, options)=>{
    entires.forEach(entry=>{
        let currentSection = entry.target.dataset.id
        let matchingNavLink = document.querySelectorAll(`.nav-item[data-id=${currentSection}]`)[0]
        if(!entry.isIntersecting){
            if(matchingNavLink && matchingNavLink.classList.contains('active')) matchingNavLink.classList.remove('active')
        }
        else{
            if(matchingNavLink) matchingNavLink.classList.add('active')
            
        } 
    })
}, options)


const homeSections = document.querySelectorAll('.home-section')
homeSections.forEach(section=> sectionObserver.observe(section))
export {sectionObserver}