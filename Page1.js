window.addEventListener('load', ()=> {
    let canvas = document.getElementById("myCanvas");
    let context = canvas.getContext("2d");
    let img = new Image();
    img.src = "art.jpg"; //출처 : https://i.ytimg.com/vi/nC6PPe_IR70/maxresdefault.jpg, https://www.google.com/search?q=%EB%B6%81%ED%95%9C+%EC%9A%B0%EC%A3%BC%EB%B0%9C%EC%82%AC%EC%B2%B4+%EB%89%B4%EC%8A%A4+%EC%9D%B4%EB%AF%B8%EC%A7%80&source=lnms&tbm=isch&sa=X&ved=2ahUKEwitgenn2p__AhUNQd4KHX4rDW4Q_AUoAXoECAEQAw&biw=1536&bih=722&dpr=1.25#imgrc=ow4dmyk1ubQvFM
    img.addEventListener('load', () => {
        context.drawImage(img, 0, 0);
    });
});
