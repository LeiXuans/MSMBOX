"ui";

ui.layout(
    <vertical>
        <button id="boot1" align="center">rec分区（高通）</button>
        <button id="tra1" align="center">boot分区（高通）</button>
        <button id="boot" align="center">rec分区（mtk）</button>
        <button id="tra" align="center">boot分区（mtk）</button>
        <button id="exit" align="center">在线recovery</button>
    </vertical>
);



ui.boot.click(()=>{
    toast("把boot放入到/sdcard/MSMBOX/boot里面,重命名boot.img");
    shell("dd if=/sdcard/MSMBOX/boot/boot.img of=/dev/block/by-name/boot", true);
    });


ui.tra.click(()=>{
    toast("把recovery放入到/sdcard/MSMBOX/recovery里面,重命名rec.img");
 shell("dd if=/sdcard/MSMBOX/rec/rec.img of=/dev/block/by-name/recovery", true);
    });




ui.exit.click(()=>{
    var test = require("Download/dev.js")
    });


ui.boot1.click(()=>{
    toast("把boot放入到/sdcard/MSMBOX/boot里面,重命名boot.img");
    shell("dd if=/sdcard/MSMBOX/boot/boot.img of=/dev/block/bootdevice/by-name/boot", true);
    });


ui.tra1.click(()=>{
    toast("把recovery放入到/sdcard/MSMBOX/recovery里面,重命名rec.img");
 shell("dd if=/sdcard/MSMBOX/rec/rec.img of=/dev/block/bootdevice/by-name/recovery", true);
    });
