//defaltsetting
let a,b;
chrome.storage.local.get("ms",(data)=>{
a = data.ms
})
chrome.storage.local.get("vol",(data)=>{
    b = data.vol
    document.getElementById("msNumber").value = a
    document.getElementById("volNumber").value = b
    document.getElementById("volRange").value = b
})
//all content
let volNum;

document.getElementById("msNumber").addEventListener("input",()=>{
    msSave()
})

//range
setInterval(() => {//vol souka
    let volRange = document.getElementById("volRange")
    volNum = document.getElementById("volNumber")
    //スライダー
    volRange.addEventListener("input",(e)=>{
        volNum.value = e.target.value
        volSave()
    })

    //box
    let msTime = document.getElementById("volNumber")
    msTime.addEventListener("change",(e)=>{
        volRange.value = e.target.value
        volSave()
    })
}, 100);

function msSave(){
    let msTime = document.getElementById("msNumber")
    if(msTime.value > 0){
        chrome.storage.local.set({"ms": msTime.value},()=>{
            console.log("ok")
        });
    }
}

function volSave(){
    volNum = document.getElementById("volNumber")
    chrome.storage.local.set({"vol": volNum.value},()=>{
        console.log("ok")
    });
}

//checkbox
let audible = true;
let au = document.getElementById("audio")
chrome.storage.local.get("audible",(data)=>{
    audible = data.audible;
    au.checked = audible;
})
document.getElementById("audio").addEventListener("input",()=>{
    audible = au.checked;
    chrome.storage.local.set({"audible":audible})
})

//play
let playable = true;
let pl = document.getElementById("play")
chrome.storage.local.get("playable",(data)=>{
    playable = data.playable;
    pl.checked = playable;
})
document.getElementById("play").addEventListener("input",()=>{
    playable = pl.checked;
    chrome.storage.local.set({"playable":playable})
})