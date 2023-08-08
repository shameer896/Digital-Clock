var d = new Date()
let div = document.querySelector("#dv")
let h=d.getHours()
let m=d.getMinutes()
let s=d.getSeconds()
if(h>12)
{
    h=h-12
    div.textContent = (h>9?"":"0")+h + ":" + (m>9?"":"0")+m + ":" +(s>9?"":"0")+s+" pm"
}
else
{
    div.textContent = (h>9?"":"0")+h + ":" + (m>9?"":"0")+m + ":" +(s>9?"":"0")+s+" am"
}
setTimeout(function(){location.reload()},1000)
