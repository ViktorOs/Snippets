/*
created by BoomShakaLaka
2015

$('.fabfika_container').boomSort(3,30);
200 - width of column
*/

(function( $ ){

  $.fn.boomSort = function( num_columns, margin_columns) {

    var parentWidth = this.width();

    var col_width =  parseInt( (parentWidth - margin_columns*(num_columns-1)) / num_columns);

    var elements = new Array();

    this.children('*').each(function () {
        var name = $(this);
        $(this).width(col_width);
        elements.push(name);
    });

    var e_l = elements.length;

    var num_rows = parseInt(e_l/num_columns);

    if ((e_l / num_columns) % 1 != 0) {
        num_rows = num_rows + 1;
    }

    var cur_column = -1;

    for (var i = 0; i <= e_l-1; i++) {

        var cur_row = parseInt(i/num_columns);

        cur_column = cur_column + 1;

        if(cur_column == num_columns){
             cur_column = 0;
        }

        var pos_top_elem = 0;
        var height_top_elem = 0;

        if(elements[i - num_columns]){
            pos_top_elem = parseInt(elements[i - num_columns].css('top'));
            height_top_elem = parseInt(elements[i - num_columns].height());
        }
        
        elements[i].css("position", "absolute");
        elements[i].css("top", margin_columns + pos_top_elem + height_top_elem);
        elements[i].css("left", margin_columns*cur_column + col_width*cur_column);
        
        if(cur_row === 0){
            elements[i].css("top",  0);
        }
        if(cur_column === 0){
            elements[i].css("left", 0);
        }
    }

    var parent_height = 0;
    
    for (var i = 0; i <= num_columns-1; i++) {
        var sum = 0;
        for (var j = 0; j <= num_rows-1; j++) {
            if(elements[i + j*num_columns]){
                sum = sum + parseInt(elements[i + j*num_columns].height() + margin_columns);
            }
        }

        if(parent_height < sum){
            parent_height = sum;
        }
    }

    this.css("position", "relative");
    this.height(parent_height);

  };
})( jQuery );
