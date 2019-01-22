document.addEventListener('DOMContentLoaded',function(){
    let wrapper = document.getElementById('wrapper');
    let top = wrapper.querySelector('.mockup');
    let splitter = wrapper.querySelector('.splitter');
    let skew = 0;
    let delta = 0;
    if(wrapper.className.indexOf('creativty')!=1){
        skew= 1000;
    }
    wrapper.addEventListener('mousemove',function(e){
        delta=(e.clientX - window.innerWidth /2 ) * 0.05;
        splitter.style.left = e.clientX + delta + 'px';

        top.style.width = e.clientX + skew + delta + 'px';
    })
})