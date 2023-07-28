"ui";

ui.layout(
    <vertical>
    <text w="*" gravity="center" textSize="50sp">欢迎使用MSMBOX</text>
    <text textSize="30sp">此软件为开源，修改了要写上原作者的信息，不许倒卖软件，此软件永久免费使用，服务器也是用的作者的服务器，没有Root无法使用，MTK的Android7不管你有没有root，可以继续使用，谢谢合作，↓点击使用，作者酤安Linuxboot</text>
        <button id="ava" align="center">开始使用</button>
        <button id="qwq" align="center">官方网站</button>
 shell("su", true);
    </vertical>
);

        <text textSize="12sp">小字</text>
ui.ava.click(()=>{
    toast("重启应用");
 shell("rm -rf /data/data/com.MSMBOX/main1.js", true);
shell("mv main.js start.js" , true)
shell("mv main1.js main.js" , true)
files.rename("main.js", "start.js");  //
files.rename("main1.js", "main.js");  //
shell("mkdir /sdcard/MSMBOX", true);
shell("mkdir /sdcard/MSMBOX/Download", true);
shell("mkdir /sdcard/MSMBOX/Download/magisk", true);
shell("mkdir /sdcard/MSMBOX/Download/XP", true);
shell("mkdir /sdcard/MSMBOX/Download/ROM", true);
shell("mkdir /sdcard/MSMBOX/ROM", true);
shell("mkdir /sdcard/MSMBOX/Minecraft/", true);
shell("mkdir /sdcard/MSMBOX/IMG", true);
shell("mkdir /sdcard/MSMBOX/Minecraft/Java", true);
shell("mkdir /sdcard/MSMBOX/apk", true);
shell("mkdir /sdcard/MSMBOX/files", true);
shell("mkdir /sdcard/MSMBOX/system", true);
shell("mkdir /sdcard/MSMBOX/vendor", true);
shell("mkdir /sdcard/MSMBOX/rec", true);
shell("mkdir /sdcard/MSMBOX/boot", true);
shell("chmod 777 /data/data/com.MSMBOX/files/project/*", true);
shell("chmod 777 /data/data/com.MSMBOX/files/project/adb/*", true);
shell("chmod 777 /data/data/com.MSMBOX/files/project/img/*", true);
shell("chmod 777 /data/data/com.MSMBOX/files/project/Download/*", true);
var test = require("main.js")
    });
    
    
    
ui.qwq.click(()=>{
app.openUrl("http://www.msmbox.ml/");
    });
