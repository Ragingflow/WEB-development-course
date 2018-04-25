<script>
function age (year) {
	if ( year >= 1 && year <= 2017) {
   		age = Math.ceil(year / 100);
    	alert (age)
    } else {
   		alert("Введен не верный год")
    }
}

age(0);
</script>
