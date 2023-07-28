"ui";

ui.layout(
    <vertical>
        <button id="ava" align="center">开启远程ADB</button>
        <button id="boot" align="center">开启远程telnetd</button>
        <button id="tra" align="center">开启省电（AOSP）</button>
        <button id="magiskit" align="center">悬浮通知</button>
        <button id="exit" align="center">开启护眼</button>
        <button id="start" align="center">旋转屏幕</button>
    </vertical>
);

ui.ava.click(()=>{
 toast("成功,adb connect ip:5555");
    shell("su -c setprop service.adb.tcp.port 5555", true);
    });


ui.boot.click(()=>{
 toast("成功，端口23");
    shell("busybox telnetd -l /system/bin/sh", true);
    });


ui.tra.click(()=>{
 toast("开启中。。。");
    shell("settings put global low_power 1", true);
    shell("settings put global app_auto_restriction_enabled true", true);
    shell("settings put global forced_app_standby_enabled 1", true);
    shell("settings put global app_standby_enabled 1", true);
    toast("成功");
    });


ui.magiskit.click(()=>{
 shell("settings put global heads_up_notifications_enabled 1", true);
 toast("成功");
    });


ui.exit.click(()=>{
 shell("settings put secure ui_night_mode 1", true);
 toast("成功");
    });
    
    
ui.start.click(()=>{
 shell("settings put system user_rotation 1", true);
 toast("成功");
    });