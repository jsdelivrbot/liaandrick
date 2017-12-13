jQuery(document).ready(function ($) {
    //set animation timing
    var animationDelay = 2500,
        revealDuration = 600,
        revealAnimationDelay = 3000;

    initHeadline();


    function initHeadline() {
        //initialise headline animation
        animateHeadline($('.cd-headline'));
    }

    function animateHeadline($headlines) {
        var duration = animationDelay;
        $headlines.each(function () {

            var headline = $(this),
            spanWrapper = headline.find('.cd-words-wrapper'),
            newWidth = spanWrapper.width() + 10;
            spanWrapper.css('width', newWidth);

            // spanWrapper.css('max-width', window.innerWidth - 20);
            

            //trigger animation
            setTimeout(function () { hideWord(headline.find('.is-visible').eq(0)) }, duration);
        });
    }

    function hideWord($word) {
        var nextWord = takeNext($word);

        $word.parents('.cd-words-wrapper').animate({ width: '2px' }, revealDuration, function () {
            switchWord($word, nextWord);
            showWord(nextWord);
        });
    }

    function showWord($word, $duration) {

        $word.parents('.cd-words-wrapper').animate({ 'width': $word.width() + 10 }, revealDuration, function () {
            setTimeout(function () { hideWord($word) }, revealAnimationDelay);
        });
    }

    function takeNext($word) {
        return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
    }

    function switchWord($oldWord, $newWord) {
        $oldWord.removeClass('is-visible').addClass('is-hidden');
        $newWord.removeClass('is-hidden').addClass('is-visible');
    }
});