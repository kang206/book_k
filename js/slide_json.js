$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"블랙" },
    headers:{Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161"}
  })
    .done(function( msg ) {




         // 1

        $("#slidebox>.slbook:nth-of-type(1)").append("<img src='"+msg.documents[0].thumbnail+"'/>");
         
         var str3=msg.documents[0].title;
        var str4=str3.substring(0,10);

     
        $("#slidebox>.slbook:nth-of-type(1)").append("<h4>"+str4+"</h4>");

         var str=msg.documents[0].contents;
        var str2=str.substring(0,25);

        $("#slidebox>.slbook:nth-of-type(1)").append("<p>"+str2+"</p>");





      // 2

        $("#slidebox>.slbook:nth-of-type(2)").append("<img src='"+msg.documents[1].thumbnail+"'/>");
     
          var str3=msg.documents[1].title;
        var str4=str3.substring(0,10);

        $("#slidebox>.slbook:nth-of-type(2)").append("<h4>"+str4+"</h4>");

        var str=msg.documents[1].contents;
        var str2=str.substring(0,25);

        $("#slidebox>.slbook:nth-of-type(2)").append("<p>"+str2+"</p>");






      // 3

        $("#slidebox>.slbook:nth-of-type(3)").append("<img src='"+msg.documents[2].thumbnail+"'/>");
         var str3=msg.documents[2].title;
        var str4=str3.substring(0,10);

        $("#slidebox>.slbook:nth-of-type(3)").append("<h4>"+str4+"</h4>");

        var str=msg.documents[2].contents;
        var str2=str.substring(0,25);

        $("#slidebox>.slbook:nth-of-type(3)").append("<p>"+str2+"</p>");



      // 4

        $("#slidebox>.slbook:nth-of-type(4)").append("<img src='"+msg.documents[3].thumbnail+"'/>");

        var str3=msg.documents[3].title;
        var str4=str3.substring(0,10);

     
        $("#slidebox>.slbook:nth-of-type(4)").append("<h4>"+str4+"</h4>");
        
        var str=msg.documents[3].contents;
        var str2=str.substring(0,25);

        $("#slidebox>.slbook:nth-of-type(4)").append("<p>"+str2+"</p>");

     
     });