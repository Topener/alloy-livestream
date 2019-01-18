$.title.text = $.args.title;
var callback = false
exports.setCallback = function(e){
    console.warn('set callback');

    callback = e;
}