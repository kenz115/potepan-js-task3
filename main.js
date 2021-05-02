$(document).ready(function() {
    $("input").keyup(function() {
        let keyword = $(this).val();
        
        $(".keyword").each(function() {
            let str = $(this).text();
            if(keyword === '' || str.indexOf(keyword) !== -1) {
                $(this).parent().removeClass("hidden");
            } else if(str.indexOf(keyword) === -1) {
                $(this).parent().addClass("hidden");
            }
        });
    });
});