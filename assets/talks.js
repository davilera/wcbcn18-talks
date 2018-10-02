params = document.location.search;

room = params.replace( /.*room=([a-z]+).*/, '$1' );
if ( 'sala-magna' === room || 'salamagna' === room ) {
	room = 'magna';
}//end if

if ( 'paranimf' !== room && 'magna' !== room ) {
	room = 'paranimf';
}//end if

talk = parseInt( params.replace( /.*talk=([0-9]+).*/, '$1' ) );
if ( isNaN( talk ) ) {
	talk = 0;
}//end if

console.log( room, talk );

TALKS = {
	paranimf:  [ '0 0', '-1em 0', '-2em 0', '-3em 0', '-4em 0', '0 -1em', '-1em -1em', '-2em -1em', '-3em -1em', '-4em -1em' ],
	magna: [ '0 -2em', '-1em -2em', '-2em -2em', '-3em -2em', '-4em -2em', '0 -3em', '-1em -3em', '-2em -3em', '-3em -3em', '-4em -1em' ],
};

el = document.querySelector( '#sessions .talk' );
el.style.backgroundPosition = TALKS[ room ][ talk ] || '0 0';

document.addEventListener( 'keydown', ( event ) => {

	el = document.querySelector( '#sessions .talk' );

  const keyName = event.key;
	switch ( keyName ) {
		case 'ArrowDown':
			talk = Math.min( talk + 1, TALKS[ room ].length );
			el.style.backgroundPosition = TALKS[ room ][ talk ] || '0 0';
			break;

		case 'ArrowUp':
			talk = Math.max( talk - 1, 0 );
			el.style.backgroundPosition = TALKS[ room ][ talk ] || '0 0';
			break;

		case 'ArrowLeft':
			room = 'paranimf';
			el.style.backgroundPosition = TALKS[ room ][ talk ] || '0 0';
			break;

		case 'ArrowRight':
			room = 'magna';
			el.style.backgroundPosition = TALKS[ room ][ talk ] || '0 0';
			break;
	};
	console.log( room, talk );

});
