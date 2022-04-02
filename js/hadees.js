let hadees=[
    {
        hadith:`“There are three whose supplication is not rejected: The fasting person when he breaks his fast, the just leader, and the supplication of the oppressed person……`,
        reference:`(Tirmidhi: 3598)`
    },
    {
     hadith:`
     “There is a gate in Paradise called Ar-Raiyan, and those who observe fasts will enter through it on the Day of Resurrection and none except them will enter through it.”`,
     reference:`(Sahih Bukhari: 1896)`
    },
    {
      hadith:`“Fasting is a shield or protection from the fire and from committing sins.”`,
      reference:`(Sahih Bukhari: 1904)`
    },
    {
      hadith:`
      “When the month of Ramadan starts, the gates of the heaven are opened and the gates of Hell are closed and the devils are chained.”`,
      reference:`(Sahih Bukhari: 1899)`
    },
    {
      hadith:`
      “Whoever spends the night of Lailat Al-Qadr in prayer out of faith and in the hope of reward, his previous sins will be forgiven.”`,
      reference:`(Nasai:  5027)`
    },
    {
     hadith:`“Allah's Messenger (S.A.W.) used to practice I\`tikaf in the last ten days of the month of Ramadan.”`,
     reference:`(Sahih Bukhari: 2025)`
    },
    {
      hadith:`
      “Whoever does not give up evil and ignorant speech, and acting in accordance with that, Allah has no need of his giving up his food and drink.”`,
      reference:`(Ibn Majah: 1689)`
    },
    {
      hadith:`“Whoever prays Qiyaam (Taraweeh Prayer) with the imam until he finishes, it will be recorded as if he spent the whole night in prayer.”`,
      reference:`(Tirmidhi: 806)`
    },
    {
      hadith:`“If you (travelling person) wish, then fast and if you wish, do not fast.”`,
      reference:`[Sahih Msulim: 1121(a)]`
    },
    {
      hadith:`
      “Whoever has dried dates, then let him break the fast with that, and whoever does not, then let him break the fast with water, for indeed water is purifying.”`,
      reference:`(Tirmidhi: 694)`
    },
    {
        hadith:`“Take Suhoor (late night meal) as there is a blessing in it.`,
        reference:`(Sahih Bukhari: 1923)`
    },
    {
        hadith:`“When Ramadan comes, go for Umrah, for Umrah in Ramadan is equivalent to Hajj.”`,
        reference:`(Sahih Muslim: 1256)`
    },
    {
        hadith:`“…. If one of you is fasting, he should avoid sexual relation with his wife and quarreling, and if somebody should fight or quarrel with him, he should say, 'I am fasting…..”`,
        reference:`(Sahih Bukhari: 1904)`
    },

];
let button=document.getElementById('hadeesBtn');
let hadithDaily=document.getElementById('hadith');
let reference=document.getElementById('reference');

button.addEventListener('click',function(){
    let random=Math.floor(Math.random()*hadees.length);
    hadithDaily.innerText=hadees[random].hadith;
    reference.innerText=hadees[random].reference;
})