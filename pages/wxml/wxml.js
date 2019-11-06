// pages/wxml/wxml.js
Page({

  data: {
      message:"你好小程序",
      firstname:"桜井",
      lastname:"可怜",
      age:18,
      nowTime: new Date().toLocaleString(),
      isactive:false
  },
onLoad(){
  setInterval(() =>{
   this.setData({
     nowTime: new Date().toLocaleString()
   })
  },1000)
},
handleswitchcolor() {
   this.setData({
    isactive: !this.data.isactive
   })
 }
})