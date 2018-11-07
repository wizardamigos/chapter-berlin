const chapterpage = require('chapter-page')

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
// var violet       = '#331e38'
// var grey         = '#a0c1b9'
// var blue         = '#70a0af'
// var lightYellow  = '#f4e8c1'
// var yellow       = '#ffee33'
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
var fontXXXL = fontXXS*8
const fontsizes = {
  fontsize0: fontXXS,
  fontsize1: fontXS,
  fontsize2: fontS,
  fontsize3: fontM,
  fontsize4: fontXM,
  fontsize5: fontXXM,
  fontsize6: fontL,
  fontsize7: fontXL,
  fontsize8: fontXXL,
  fontsize9: fontXXXL,
}
const colors = {
  color0: dB,
  color1: b,
  color2: lB,
  color3: lP,
  color4: dP,
  color5: B,
  color6: g,
  color7: sY,
  color8: W,
  color9: t,
}
const theme = { colors, fontsizes }
const data = {
  title: 'Berlin',
  logo: 'assets/wizard3.png',
  home: 'http://wizardamigos.com/',
  tabs: [{
    title: 'livestream',
    url: 'https://player.twitch.tv/?channel=serapath&autoplay=true'
  },{
    title: 'members',
    url: 'https://asdf.com'
  }],
  chat: 'https://gitter.im/wizardamigosinstitute/program/~embed',
  chapters: [{
    title: 'Taipei',
    url: 'http://wizardamigos.com/chapter-taipei/',
  }]
}

const { title, logo, home, tabs, chat, chapters } = data
document.body.innerHTML = `<h1> Loading data - please wait ... </h1>`
var meetup_api = 'https://api.meetup.com/2/events?offset=0&format=json&limited_events=False&group_urlname=WizardAmigos&photo-host=public&page=20&fields=&order=time&desc=false&status=upcoming&sig_id=35240262&sig=0ec0705819f4127f8d9396d29db27c58b3f1bb50'
var url = 'https://cors-anywhere.herokuapp.com/' + meetup_api
try {
  var { place, time, event } = JSON.parse(localStorage.lastEvent)
  var old = new Date(time)
  var now = new Date()
  var timeDiff = now.getTime() - old.getTime()
  var diffDays = timeDiff / (1000 * 3600 * 24)
  if (diffDays < 0) throw new Error('cached event is over')
  data.place = place
  data.time = time
  data.event = event
  init(data)
} catch (e) {
  fetch(url)
  .then(response => response.json())
  .then(res => {
    for (var i = 0; i < res.results.length; i++) {
      var place = res.results[i].venue.city
      if (place === title) {
        var event = res.results[i].event_url
        var number = res.results[i].time
        var time = new Date(number).toString()
        break
      }
    }
    localStorage.lastEvent = JSON.stringify({ place, event, time })
    data.place = place
    data.time = time
    data.event = event
    init(data)
  })
}
function init (data) {
  const {
    head,
    body,
  } = chapterpage({ data, theme })
  document.head.innerHTML = head
  document.body.innerHTML = body
}
