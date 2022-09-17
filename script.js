tID = 0;
const h1 = document.getElementById("time")
const start = document.getElementById("start")
const stop = document.getElementById("stop")
let applicant =['starbeany','iam_shen2','ddoong_ee.co','bori_kaebi','moongchi_yam','apolon_thelagotto','minvelyss','bori_201030','sa_pphi_','noel_is_angel_of_july','elizabeth_victoria_dd','s2.doopal_beagle.s2','qqwa_12_','cong_190905','harujeong___','sunset_0820','with_a._.smile','mochi__210723','lovemarie83','ponyoriya','kim_bolhwi','fury_serry','jihye_9103','santa811_sister','jjang_0321','corgi_bt','butter____world','mozzi_ccomi_ddubi','suna_sia','adam_220627']

function choose(){
    let rand = Math.floor(Math.random() * applicant.length);
    h1.innerHTML = applicant[rand]
}

start.onclick = function(){
    if(tID == 0){
    tID = setInterval(choose,50)}
}

stop.onclick = function(){
    clearInterval(tID)
    tID = 0;
}