// 导航栏
const nav=document.querySelector('.nav')
window.addEventListener('scroll',function(){
  const n=document.documentElement.scrollTop
  if(n>=200){
   nav.classList.add('show')
   
  }
  else{
    nav.classList.remove('show')
  }
})




//滑动效果
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  entry.target.classList.add("active");
                  observer.unobserve(entry.target);
              }
          });
      });
      
      const targetElements = document.querySelectorAll(".slide-in");
      targetElements.forEach((el) => observer.observe(el));
      
        // 获取所有图片元素
        const images = document.querySelectorAll('.accordion img');

        // 为每个图片元素添加鼠标悬停事件监听器
        images.forEach((image) => {
            image.addEventListener('mouseenter', () => {
                // 当鼠标悬停在某个图片上时，将该图片宽度设置为 500px
                image.style.width = '800px';
                // 其他图片宽度设置为 100px
                images.forEach((otherImage) => {
                    if (otherImage !== image) {
                        otherImage.style.width = '100px';
                    }
                });
            });
        });