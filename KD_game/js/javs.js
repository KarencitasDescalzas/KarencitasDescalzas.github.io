var $loader = document.querySelector('.loader');

                window.onload = function() {
                                $loader.classList.remove('loader--active');
                };

                document.querySelector('.btn').addEventListener('click', function () {
                                $loader.classList.add('loader--active') 
                                                window.setTimeout(function () {
                                                $loader.classList.remove('loader--active')
                                                }, 5000)
                })


$(document).ready(function(){
                $('.card').click(function() {		        
                    $(this).toggleClass('is-flipped');
                });

                var ul = document.querySelector('.list');
                for (var i = ul.children.length; i >= 0; i--) {
                   ul.appendChild(ul.children[Math.random() * i | 0]);
                }


                $('#p1').click(function() {		        
                    $('#p2').removeClass('is-flipped');
                    $('#p3').removeClass('is-flipped');
                });

                $('#p2').click(function() {		        
                    $('#p1').removeClass('is-flipped');
                    $('#p3').removeClass('is-flipped');
                });

                $('#p3').click(function() {		        
                    $('#p1').removeClass('is-flipped');
                    $('#p2').removeClass('is-flipped');
                });

                $('#a1').click(function() {		        
                    $('#a2').removeClass('is-flipped');
                    $('#a3').removeClass('is-flipped');
                    $('#a4').removeClass('is-flipped');
                    $('#a5').removeClass('is-flipped');
                });

                $('#a2').click(function() {		        
                    $('#a1').removeClass('is-flipped');
                    $('#a3').removeClass('is-flipped');
                    $('#a4').removeClass('is-flipped');
                    $('#a5').removeClass('is-flipped');
                });

                $('#a3').click(function() {		        
                    $('#a2').removeClass('is-flipped');
                    $('#a1').removeClass('is-flipped');
                    $('#a4').removeClass('is-flipped');
                    $('#a5').removeClass('is-flipped');
                });

                $('#a4').click(function() {		        
                    $('#a2').removeClass('is-flipped');
                    $('#a3').removeClass('is-flipped');
                    $('#a1').removeClass('is-flipped');
                    $('#a5').removeClass('is-flipped');
                });

                $('#a5').click(function() {		        
                    $('#a2').removeClass('is-flipped');
                    $('#a3').removeClass('is-flipped');
                    $('#a4').removeClass('is-flipped');
                    $('#a1').removeClass('is-flipped');
                });


                $('.card_small').click(function() {		        
                    $(this).toggleClass('is-flipped');
                });

                $('#rw2').click(function() {		        
                    $('#rw3').removeClass('is-flipped');
                    $('#rw4').removeClass('is-flipped');
                    $('#rw5').removeClass('is-flipped');
                    $('#rw6').removeClass('is-flipped');
                    $('#rw7').removeClass('is-flipped');
                    $('#rw8').removeClass('is-flipped');
                    $('#rw9').removeClass('is-flipped');
                    $('#rw10').removeClass('is-flipped');
                    $('#rw12').removeClass('is-flipped');
                });

                $('#rw3').click(function() {		        
                    $('#rw2').removeClass('is-flipped');
                    $('#rw4').removeClass('is-flipped');
                    $('#rw5').removeClass('is-flipped');
                    $('#rw6').removeClass('is-flipped');
                    $('#rw7').removeClass('is-flipped');
                    $('#rw8').removeClass('is-flipped');
                    $('#rw9').removeClass('is-flipped');
                    $('#rw10').removeClass('is-flipped');
                    $('#rw12').removeClass('is-flipped');
                });

                $('#rw4').click(function() {		        
                    $('#rw3').removeClass('is-flipped');
                    $('#rw2').removeClass('is-flipped');
                    $('#rw5').removeClass('is-flipped');
                    $('#rw6').removeClass('is-flipped');
                    $('#rw7').removeClass('is-flipped');
                    $('#rw8').removeClass('is-flipped');
                    $('#rw9').removeClass('is-flipped');
                    $('#rw10').removeClass('is-flipped');
                    $('#rw12').removeClass('is-flipped');
                });

                $('#rw5').click(function() {		        
                    $('#rw3').removeClass('is-flipped');
                    $('#rw4').removeClass('is-flipped');
                    $('#rw2').removeClass('is-flipped');
                    $('#rw6').removeClass('is-flipped');
                    $('#rw7').removeClass('is-flipped');
                    $('#rw8').removeClass('is-flipped');
                    $('#rw9').removeClass('is-flipped');
                    $('#rw10').removeClass('is-flipped');
                    $('#rw12').removeClass('is-flipped');
                });

                $('#rw6').click(function() {		        
                    $('#rw3').removeClass('is-flipped');
                    $('#rw4').removeClass('is-flipped');
                    $('#rw5').removeClass('is-flipped');
                    $('#rw2').removeClass('is-flipped');
                    $('#rw7').removeClass('is-flipped');
                    $('#rw8').removeClass('is-flipped');
                    $('#rw9').removeClass('is-flipped');
                    $('#rw10').removeClass('is-flipped');
                    $('#rw12').removeClass('is-flipped');
                });

                $('#rw7').click(function() {		        
                    $('#rw3').removeClass('is-flipped');
                    $('#rw4').removeClass('is-flipped');
                    $('#rw5').removeClass('is-flipped');
                    $('#rw6').removeClass('is-flipped');
                    $('#rw2').removeClass('is-flipped');
                    $('#rw8').removeClass('is-flipped');
                    $('#rw9').removeClass('is-flipped');
                    $('#rw10').removeClass('is-flipped');
                    $('#rw12').removeClass('is-flipped');
                });

                $('#rw8').click(function() {		        
                    $('#rw3').removeClass('is-flipped');
                    $('#rw4').removeClass('is-flipped');
                    $('#rw5').removeClass('is-flipped');
                    $('#rw6').removeClass('is-flipped');
                    $('#rw7').removeClass('is-flipped');
                    $('#rw2').removeClass('is-flipped');
                    $('#rw9').removeClass('is-flipped');
                    $('#rw10').removeClass('is-flipped');
                    $('#rw12').removeClass('is-flipped');
                });

                $('#rw9').click(function() {		        
                    $('#rw3').removeClass('is-flipped');
                    $('#rw4').removeClass('is-flipped');
                    $('#rw5').removeClass('is-flipped');
                    $('#rw6').removeClass('is-flipped');
                    $('#rw7').removeClass('is-flipped');
                    $('#rw8').removeClass('is-flipped');
                    $('#rw2').removeClass('is-flipped');
                    $('#rw10').removeClass('is-flipped');
                    $('#rw12').removeClass('is-flipped');
                });

                $('#rw10').click(function() {		        
                    $('#rw3').removeClass('is-flipped');
                    $('#rw4').removeClass('is-flipped');
                    $('#rw5').removeClass('is-flipped');
                    $('#rw6').removeClass('is-flipped');
                    $('#rw7').removeClass('is-flipped');
                    $('#rw8').removeClass('is-flipped');
                    $('#rw9').removeClass('is-flipped');
                    $('#rw2').removeClass('is-flipped');
                    $('#rw12').removeClass('is-flipped');
                });

                $('#rw12').click(function() {		        
                    $('#rw3').removeClass('is-flipped');
                    $('#rw4').removeClass('is-flipped');
                    $('#rw5').removeClass('is-flipped');
                    $('#rw6').removeClass('is-flipped');
                    $('#rw7').removeClass('is-flipped');
                    $('#rw8').removeClass('is-flipped');
                    $('#rw9').removeClass('is-flipped');
                    $('#rw10').removeClass('is-flipped');
                    $('#rw2').removeClass('is-flipped');
                });

                $('#tc1').click(function() {		        
                    $('#tc2').removeClass('is-flipped');
                    $('#tc3').removeClass('is-flipped');
                    $('#tc4').removeClass('is-flipped');
                    $('#tc5').removeClass('is-flipped');
                    $('#tc6').removeClass('is-flipped');
                    $('#tc7').removeClass('is-flipped');
                    $('#tc8').removeClass('is-flipped');
                    $('#tc9').removeClass('is-flipped');
                    $('#tc10').removeClass('is-flipped');
                    $('#tc11').removeClass('is-flipped');
                    $('#tc12').removeClass('is-flipped');
                });
                $('#tc2').click(function() {		        
                    $('#tc1').removeClass('is-flipped');
                    $('#tc3').removeClass('is-flipped');
                    $('#tc4').removeClass('is-flipped');
                    $('#tc5').removeClass('is-flipped');
                    $('#tc6').removeClass('is-flipped');
                    $('#tc7').removeClass('is-flipped');
                    $('#tc8').removeClass('is-flipped');
                    $('#tc9').removeClass('is-flipped');
                    $('#tc10').removeClass('is-flipped');
                    $('#tc11').removeClass('is-flipped');
                    $('#tc12').removeClass('is-flipped');
                });
                $('#tc3').click(function() {		        
                    $('#tc2').removeClass('is-flipped');
                    $('#tc1').removeClass('is-flipped');
                    $('#tc4').removeClass('is-flipped');
                    $('#tc5').removeClass('is-flipped');
                    $('#tc6').removeClass('is-flipped');
                    $('#tc7').removeClass('is-flipped');
                    $('#tc8').removeClass('is-flipped');
                    $('#tc9').removeClass('is-flipped');
                    $('#tc10').removeClass('is-flipped');
                    $('#tc11').removeClass('is-flipped');
                    $('#tc12').removeClass('is-flipped');
                });
                $('#tc4').click(function() {		        
                    $('#tc2').removeClass('is-flipped');
                    $('#tc3').removeClass('is-flipped');
                    $('#tc1').removeClass('is-flipped');
                    $('#tc5').removeClass('is-flipped');
                    $('#tc6').removeClass('is-flipped');
                    $('#tc7').removeClass('is-flipped');
                    $('#tc8').removeClass('is-flipped');
                    $('#tc9').removeClass('is-flipped');
                    $('#tc10').removeClass('is-flipped');
                    $('#tc11').removeClass('is-flipped');
                    $('#tc12').removeClass('is-flipped');
                });
                $('#tc5').click(function() {		        
                    $('#tc2').removeClass('is-flipped');
                    $('#tc3').removeClass('is-flipped');
                    $('#tc4').removeClass('is-flipped');
                    $('#tc1').removeClass('is-flipped');
                    $('#tc6').removeClass('is-flipped');
                    $('#tc7').removeClass('is-flipped');
                    $('#tc8').removeClass('is-flipped');
                    $('#tc9').removeClass('is-flipped');
                    $('#tc10').removeClass('is-flipped');
                    $('#tc11').removeClass('is-flipped');
                    $('#tc12').removeClass('is-flipped');
                });
                $('#tc6').click(function() {		        
                    $('#tc2').removeClass('is-flipped');
                    $('#tc3').removeClass('is-flipped');
                    $('#tc4').removeClass('is-flipped');
                    $('#tc5').removeClass('is-flipped');
                    $('#tc1').removeClass('is-flipped');
                    $('#tc7').removeClass('is-flipped');
                    $('#tc8').removeClass('is-flipped');
                    $('#tc9').removeClass('is-flipped');
                    $('#tc10').removeClass('is-flipped');
                    $('#tc11').removeClass('is-flipped');
                    $('#tc12').removeClass('is-flipped');
                });
                $('#tc7').click(function() {		        
                    $('#tc2').removeClass('is-flipped');
                    $('#tc3').removeClass('is-flipped');
                    $('#tc4').removeClass('is-flipped');
                    $('#tc5').removeClass('is-flipped');
                    $('#tc6').removeClass('is-flipped');
                    $('#tc1').removeClass('is-flipped');
                    $('#tc8').removeClass('is-flipped');
                    $('#tc9').removeClass('is-flipped');
                    $('#tc10').removeClass('is-flipped');
                    $('#tc11').removeClass('is-flipped');
                    $('#tc12').removeClass('is-flipped');
                });
                $('#tc8').click(function() {		        
                    $('#tc2').removeClass('is-flipped');
                    $('#tc3').removeClass('is-flipped');
                    $('#tc4').removeClass('is-flipped');
                    $('#tc5').removeClass('is-flipped');
                    $('#tc6').removeClass('is-flipped');
                    $('#tc7').removeClass('is-flipped');
                    $('#tc1').removeClass('is-flipped');
                    $('#tc9').removeClass('is-flipped');
                    $('#tc10').removeClass('is-flipped');
                    $('#tc11').removeClass('is-flipped');
                    $('#tc12').removeClass('is-flipped');
                });
                $('#tc9').click(function() {		        
                    $('#tc2').removeClass('is-flipped');
                    $('#tc3').removeClass('is-flipped');
                    $('#tc4').removeClass('is-flipped');
                    $('#tc5').removeClass('is-flipped');
                    $('#tc6').removeClass('is-flipped');
                    $('#tc7').removeClass('is-flipped');
                    $('#tc8').removeClass('is-flipped');
                    $('#tc1').removeClass('is-flipped');
                    $('#tc10').removeClass('is-flipped');
                    $('#tc11').removeClass('is-flipped');
                    $('#tc12').removeClass('is-flipped');
                });
                $('#tc10').click(function() {		        
                    $('#tc2').removeClass('is-flipped');
                    $('#tc3').removeClass('is-flipped');
                    $('#tc4').removeClass('is-flipped');
                    $('#tc5').removeClass('is-flipped');
                    $('#tc6').removeClass('is-flipped');
                    $('#tc7').removeClass('is-flipped');
                    $('#tc8').removeClass('is-flipped');
                    $('#tc9').removeClass('is-flipped');
                    $('#tc1').removeClass('is-flipped');
                    $('#tc11').removeClass('is-flipped');
                    $('#tc12').removeClass('is-flipped');
                });
                $('#tc1').click(function() {		        
                    $('#tc2').removeClass('is-flipped');
                    $('#tc3').removeClass('is-flipped');
                    $('#tc4').removeClass('is-flipped');
                    $('#tc5').removeClass('is-flipped');
                    $('#tc6').removeClass('is-flipped');
                    $('#tc7').removeClass('is-flipped');
                    $('#tc8').removeClass('is-flipped');
                    $('#tc9').removeClass('is-flipped');
                    $('#tc10').removeClass('is-flipped');
                    $('#tc11').removeClass('is-flipped');
                    $('#tc12').removeClass('is-flipped');
                });
                $('#tc11').click(function() {		        
                    $('#tc2').removeClass('is-flipped');
                    $('#tc3').removeClass('is-flipped');
                    $('#tc4').removeClass('is-flipped');
                    $('#tc5').removeClass('is-flipped');
                    $('#tc6').removeClass('is-flipped');
                    $('#tc7').removeClass('is-flipped');
                    $('#tc8').removeClass('is-flipped');
                    $('#tc9').removeClass('is-flipped');
                    $('#tc10').removeClass('is-flipped');
                    $('#tc1').removeClass('is-flipped');
                    $('#tc12').removeClass('is-flipped');
                });
                $('#tc12').click(function() {		        
                    $('#tc2').removeClass('is-flipped');
                    $('#tc3').removeClass('is-flipped');
                    $('#tc4').removeClass('is-flipped');
                    $('#tc5').removeClass('is-flipped');
                    $('#tc6').removeClass('is-flipped');
                    $('#tc7').removeClass('is-flipped');
                    $('#tc8').removeClass('is-flipped');
                    $('#tc9').removeClass('is-flipped');
                    $('#tc10').removeClass('is-flipped');
                    $('#tc11').removeClass('is-flipped');
                    $('#tc1').removeClass('is-flipped');
                });


                $('#e1').click(function() {		        
                    $('#e2').removeClass('is-flipped');
                    $('#e3').removeClass('is-flipped');
                    $('#e4').removeClass('is-flipped');
                    $('#e5').removeClass('is-flipped');
                    $('#e6').removeClass('is-flipped');
                    $('#e7').removeClass('is-flipped');
                    $('#e8').removeClass('is-flipped');
                    $('#e9').removeClass('is-flipped');
                    $('#e10').removeClass('is-flipped');
                    $('#e11').removeClass('is-flipped');
                    $('#e12').removeClass('is-flipped');
                });
                $('#e2').click(function() {		        
                    $('#e1').removeClass('is-flipped');
                    $('#e3').removeClass('is-flipped');
                    $('#e4').removeClass('is-flipped');
                    $('#e5').removeClass('is-flipped');
                    $('#e6').removeClass('is-flipped');
                    $('#e7').removeClass('is-flipped');
                    $('#e8').removeClass('is-flipped');
                    $('#e9').removeClass('is-flipped');
                    $('#e10').removeClass('is-flipped');
                    $('#e11').removeClass('is-flipped');
                    $('#e12').removeClass('is-flipped');
                });
                $('#e3').click(function() {		        
                    $('#e2').removeClass('is-flipped');
                    $('#e1').removeClass('is-flipped');
                    $('#e4').removeClass('is-flipped');
                    $('#e5').removeClass('is-flipped');
                    $('#e6').removeClass('is-flipped');
                    $('#e7').removeClass('is-flipped');
                    $('#e8').removeClass('is-flipped');
                    $('#e9').removeClass('is-flipped');
                    $('#e10').removeClass('is-flipped');
                    $('#e11').removeClass('is-flipped');
                    $('#e12').removeClass('is-flipped');
                });
                $('#e4').click(function() {		        
                    $('#e2').removeClass('is-flipped');
                    $('#e3').removeClass('is-flipped');
                    $('#e1').removeClass('is-flipped');
                    $('#e5').removeClass('is-flipped');
                    $('#e6').removeClass('is-flipped');
                    $('#e7').removeClass('is-flipped');
                    $('#e8').removeClass('is-flipped');
                    $('#e9').removeClass('is-flipped');
                    $('#e10').removeClass('is-flipped');
                    $('#e11').removeClass('is-flipped');
                    $('#e12').removeClass('is-flipped');
                });
                $('#e5').click(function() {		        
                    $('#e2').removeClass('is-flipped');
                    $('#e3').removeClass('is-flipped');
                    $('#e4').removeClass('is-flipped');
                    $('#e1').removeClass('is-flipped');
                    $('#e6').removeClass('is-flipped');
                    $('#e7').removeClass('is-flipped');
                    $('#e8').removeClass('is-flipped');
                    $('#e9').removeClass('is-flipped');
                    $('#e10').removeClass('is-flipped');
                    $('#e11').removeClass('is-flipped');
                    $('#e12').removeClass('is-flipped');
                });
                $('#e6').click(function() {		        
                    $('#e2').removeClass('is-flipped');
                    $('#e3').removeClass('is-flipped');
                    $('#e4').removeClass('is-flipped');
                    $('#e5').removeClass('is-flipped');
                    $('#e1').removeClass('is-flipped');
                    $('#e7').removeClass('is-flipped');
                    $('#e8').removeClass('is-flipped');
                    $('#e9').removeClass('is-flipped');
                    $('#e10').removeClass('is-flipped');
                    $('#e11').removeClass('is-flipped');
                    $('#e12').removeClass('is-flipped');
                });
                $('#e7').click(function() {		        
                    $('#e2').removeClass('is-flipped');
                    $('#e3').removeClass('is-flipped');
                    $('#e4').removeClass('is-flipped');
                    $('#e5').removeClass('is-flipped');
                    $('#e6').removeClass('is-flipped');
                    $('#e1').removeClass('is-flipped');
                    $('#e8').removeClass('is-flipped');
                    $('#e9').removeClass('is-flipped');
                    $('#e10').removeClass('is-flipped');
                    $('#e11').removeClass('is-flipped');
                    $('#e12').removeClass('is-flipped');
                });
                $('#e8').click(function() {		        
                    $('#e2').removeClass('is-flipped');
                    $('#e3').removeClass('is-flipped');
                    $('#e4').removeClass('is-flipped');
                    $('#e5').removeClass('is-flipped');
                    $('#e6').removeClass('is-flipped');
                    $('#e7').removeClass('is-flipped');
                    $('#e1').removeClass('is-flipped');
                    $('#e9').removeClass('is-flipped');
                    $('#e10').removeClass('is-flipped');
                    $('#e11').removeClass('is-flipped');
                    $('#e12').removeClass('is-flipped');
                });
                $('#e9').click(function() {		        
                    $('#e2').removeClass('is-flipped');
                    $('#e3').removeClass('is-flipped');
                    $('#e4').removeClass('is-flipped');
                    $('#e5').removeClass('is-flipped');
                    $('#e6').removeClass('is-flipped');
                    $('#e7').removeClass('is-flipped');
                    $('#e8').removeClass('is-flipped');
                    $('#e1').removeClass('is-flipped');
                    $('#e10').removeClass('is-flipped');
                    $('#e11').removeClass('is-flipped');
                    $('#e12').removeClass('is-flipped');
                });
                $('#e10').click(function() {		        
                    $('#e2').removeClass('is-flipped');
                    $('#e3').removeClass('is-flipped');
                    $('#e4').removeClass('is-flipped');
                    $('#e5').removeClass('is-flipped');
                    $('#e6').removeClass('is-flipped');
                    $('#e7').removeClass('is-flipped');
                    $('#e8').removeClass('is-flipped');
                    $('#e9').removeClass('is-flipped');
                    $('#e1').removeClass('is-flipped');
                    $('#e11').removeClass('is-flipped');
                    $('#e12').removeClass('is-flipped');
                });
                $('#e11').click(function() {		        
                    $('#e2').removeClass('is-flipped');
                    $('#e3').removeClass('is-flipped');
                    $('#e4').removeClass('is-flipped');
                    $('#e5').removeClass('is-flipped');
                    $('#e6').removeClass('is-flipped');
                    $('#e7').removeClass('is-flipped');
                    $('#e8').removeClass('is-flipped');
                    $('#e9').removeClass('is-flipped');
                    $('#e10').removeClass('is-flipped');
                    $('#e1').removeClass('is-flipped');
                    $('#e12').removeClass('is-flipped');
                });
                $('#e12').click(function() {		        
                    $('#e2').removeClass('is-flipped');
                    $('#e3').removeClass('is-flipped');
                    $('#e4').removeClass('is-flipped');
                    $('#e5').removeClass('is-flipped');
                    $('#e6').removeClass('is-flipped');
                    $('#e7').removeClass('is-flipped');
                    $('#e8').removeClass('is-flipped');
                    $('#e9').removeClass('is-flipped');
                    $('#e10').removeClass('is-flipped');
                    $('#e11').removeClass('is-flipped');
                    $('#e1').removeClass('is-flipped');
                });


});


function play(id) {
    const audioElement = document.getElementById(id);
	
	resetAll();

    if (audioElement.paused) {
        audioElement.play();
    }
}

function resetAll() {
	const audioElements = document.querySelectorAll('audio[id^="sound-"]');
	
	audioElements.forEach(audioElement => {
		audioElement.pause();
		audioElement.currentTime = 0;
	});
}