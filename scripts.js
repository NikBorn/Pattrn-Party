
$('.main-content-container').on('click', '.accordion', function () {
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    }
  }
})














// $('.accord-tabs-container').on('click', '.accord-tab', function () {
//   if (!$(this).attr('class').includes('selected')) {
//     $(this).siblings().removeClass('accord-tab-selected')
//     let idNumber = this.id.replace('acTab', '')
//     let main = $(`#acMain${idNumber}`)
//     main.toggleClass(`display-none`)
//     main.siblings().addClass('display-none')

//     // .attr('id').includes(`acMain${idNumber}`)
//     console.log(main)
//     $(this).toggleClass('accord-tab-selected')
//   } 
// })

