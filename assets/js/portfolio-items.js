$(document).ready(function () {
    //Stop bootstrap carousel scroll until video finishes playing
    window._wq = window._wq || [];
    window._wq.push({
      id: "_all",
      options: {
        playerColor: "#56be8e"
      },
      onHasData: function(video) {
        video.bind("play", function() {
        //   console.log("'play' event fired for " + video.name() + "! 🎉");
          $('.carousel').carousel('pause');
        });
    
        video.bind("pause", function() {
            // console.log("'pause' event fired for " + video.name() + "! 🎉");
            $('.carousel').carousel();
          });
      }
    });

    //Hide partial sentence completions once on load
    // $(".tab-pane:not(:first-child)").hide();      

    // Handle partial sentence completion using bootstrap list-groups
    $('.list-group-item').on('click', function (e) {
      e.preventDefault();
      var getId = $(this).attr('href');
      $(".tab-pane:not(" + getId + ")").hide();      
      $(getId).show().removeClass("d-none");
    });

    	$('img').on('click', function() {
        $('.enlargeImageModalSource').attr('src', $(this).attr('src'));
        $('#enlargeImageModalDesc').text($(this).next().text());
        $('#enlargeImageModal').modal('show');
    });
    
});