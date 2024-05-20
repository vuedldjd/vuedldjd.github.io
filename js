 //上传前回调
beforeUploadVideo(file) {
      var fileSize = file.size / 1024 / 1024 < 50;   //控制大小  修改50的值即可
      if (
        [
          "video/mp4",
          "video/ogg",
          "video/flv",
          "video/avi",
          "video/wmv",
          "video/rmvb",
          "video/mov",
        ].indexOf(file.type) == -1     //控制格式
      ) {
        layer.msg("请上传正确的视频格式");
        return false;
      }
      if (!fileSize) {
        layer.msg("视频大小不能超过50MB");
        return false;
      }
      this.isShowUploadVideo = false;
    },
    //进度条
    uploadVideoProcess(event, file, fileList) {    //注意在data中添加对应的变量名
      this.videoFlag = true;  
      this.videoUploadPercent = file.percentage.toFixed(0) * 1;
    },
    //上传成功回调
    handleVideoSuccess(res, file) {
      this.isShowUploadVideo = true;
      this.videoFlag = false;
      this.videoUploadPercent = 0;
 
      console.log(res);
      //后台上传数据
      if (res.success == true) {  
        this.videoForm.showVideoPath = res.data.url;    //上传成功后端返回视频地址 回显
      } else {
        this.$message.error("上传失败！");
      }
},
