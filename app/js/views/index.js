window.onload = function() {
  var list = document.getElemntsByClassName('list')[0];
  list.addEventListener('click', function(e) {
    var target = e.target;
    if(target !== this) {
      return;
    }
    e.stopPropagation();
    e.preventDefault();
    this.style.height = '100px';
    console.log(this);
  });

}
