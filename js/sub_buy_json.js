$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
        query: "탐정"
    },
    headers: {
        Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161"
    }
})
.done(function (msg) {




    var divs = document.getElementsByClassName('buy');

    for (var i = 0; i < divs.length; i++) {

        $(".buy").eq(i).append('<div class="rebook">' + "<img src='" + msg.documents[i].thumbnail + "'/></div>");

        var str = msg.documents[i].title;
        var str2 = str.substring(0, 30);
        $(".buy").eq(i).append("<p>" + str2 + "</p>");
    }


});


$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {	query: "추리"},
    headers: {	Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161"}
})
.done(function (msg) {




    var divs = document.getElementsByClassName('look');

    for (var i = 0; i < divs.length; i++) {

        $(".look").eq(i).append('<div class="rebook">' + "<img src='" + msg.documents[i].thumbnail + "'/></div>");

        var str = msg.documents[i].title;
        var str2 = str.substring(0, 30);
        $(".look").eq(i).append("<p>" + str2 + "</p>");
    }


});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {	query: "사건"},
    headers: {	Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161"}
})
.done(function (msg) {




    var divs = document.getElementsByClassName('member');

    for (var i = 0; i < divs.length; i++) {

        $(".member").eq(i).append('<div class="rebook">' + "<img src='" + msg.documents[i].thumbnail + "'/></div>");

        var str = msg.documents[i].title;
        var str2 = str.substring(0, 30);
        $(".member").eq(i).append("<p>" + str2 + "</p>");
    }


});