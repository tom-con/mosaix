$().ready(() => {

$('#save').click(() => {
  let id = $(event.target).attr('data-id');
  console.log(id);
  let data= {
    user_picture: $('#picture').val(),
    user_summary: $('#summary').val()
  }
  $.ajax({
    method: "PUT",
    url: `/profile/${id}/settings`,
    data: data,
    success: (result) => {
      if(result){
        window.location.replace(`/profile/${id}`);
      }
    }
  })
})

$('#delete').click(() => {
  let id = $(event.target).attr('data-id');
  console.log(id);
  let data= {
    archived_account: true,
    username: 'deleted',
    user_summary: 'This user no longer exists.'
  }
  $.ajax({
    method: "DELETE",
    url: `/profile/${id}/delete`,
    data: data,
    success: (result) => {
      if(result){
        window.location.replace(`/`);
      }
    }
  })
})


})
