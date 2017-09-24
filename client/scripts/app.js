// YOUR CODE HERE:

//var Freind=[];

var app={
	server:'127.0.0.1:1128',
	repos:[],


	init:function(){
		this.repos=[];
	
},
	send:function (username) {
	$.ajax({
  // This is the url you should use to communicate with the parse API server.
  url: app.server,
  type: 'POST',
  data: JSON.stringify(username),
  //?? content type
  contentType: 'application/json',
  success: function (data) {
    console.log(data);
  },
  error: function (data) {
    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
    console.error('fetcher: Failed to send username', data);
  }
});
},
	
}
