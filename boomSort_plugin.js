/*
created by BoomShakaLaka
2015

$('.fabfika_container').boomSort(200);
200 - width of column
*/

(function( $ ){

  $.fn.boomSort = function( col_width) {
        
    var parentW = this.width();
    
    var num_columns =  parseInt(parentW/col_width);
    
    var elements = new Array();
    
    var padding_top = parseInt(this.css('padding-top'));
    var padding_left = parseInt(this.css('padding-left'));      

    this.children('*').each(function () {
        var name = $(this);
        elements.push(name);
    });
    
    var e_l = elements.length;
    
    var num_rows = parseInt(e_l/num_columns);
    
    if ((e_l / num_columns) % 1 != 0) {
        num_rows = num_rows + 1;        
    } 
    
    var cur_column = -1;
    
    for (var i = 0; i <= e_l-1; i++) {
        
        var cur_row = i/num_columns;
        
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
        elements[i].css("top", padding_top + pos_top_elem + height_top_elem);
        elements[i].css("left", padding_left + col_width*cur_column);
    }
    
    var parent_height = 0;
    
    for (var i = 0; i <= num_columns-1; i++) {
        var sum = 0;
        for (var j = 0; j <= num_rows-1; j++) {
            if(elements[i + j*num_columns]){
                sum = sum + parseInt(elements[i + j*num_columns].height()) + padding_top;
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