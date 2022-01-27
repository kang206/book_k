$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "미움받을 용기" },
    headers: { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
  })
    .done(function (msg) {
      console.log(msg.documents[1].title);
      console.log(msg.documents[1].thumbnail);

      // sub1
      $(".sub_box").append("<h3>" + msg.documents[0].title + "</h3>");
      $(".sub_box").append("<img src='" + msg.documents[0].thumbnail + "'/>");
      $(".contextbox").append("<h6>" + msg.documents[0].authors[0] + "</h6>");
      $(".pricenum").append(msg.documents[0].price + "원");

      var str = msg.documents[0].contents;
      var str2 = str.substring(0, 600);
      $(".contextbox").append("<p>" + str2 + "</p>");
      $(".contextbox").append("<span>" + "자세히보기" + "</span>");
    });

  //메모장으로 sub 텍스트 가져오기, 서버에 올려야 보임
  $(function () {
    $.get("./sub_txt/txt1.txt", function (data) {
      $("#tmpBox").html(data);
    })

  });