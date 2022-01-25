$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"용기" },
    headers:{Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161"}
  })
    .done(function( msg ) {


    

         // 1

        $(".inter_list>li:nth-of-type(1)>.in_imgbox").append("<img src='"+msg.documents[0].thumbnail+"'/>"); 
        $(".inter_list>li:nth-of-type(1)>.in_con1").append("<h4>"+msg.documents[0].title+"</h4>");
          $(".inter_list>li:nth-of-type(1)>.in_con1").append("<h6>"+msg.documents[0].authors+"</h6>");


         var str=msg.documents[0].contents;
        var str2=str.substring(0,100);

        $(".inter_list>li:nth-of-type(1)>.in_con2").append("<p>"+str2+"</p>");


      // 2

        $(".inter_list>li:nth-of-type(2)>.in_imgbox").append("<img src='"+msg.documents[1].thumbnail+"'/>"); 
        $(".inter_list>li:nth-of-type(2)>.in_con1").append("<h4>"+msg.documents[1].title+"</h4>");
          $(".inter_list>li:nth-of-type(2)>.in_con1").append("<h6>"+msg.documents[1].authors+"</h6>");


         var str=msg.documents[1].contents;
        var str2=str.substring(0,100);

        $(".inter_list>li:nth-of-type(2)>.in_con2").append("<p>"+str2+"</p>");


      // 3

        $(".inter_list>li:nth-of-type(3)>.in_imgbox").append("<img src='"+msg.documents[2].thumbnail+"'/>"); 
        $(".inter_list>li:nth-of-type(3)>.in_con1").append("<h4>"+msg.documents[2].title+"</h4>");
          $(".inter_list>li:nth-of-type(3)>.in_con1").append("<h6>"+msg.documents[2].authors+"</h6>");

         var str=msg.documents[2].contents;
        var str2=str.substring(0,100);

        $(".inter_list>li:nth-of-type(3)>.in_con2").append("<p>"+str2+"</p>");



      // 4

        $(".inter_list>li:nth-of-type(4)>.in_imgbox").append("<img src='"+msg.documents[3].thumbnail+"'/>"); 
        $(".inter_list>li:nth-of-type(4)>.in_con1").append("<h4>"+msg.documents[3].title+"</h4>");
          $(".inter_list>li:nth-of-type(4)>.in_con1").append("<h6>"+msg.documents[3].authors+"</h6>");


         var str=msg.documents[3].contents;
        var str2=str.substring(0,100);

        $(".inter_list>li:nth-of-type(4)>.in_con2").append("<p>"+str2+"</p>");
     
     
     
       // 5

        $(".inter_list>li:nth-of-type(5)>.in_imgbox").append("<img src='"+msg.documents[4].thumbnail+"'/>"); 
        $(".inter_list>li:nth-of-type(5)>.in_con1").append("<h4>"+msg.documents[4].title+"</h4>");
          $(".inter_list>li:nth-of-type(5)>.in_con1").append("<h6>"+msg.documents[4].authors+"</h6>");


         var str=msg.documents[4].contents;
        var str2=str.substring(0,100);

        $(".inter_list>li:nth-of-type(5)>.in_con2").append("<p>"+str2+"</p>");


     
     });