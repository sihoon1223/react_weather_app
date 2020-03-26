<?php
$d1 = new DataTime;
$d1-> setTimeZone(new DateTimeZone("asia/seoul"));
echo $d1-> format('H:i:s');
?>