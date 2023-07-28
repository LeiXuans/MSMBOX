"ui";

var color = "#009688";

ui.layout(
    <drawer id="drawer">
   shell("su -c chmod 777 /data/data/com.MSMBOX/files/project/shell",true)
   shell("cd /sdcard/",true)
   shell("mkdir MSMBOX",true)
    $files.create("/sdcard/MSMBOX/Download");
        <vertical>
            <appbar>
                <toolbar id="toolbar" title="MSMBOX V2.0.0B2（公开测试）"/>
                <tabs id="tabs"/>
            </appbar>
            <viewpager id="viewpager">            
                <frame>                
                
                     ui.layout(
                <vertical padding="16">
                      
                         <button id="s8" text="获取WIFI密码" w="*"/>
                         <button id="s10" text="开启应用小窗（原生）" w="*"/>
                         <button id="s12" text="ADB/fastboot功能" w="*"/>
                         <button id="s13" text="强制分屏" w="*"/>
                         <button id="s20" text="GMS功能（不提供VPN）" w="*"/>
                         <button id="s25" text="镜像工具" w="*"/>
                         <button id="s21" text="设置功能" w="*"/>
                    </vertical>
                
                </frame>
                <frame>
                     ui.layout(
                <vertical padding="16">
                      
                         <button id="s1" text="Magisk专区" w="*"/>
                         <button id="s3" text="刷入分区" w="*"/>
                         <button id="s4" text="ROM专区" w="*"/>
                         <button id="s5" text="修改电量" w="*"/>
                         <button id="s7" text="恢复电量" w="*"/>
                         <button id="s16" text="免Root刷分区（测试版）" w="*"/>
                         <button id="s18" text="iOS越狱（但支持64位手机）" w="*"/>
                         <button id="s19" text="备份分区" w="*"/>
                
                    </vertical>
                
                </frame>
                <frame>
                                     ui.layout(
                <vertical padding="16">
                      
                         <button id="s22" text="屏幕录制" w="*"/>
                         <button id="s23" text="屏幕截图" w="*"/>
                         <button id="s24" text="反馈意见" w="*"/>
                
                    </vertical>
                
                </frame>
            </viewpager>
        </vertical>
        <vertical layout_gravity="left" bg="#ffffff" w="280">
            <img w="280" h="200" scaleType="fitXY" src="http://www.msmbox.ml/MSMBOX/1.jpg"/>
            <list id="menu">
                <horizontal bg="?selectableItemBackground" w="*">
                    <img w="50" h="50" padding="16" src="{{this.icon}}" tint="{{color}}"/>
                    <text textColor="black" textSize="15sp" text="{{this.title}}" layout_gravity="center"/>
                </horizontal>
            </list>
        </vertical>
    </drawer>
);


//创建选项菜单(右上角)
ui.emitter.on("create_options_menu", menu=>{
    menu.add("设置");
    menu.add("重启REC");
    menu.add("重启9008");
    menu.add("关机");
    menu.add("重启sideload");
    menu.add("重启");
    menu.add("软重启");
    menu.add("重启至安全模式");
    menu.add("重启Fastboot");
    menu.add("重启SystemUI");
    menu.add("关于");
    menu.add("修复");
    menu.add("更新");
    menu.add("系统版本");
    menu.add("不要点");
});
//监听选项菜单点击
ui.emitter.on("options_item_selected", (e, item)=>{
    switch(item.getTitle()){
        case "设置":
            var test = require("setting1.js")
            break;
        case "关于":
            alert("关于", "作者/酷安 Linuxboot 哔哩哔哩UID:1019190006，我们将永远免费更新！，这次大改版！,作者通宵写代码不容易，小小年纪就有白头发了，服务器也不便宜，随着Android的版本，作者也要不停的维护与更新，希望大家可以支持一下，V2.0.0 Beta");
            break;
        case "重启":
            shell("reboot",true)
            break;
        case "重启REC":
            shell("reboot recovery",true)
            break;
        case "重启9008":
            shell("reboot edl",true)
            break;
        case "重启Fastboot":
            shell("reboot bootloader",true)
            break;
        case "不要点":
            var test = require("null.js")
            break;
        case "重启sideload":
            shell("reboot sideload",true)
            break;
        case "软重启":
            shell("su -c killall -9 zygote || setprop ctl.restart zygote",true)
            break;
        case "重启至安全模式":
            shell("su -c setprop persist.sys.safemode 1 &#38;&#38; reboot",true)
            break;
        case "强制关机":
            shell("reboot -p",true)
            break;
        case "重启SystemUI":
            shell("pkill -f com.android.systemui",true)
            break;
        case "更新":
            var url = "http://www.msmbox.ml/MSMBOX/MSMBOX.apk";
var res = http.get(url);
if(res.statusCode != 200){
    toast("请求失败");
}
files.writeBytes("/sdcard/MSMBOX/Download/MSMBOX.apk", res.body.bytes());
toast("下载成功");
app.viewFile("/sdcard/MSMBOX/Download/MSMBOX.apk");
            break;
        case "关机":
            shell("reboot -p",true)
            break;
        case "官网":
            app.openUrl("http://www.msmbox.ml/");
            break;
        case "修复":
            var test = require("start.js")
            break;
        case "系统版本":
            var test = require("ver.js")
            break;
    }
    e.consumed = true;
});
activity.setSupportActionBar(ui.toolbar);

//设置滑动页面的标题
ui.viewpager.setTitles(["功能区", "搞机区", "更多区"]);
//让滑动页面和标签栏联动
ui.tabs.setupWithViewPager(ui.viewpager);

//让工具栏左上角可以打开侧拉菜单
ui.toolbar.setupWithDrawer(ui.drawer);

ui.menu.setDataSource([
  {
      title: "作者Libra",
      icon: "@drawable/ic_android_black_48dp"
  },
  {
      title: "MSMBOX工具箱 2.0.0",
      icon: "@drawable/ic_settings_black_48dp"
  },
  {
      title: "欢迎反馈",
      icon: "@drawable/ic_favorite_black_48dp"
  },
  {
      title: "退出",
      icon: "@drawable/ic_exit_to_app_black_48dp"
  }
]);

ui.menu.on("item_click", item => {
    switch(item.title){
        case "退出":
            ui.finish();
            break;
    }
})

ui.s1.on("click", ()=>{
       var test = require("Download/magisk.js")
            toast("成功");
});



ui.s3.on("click", ()=>{
    
   shell("chmod 777 /data/data/com.MSMBOX/files/project/",true)
   shell("mkdir /sdcard/MSMBOX",true)
   var test = require("dev.js")
            toast("成功");
});




ui.s4.on("click", ()=>{
   shell("su -c ./data/data/com.MSMBOX/files/project/shell/echo.sh",true)
   shell("chmod 777 /data/data/com.MSMBOX/files/project/*",true)   
   shell("mkdir /sdcard/MSMBOX/fonts",true)
   shell("mkdir /sdcard/MSMBOX/media",true)
   shell("mkdir /sdcard/MSMBOX/Download",true)
   var test = require("Download/rom.js")
            toast("成功");
});


ui.s5.on("click", ()=>{
       dialogs.confirm("要修改吗?", "", function(b){
        if(b){
            dialogs.rawInput("输入", "", function(str){
                shell("dumpsys battery set level" + str,true);
            });
        }else{
            ui.finish();
        }
    });
            toast("成功");
});




ui.s7.on("click", ()=>{
   shell("mkdir /sdcard/MSMBOX",true)
   
   shell("chmod 777 /data/data/com.MSMBOX/files/project/",true)
   shell("dumpsys battery reset",true)
            toast("成功");
});

ui.s8.on("click", ()=>{
    
   shell("chmod 777 /data/data/com.MSMBOX/files/project/",true)
   shell("mkdir /sdcard/MSMBOX",true)
   shell("cp  /data/misc/wifi/wpa_supplicant.conf /sdcard/MSMBOX/",true)   
app.viewFile("/sdcard/MSMBOX/wpa_supplicant.conf");
toast("psk是密码");
            toast("成功");
});
ui.s10.on("click", ()=>{
    
   shell("chmod 777 /data/data/com.MSMBOX/files/project/",true)
   shell("mkdir /sdcard/MSMBOX",true)
   shell("settings put global enable_freeform_support 1",true)
            toast("成功");
});
ui.s12.on("click", ()=>{
    
   shell("chmod 777 /data/data/com.MSMBOX/files/project/",true)
   shell("mkdir /sdcard/MSMBOX",true)
   var test = require("adb/adb.js")
            toast("成功");
});
ui.s13.on("click", ()=>{
    
   shell("chmod 777 /data/data/com.MSMBOX/files/project/",true)
   shell("mkdir /sdcard/MSMBOX",true)
   shell("settings put global force_resizable_activities 1",true)
            toast("成功");
});
ui.s16.on("click", ()=>{
    
   shell("chmod 777 /data/data/com.MSMBOX/files/project/",true)
   shell("mkdir /sdcard/MSMBOX",true)
   var test = require("devroot.js")
            toast("成功");
});
ui.s18.on("click", ()=>{
    
   shell("chmod 777 /data/data/com.MSMBOX/files/project/",true)
   shell("mkdir /sdcard/MSMBOX",true)
   shell("cd /data/data/com.MSMBOX/files/project/ && su -c ./checkra1n",true)
            toast("IOS进入下载模式，一直等待就成功");
});
ui.s19.on("click", ()=>{
    
   shell("chmod 777 /data/data/com.MSMBOX/files/project/",true)
   shell("mkdir /sdcard/MSMBOX",true)
   var test = require("dev2.js")
            toast("成功");
});

ui.s20.on("click", ()=>{
    
   shell("chmod 777 /data/data/com.MSMBOX/files/project/",true)
   shell("mkdir /sdcard/MSMBOX",true)
   var test = require("Download/gms.js")
            toast("成功");
});


ui.s22.on("click", ()=>{
   shell("chmod 777 /data/data/com.MSMBOX/files/project/",true)
   shell("mkdir /sdcard/MSMBOX",true)
   toast("正在录屏，时间180s，保存文件/sdcard/MSMBOX");
   shell("screenrecord /sdcard/MSMBOX/录屏.mp4", true);
            toast("成功录屏");
});

ui.s23.on("click", ()=>{
    toast("准备20秒截图");

var i = 0;

setTimeout(function(){
shell("screencap -p /sdcard/MSMBOX/截图.png", true);
    exit();
}, 20 * 1000);

setInterval(function(){
    i++;
    toast(i * 5 + "秒");
}, 5000);


app.viewFile("/sdcard/MSMBOX/截图.png");
            toast("成功");
            
});

ui.s21.on("click", ()=>{
   shell("chmod 777 /data/data/com.MSMBOX/files/project/",true)
   shell("mkdir /sdcard/MSMBOX",true)
   var test = require("setting.js")
            toast("成功");
});


ui.s24.on("click", ()=>{
   shell("chmod 777 /data/data/com.MSMBOX/files/project/",true)
   shell("mkdir /sdcard/MSMBOX",true)
            alert("建议与反馈", "提交到3374257533@qq.com");
});


ui.s25.on("click", ()=>{
   shell("chmod 777 /data/data/com.MSMBOX/files/project/",true)
   shell("mkdir /sdcard/MSMBOX",true)
   var test = require("img/img.js")
});