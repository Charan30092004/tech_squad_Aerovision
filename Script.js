var preview=document.getElementsByClassName("preview")[0].innerHTML="helo";
console.log("Hello");
var captcha;
function createcaptcha()
{
    var n=Math.floor(Math.random()*(9-5))+5;
    var chars='abcdefghijklmnopqrstuvwxyz!@#$%^&*()1234567890';
    var charlen=chars.length;
    for (var i=0;i<n;i++)
    {
        captcha+=chars.charAt(Math.floor(Math.random()*charlen));
    }
    console.log(captcha);
}
createcaptcha();

console.log(captcha);