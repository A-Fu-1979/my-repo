// 定義圖片路徑、ID和alt屬性的陣列
const images = [
            {src: "https://truth.bahamut.com.tw/s01/202311/b5d51f20e6d4a5bd82bd04aedffd1e26.PNG", id: "AMP-DMG-01", alt: "AMP-DMG呂布-受傷30%"},
            {src: "https://truth.bahamut.com.tw/s01/202405/28e99c7b262bdc3d31cc6e7eb6c6c6ee.PNG", id: "Crti-rate02", alt: "Crti-rate-02凡妮莎-暴率24%"},
            {src: "https://truth.bahamut.com.tw/s01/202311/49d9bbd484f05cb517c7b24c177fd527.PNG", id: "Crti-rate01", alt: "Crti-rate-01雷伊潔兒-暴率20%"},
            {src: "https://truth.bahamut.com.tw/s01/202403/8b7ac85530b8374c74319f06cc70f99b.PNG", id: "Dec-Crit-rate-Resis01", alt: "Dec-Crit-rate-Resis01凱爾-降抗暴24%"},
            {src: "https://truth.bahamut.com.tw/s01/202403/4351bb5eefdc54d44ad6505cecc3c024.PNG", id: "img5", alt: "5金獨子-終攻20%"},
            {src: "https://truth.bahamut.com.tw/s01/202405/6eafb93df6e848b35d32a7d00ab74989.PNG", id: "img6", alt: "6草薙京-終攻20%"},
            {src: "https://truth.bahamut.com.tw/s01/202311/f8ceb8148751d06f409af2373dbba36a.PNG", id: "img7", alt: "7亞依琳-終攻20%"},
            {src: "https://truth.bahamut.com.tw/s01/202403/d3f4f9dac483c03d60225723ed62490a.PNG", id: "img8", alt: "8青明-終暴傷20%"},
            {src: "https://truth.bahamut.com.tw/s01/202311/88bc7bf80bdc432fd5e812be8eb114d8.PNG", id: "img9", alt: "9戴倫斯-終暴傷20%"},
    {src: "image10.jpg", id: "img10", alt: "圖片10"},
    {src: "image11.jpg", id: "img11", alt: "圖片11"},
    {src: "image12.jpg", id: "img12", alt: "圖片12"},
    {src: "image13.jpg", id: "img13", alt: "圖片13"},
    {src: "image14.jpg", id: "img14", alt: "圖片14"},
    {src: "image15.jpg", id: "img15", alt: "圖片15"}
];

// 遍歷陣列並設置圖片的src和alt
images.forEach(image => {
    const imgElement = document.getElementById(image.id);
    if (imgElement) {
        imgElement.src = image.src;
        imgElement.alt = image.alt;
    }
});
