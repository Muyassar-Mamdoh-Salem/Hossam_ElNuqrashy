const swiper = new Swiper('.swiper', {
  //...
  pagination: {
    //...
    renderProgressbar: function (progressbarFillClass) {
      return '<span class="' + progressbarFillClass + '"></span>';
    },
  },
});