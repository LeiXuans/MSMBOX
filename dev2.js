"ui";

ui.layout(
    <vertical>
        <button id="boot1" align="center">Recovery备份（高通）</button>
        <button id="tra1" align="center">boot备份（高通）</button>
        <button id="boot" align="center">Recovery备份（MTK）</button>
        <button id="tra" align="center">boot备份（MTK）</button>
    </vertical>
);



ui.tra.click(()=>{
    toast("把boot放入到/sdcard/MSMBOX/boot里面");
    shell("dd if=/dev/block/by-name/boot of=/sdcard/MSMBOX/boot/备份boot.img", true);
    });


ui.boot.click(()=>{
    toast("把recovery放入到/sdcard/MSMBOX/recovery里面");
 shell("dd if=/dev/block/by-name/recovery of=/sdcard/MSMBOX/rec/备份recovery.img", true);
    });

ui.tra1.click(()=>{
    toast("把boot放入到/sdcard/MSMBOX/boot里面");
    shell("dd if=/dev/block/bootdevice/by-name/boot of=/sdcard/MSMBOX/boot/备份boot.img", true);
    });


ui.boot1.click(()=>{
    toast("把recovery放入到/sdcard/MSMBOX/rec里面");
 shell("dd if=/dev/block/bootdevice/by-name/recovery of=/sdcard/MSMBOX/rec/备份recovery.img", true);
    });
