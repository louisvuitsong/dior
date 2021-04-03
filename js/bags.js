$(function(){

    $.ajax({
        url:'../data/data.json',
        success:function(data){
            
            var title, imgSrc, detail, tagList='';
            
            data.bagMain.forEach(function(value,key){

                title = value.title;
                imgSrc = value.imgSrc;
                detail = value.detail;
                
                tagList += "<figure>";
                tagList +=    "<h2>"+ title +"</h2>";
                tagList +=    "<p><img src="+ imgSrc +"></p>";
                tagList +=    "<figcaption>"+ detail +"</figcaption>";
                tagList += "</figure>";

                $('.bags').html(tagList);
            });
            
            var handTitle, handImgSrc, handDetail, handPrice, handQrImgSrc, handAlt, handTagList ='';
            data.handBags.forEach(function(value,key){

                handTitle = value.title;
                handImgSrc = value.imgSrc;
                handDetail = value.detail;
                handPrice = value.price;
                handQrImgSrc = value.qrImgSrc;
                handAlt = value.alt;

                handTagList += "<figure>";
                handTagList +=      "<p><img src=" + handImgSrc + " alt="+ handAlt +"></p>";
                handTagList +=      "<figcaption>";
                handTagList +=          "<strong>" + handTitle + "</strong>";
                handTagList +=          "<p>" + handDetail + "</p>";
                handTagList +=          "<p>" + handPrice + "</p>";
                handTagList +=      "</figcaption>";
                handTagList +=      "<p>";
                handTagList +=          "<img src=" + handQrImgSrc + ">";
                handTagList +=      "</p>";
                handTagList += "</figure>";

                $('.handbags > .product').html(handTagList);
            });
            
            var toteTitle, toteImgSrc, toteDetail, totePrice, toteQrImgSrc, toteAlt, toteTagList ='';
            data.toteBags.forEach(function(value,key){

                toteTitle = value.title;
                toteImgSrc = value.imgSrc;
                toteDetail = value.detail;
                totePrice = value.price;
                toteQrImgSrc = value.qrImgSrc;
                toteAlt = value.alt;

                toteTagList += "<figure>";
                toteTagList +=      "<p><img src=" + toteImgSrc + " alt="+ toteAlt +"></p>";
                toteTagList +=      "<figcaption>";
                toteTagList +=          "<strong>" + toteTitle + "</strong>";
                toteTagList +=          "<p>" + toteDetail + "</p>";
                toteTagList +=          "<p>" + totePrice + "</p>";
                toteTagList +=      "</figcaption>";
                toteTagList +=      "<p>";
                toteTagList +=          "<img src=" + toteQrImgSrc + ">";
                toteTagList +=      "</p>";
                toteTagList += "</figure>";

                $('.totebags > .product').html(toteTagList);
            });

            var miniTitle, miniImgSrc, miniDetail, miniPrice, miniQrImgSrc, miniAlt, miniTagList ='';
            data.miniBags.forEach(function(value,key){

                miniTitle = value.title;
                miniImgSrc = value.imgSrc;
                miniDetail = value.detail;
                miniPrice = value.price;
                miniQrImgSrc = value.qrImgSrc;
                miniAlt = value.alt;

                miniTagList += "<figure>";
                miniTagList +=      "<p><img src=" + miniImgSrc + " alt="+ miniAlt +"></p>";
                miniTagList +=      "<figcaption>";
                miniTagList +=          "<strong>" + miniTitle + "</strong>";
                miniTagList +=          "<p>" + miniDetail + "</p>";
                miniTagList +=          "<p>" + miniPrice + "</p>";
                miniTagList +=      "</figcaption>";
                miniTagList +=      "<p>";
                miniTagList +=          "<img src=" + miniQrImgSrc + ">";
                miniTagList +=      "</p>";
                miniTagList += "</figure>";

                $('.minibags > .product').html(miniTagList);
            });

            $.ajax({
                url:'data/bagsdetail.json',
                success:function(db){

                    var detailImg1, detailImg2, detailImg3, state;
                    var proTitle, proMade, proNum, proPrice, proExp;
                    var li1, li2, li3, li4, li5, li6, li7, li8;

                    //product-detail popUp
                    $('.product figure').on('click',function(){
                        if(state == 'drag') return false;
                        console.log('ad')
                        var idx = $(this).index();
                        detailImg1 = db.toteDetail[idx].detailImg1;
                        detailImg2 = db.toteDetail[idx].detailImg2;
                        detailImg3 = db.toteDetail[idx].detailImg3;
                        proTitle   = db.toteDetail[idx].proTitle;
                        proMade    = db.toteDetail[idx].proMade;
                        proNum     = db.toteDetail[idx].proNum;
                        proPrice   = db.toteDetail[idx].proPrice;
                        proExp     = db.toteDetail[idx].proExp;

                        li1        = db.toteDetail[idx].li1;
                        li2        = db.toteDetail[idx].li2;
                        li3        = db.toteDetail[idx].li3;
                        li4        = db.toteDetail[idx].li4;
                        li5        = db.toteDetail[idx].li5;
                        li6        = db.toteDetail[idx].li6;
                        li7        = db.toteDetail[idx].li7;
                        li8        = db.toteDetail[idx].li8;


                        $('.pop-imgs p img').attr('src',detailImg1);
                        $('.pop-imgs div img:first').attr('src',detailImg2);
                        $('.pop-imgs div img:last').attr('src',detailImg3);
                        $('.pop-detail > div p').eq(0).text(proTitle);
                        $('.pop-detail > div p').eq(1).text(proMade);
                        $('.pop-detail > div p').eq(2).text(proNum);
                        $('.pop-detail > div p').eq(3).text(proPrice);
                        $('.pop-detail article p').text(proExp);

                        $('.pop-detail article ul li').eq(0).text(li1);
                        $('.pop-detail article ul li').eq(1).text(li2);
                        $('.pop-detail article ul li').eq(2).text(li3);
                        $('.pop-detail article ul li').eq(3).text(li4);
                        $('.pop-detail article ul li').eq(4).text(li5);
                        $('.pop-detail article ul li').eq(5).text(li6);
                        $('.pop-detail article ul li').eq(6).text(li7);
                        $('.pop-detail article ul li').eq(7).text(li8);

                        $('.product-pop').addClass('active');
                    });


                     //product slide
                    $('.product').draggable({
                        axis:'x',
                        start:function(){},
                        drag:function(){},
                        stop:function(){
                            state = 'drag';
                            setTimeout(function(){ state = ''; },50);
                        }
                    });
                }
            });
            }
        });

        $('.product-pop .pop-trigger').on('click',function(){
            $('.product-pop').removeClass('active');
        });

});