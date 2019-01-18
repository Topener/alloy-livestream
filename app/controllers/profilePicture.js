$.wrapper.top = $.args.top;
$.picture.image = $.args.picture;
$.name.text = $.args.profilename;

function clickProfilePicture() {
    console.log('click');
    $.trigger('click', $.args);
    $.trigger('customEvent', {"message": "Hi"});
}

_.each($.args.styling, function(value, property) {
    $.wrapper[property] = value;
});