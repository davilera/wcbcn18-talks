TALKS = {
	paranimf:  [ '0 0',    '-1em 0',    '-2em 0',    '-3em 0',    '-1em -1em', '-2em -1em', '-3em -1em', '-4em 0',    '0 -1em', '-4em -1em' ],
	magna:     [ '0 -2em', '-1em -2em', '-2em -2em', '-3em -2em', '-1em -3em', '-2em -3em', '-3em -3em', '-4em -2em', '0 -3em', '-4em -1em' ],
};

function getRoomName() {

	params = document.location.search;

	room = params.replace( /.*room=([a-z]+).*/, '$1' );
	if ( 'sala-magna' === room || 'salamagna' === room ) {
		room = 'magna';
	}//end if

	if ( 'paranimf' !== room && 'magna' !== room ) {
		room = 'paranimf';
	}//end if

	return room;

}//end getRoomName()

function getTalkNumber() {

	params = document.location.search;

	talk = parseInt( params.replace( /.*talk=([0-9]+).*/, '$1' ) );
	if ( isNaN( talk ) ) {
		talk = 0;
	}//end if

	return talk;

}//end getTalkNumber()

function updateUrl( room, talk ) {

	url = document.location.href;
	url = url.replace( /\?.*$/, '' );
	url = url + '?room=' + room + '&talk=' + talk;
	history.pushState( {}, '', url );

}//end updateUrl()

function loadTalk() {

	room = getRoomName();
	talk = getTalkNumber();

	el = document.querySelector( '#sessions .talk' );
	el.style.backgroundPosition = TALKS[ room ][ talk ] || '0 0';

}//end loadTalk()

document.addEventListener( 'keydown', ( event ) => {

	el = document.querySelector( '#sessions .talk' );

	const keyName = event.key;
	switch ( keyName ) {

		case 'ArrowDown':
			updateUrl( getRoomName(), Math.min( getTalkNumber() + 1, TALKS.paranimf.length - 1 ) );
			loadTalk();
			break;

		case 'ArrowUp':
			updateUrl( getRoomName(), Math.max( getTalkNumber() - 1, 0 ) );
			loadTalk();
			break;

		case 'ArrowLeft':
			updateUrl( 'paranimf', getTalkNumber() );
			loadTalk();
			break;

		case 'ArrowRight':
			updateUrl( 'magna', getTalkNumber() );
			loadTalk();
			break;
	};

});

updateUrl( getRoomName(), getTalkNumber() );
loadTalk();
