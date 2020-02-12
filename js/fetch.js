function showInfo(release) {
    if (typeof window.info_template == "undefined") 
        window.info_template = $(".info").html();
    let info = window.info_template;

    info = formatRelease(info, release);

    $(".info").html(info);

    $(".info").css("display", "block");

    $(".info-close").click(() => {
        $(".info").css("display", "none");
    });
}

function formatRelease(temp, release) {
    temp = temp.replace("$version", release.tag_name);
    temp = temp.replace("$date", parseDate(release.published_at));
    temp = temp.replace("$body", release.body);
    temp = temp.replace("$author_name", release.author.login);
    temp = temp.replace("$author_link", release.author.html_url);
    temp = temp.replace("$author_avatar", release.author.avatar_url)
    temp = temp.replace("$github_url", release.html_url);
    temp = temp.replace("$download", release.assets[0].browser_download_url);
    return temp;
}

function parseDate(datetime) {
    let date = new Date(datetime);
    var year = date.getFullYear().toString().padStart(2,"0");
    var month = (date.getMonth()+1).toString().padStart(2,"0");
    var day = date.getDate().toString().padStart(2,"0");
    var hours = date.getHours().toString().padStart(2,"0");
    var minutes = date.getMinutes().toString().padStart(2,"0");
    var date_string = `${year}. ${month}. ${day}. ${hours}:${minutes}`;
    return date_string;
}

$.get("//api.github.com/repos/filcnaplo/filcnaplo/releases", releases => {
    console.log(releases);
    let latest_release = releases[0];
    let latest = $(".download-latest").html();
    let other_template = $(".other-versions").html();

    latest = formatRelease(latest, latest_release);
    $(".download-latest").html(latest);
    $(".latest-info").click(() => {
        showInfo(latest_release);
    });
    $(".download-latest").css("display", "block");
    
    releases.shift();
    $(".other-versions").html("");
    releases.forEach(release => {
        other = formatRelease(other_template, release);
        $(".other-versions").append(other);

        $($(".other-row")[$(".other-row").length-1]).find(".other-info").click(() => {
            showInfo(release);
        });
    });

    $(".download-other").css("display", "block");
}).fail(error => {
    console.log(error);
    $("body").append("<div style='text-align:center'><span style='color:firebrick'>Probléma akadt a verziók lekérésénél. Kérlek próbáld újra később.</span></div>");
});