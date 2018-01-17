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
});