function scrollIntoView () {
  window.scrollTo(0, 0)
}

// 阻止微信拖动
// document.body.addEventListener('touchmove', function (e) {
//   e.preventDefault() // 阻止默认的处理方式(阻止下拉滑动的效果)
// }, {passive: false})

setTimeout(() => {
  autoScale({
    deviseW: 750,
    deviseH: 1508,
    center: 'middle',
    scroll: false,
    type: 'scale',
    box: '.scale-box'
  })
}, 100);

var activeIndex = 0
var timu = [
  {
    "type": "单选题",
    "title": "中国共产党第一次全国代表大会先后在(    )召开。",
    "answer": ["上海、嘉兴", "上海、天津", "北京、上海", "北京、广州"],
    "right": 0
  },
  {
    "type": "多选题",
    "title": "中国共产党第一次全国代表大会先后在(    )召开。",
    "answer": ["上海、嘉兴", "上海、天津", "北京、上海", "北京、广州"],
    "right": [0, 1, 2]
  },
  {
    "type": "判断题",
    "title": "1928年6月在莫斯科举行的是中国共产党第五次全国代表大会。",
    "answer": ["正确", "错误"],
    "right": 0
  },
  {
    "type": "填空题",
    "title": "“政权是由枪杆子中取得的”这一论断是毛泽东在[输入]提出的。",
    "right": "测试"
  },
  {
    "type": "视频题",
    "title": "<video controls='controls' src='https://cunchu.site/show/mp4/dandelion.mp4'></video>请看视频，然后回答下列问题：视频选自电影《鸡毛信》，请问小男主角海娃除了担任华北抗日根据地龙门村的儿童团长外，他还是一名_______。",
    "answer": ["小邮差", "放牛娃", "放羊娃", "卖报员"],
    "right": 0
  },
  {
    "type": "音频题",
    "title": "<audio controls='controls' src='https://tts-async-audio-gz-1300466766.cos.ap-guangzhou.myqcloud.com/20211006%2F1256763111%2Fgz-3a0fe2af-266d-474d-9341-edead424662e.mp3?sign=q-sign-algorithm%3Dsha1%26q-ak%3DAKIDJXcaKs2w4vZw5zTCrHRM7dOwre9Xk9MJ%26q-sign-time%3D1633474867%3B1634079667%26q-key-time%3D1633474867%3B1634079667%26q-header-list%3D%26q-url-param-list%3D%26q-signature%3Dfd4003c7368a8e396132e149355306911a1794c6'></audio>请听音频，然后回答下列问题：请问《义勇军进行曲》的曲作者、词作者分别是谁？",
    "answer": ["聂耳、田汉", "聂耳、周扬", "聂耳、夏衍", "冼星海、田汉"],
    "right": 0
  }
]

function check (ind, el) {
  if (timu[activeIndex].type == '填空题') {
    if (document.querySelector('.title input').value.indexOf(timu[activeIndex].right) >= 0) {
      owo.tool.toast('答对了！')
    } else {
      owo.tool.toast('回答错误')
    }
    document.querySelector('.title input').value = timu[activeIndex].right
  } else if (timu[activeIndex].type == '多选题') {
    el.classList.add('check')
    timu[activeIndex].right.forEach(element => {
      document.querySelectorAll('.answer-box .item')[element].classList.add('right')
    });
  } else {
    el.classList.add('check')
    document.querySelectorAll('.answer-box .item')[timu[activeIndex].right].classList.add('right')
    if (timu[activeIndex].right != ind) {
      owo.tool.toast('回答错误')
    }
  }
  
}

function check2 (ind, el) {
  el.classList.add('check')
}