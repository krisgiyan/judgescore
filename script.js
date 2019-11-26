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
  //console.log(final_array.join('\n'))
    document.getElementById('area').value = final_array.join("\n")
}

function pdfconvert() {
    let final_array = []
    let area = document.getElementById("area2").value
    let split_area = area.split('\n')
    for (let i = 0; i < split_area.length; i++) {
        const areaElement = split_area  [i];
        if (i%2 !== 0){
            final_array.push(areaElement)
        }

    }
    //console.log(final_array.join('\n'))
    document.getElementById('area2').value = final_array.join("\n")
}

function copy() {
    let text_field = document.getElementById('area')
    text_field.select()
    document.execCommand('copy')
}

function copy2() {
    let text_field = document.getElementById('area2')
    text_field.select()
    document.execCommand('copy')
}
function clearr() {
    document.getElementById('area').value=''
}

function clear2() {
    document.getElementById('area2').value=''
}
