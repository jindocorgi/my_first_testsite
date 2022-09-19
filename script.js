

tID = 0;
const h1 = document.getElementById("time")
const start = document.getElementById("start")
let applicant =['starbeany','iam_shen2','ddoong_ee.co','bori_kaebi','moongchi_yam','apolon_thelagotto','minvelyss','bori_201030','sa_pphi_','noel_is_angel_of_july','elizabeth_victoria_dd','s2.doopal_beagle.s2','qqwa_12_','cong_190905','harujeong___','sunset_0820','with_a._.smile','mochi__210723','lovemarie83','ponyoriya','kim_bolhwi','fury_serry','jihye_9103','santa811_sister','jjang_0321','corgi_bt','butter____world','mozzi_ccomi_ddubi','suna_sia','adam_220627','bichon_muffin1001','charze_s2','bbobbo._.corgi','bboyboy21','_with_cream','munji_i_i','jjosim_ba','tofu.choi','golden_yusik','moongchi_yam','lovemarie83','kim_bolhwi','corgi_bt','butter____world','moongchi_yam','lovemarie83','kim_bolhwi','corgi_bt','butter____world']
let result;
let rand;
let box1 = document.getElementById("box1");
function choose(){
    rand = Math.floor(Math.random() * applicant.length);
    h1.innerHTML = applicant[rand]
    result = applicant[rand];   
}
console.log(applicant.length);
start.onclick = function(){
    tID = setInterval(choose,80)
    setTimeout(()=>{
        clearInterval(tID);},10000);
    setTimeout(()=>{
        box1.innerHTML=`<p>${result}님<br> 축하합니다!</p>`;
        box1.style.animation='slide 1s forwards'
    },12000);
box1.onclick = function(){
    box1.style.animation='disapear 1s forwards';
    }
}
