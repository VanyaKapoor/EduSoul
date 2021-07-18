const tab1=document.querySelector('.tab1')
const tab2=document.querySelector('.tab2')

function borderChange(){
    tab1.classList.remove('border')
    tab2.classList.add('border')
}
function borderChange2(){
    tab2.classList.remove('border')
    tab1.classList.add('border')
}
function tab1Visible(){
    $('.founders-tab').removeClass('none')
    $('.tech-team-tab').addClass('none')
}
function tab2Visible(){
    $('.tech-team-tab').removeClass('none')
    $('.founders-tab').addClass('none')
}
$('.tab1').click(tab1Visible)
$('.tab2').click(tab2Visible)
tab2.addEventListener('click',borderChange)
tab1.addEventListener('click',borderChange2)