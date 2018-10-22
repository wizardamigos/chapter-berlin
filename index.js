// WIZARD COLORS
var dB = '#43409a' // darkBlue
var b  = '#3022bb' // blue
var lB = '#6f68ae' // lightBlue
var lP = '#f989ff' // lightPink
var dP = '#730d61' // darkPink
var B  = '#080707' // black
var g  = '#2e3f41' // grey
var sY = '#f7da8b' // skinYellow
var W  = '#ffffff' // white
var t  = 'rgba(255, 255, 255, .0)'
// WEBSITE COLORS
var violet       = '#331e38'
var grey         = '#a0c1b9'
var blue         = '#70a0af'
var lightYellow  = '#f4e8c1'
var yellow       = '#ffee33'
// FONTS
var fontXXS = '10'
var fontXS  = fontXXS*1.3
var fontS   = fontXXS*1.6
var fontM   = fontXXS*2.0
var fontXM  = fontXXS*2
var fontXXM = fontXXS*2.2
var fontL   = fontXXS*3
var fontXL  = fontXXS*3.8
var fontXXL = fontXXS*6
var head = `
  <title> WizardAmigos Chapter - Berlin </title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
  <style>
    html          {
      box-sizing  : border-box;
      display     : table;
      min-width   : 100%;
      margin      : 0;
      font-size   : 18px;
    }
    *,*:before,*:after { box-sizing  : inherit; }
    @font-face    {
      font-family : C64;
      src         : url(assets/C64_Pro-STYLE.woff);
    }
    body {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0;
      height: 100vh;
      width: 100vw;
      background-color: #43409a;
    }
    h3 {
      color: ${W};
    }
    iframe {
      border: 10px solid ${W};
      width: 100%;
      height: 100%;
      flex-grow: 1;
    }
    .content {
      display: flex;
      width: 100%;
      height: 100%;
    }
    .input {
      width: 100%;
    }
    .address {
      width: 400px;
    }
    a {
      color: inherit;
      text-decoration: none;
      cursor: pointer;
    }
    .header {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      width: 100vw;
      height: 220px;
    }
    .logo {
      margin-left: 20px;
      margin-top: 10px;
      width: 120px;
      height: 120px;
    }
    .title1 {
      color: ${W};
      font-family: C64;
      margin-left: 10vw;
      font-size: 30px;
    }
    .title1 > span {
      color: ${lP};
    }
    .title2 {
      color: ${lP};
      font-family: C64;
      margin-left: 10vw;
      font-size: 20px;
    }
    .title2 > span {
      color: ${W};
      text-shadow: ${lP} 0 0 20px;
      animation: pulsate 4s ease-in-out;
      animation-iteration-count: infinite;
      opacity: 0.1
    }
    .webring {
      text-decoration: underline;
      color: ${dP};
      font-family: C64;
      font-size: 30px;
    }
    .chapter {
      color: ${lP};
      font-family: C64;
      font-size: 15px;
    }
    .chapter-list {
      list-style-image: url(assets/wai-icon1.png)
    }
    @keyframes pulsate {
        0% { transform: scale(0.1, 0.1); opacity: 0.1;}
        50% {opacity: 1.0;}
        100% { transform: scale(1.2, 1.2); opacity: 0.1;}
    }
  </style>
`
var body = `
  <div class="header">
  <a href="http://wizardamigos.com/"><img class="logo" src="assets/wizard3.png"></a>
  <div>
    <h1 class="title1">WizardAmigos Chapter: <span>Berlin</span></h1>
    <h2 class="title2"> next event: <span> <a href="https://www.meetup.com/WizardAmigos/events/xhrtjqyxnbfc/" target="_blank"> 2018.10.23-20:00 </a> </span></h2>
  </div>
  </div>
  <div class="content">
    <iframe width="100%" height="100%" frameborder="0"
      src="https://player.twitch.tv/?channel=serapath&autoplay=true""
      allow="geolocation; microphone; camera; autoplay; encrypted-media" allowfullscreen="true"></iframe>
    <iframe class="iframe" src="https://gitter.im/wizardamigosinstitute/program/~embed"></iframe>
  </div>
  <h3 class="webring"> other chapters </h3>
  <ul class="chapter-list"><li class="chapter"><a href="http://wizardamigos.com/chapter-taipei/">Taipei</a></li></ul>
`
// <script type="text/javascript" src="https://embed.typeform.com/embed.js"></script>
//     <iframe id="typeform-full" width="100%" height="100%" frameborder="0" src="https://ninabreznik.typeform.com/to/RnddyU"></iframe>
document.head.innerHTML = head
document.body.innerHTML = body
