var input;
var ritaString;
var content;

function setup() {
    noCanvas();
    input = createInput();
    input.changed(rita) // see p5 reference for 'changed'
    content = createElement('div');
    content.id('content');
}

function rita(event) {
    console.log(event.target.value);
    var str = event.target.value;
    
    ritaString = RiString(str);
    
    var words = ritaString.words();
    console.log(words);
    
    words.forEach(function(element) {
        var features = RiString(element).features();
        console.log(features);
        
        var span = createElement('span', features.text);
        
        if (features.pos === 'nn')
            span.style('background', 'olive');
        
        span.parent(content);
    });
    
}