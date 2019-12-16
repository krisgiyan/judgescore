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
            .replace('J5:', '')
        final_array.push(finish)
    }
    document.getElementById('area').value = final_array.join("\n")
}

function pdfconvert() {
    let final_array = []
    let area = document.getElementById("area2").value
    let split_area = area.split('\n')
    for (let i = 0; i < split_area.length; i++) {
        const areaElement = split_area[i];
        let elem = document.getElementById('name_convert').checked
        if (elem === false){
            if (i%2 !== 0){
                final_array.push(areaElement)
            }
        }
        else {
            if (i%2 === 0){
                final_array.push(areaElement)
            }

        }

    }
    let reverse_check = document.getElementById('reverse').checked
    if(reverse_check === true){
        for (let i = 0; i < final_array.length; i++) {
            const finalArrayElement = final_array[i];
            let new_arr = final_array[i].split(' ')
            let poped = new_arr.shift()
            new_arr.push(poped)
            let new_arrr = new_arr.join(" ")
            final_array[i] = new_arrr


        }
    }
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

function test_names() {
    let final_arr = []
    let value = document.getElementById('area2').value
    let masiv = value.split('\n')
    for (let i = 0; i < masiv.length; i++) {
        const masivElement = masiv[i];
        let maluk_masiv = masivElement.split(' ')
        let last_element = maluk_masiv[maluk_masiv.length - 1]
        let last_element_lenght = last_element.length
        if (last_element_lenght === 3) {
            if (maluk_masiv.includes('U23')){
                for(let i = 0; i < 2; i++){
                    maluk_masiv.pop()
                }
                final_arr.push(maluk_masiv.join(' '))
            }
            else {
                maluk_masiv.pop()
                final_arr.push(maluk_masiv.join(' '))
            }
        }

        }
    let reverse_check = document.getElementById('reverse').checked
    if (reverse_check !== true) {
        for (let i = 0; i < final_arr.length; i++) {
            let new_arr = final_arr[i].split(' ')
            let shifted = new_arr.shift()
            new_arr.push(shifted)
            final_arr[i] = new_arr.join(" ")
        }
        document.getElementById('area2').value = final_arr.join('\n')
    }
    document.getElementById('area2').value = final_arr.join('\n')
}

