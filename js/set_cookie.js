  /*  This function sets the cookie   */
        function set_cookies1() {
                days = 1; // number of days to keep the cookie
                myDate = new Date();
                myDate.setTime(myDate.getTime() + (days * 24 * 60 * 60 * 1000));
                document.cookie = 'cookieName=visited1; expires=' + myDate.toGMTString();
            }

        function set_cookies2() {
                days = 1; // number of days to keep the cookie
                myDate = new Date();
                myDate.setTime(myDate.getTime() + (days * 24 * 60 * 60 * 1000));
                document.cookie = 'cookieName=visited2; expires=' + myDate.toGMTString();
            }

        function set_cookies3() {
                days = 1; // number of days to keep the cookie
                myDate = new Date();
                myDate.setTime(myDate.getTime() + (days * 24 * 60 * 60 * 1000));
                document.cookie = 'cookieName=visited3; expires=' + myDate.toGMTString();
            }

        function set_cookies4() {
                days = 1; // number of days to keep the cookie
                myDate = new Date();
                myDate.setTime(myDate.getTime() + (days * 24 * 60 * 60 * 1000));
                document.cookie = 'cookieName=visited4; expires=' + myDate.toGMTString();
            }
            /*  end of cookie function  */