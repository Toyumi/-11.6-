// pages/home/home.js
Page({

  data: {
    imagepath:''
  },
  handleChooseAlbum(){
   //系统API让用户选择相册图片或者拍照
   wx.chooseImage({
     success: (res)=> {
    //取出路径
    const path = res.tempFilePaths[0]

    //设置imagepath
    this.setData({
      imagepath:path
    })
     },
   })
  },
  hanleimageload(){
      console.log('图片加载完成')
  }
})