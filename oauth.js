window.onload = function() {
    document.querySelector('button').addEventListener('click', function() {
      chrome.identity.getAuthToken({interactive: true}, function(token) {
        let init = {
          method: 'GET',
          async: true,
          headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json'
          },
          'contentType': 'json'
        };
        POST(
            'https://www.googleapis.com/calendar/v3/calendars/calendarId/events',
            init)
            
          
      });
    });
  };