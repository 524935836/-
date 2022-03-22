onload--监听页面加载   无数据劫持，可以拿到data数据

onShow--监听页面显示

onHide--监听页面隐藏

onReady--监听页面初次渲染完成

onUnload--监听页面卸载

## 适配
物理像素 750  /  375px /  750rpx

## 视频
问题1、同时只播放一个视频，video标签bindplay属性(值为点击开始和播放的回调)

创建一个控制video标签的实例对象， wx.createvideocontext
将当前的video实例添加到this上（始终只有一个视频实例），在之前调用stop方法关闭上一个视频同时比较是否是同一个视频id（也需要将旧的id添加到this）


问题2、同时存在多个video，一直转圈（卡顿）
使用image列表，选中时将image替换成video

先为video标签属性poster，设置封面图片，后添加image组件
data中添加id，并用wx:if显示和隐藏（可以一起解决问题一）


问题3、跳转到指定位置
video标签属性bindtimeupdate，值为进度条变化的回调, 将进度保存起来

问题4、点击image，handlePlay触发两次，点击下一个视频之后再点回原视频，会出现视频声音已经播放，视频没有成功加载出来的问题。

video调用bindloadedmetadata(并不绑定handlePlay)，这里判断是否有进度条

## 每日推荐
全局保存进度

动态添加样式 class="scrollItem {{index === i ? 'scrollback' : ''}}"

this.backgroundAudioManager.onCanplay 监听背景音频进入可播放状态事件。 但不保证后面可以流畅播放
this.backgroundAudioManager.onWaiting 监听音频加载中事件。当音频因为数据不足，需要停下来加载时会触发

## 登录流程
1.前端调用wx.login获取登录凭证code
2.调用封装的request方法将登录凭证发送给开发者服务器
3.开发者服务器注册用户获取唯一标识(openid)
  通过appid、appsecret(小程序密钥)、code
4.发送请求给微信服务器获取openid(拼接url,用fly插件发送请求)2
5.自定义登录态(插件jsonwebtoken，自定义密钥，加密数据库中数据，数据中包含openid)