

tID = 0;
const h1 = document.getElementById("time")
const start = document.getElementById("start")
let applicant =['starbeany','iam_shen2','ddoong_ee.co','bori_kaebi','moongchi_yam','apolon_thelagotto','minvelyss','bori_201030','noel_is_angel_of_july','s2.doopal_beagle.s2','qqwa_12_','cong_190905','harujeong___','sunset_0820','with_a._.smile','mochi__210723','lovemarie83','ponyoriya','kim_bolhwi','fury_serry','jihye_9103','jjang_0321','corgi_bt','butter____world','mozzi_ccomi_ddubi','suna_sia','adam_220627','bichon_muffin1001','charze_s2','bbobbo._.corgi','bboyboy21','munji_i_i','jjosim_ba','golden_yusik','ddoong_ee.co','apolon_thelagotto','sunset_0820','moongchi_yam','minvelyss','bori_201030','lovemarie83','kim_bolhwi','butter____world','starbeany','moongchi_yam','bori_201030','s2.doopal_beagle.s2','lovemarie83','ponyoriya','kim_bolhwi','jihye_9103','jjang_0321','charze_s2','bbobbo._.corgi','jjosim_ba','golden_yusik']
let secondArray=['ddoong_ee.co','moongchi_yam','apolon_thelagotto','bori_201030','noel_is_angel_of_july','s2.doopal_beagle.s2','qqwa_12_','sunset_0820','lovemarie83','ponyoriya','kim_bolhwi','jihye_9103','butter____world','bbobbo._.corgi','golden_yusik']
let result;
let rand;
let box1 = document.getElementById("box1");
function choose(){
    rand = Math.floor(Math.random() * secondArray.length);
    h1.innerHTML = secondArray[rand]
    result = secondArray[rand];   
}
console.log(secondArray.length);
start.onclick = function(){
    tID = setInterval(choose,60)
    setTimeout(()=>{
        clearInterval(tID);},7000);
    setTimeout(()=>{
        box1.innerHTML=`<p>${result}님<br> 축하합니다!</p>`;
        box1.style.animation='slide 1s forwards'
    },9000);
box1.onclick = function(){
    box1.style.animation='disapear 1s forwards';
    }
}
