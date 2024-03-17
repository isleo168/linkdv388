const fpPromiseMain = import('https://openfpcdn.io/fingerprintjs/v3')
        .then(FingerprintJS => FingerprintJS.load());

updateAccessLinkClickStatistic = function (linkId, url) {
    fpPromiseMain.then(fp => fp.get()).then(result => {
        const visitorId = result.visitorId;
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "/Home/UpdateLinkClickStatistic", true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify({
                LinkId: linkId,
                Ip: visitorId
            }));
    });
    //window.location.href = url;
    window.open(url);
}

$(".link").click(function () {
    let url = $(this).attr("link");
    let linkid = $(this).attr("id");
    updateAccessLinkClickStatistic(linkid, url);
});

var backGroundImageUrl = $("#background-image-url").val();
if (backGroundImageUrl) {
    $("body").css("background-image", "url(" + backGroundImageUrl + ")");
}

var width = $(window).width();

$(".btn-bg").hover(
    function () {
        $(this).css("background-image", 'url("images/icons/btn-bg-2.png")');
        let iconName = $(this).children(".icon").attr("icon-name");
        if (iconName == "android") {
            $(this).children(".icon").children("img").attr("src", "images/icons/android-icon-active.png");
        }
        else if (iconName == "agent") {
            $(this).children(".icon").children("img").attr("src", "images/icons/agent-icon-active.png");
        }
        else if (iconName == "customerService") {
            $(this).children(".icon").children("img").attr("src", "images/icons/customer-service-icon-active.png");
        }
        else if (iconName == "gift") {
            $(this).children(".icon").children("img").attr("src", "images/icons/gift-icon-active.png");
        }
        else if (iconName == "ios") {
            $(this).children(".icon").children("img").attr("src", "images/icons/ios-icon-active.png");
        }
    },
    function () {
        $(this).css("background-image", 'url("images/icons/btn-bg-1.png")');
        let iconName = $(this).children(".icon").attr("icon-name");
        if (iconName == "android") {
            $(this).children(".icon").children("img").attr("src", "images/icons/android-icon.png");
        }
        else if (iconName == "agent") {
            $(this).children(".icon").children("img").attr("src", "images/icons/agent-icon.png");
        }
        else if (iconName == "customerService") {
            $(this).children(".icon").children("img").attr("src", "images/icons/customer-service-icon.png");
        }
        else if (iconName == "gift") {
            $(this).children(".icon").children("img").attr("src", "images/icons/gift-icon.png");
        }
        else if (iconName == "ios") {
            $(this).children(".icon").children("img").attr("src", "images/icons/ios-icon.png");
        }
    }
);

$("#btn-home").hover(
    function () {
        $(this).css("background-image", 'url("images/icons/btn-home-bg-active.png")');
        $("#home-icon img").attr("src", "images/icons/home-icon-active.png");
    },
    function () {
        $(this).css("background-image", 'url("images/icons/btn-home-bg.png")');
        $("#home-icon img").attr("src", "images/icons/home-icon.png");
    }
);

$(".btn-bg").click(function () {
    let href = $(this).children(".icon").attr("href");
    window.open(href, '_blank');
});

$("#btn-home").click(function () {
    let href = $("#home-icon a").attr("href");
    window.open(href, '_blank');
});

