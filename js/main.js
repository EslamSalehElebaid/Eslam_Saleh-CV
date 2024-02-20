//menu controlling
let toggle_menu = document.querySelector('.landing-page .header nav .toggle-menu');
let toggle_ul = document.querySelector('.landing-page .header nav ul');
toggle_menu.addEventListener('click',()=>{
    toggle_menu.classList.toggle('open');
});
//click anywhere  outside toggle-menu icon and the menu
document.addEventListener('click',(e)=>{
    if (e.target !== toggle_menu && e.target !== toggle_ul) {
        e.stopPropagation();
        if (toggle_menu.classList.contains('open')) {
            toggle_menu.classList.toggle('open');
        }
    }
});
//stop propagation to li from  ul
toggle_ul.addEventListener('click',(e)=>{
    e.stopPropagation();
});

//toggle active class in the links
let ul_links = document.querySelectorAll('.landing-page .header nav ul li');
     //loop on all links
    ul_links.forEach(li => {
        li.addEventListener('click',(e)=>{
            //remove active class from all links
            ul_links.forEach(li => {
                li.children[0].classList.remove('active');
            });
            //add class active on clicked li
            li.children[0].classList.add('active');
        })
    });


//select skills selector
let skills = document.querySelector(".skills")
window.addEventListener('scroll',function () {
    //sklils offset top
    let skillsOffsetTop = skills.offsetTop;
    //skills outer height
    let skillsOuterHeight = skills.offsetHeight;
    //window height
    let WindowHeight = this.innerHeight;
    
    //window scroll top 
    let windowScrollTop = this.scrollY;
        
    if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - WindowHeight)) {
        let allSkills = document.querySelectorAll('.skill-box .skill-progress span');
        allSkills.forEach(skill=>{
            skill.style.width = skill.dataset.progress;
        });
    };
}) ;

//button scroll to up controlling
let upScroll = document.querySelector('.up');
window.addEventListener('scroll', function () {
    if (this.scrollY >= 420) {
        upScroll.classList.add('show');
    }else {
        upScroll.classList.remove('show');
    }
}) ;

upScroll.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        behavior:'smooth',
    });
});

//slider controle
let landingPage = document.querySelector('.landing-page');
let bgImgs = ['header-bg-0.jpg', 'header-bg-1.jpeg', 'header-bg-2.jpg'];

//create slider ul and li
let slider_ul = document.createElement("ul");
slider_ul.className = "slider-ul";
for (let i = 0; i < bgImgs.length; i++) {
    let slider_li = document.createElement("li");
    slider_li.setAttribute("data-index",i);
    slider_ul.append(slider_li)
};
landingPage.append(slider_ul);

//select created ul and li 
let created_ul = document.querySelector(".landing-page .slider-ul");
let created_li = document.querySelectorAll(".landing-page .slider-ul li");

created_li[0].classList.add("active");

created_li.forEach(bullet => {
    bullet.addEventListener("click" , ()=> {
        created_li.forEach(ele =>{
            ele.classList.remove("active");
        });
        
        landingPage.style.backgroundImage = `url(../imgs/${bgImgs[+(bullet.getAttribute("data-index"))]})`;
        bullet.classList.add("active");
    });
});

//function add active class
