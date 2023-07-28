"ui";

ui.layout(
    <vertical>
        <button id="ava" align="center">adb安装应用</button>
        <button id="tra" align="center">adb上传文件</button>
        <button id="magiskit" align="center">adb录屏</button>
        <button id="exit1" align="center">Fastboot刷入rec</button>
        <button id="exit2" align="center">Fastboot刷入system</button>
        <button id="exit6" align="center">Fastboot刷入vendor</button>
        <button id="exit3" align="center">Fastboot刷入boot</button>
        <button id="exit4" align="center">Fastboot格式化分区</button>
    </vertical>
);

ui.ava.click(()=>{
    shell("./adb pm install /sdcard/MSMBOX/install.apk", true);
    toast("把apk放入/sdcard/MSMBOX下面，重命install.apk");
    });


ui.tra.click(()=>{
    shell("./adb shell mkdir /sdcard/MSMBOX/files", true);
    shell("./adb push /sdcard/MSMBOX/files/* /sdcard/MSMBOX/files", true);
 toast("把文件放入/sdcard/MSMBOX/files，文件已复制到/sdcard/MSMBOX/files");
    });


ui.magiskit.click(()=>{
    shell("./adb shell mkdir /sdcard/MSMBOX", true);
 shell("./adb shell screenrecord /sdcard/MSMBOX/录屏.mp4", true);
 toast("正在录屏，时间180s，保存文件/sdcard/MSMBOX");
    });

    
ui.exit1.click(()=>{
    toast("rec放入在/sdcard/MSMBOX/rec,重命rec.img");
    shell("./fastboot falsh recovery /sdcard/MSMBOX/rec/rec.img", true);
    });
    
    
ui.exit2.click(()=>{
    toast("system放入在/sdcard/MSMBOX/system,重命system.img");
    shell("./fastboot falsh system /sdcard/MSMBOX/system/system.img", true);
    });
    
    
ui.exit3.click(()=>{
    toast("boot放入在/sdcard/MSMBOX/boot,重命boot.img");
    shell("./fastboot falsh boot /sdcard/MSMBOX/boot/boot.img", true);
    });
    
    
ui.exit4.click(()=>{
 var test = require("ERROR1.js")
    });
    
    
ui.exit6.click(()=>{
    toast("vendor放入在/sdcard/MSMBOX/vendor,重命vendor.img");
    shell("./fastboot falsh vendor /sdcard/MSMBOX/vendor/vendor.img", true);
    });
