cd /sdcard/MSMBOX/IMG
tar -cvf img.tar ramdisk split_img
cp img.tar /data/data/com.MSMBOX/files/project/img/
rm -rf ramdisk
rm -rf split_img
tar -xvf img.tar
sh repackimg.sh
