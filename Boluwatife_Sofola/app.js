
//   const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });

const menuBtn = document.querySelector('#open-icon');
const closeBtn = document.querySelector('#close-icon');
const menu = document.querySelector('nav .container ul');

menuBtn.addEventListener('click', () => {
    menu.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
});

closeBtn.addEventListener('click', () => {
    menu.style.display = 'none';
    menuBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
});



const navItems = menu.querySelectorAll('li');

const changeActiveItem = () => {
    navItems.forEach(item => {
        const link = item.querySelector('a');
        link.classList.remove('active');
    });
}

navItems.forEach(item => {
    const link = item.querySelector('a');
    link.addEventListener('click', () => {
        changeActiveItem();
        link.classList.add('active');
    });
});


// ===== read more about ====
const readMoreBtn = document.querySelector('.read-more');
const readMoreContent =document.querySelector('.read-more-content');

readMoreBtn.addEventListener('click', () => {
    readMoreContent.classList.toggle('show-content');
    if(readMoreContent.classList.contains('show-content')){
        readMoreBtn.textContent = 'show less';
    } else {
        readMoreBtn.textContent = "show more";
    }
});




// show/hide skills items 

// Select all elements with the class "skill" that are descendants of a section with the class "skills"
const skillItems = document.querySelectorAll('section.skills .skill');

// Iterate over each selected element
skillItems.forEach(skill => {
    // For each element, add a click event listener to its child element with the class "head"
    skill.querySelector('.head').addEventListener('click', () => {
        // When the "head" element is clicked, toggle the "show-items" class on its sibling element with the class "items"
        skill.querySelector('.items').classList.toggle('show-items');
    })
})


//  add box shadow on scroll 
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('show-box-shadow', window.scrollY 
    > 0);
})





const swiper = new Swiper('.swiper', {
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
    },
  });


