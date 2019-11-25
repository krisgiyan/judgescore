function convert() {
    let final_array = []
    let area = document.getElementById("area").value
    let split_area = area.split('\n')
    split_area.shift()
    for (let i = 0; i < split_area.length; i++) {
        let finish = split_area[i].replace('J1: ', '')
            .replace('J2: ', '')
            .replace('J3: ', '')
            .replace('J4: ', '')
            .replace('J5: ', '')
        final_array.push(finish)
    }
   console.log(final_array.join('\n'))
    document.getElementById('area').value = final_array.join("\n")
}

function copy() {
    let text_field = document.getElementById('area')
    text_field.select()
    document.execCommand('copy')

}
