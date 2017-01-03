$(".notDigits").on("keypress change",function(e){
            // allow letters and whitespaces only.
            if( !(e.keyCode >= 1024 && e.keyCode <= 1119) && !(e.keyCode >= 97 && e.keyCode <= 122) && (e.keyCode != 32 && e.keyCode != 0 && e.keyCode != 34 && e.keyCode != 39 && e.keyCode != 1168 && e.keyCode != 1169)) {
                e.preventDefault();
            }
        });

        $(".onlyDigits").on("keypress change",function(e){
            // allow numbers only.
            if(e.keyCode == 37 || e.keyCode == 39) {
                console.log(e.keyCode)
            }
            else if(!(e.keyCode >= 48 && e.keyCode <= 57)) {
                e.preventDefault();
            }
        });