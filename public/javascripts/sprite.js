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
      url: `/sprite/${spriteId}`,
      data: {id: $(event.target).attr('data-id')},
      success: (result) => {
        if(result){
          location.reload();
        }
      },
      error: () => {}
    })
  })
})
