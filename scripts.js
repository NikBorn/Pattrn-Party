$('.accord-tabs-container').on('click', '.accord-tab', function () {
  if (!$(this).attr('class').includes('selected')) {
    let sibs = $(this).siblings().removeClass('accord-tab-selected')
    console.log(sibs)
    $(this).toggleClass('accord-tab-selected')
  } else {
  }
})