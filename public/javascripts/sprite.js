$().ready(() => {

  let user = $('.currentUser').attr('data-name');
  let commentArray = ($(`.${user}`));
  let spriteId = $('#theSprite').attr('data-id');
  for (let i = 0; i < commentArray.length; i++) {
    let commentId = $(commentArray[i]).attr('data-id');
    $(commentArray[i]).append(`<button class="delete" data-id="${commentId}">Delete Comment</button>`);
  }
  $('.delete').click(() => {
    console.log(`Clicked delete on comment ${$(event.target).attr('data-id')}`);
    $.ajax({
      method: "DELETE",
      url: `/comments/${spriteId}`,
      data: {id: $(event.target).attr('data-id')},
      success: (result) => {
        if(result){
          location.reload();
        }
      },
      error: () => {}
    })
  })
  $('.removeTag').click(() => {
    let linkId = $(event.target).attr('data-id');
    $.ajax({
      method: "DELETE",
      url: `/tags`,
      data: {id: linkId},
      success: (result) => {
        if(result){
          location.reload();
        }
      },
      error: () => {}
    })
  })
  $('#edit').click(() => {
    $('#editBox').children().remove();
    let id = $(event.target).attr('data-id');
    $('#editBox').append(`<form action="/sprite/${id}/update" method="post"><input type="text" name="name"><button type="submit">Submit</button></form>`);
  })
})
