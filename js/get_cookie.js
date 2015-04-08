 function get_cookie(){
            if (document.cookie.indexOf("visited1") >= 0) {
                  // modify the url if you want to change site
             window.location.href = 'http://mlb.mlb.com/home';

            }
          

            else if (document.cookie.indexOf("visited2") >= 0) {
                   // modify the url if you want to change site
                  window.location.href = 'http://www.soccer.com/'
            }
          

            else if (document.cookie.indexOf("visited3") >= 0) {
                   // modify the url if you want to change site
                 window.location.href = 'http://www.usfencing.org/'
            }
          

            else if (document.cookie.indexOf("visited4") >= 0) {
                  // modify the url if you want to change site
                  window.location.href = 'http://www.usaswimming.org/DesktopDefault.aspx'
            }
          }