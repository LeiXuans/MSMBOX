"ui";

ui.layout(
    <vertical>
        <button id="boot" align="center">OPPO R9SK lOS</button>
        <button id="tra" align="center">OPPO R9SK MIUI</button>
        <button id="install" align="center">安装ROM</button>
        <text textSize="40sp">把下载的ROM放在/sdcard/MSMBOX/ROM</text>
        
        
        <text textSize="10sp">可以联系作者收录你的ROM，方法 作者名称，版权名称，你的ROM，机型，使用说明，我们会扫描ROM，不许有格机代码，一律退回！，作者邮箱 3374257533@qq.com</text>
    </vertical>
);



ui.boot.click(()=>{
app.openUrl("https://h5.cloud.189.cn/share.html#/t/RN3aAzE3aQBb");
    });


ui.tra.click(()=>{
app.openUrl("https://h5.cloud.189.cn/share.html#/t/eqYF7ry2MFJr");
    });

ui.tra.click(()=>{
app.openUrl("https://h5.cloud.189.cn/share.html#/t/eqYF7ry2MFJr");
    });

ui.install.click(()=>{
shell("echo install /sdcard/MSMBOX/ROM/install.zip >/cache/recovery/openrecoveryscript", true);
    shell("su -c reboot recovery", true);
    });
