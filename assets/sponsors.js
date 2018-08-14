list = document.querySelectorAll( '#sponsors li' );
item = list[ Math.floor( Math.random() * list.length ) ];
if ( ! item ) {
	item = list[0];
}//end if
item.className += ' visible';

setInterval( function() {

	current = document.querySelector( '#sponsors .visible' );
	next = current.nextElementSibling;
	if ( ! next ) {
		next = document.querySelector( '#sponsors li' );
	}//end if

	current.className = current.className.replace( 'visible', 'hiding' ).trim();
	setTimeout( function() {
		current.className = current.className.replace( 'hiding', '' ).trim();
	}, 800 );

	setTimeout( function() {
		next.className += ' visible';
	}, 100 );

}, 10000 );
