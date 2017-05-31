$(function() {
    
     //WORD COUNT
    counter_str = function() {
        $('[data-max-lenght]').each(function(){
            var field = $(this);
            var value = $(this).val();
            var strLimit = $(this).attr('data-max-lenght');
            var words = value.split(/[\s\.\?]+/);
            var words = words.slice(0,strLimit);
            var wordCount=value.split(/[\s\.\?]+/).length;

            if((strLimit - wordCount) >= 0){
                left = strLimit - wordCount;
            }else{
                left = 0;
            }

            $('label').html("Words left : " + left) ;
            if(wordCount > strLimit){
                 field.val(words.join(" "));
            }
          
        })//end of each

    }//end of counter

    $('[data-max-lenght]').each(function(){
        $(this).change(counter_str);
        $(this).keydown(counter_str);
        $(this).keypress(counter_str);
        $(this).keyup(counter_str);
        $(this).blur(counter_str);
        $(this).focus(counter_str);
    });

});
