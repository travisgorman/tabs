

var data = {
    samuel: {
      title: 'Say \'what\' again!',
      body: 'Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that\'s what you see at a toy store. And you must think you\'re in a toy store, because you\'re here shopping for an infant named Jeb.'
    },
    donald: {
      title: 'Make it great!',
      body:  'My text is long and beautiful, as, it has been well documented, are various other parts of my website. Lorem Ipsum is unattractive, both inside and out. I fully understand why it’s former users left it for something else. They made a good decision. Lorem Ispum is a choke artist. It chokes! Look at that text! Would anyone use that? Can you imagine that, the text of your next webpage?! I think the only difference between me and the other placeholder text is that I’m more honest and my words are more beautiful. You could see there was text coming out of her eyes, text coming out of her wherever.'

    },
    barack: {
      title: 'Yes we can!',
      body: 'She was born in a town on the other side of the world, in Kansas. A common dream, born of two continents. In the end, that\'s what this election is about. They want a sense of purpose, a narrative arc to their lives. It is based upon cultural and historical ties, and the recognition that the aspiration for a Jewish homeland is rooted in a tragic history that cannot be denied. This truth transcends nations and peoples - a belief that isn\'t new; that isn\'t black or white or brown; that isn\'t Christian, or Muslim or Jew.'
    }
};

// define the `content` area in the html
// var content = document.querySelector('#content');


// `addEventListener` listens for a `'click'` event,
// and takes a function argument (a click handler?)

// declare a variable that sets the location.hash to the data object property
// and calls a render function to put the text where you want it

var content = document.querySelector('#content');

window.addEventListener( 'hashchange', function(){
  var dataToRender = location.hash.slice(1);
  pageRender(dataToRender);
});

// the click handler

function pageRender(content){
  document.querySelector('#content h1').textContent = data[content].title;
  document.querySelector('#content article').textContent = data[content].body;
}

pageRender('Barack');

var $links = $('a');
console.log( $links );


links.forEach( function( link ){
  link.addEventHandler('click', function(evt){
    link.classList.remove('active');
  });

})