      let timer = {};
      let index = 0;

      pictures = new Array()
      pictures[0] = 'assets/images/window1.jpg';
      pictures[1] = 'assets/images/window2.jpg';
      pictures[2] = 'assets/images/window3.jpg';
      pictures[3] = 'assets/images/window4.jpg';
      pictures[4] = 'assets/images/window5.jpg';
      pictures[5] = 'assets/images/window6.jpg';
      pictures[6] = 'assets/images/window7.jpg';
      pictures[7] = 'assets/images/window8.jpg';

      function startTrombi() {
          if (index > pictures.length -1 ) {
            index = 0;
          }
          changerImage(index);
          index++;
          timer = window.setTimeout(startTrombi, 2000);
      }

      function stopTrombi() {
        clearTimeout(timer);
      }

      document.querySelector('.box').addEventListener('mouseenter', function () {
        stopTrombi();
      })

      document.querySelector('.box').addEventListener('mouseout', function () {
        startTrombi();
      })

      let keepgoing = true;

function changerImage(indice) {
      imageVisible = '<img border="0" src="'+pictures[indice]+'" width="500px">';
      document.querySelector('.box').innerHTML = imageVisible;
      }
      