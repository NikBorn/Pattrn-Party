$('.accord-tabs-container').on('click', '.accord-tab', function () {
  if (!$(this).attr('class').includes('selected')) {
    $(this).siblings().removeClass('accord-tab-selected')
    let idNumber = this.id.replace('acTab', '')
    let main = $(`#acMain${idNumber}`)
    main.toggleClass(`display-none`)
    main.siblings().addClass('display-none')

    // .attr('id').includes(`acMain${idNumber}`)
    console.log(main)
    $(this).toggleClass('accord-tab-selected')
  } 
})