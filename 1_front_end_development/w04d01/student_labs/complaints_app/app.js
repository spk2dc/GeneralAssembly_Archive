let baseurl = "https://data.cityofnewyork.us/resource/erm2-nwe9.json"

let filterBorough = (event) => {
    let $btn = $(event.currentTarget)
    let num = $('input[type="text"]').val()
    let filter = `${baseurl}?borough=${$btn.text()}`
    console.log(filter);
    console.log(num);


    $.ajax({
        url: filter,
        type: "GET",
        data: {
            "$limit": num,
            "$$app_token": "eUIH3YV85vSGtjEUnYoKS3f7r"
        }

    }).then(parseData)

    event.preventDefault()
    event.stopPropagation()

}

let parseData = (data) => {
    console.log("Retrieved " + data.length + " records from the dataset!");
    console.log(data);

    for (const itr of data) {
        let $tr = $('<tr>')
        $('table').append($tr)
        
        $tr.append($('<td>').text(itr.unique_key))
        $tr.append($('<td>').text(itr.borough))
        $tr.append($('<td>').text(itr.descriptor))

    }
}

$(() => {
    $('button').on('click', filterBorough)


});

