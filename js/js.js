

// 側邊欄按鈕跳轉畫面---------------------------------------------------
$('.sideBtn1-click').click(function(){
    $('html,body').animate({scrollTop:$('#area1').offset().top},800);
});  
$('.sideBtn2-click').click(function(){
    $('html,body').animate({scrollTop:$('#area2').offset().top},800);
}); 
$('.sideBtn3-click').click(function(){
    $('html,body').animate({scrollTop:$('#area3').offset().top},800);
}); 
$('.sideBtn4-click').click(function(){
    $('html,body').animate({scrollTop:$('#area4').offset().top},800);
}); 


// 課程區滑動出現----------------------------------------
$(window).scroll(function () {
    console.log('scrollTop:', $(window).scrollTop());


    if ($(window).scrollTop() >= 300) {
        $('.course-mainBox').css({
            transform: 'translateY(0px)',
            opacity: 1,
        })
    }
    else{
        $('.course-mainBox').css({
            transform: 'translateY(200px)',
            opacity: 0,
        })
    }

    if ($(window).scrollTop() >= 1074) {
        $('.place-window').css({
            transform: 'translateY(0px)',
            opacity: 1,
        })
    }
    else{
        $('.place-window').css({
            transform: 'translateY(200px)',
            opacity: 0,
        })
    }

    if ($(window).scrollTop() >= 977) {
        $('.place-mainBox-M').css({
            transform: 'translateY(0px)',
            opacity: 1,
        })
    }
    else{
        $('.place-mainBox-M').css({
            transform: 'translateY(200px)',
            opacity: 0,
        })
    }

    
    if ($(window).scrollTop() >= 2150) {
        $('.fishOne').css({
            'right':'5%',
            opacity: 1,
        })
    }
    else{
        $('.fishOne').css({
            'right':'0',
            opacity: 0,
        })
    }
    if ($(window).scrollTop() >= 2585) {
        $('.fishTwo').css({
            'left':'25%',
            opacity: 1,
        })
    }
    else{
        $('.fishTwo').css({
            'left':'0',
            opacity: 0,
        })
    }

    // if ($(window).scrollTop() >= 1976) {
    //     $('.coach-mainBox').css({
    //         transform: 'translateY(0px)',
    //         opacity: 1,
    //     })
    // }
    // else{
    //     $('.coach-mainBox').css({
    //         transform: 'translateY(200px)',
    //         opacity: 0,
    //     })
    // } 
    // let areaTop2 = $('#area2').offset().top - (100)
    if (
        $(window).scrollTop() >= $('#area1').offset().top &&
        $(window).scrollTop() < $('#area2').offset().top
    ) {
        //除了被點擊到的游標，其他都恢復成原來的顏色
        $('.nav li').removeClass('active');
        $('.nav li:eq(0)').addClass('active');
    } else if (
        $(window).scrollTop() >= $('#area2').offset().top &&
        $(window).scrollTop() < $('#area3').offset().top
    ) {
        $('.nav li').removeClass('active');
        $('.nav li:eq(1)').addClass('active');
    } else if (
        $(window).scrollTop() >= $('#area3').offset().top &&
        $(window).scrollTop() < $('#area4').offset().top
    ) {
        $('.nav li').removeClass('active');
        $('.nav li:eq(2)').addClass('active');

    } else if ($(window).scrollTop() >= $('#area4').offset().top) {
        $('.nav li').removeClass('active');
        $('.nav li:eq(3)').addClass('active');
    }
})


// bugerBtn---------------------------------
$('#bugerBtn').click(function(){
    $('.bugerMenu').css('right','0')
})
$('#bugerCloseBtn').click(function(){
    $('.bugerMenu').css('right','-200px')
})



$('#Penghu').click(function(){
    $('.placeCard').animate({opacity:'.5'},200).animate({left:'4%'},300).animate({opacity:'1'},200)
    $('.Lanyu').removeClass('mapClick')
    $('.green_island').removeClass('mapClick')
    $('.xiaoliuqi').removeClass('mapClick')
    $('.Keelung').removeClass('mapClick')
    $('.Penghu').addClass('mapClick')
    setTimeout(function(){
        $('.placeCardTop .placeCardImg').attr('src','./images/place-03-1.jpeg')
        $('.pink-boxTop h1').text('澎湖')
        $('.pink-boxBotton h2').text('Penghu')
        $('.placeCardInfo p').text('誰說薰衣草只能去北海道看，澎湖的海底薰衣草更有特色！台灣就有不少浮潛的好地方，尤其是澎湖就有不少特色的海底風景你一定要親自去體驗看看！')
    },300)
    
})
$('#Lanyu').click(function(){
    $('.placeCard').animate({opacity:'.5'},200).animate({left:'4%'},300).animate({opacity:'1'},200)
    $('.Penghu').removeClass('mapClick')
    $('.green_island').removeClass('mapClick')
    $('.xiaoliuqiu').removeClass('mapClick')
    $('.Keelung').removeClass('mapClick')
    $('.Lanyu').addClass('mapClick')
    setTimeout(function(){
        $('.placeCardTop .placeCardImg').attr('src','./images/place-01-1.jpeg')
        $('.pink-boxTop h1').text('蘭嶼')
        $('.pink-boxBotton h2').text('Lanyu')
        $('.placeCardInfo p').text('蘭嶼（人之島）對於喜歡自由潛水的人來說，是個不能錯過的島嶼。在蘭嶼自由潛水除了有超高海水能見度外，豐富的海底地形也可以大大滿足自潛員們的探險慾望。而除了海底風光，蘭嶼陸地上的風情也是讓人著迷。達悟族獨特的海洋文化，讓島上不只有美景，更增添人文魅力。')
    },300)  
})
$('#green_island').click(function(){
    $('.placeCard').animate({opacity:'.5'},200).animate({left:'4%'},300).animate({opacity:'1'},200)
    $('.Penghu').removeClass('mapClick')
    $('.Lanyu').removeClass('mapClick')
    $('.xiaoliuqiu').removeClass('mapClick')
    $('.Keelung').removeClass('mapClick')
    $('.green_island').addClass('mapClick')
    setTimeout(function(){
        $('.placeCardTop .placeCardImg').attr('src','./images/place-04-1.jpeg')
        $('.pink-boxTop h1').text('綠島')
        $('.pink-boxBotton h2').text('Green&nbspIsland')
        $('.placeCardInfo p').text('有世界級潛水天堂美譽的綠島，憑藉其位處亞熱帶又為黑潮暖流必經之優越的地理位置，以獨特海底樣貌景觀及終年溫暖的海水年均溫度，孕育了豐富的海洋生態。更因天然沒汙染的環境海域，蘊藏豐富的珊瑚、魚群及世界級的水下能見度而聞名於世。')
    },300)  
})
$('#Xiaoliuqiu').click(function(){
    $('.placeCard').animate({opacity:'.5'},200).animate({left:'4%'},300).animate({opacity:'1'},200)
    $('.Penghu').removeClass('mapClick')
    $('.Lanyu').removeClass('mapClick')
    $('.green_island').removeClass('mapClick')
    $('.Keelung').removeClass('mapClick')
    $('.xiaoliuqiu').addClass('mapClick')
    setTimeout(function(){
        $('.placeCardTop .placeCardImg').attr('src','./images/place-06-1.jpeg')
        $('.pink-boxTop h1').text('小琉球')
        $('.pink-boxBotton h2').text('Xiaoliuqiu')
        $('.placeCardInfo p').text('這片海域可是綠蠵龜的棲息地，所以來小琉球潛水，時常會看到海龜在你身邊大快朵頤的吃著石頭上的藻類！杉福漁港位在小琉球西側，適合初學者練習潛水的地方呦！海底有非常特殊的珊瑚礁裂縫地形，陽光透下去的景色極漂亮。')
    },300)
    
})
$('#Keelung').click(function(){
    $('.placeCard').animate({opacity:'.5'},200).animate({left:'4%'},300).animate({opacity:'1'},200)
    $('.Penghu').removeClass('mapClick')
    $('.Lanyu').removeClass('mapClick')
    $('.green_island').removeClass('mapClick')
    $('.xiaoliuqiu').removeClass('mapClick')
    $('.Keelung').addClass('mapClick')
    setTimeout(function(){
        $('.placeCardTop .placeCardImg').attr('src','./images/place-07-1.jpeg')
        $('.pink-boxTop h1').text('基隆')
        $('.pink-boxBotton h2').text('Keelung')
        $('.placeCardInfo p').text('基隆的望海巷灣距離台北只有一小時車程，近幾年來因為規劃成保育區，當地海洋生態變得更加豐富，潛入海底能看到各種奇特生物。此外，基隆也有許多景點、咖啡廳可以欣賞海天一線的美景。')
    },300)
})

// 手機版placeSection

$('#mapBotton2').click(function(){
    $('.placeCardTop-m .placeCardImg-m').attr('src','./images/place-03-1.jpeg')
    $('.pink-boxBotton-m h1').text('澎湖')
    $('.pink-boxBotton-m h2').text('Penghu')
})
$('#mapBotton4').click(function(){
    $('.placeCardTop-m .placeCardImg-m').attr('src','./images/place-01-1.jpeg')
    $('.pink-boxBotton-m h1').text('蘭嶼')
    $('.pink-boxBotton-m h2').text('Lanyu')
})
$('#mapBotton5').click(function(){
    $('.placeCardTop-m .placeCardImg-m').attr('src','./images/place-04-1.jpeg')
    $('.pink-boxBotton-m h1').text('綠島')
    $('.pink-boxBotton-m h2').text('Green&nbspIsland')
})
$('#mapBotton3').click(function(){
    $('.placeCardTop-m .placeCardImg-m').attr('src','./images/place-06-1.jpeg')
    $('.pink-boxBotton-m h1').text('小琉球')
    $('.pink-boxBotton-m h2').text('Xiaoliuqiu')
})
$('#mapBotton1').click(function(){
    $('.placeCardTop-m .placeCardImg-m').attr('src','./images/place-07-1.jpeg')
    $('.pink-boxBotton-m h1').text('基隆')
    $('.pink-boxBotton-m h2').text('Keelung')
})
// 教練區-------------------------------------------------

$('#coachCardOne').click(function(){
    $(this).toggleClass('coachCardRotate')
})
$('#coachCardTwo').click(function(){
    $(this).toggleClass('coachCardRotate')
})
$('#coachCardThree').click(function(){
    $(this).toggleClass('coachCardRotate')
})
$('#coachCardFour').click(function(){
    $(this).toggleClass('coachCardRotate')
})

// levelDay 1-3--------------------------------------------

$('#levelOneDayOne').click(function(){
    $('.dayBtnTwo').removeClass('dayBtnClick')
    $('.dayBtnThree').removeClass('dayBtnClick')
    $('.dayInfoLogArrow').css('left', '20px')
    $('.dayBtnOne').addClass('dayBtnClick')
    $('.dayInfoLog').html('<p>08:00 學科上課 <br>11:00 靜態閉氣 <br>12:00 中餐 <br>13:30 海洋實習-動態閉氣 <br>15:30 海洋實習-鴨式潛水</p>')
})

$('#levelOneDayTwo').click(function(){
    $('.dayBtnOne').removeClass('dayBtnClick')
    $('.dayBtnThree').removeClass('dayBtnClick')
    $('.dayBtnTwo').addClass('dayBtnClick')
    $('.dayInfoLogArrow').css('left', '156px')
    $('.dayInfoLog').html('<p>08:00 海洋實習-10m拉繩<br>11:00 海洋實習-延繩下潛 <br>12:00 中餐 <br>13:30 海洋實習-徒手上升<br>15:30 海洋實習-自由下潛</p>')
})
$('#levelOneDayThree').click(function(){
    $('.dayBtnOne').removeClass('dayBtnClick')
    $('.dayBtnTwo').removeClass('dayBtnClick')
    $('.dayBtnThree').addClass('dayBtnClick')
    $('.dayInfoLogArrow').css('left', '292px')
    $('.dayInfoLog').html('<p>08:00 海洋實習-動態暖身<br>11:00 海洋實習-10m救援 <br>12:00 中餐 <br>13:30 學科考試 <br>15:30 領取證書</p>')
})

// LevelButton---------------------------------------------

$('#levelBtnOne').click(function(){
    $('.levelSection').animate({opacity:'0'}).animate({opacity:'1'},600)
    setTimeout(function(){
        $('.level-One').addClass('levelBtnClick')
        $('.level-Two').removeClass('levelBtnClick')
        $('.level-Three').removeClass('levelBtnClick')
        $('.levelSection').removeClass('levelSectionAni')
        $('.levelSection').css('background-image', 'url(./images/bg-04.png,),url(./images/person-level-01.png)')
        $('.levelSection').removeClass('levelSectionAniTwo')
        $('.levelSection').removeClass('levelSectionAniThree')
        $('.courseTitle').text('Level 1｜20m')
        $('.courseTitleInfo').text('課程中將接觸到放鬆的腹式呼吸、更有效率的全呼吸、靜態閉氣、鴨式潛水和恆定配重著蛙鞋潛到至少十米。')
        $('.courseFeeInfo').html('<p>包含教學費用、SSI國際簽證和教材。<br>不含自由潛水裝備和食宿。​<br>租用自由潛水裝備，每天NT500。</p>')

        $('.levelSection').addClass('levelSectionAni')
    
    },500)

    
})
$('#levelBtnTwo').click(function(){
    $('.levelSection').animate({opacity:'0'},).animate({opacity:'1'},600)
    setTimeout(function(){
        $('.level-Two').addClass('levelBtnClick')
        $('.level-One').removeClass('levelBtnClick')
        $('.level-Three').removeClass('levelBtnClick')
        $('.levelSection').removeClass('levelSectionAni')
        $('.levelSection').css('background-image', 'url(./images/bg-04.png,),url(./images/person-level-02.png)')
        $('.levelSection').removeClass('levelSectionAniOne')
        $('.levelSection').removeClass('levelSectionAniThree')
        $('.courseTitle').text('Level 2｜30m')
        $('.courseTitleInfo').text('更進一步的呼吸技巧、更進階的動作技巧和更深的挑戰，這是一段探索自我的無聲之旅，我們將一起到達寧靜的30米深處。')
        $('.courseFeeInfo').html('<p>包含教學費用、國際簽證和教材。<br>不含自由潛水裝備和食宿。​<br>租用自由潛水裝備，每天NT500。</p>')

        $('.levelSection').addClass('levelSectionAniTwo')
    },500)
    

})
$('#levelBtnThree').click(function(){
    $('.levelSection').animate({opacity:'0'}).animate({opacity:'1'},600)
    setTimeout(function(){
        $('.level-Three').addClass('levelBtnClick')
        $('.level-One').removeClass('levelBtnClick')
        $('.level-Two').removeClass('levelBtnClick')
        $('.levelSection').removeClass('levelSectionAni')
        $('.levelSection').css('background-image', 'url(./images/bg-04.png,),url(./images/person-level-03.png)')
        $('.levelSection').removeClass('levelSectionAniTwo')
        $('.levelSection').removeClass('levelSectionAniOne')
        $('.courseTitle').text('Level 3｜40m')
        $('.courseTitleInfo').text('​此課程是您成為第二級自由潛水教練的必要課程，負壓和滿肺的拉伸放鬆與暖身方式、口腔填充的耳壓平衡方式，下潛到至少30米的深度。')
        $('.courseFeeInfo').html('<p>包含教學費用、國際簽證和教材。<br>不含自由潛水裝備和食宿。​<br>租用自由潛水裝備，每天NT500。</p>')

        $('.levelSection').addClass('levelSectionAniThree')
    },500)

})



// LevelSection手機版--------------------------------------------


$('#levelBtnOne-m').click(function(){
    $('.levelSection').animate({opacity:'0'}).animate({opacity:'1'},600)
        $('.level-One').addClass('levelBtnClick')
        $('.level-Two').removeClass('levelBtnClick')
        $('.level-Three').removeClass('levelBtnClick')
        $('.courseTitle-m').text('Level 1｜20m')
        $('.courseTitleInfo-m').text('課程中將接觸到放鬆的腹式呼吸、更有效率的全呼吸、靜態閉氣、鴨式潛水和恆定配重著蛙鞋潛到至少十米。')
        $('.courseFeeInfo-m').html('<p>包含教學費用、SSI國際簽證和教材。<br>不含自由潛水裝備和食宿。​<br>租用自由潛水裝備，每天NT500。</p>')

    
})
$('#levelBtnTwo-m').click(function(){
    $('.levelSection').animate({opacity:'0'},).animate({opacity:'1'},600)
        $('.level-Two').addClass('levelBtnClick')
        $('.level-One').removeClass('levelBtnClick')
        $('.level-Three').removeClass('levelBtnClick')
        $('.courseTitle-m').text('Level 2｜30m')
        $('.courseTitleInfo-m').text('更進一步的呼吸技巧、更進階的動作技巧和更深的挑戰，這是一段探索自我的無聲之旅，我們將一起到達寧靜的30米深處。')
        $('.courseFeeInfo-m').html('<p>包含教學費用、國際簽證和教材。<br>不含自由潛水裝備和食宿。​<br>租用自由潛水裝備，每天NT500。</p>')

})
$('#levelBtnThree-m').click(function(){
    $('.levelSection').animate({opacity:'0'}).animate({opacity:'1'},600)
        $('.level-Three').addClass('levelBtnClick')
        $('.level-One').removeClass('levelBtnClick')
        $('.level-Two').removeClass('levelBtnClick')
        $('.courseTitle-m').text('Level 3｜40m')
        $('.courseTitleInfo-m').text('​此課程是您成為第二級自由潛水教練的必要課程，負壓和滿肺的拉伸放鬆與暖身方式、口腔填充的耳壓平衡方式，下潛到至少30米的深度。')
        $('.courseFeeInfo-m').html('<p>包含教學費用、國際簽證和教材。<br>不含自由潛水裝備和食宿。​<br>租用自由潛水裝備，每天NT500。</p>')

})
$('#levelOneDayOne-m').click(function(){
    $('.dayBtnTwo').removeClass('dayBtnClick')
    $('.dayBtnThree').removeClass('dayBtnClick')
    $('.dayInfoLogArrow').css('left', '20px')
    $('.dayBtnOne').addClass('dayBtnClick')
    $('.dayInfoLog-m').html('<p>08:00 學科上課 <br>11:00 靜態閉氣 <br>12:00 中餐 <br>13:30 海洋實習-動態閉氣 <br>15:30 海洋實習-鴨式潛水</p>')
})

$('#levelOneDayTwo-m').click(function(){
    $('.dayBtnOne').removeClass('dayBtnClick')
    $('.dayBtnThree').removeClass('dayBtnClick')
    $('.dayBtnTwo').addClass('dayBtnClick')
    $('.dayInfoLogArrow').css('left', '156px')
    $('.dayInfoLog-m').html('<p>08:00 海洋實習-10m拉繩<br>11:00 海洋實習-延繩下潛 <br>12:00 中餐 <br>13:30 海洋實習-徒手上升<br>15:30 海洋實習-自由下潛</p>')
})
$('#levelOneDayThree-m').click(function(){
    $('.dayBtnOne').removeClass('dayBtnClick')
    $('.dayBtnTwo').removeClass('dayBtnClick')
    $('.dayBtnThree').addClass('dayBtnClick')
    $('.dayInfoLogArrow').css('left', '292px')
    $('.dayInfoLog-m').html('<p>08:00 海洋實習-動態暖身<br>11:00 海洋實習-10m救援 <br>12:00 中餐 <br>13:30 學科考試 <br>15:30 領取證書</p>')
})


// turtle游動-----------------------------------------------

$(window).scroll(function () {
    console.log('area3scrollTop:', $(window).scrollTop());
    console.log('body height:',$('body').height());
    console.log('area1:' + $('#area1').height())
    console.log('area3:' + $('#area3').height())


    const denominator = $('body').height() - $(window).scrollTop()



    const percentage = $(window).scrollTop() / denominator * 100 - 50;
    const percentageTop = $(window).scrollTop() / denominator * 100 - 20;

    console.log('percentage:',percentage);

    $('.turtleBox').css('left',`${percentage}%`)
    $('.turtleBox').css('top',`${percentage}%`)

    if ($(window).scrollTop() >= 2500) {
        $('.turtleBox').css('left','0')
        $('.turtleBox').css('top','0')
    
    }
})



// 