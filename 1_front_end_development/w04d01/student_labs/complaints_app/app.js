let baseurl = "https://data.cityofnewyork.us/resource/erm2-nwe9.json"

let filterBorough = (event) => {
    let $btn = $(event.currentTarget)
    let num = $('input[type="text"]').val()
    let filter = `${baseurl}?borough=${$btn.text()}/`
    console.log(filter);

    $.ajax({
        url: filter,
        type: "GET",
        data: {
            "$limit": num,
            "$$app_token": "eUIH3YV85vSGtjEUnYoKS3f7r"
        }
    }).then(function (data) {
        alert("Retrieved " + data.length + " records from the dataset!");
        console.log(data);
    })
}

$(() => {
    $('button').on('click', filterBorough)


});

