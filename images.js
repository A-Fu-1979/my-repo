// 定義圖片路徑、ID和alt屬性的陣列
        const images = [
            {src: "https://raw.githubusercontent.com/A-Fu-1979/774images/main/空位Aslot.png", class: "Aslot", alt: "空位"},

            {src: "https://raw.githubusercontent.com/A-Fu-1979/774images/main/四皇-呂布LuBu.png", class: "LuBu", alt: "呂布"},

            {src: "https://raw.githubusercontent.com/A-Fu-1979/774images/main/七騎士-凡妮莎Vanessa.png", class: "Vanessa", alt: "凡妮莎"},
            {src: "https://raw.githubusercontent.com/A-Fu-1979/774images/main/七騎士-雷伊潔兒Rachel.png", class: "Rachel", alt: "雷伊潔兒"},

            {src: "https://raw.githubusercontent.com/A-Fu-1979/774images/main/舊四皇-凱爾Kyle.png", class: "Kyle", alt: "凱爾"},

            {src: "https://raw.githubusercontent.com/A-Fu-1979/774images/main/全知讀者視角-金獨子DokjaKim.png", class: "DokjaKim", alt: "金獨子"},
            {src: "https://raw.githubusercontent.com/A-Fu-1979/774images/main/拳皇'98-草薙京KyoKusanagi.png", class: "KyoKusanagi", alt: "草薙京"},
            {src: "https://raw.githubusercontent.com/A-Fu-1979/774images/main/七騎士-亞依林Eileene.png", class: "Eileene", alt: "亞依琳"},

            {src: "https://raw.githubusercontent.com/A-Fu-1979/774images/main/劍尊歸來-青明Cheongmyeong.png", class: "Cheongmyeong", alt: "青明"},
            {src: "https://raw.githubusercontent.com/A-Fu-1979/774images/main/七騎士-戴倫斯Dellons.png", class: "Dellons", alt: "戴倫斯"},

            {src: "https://raw.githubusercontent.com/A-Fu-1979/774images/main/四皇-孫悟空SunWukong.png", class: "SunWukong", alt: "孫悟空"},

            {src: "https://raw.githubusercontent.com/A-Fu-1979/774images/main/舊四皇-妍熙Yeonhee.png", class: "Yeonhee", alt: "妍熙"},

            {src: "https://raw.githubusercontent.com/A-Fu-1979/774images/main/舊四皇-太烏Teo.png", class: "Teo", alt: "太烏"},

            {src: "https://raw.githubusercontent.com/A-Fu-1979/774images/main/舊四皇-卡爾瑪Karma.png", class: "Karma", alt: "卡爾瑪"},

            {src: "https://raw.githubusercontent.com/A-Fu-1979/774images/main/平行世界的英雄們-萊娜Lene.png", class: "Lene", alt: "萊娜"},
            {src: "https://raw.githubusercontent.com/A-Fu-1979/774images/main/隱藏的大師-英格麗德Ingrid.png", class: "Ingrid", alt: "英格麗德"},
            {src: "https://raw.githubusercontent.com/A-Fu-1979/774images/main/三國豪傑-小喬XiaoQiao.png", class: "XiaoQiao", alt: "小喬"},

            {src: "https://raw.githubusercontent.com/A-Fu-1979/774images/main/無盡的城牆-索伊Soi.png", class: "Soi", alt: "索伊"},
            {src: "https://raw.githubusercontent.com/A-Fu-1979/774images/main/隱藏的大師-項羽XiangYu.png", class: "XiangYu", alt: "項羽"},
            {src: "https://raw.githubusercontent.com/A-Fu-1979/774images/main/拳皇'98-不知火舞MaiShiranui.png", class: "MaiShiranui", alt: "不知火舞"},

            {src: "https://raw.githubusercontent.com/A-Fu-1979/774images/main/夏日慶典-賽茵(泳裝)Shane(Swimsuit).png", class: "Shane-Swimsuit", alt: "賽茵(泳裝)"},
        // 出血
            {src: "https://raw.githubusercontent.com/A-Fu-1979/774images/main/伊凡的同伴們-斯尼波Snipper.png", class: "Snipper", alt: "斯尼波"},
            {src: "https://raw.githubusercontent.com/A-Fu-1979/774images/main/仙人峰-拳豪Kwonho.png", class: "Kwonho", alt: "拳豪"},
            {src: "https://raw.githubusercontent.com/A-Fu-1979/774images/main/影團-黑玫瑰BlackRose.png", class: "BlackRose", alt: "黑玫瑰"},
            {src: "https://raw.githubusercontent.com/A-Fu-1979/774images/main/公會的首長們-奧勒卡Orkah.png", class: "Orkah", alt: "奧勒卡"},
            {src: "https://raw.githubusercontent.com/A-Fu-1979/774images/main/劍尊歸來-趙傑Jogeol.png", class: "Jogeol", alt: "趙傑"},

        ];

        // 遍歷陣列並設置圖片的src和alt
        images.forEach(image => {
            const imgElements = document.querySelectorAll(`img.${image.class}`);
            imgElements.forEach(imgElement => {
                imgElement.src = image.src;
                imgElement.alt = image.alt;
            });
        });
