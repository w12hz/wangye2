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

// 轮播图
//轮播图
    // 获取元素
    let next=document.querySelector(".next")
    let prev=document.querySelector('.prev')
    let slider=document.querySelector('.slider')
    
    // 点击按钮 切换图片
    next.addEventListener('click',function(){
      let box=document.querySelectorAll('.box')
      slider.appendChild(box[0])
      // 父元素末尾增加节点
    })
    
    prev.addEventListener('click',function(){
      let box=document.querySelectorAll('.box')
      slider.prepend(box[box.length-1])
      // 父元素开头增加节点
    })

      // 设置每 2 秒自动切换一次图片
      let intervalId = setInterval(() => {
            let box = document.querySelectorAll('.box');
            slider.appendChild(box[0]);
        }, 2000);


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

       