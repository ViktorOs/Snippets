/*
    <div>
        <div class="news-main-tab">
            <a href="javascript:;" class="tab active" data-tab="1">
                1
            </a>
                    <a href="javascript:;" class="tab" data-tab="2">
                2
            </a>
                    <a href="javascript:;" class="tab" data-tab="3">
                3
            </a>
        </div>

        <div class="news-main-list" data-list="1">  
            1      
        </div>
        <div class="news-main-list" data-list="2"> 
            2       
        </div>
        <div class="news-main-list" data-list="3"> 
            3       
        </div>
    </div>
*/
$(" .tab").click(function(){
    $(this).parent().find(".tab").removeClass("active");
    $(this).addClass("active");
    $(this).parent().parent().find("div[data-list]").hide();        
    var _tab = $(this).data("tab")   
    $(this).parent().parent().find("div[data-list='"+_tab+"']").show();         
})