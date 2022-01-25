$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"소설",size:50 },
    headers:{Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161"}
  })
  .done(function( msg ) {

        var boxs = document.getElementsByClassName('pabook1');

        for(var i=0; i<boxs.length; i++){

          $(".pabook1>.paimg").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");

          var str3=msg.documents[i].title;
          var str4=str3.substring(0,10);
          $(".pabook1").eq(i).append("<h5>"+str4+"</h5>");

            
          var str1=msg.documents[i].sale_price.toLocaleString()
           var str2=parseInt(msg.documents[i].price/100)
          
          $(".pabook1").eq(i).append("<p>"+str1+"원</p>");
          $(".pabook1").eq(i).append("<h6>+"+str2+"P</h6>");

    }
});


$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"유아",size:50 },
    headers:{Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161"}
  })
  .done(function( msg ) {

        var boxs = document.getElementsByClassName('pabook2');

        for(var i=0; i<boxs.length; i++){

          $(".pabook2>.paimg").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");

          var str3=msg.documents[i].title;
          var str4=str3.substring(0,10);
          $(".pabook2").eq(i).append("<h5>"+str4+"</h5>");

            
          var str1=msg.documents[i].sale_price.toLocaleString()
           var str2=parseInt(msg.documents[i].price/100)
          
          $(".pabook2").eq(i).append("<p>"+str1+"원</p>");
          $(".pabook2").eq(i).append("<h6>+"+str2+"P</h6>");

    }
});


$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"경제",size:50 },
    headers:{Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161"}
  })
  .done(function( msg ) {

        var boxs = document.getElementsByClassName('pabook3');

        for(var i=0; i<boxs.length; i++){

          $(".pabook3>.paimg").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");

          var str3=msg.documents[i].title;
          var str4=str3.substring(0,10);
          $(".pabook3").eq(i).append("<h5>"+str4+"</h5>");

            
          var str1=msg.documents[i].sale_price.toLocaleString()
           var str2=parseInt(msg.documents[i].price/100)
          
          $(".pabook3").eq(i).append("<p>"+str1+"원</p>");
          $(".pabook3").eq(i).append("<h6>+"+str2+"P</h6>");

    }
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"영어",size:50 },
    headers:{Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161"}
  })
  .done(function( msg ) {

        var boxs = document.getElementsByClassName('pabook4');

        for(var i=0; i<boxs.length; i++){

          $(".pabook4>.paimg").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");

          var str3=msg.documents[i].title;
          var str4=str3.substring(0,10);
          $(".pabook4").eq(i).append("<h5>"+str4+"</h5>");

            
          var str1=msg.documents[i].sale_price.toLocaleString()
           var str2=parseInt(msg.documents[i].price/100)
          
          $(".pabook4").eq(i).append("<p>"+str1+"원</p>");
          $(".pabook4").eq(i).append("<h6>+"+str2+"P</h6>");

    }
});


$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"서양",size:50 },
    headers:{Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161"}
  })
  .done(function( msg ) {

        var boxs = document.getElementsByClassName('pabook5');

        for(var i=0; i<boxs.length; i++){

          $(".pabook5>.paimg").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");

          var str3=msg.documents[i].title;
          var str4=str3.substring(0,10);
          $(".pabook5").eq(i).append("<h5>"+str4+"</h5>");

            
          var str1=msg.documents[i].sale_price.toLocaleString()
           var str2=parseInt(msg.documents[i].price/100)
          
          $(".pabook5").eq(i).append("<p>"+str1+"원</p>");
          $(".pabook5").eq(i).append("<h6>+"+str2+"P</h6>");

    }
});


$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"반지의 제왕",size:50 },
    headers:{Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161"}
  })
  .done(function( msg ) {

        var boxs = document.getElementsByClassName('pabook6');

        for(var i=0; i<boxs.length; i++){

          $(".pabook6>.paimg").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");

          var str3=msg.documents[i].title;
          var str4=str3.substring(0,10);
          $(".pabook6").eq(i).append("<h5>"+str4+"</h5>");

            
          var str1=msg.documents[i].sale_price.toLocaleString()
           var str2=parseInt(msg.documents[i].price/100)
          
          $(".pabook6").eq(i).append("<p>"+str1+"원</p>");
          $(".pabook6").eq(i).append("<h6>+"+str2+"P</h6>");

    }
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"역사",size:50 },
    headers:{Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161"}
  })
  .done(function( msg ) {

        var boxs = document.getElementsByClassName('pabook7');

        for(var i=0; i<boxs.length; i++){

          $(".pabook7>.paimg").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");

          var str3=msg.documents[i].title;
          var str4=str3.substring(0,10);
          $(".pabook7").eq(i).append("<h5>"+str4+"</h5>");

            
          var str1=msg.documents[i].sale_price.toLocaleString()
           var str2=parseInt(msg.documents[i].price/100)
          
          $(".pabook7").eq(i).append("<p>"+str1+"원</p>");
          $(".pabook7").eq(i).append("<h6>+"+str2+"P</h6>");

    }
});
