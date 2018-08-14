params = document.location.search;

twitter = params.replace( /.*twitter=([a-z]+).*/, '$1' );
if ( 'hashtag' !== twitter && 'profile' !== twitter ) {
	twitter = 'profile';
}//end if

el = document.querySelector( '#twitter' );
if ( 'hashtag' === twitter ) {

	/**
	 * <iframe frameborder="0" style="width:calc(100% + 4.8em);height:120%;margin-left:-2.4em;margin-top:-4em;" src="http://wcbcn.tweetwally.com/embed" target="_blank" align="center" scrolling="Auto"></iframe>
	 */

	el.innerHTML = '<iframe frameborder="0" style="width:calc(100% + 4.8em);height:120%;margin-left:-2.4em;margin-top:-4em;" src="http://wcbcn.tweetwally.com/embed" target="_blank" align="center" scrolling="Auto"></iframe>';

} else {

	/**
	 * <a class="twitter-timeline" href="https://twitter.com/WCBCN?ref_src=twsrc%5Etfw"></a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
	 */

	el.innerHTML = '<a class="twitter-timeline" href="https://twitter.com/WCBCN?ref_src=twsrc%5Etfw"></a>';
	script = document.createElement( 'script' );
	script.setAttribute( 'src', 'https://platform.twitter.com/widgets.js' );
	script.setAttribute( 'charset', 'utf-8' );
	document.body.appendChild( script );

}//end if
