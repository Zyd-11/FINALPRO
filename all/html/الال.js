let scrollto = document.getElementById("i")
scrollto.addEventListener("click",hi)


function hi(params) {
      window.scrollTo({
        top:1230,
        behavior:"smooth"
      })
}
let scrolluo = document.getElementById("p")
scrollto.addEventListener("click",hl)


function hl(params) {
      window.scrollTo({
        top:1030,
        behavior:"smooth"
      })
}
const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: [
      'السباقات',
      'الرماية على الخيل',
      'قفز الحواجز'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(175, 143, 111)',
        'rgb(116, 81, 45)',
        'rgb(84, 51, 16)'
      ],
      hoverOffset: 4
    }]
  }
});



let typewriter = new Typed('#typewriter', {
    strings : ["Future" , "Your FUTURE"],
    typeSpeed: 50,
    backSpeed: 75,
    loop: true
  });