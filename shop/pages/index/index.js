//index.js
Page({
  data: {
    imgUrls: [
      '/pages/images/shop01.jpg',
      '/pages/images/shop02.jpg',
      '/pages/images/shop03.jpg'
    ],
    indicatorDots: true,//轮播图得点
    autoplay: true,//自动播放打开
    interval: 5000,
    duration: 1000,
    circular:true,
    proList:[{
      proImage:"/pages/images/pro01.jpg",
      proName:"小米笔记本",
      proPrice:8.88,
    }, {
        proImage: "/pages/images/pro02.jpg",
        proName: "美的迷你小冰箱",
        proPrice: 88.88,
      }, {
        proImage: "/pages/images/pro03.jpg",
        proName: "美素佳儿金装",
        proPrice: 234.88,
      }, {
        proImage: "/pages/images/pro04.jpg",
        proName: "防辐射服",
        proPrice: 538.88,
      }, {
        proImage: "/pages/images/pro05.jpg",
        proName: "车载儿童安全椅",
        proPrice: 1888.88,
      }, {
        proImage: "/pages/images/pro06.jpg",
        proName: "向日葵玩具",
        proPrice: 56.88,
      }, {
        proImage: "/pages/images/pro07.jpg",
        proName: "CHANDO",
        proPrice: 321.88,
      }]
  }
})
