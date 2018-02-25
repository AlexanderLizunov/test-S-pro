/**
 * Created by BogdanKootz on 10.02.17.
 */
window.fbAsyncInit = function() {
	FB.init({
		appId      : '920143051421670',
		xfbml      : true,
		version    : 'v2.8'
	});
};

(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=920143051421670";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
