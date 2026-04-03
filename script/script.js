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
//网页滑动
//文字旋转
const start=document.querySelector('.start-image p')

window.addEventListener('scroll',function(){
  const n=document.documentElement.scrollTop
  if(n>=200){
   start.style.transform=' rotateY(360deg) translateY(150px) '//文字旋转
  //  skew(40deg) rotate(-10deg) 
  
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

      //文字显现
      
      

       // 点击后弹框
    // 获取元素
    const images = document.querySelectorAll('.item img');
    const popup = document.querySelector('.popup');
    const closePopup = document.querySelector('.closePopup');
    const bpopup=document.querySelector('.bigpopup')
    
    // 
    images.forEach((image) => {
        image.addEventListener('click', function () {
            const imgSrc = this.src;
             bpopup.style.display='flex'
            popup.style.display = 'flex';
            popup.style.backgroundImage = `url('${imgSrc}')`;
            popup.style.backgroundSize = 'cover';
            popup.style.backgroundPosition = 'center';
           
           
        });
    });
    // 关闭窗口
    closePopup.addEventListener('click', function () {
        popup.style.display = 'none';
        popup.style.backgroundImage = 'none';
        bpopup.style.display='none'
    });
    //点击旋转
  //   
  const items = document.querySelectorAll('.item1');
  const sen = document.querySelectorAll('.item1 p');

  items.forEach((tem,) => {
    tem.addEventListener('click', function () {
      // 切换元素旋转状态
     this.style.transform=this.style.transform === 'rotate3d(0, 1, 0, 360deg)' ? 'rotate3d(0, 1, 0,0deg)':'rotate3d(0, 1, 0, 360deg)'
    
      
    });
  });