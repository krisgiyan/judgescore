function spocoto_cc() {
    let area_value = document.getElementById('area').value
    if(area_value !== '') {
        let start_array = area_value.split('\n')
        let export_value = []
        for (let i = 0; i < start_array.length; i++) {
            let startArrayElement = start_array[i].replace('=', '');
            let array_of_array = startArrayElement.split(' ')
            let final_result = '[' + array_of_array[1] + ']' + ' ' + array_of_array[0]
            export_value.push(final_result)
        }
        document.getElementById('area').value = export_value.join('\n')

    }
}