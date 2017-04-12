$().ready(() => {

let bozos = $('canvas');
for(let i = 0; i < bozos.length; i++){
  let canvas = bozos[i];
  let thisSRC = $(bozos[i]).attr('data-url');
  let ctx=canvas.getContext("2d");

    img=new Image();
    img.onload=function(){
        ctx.drawImage(img,0,0,img.width,img.height,0,0,300,300);
    }
    img.src=thisSRC;

}

})
