cd /data/data/com.MSMBOX/files/project/img/
sh unpackimg.sh /sdcard/MSMBOX/rec/img.img
tar -cvf ramdisk.tar ramdisk split_img
cp ramdisk.tar /sdcard/MSMBOX/IMG
rm -rf ramdisk.tar