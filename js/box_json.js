$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
        query: "바이러스"
    },
    headers: {
        Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161"
    }
})

.done(function (msg) {

    console.log(msg.documents[1].title);
    console.log(msg.documents[1].thumbnail);


    // 1

    $(".box:nth-of-type(1)").append("<img src='" + msg.documents[0].thumbnail + "'/>");
    $(".box:nth-of-type(1)").append("<h3>" + msg.documents[0].title + "</h3>");
    $(".box:nth-of-type(1)").append("<h6>" + msg.documents[0].authors[0] + "</h6>");

    var str = msg.documents[0].contents;
    var str2 = str.substring(0, 60);

    $(".box:nth-of-type(1)").append("<p>" + str2 + "</p>");

    $(".box:nth-of-type(1)").append("<button>" + "click" + "</button>");


    // 2

    $(".box:nth-of-type(2)").append("<img src='" + msg.documents[1].thumbnail + "'/>");
    $(".box:nth-of-type(2)").append("<h3>" + msg.documents[1].title + "</h3>");
    $(".box:nth-of-type(2)").append("<h6>" + msg.documents[1].authors[0] + "</h6>");

    var str = msg.documents[1].contents;
    var str2 = str.substring(0, 60);

    $(".box:nth-of-type(2)").append("<p>" + str2 + "</p>");

    $(".box:nth-of-type(2)").append("<button>" + "click" + "</button>");


    // 3

    $(".box:nth-of-type(3)").append("<img src='" + msg.documents[8].thumbnail + "'/>");
    $(".box:nth-of-type(3)").append("<h3>" + msg.documents[8].title + "</h3>");
    $(".box:nth-of-type(3)").append("<h6>" + msg.documents[8].authors[0] + "</h6>");

    var str = msg.documents[8].contents;
    var str2 = str.substring(0, 60);

    $(".box:nth-of-type(3)").append("<p>" + str2 + "</p>");

    $(".box:nth-of-type(3)").append("<button>" + "click" + "</button>");


    // 4

    $(".box:nth-of-type(4)").append("<img src='" + msg.documents[3].thumbnail + "'/>");
    $(".box:nth-of-type(4)").append("<h3>" + msg.documents[3].title + "</h3>");
    $(".box:nth-of-type(4)").append("<h6>" + msg.documents[3].authors[0] + "</h6>");

    var str = msg.documents[3].contents;
    var str2 = str.substring(0, 60);

    $(".box:nth-of-type(4)").append("<p>" + str2 + "</p>");

    $(".box:nth-of-type(4)").append("<button>" + "click" + "</button>");

    // 5

    $(".box:nth-of-type(5)").append("<img src='" + msg.documents[4].thumbnail + "'/>");
    $(".box:nth-of-type(5)").append("<h3>" + msg.documents[4].title + "</h3>");
    $(".box:nth-of-type(5)").append("<h6>" + msg.documents[4].authors[0] + "</h6>");

    var str = msg.documents[4].contents;
    var str2 = str.substring(0, 60);

    $(".box:nth-of-type(5)").append("<p>" + str2 + "</p>");

    $(".box:nth-of-type(5)").append("<button>" + "click" + "</button>");

    // 6

    $(".box:nth-of-type(6)").append("<img src='" + msg.documents[5].thumbnail + "'/>");
    $(".box:nth-of-type(6)").append("<h3>" + msg.documents[5].title + "</h3>");
    $(".box:nth-of-type(6)").append("<h6>" + msg.documents[5].authors[0] + "</h6>");

    var str = msg.documents[5].contents;
    var str2 = str.substring(0, 60);

    $(".box:nth-of-type(6)").append("<p>" + str2 + "</p>");

    $(".box:nth-of-type(6)").append("<button>" + "click" + "</button>");

    // 7

    $(".box:nth-of-type(7)").append("<img src='" + msg.documents[6].thumbnail + "'/>");
    $(".box:nth-of-type(7)").append("<h3>" + msg.documents[6].title + "</h3>");
    $(".box:nth-of-type(7)").append("<h6>" + msg.documents[6].authors[0] + "</h6>");

    var str = msg.documents[6].contents;
    var str2 = str.substring(0, 60);

    $(".box:nth-of-type(7)").append("<p>" + str2 + "</p>");

    $(".box:nth-of-type(7)").append("<button>" + "click" + "</button>");

    // 8

    $(".box:nth-of-type(8)").append("<img src='" + msg.documents[7].thumbnail + "'/>");
    $(".box:nth-of-type(8)").append("<h3>" + msg.documents[7].title + "</h3>");
    $(".box:nth-of-type(8)").append("<h6>" + msg.documents[7].authors[0] + "</h6>");

    var str = msg.documents[7].contents;
    var str2 = str.substring(0, 60);

    $(".box:nth-of-type(8)").append("<p>" + str2 + "</p>");

    $(".box:nth-of-type(8)").append("<button>" + "click" + "</button>");


});

