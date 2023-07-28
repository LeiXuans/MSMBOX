"ui";

ui.layout(
    <vertical>
        <button id="ava" align="center">Android7-ARM64</button>
        <button id="tra" align="center">Android8-ARM64</button>
        <button id="QWQ" align="center">Android9-ARM64</button>
        <button id="AEM" align="center">Android10-ARM64</button>
        <button id="install" align="center">安装GMS</button>
    </vertical>
);

ui.ava.click(()=>{
    toast("正在下载，可能会卡，是正常的");
    var url = "http://www.msmbox.ml/MSMBOX/open_gapps-arm64-7.1-nano-20220503.zip";
var res = http.get(url);
if(res.statusCode != 200){
    toast("请求失败");
}
files.writeBytes("/sdcard/MSMBOX/Download/install.zip", res.body.bytes());
toast("下载成功");
    });


ui.tra.click(()=>{
    toast("正在下载，可能会卡，是正常的");
    var url = "http://www.msmbox.ml/MSMBOX/open_gapps-arm64-8.1-nano-20220503.zip";
var res = http.get(url);
if(res.statusCode != 200){
    toast("请求失败");
}
files.writeBytes("/sdcard/MSMBOX/Download/install.zip", res.body.bytes());
toast("下载成功");
    });


ui.QWQ.click(()=>{
    toast("正在下载，可能会卡，是正常的");
    var url = "http://www.msmbox.ml/MSMBOX/open_gapps-arm64-9.0-pico-20220503.zip";
var res = http.get(url);
if(res.statusCode != 200){
    toast("请求失败");
}
files.writeBytes("/sdcard/MSMBOX/Download/install.zip", res.body.bytes());
toast("下载成功");
    });

    
ui.AEM.click(()=>{
    toast("正在下载，可能会卡，是正常的");
    var url = "http://www.msmbox.ml/MSMBOX/open_gapps-arm64-10.0-pico-20220503.zip";
var res = http.get(url);
if(res.statusCode != 200){
    toast("请求失败");
}
files.writeBytes("/sdcard/MSMBOX/Download/install.zip", res.body.bytes());
toast("下载成功");
    });
    
    
ui.install.click(()=>{
    toast("成功");
    shell("echo install /sdcard/MSMBOX/Download/install.zip >/cache/recovery/openrecoveryscript", true);
    shell("su -c reboot recovery", true);
    });
    