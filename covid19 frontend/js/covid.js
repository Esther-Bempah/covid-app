let url = 'http://localhost:5000/';
let cases = [];

window.onload = async () => {
    await allCases()

    let tbody = document.querySelector('#tbd');
    for(let elem of cases){
        console.log(elem.active)
        let tr = tbody.appendChild(document.createElement('tr'))
        tr.setAttribute('class','ntr');
        tr.appendChild(document.createElement('td')).innerHTML = elem.country
        tr.appendChild(document.createElement('td')).innerHTML = elem.active
        tr.appendChild(document.createElement('td')).innerHTML = elem.recovered
        tr.appendChild(document.createElement('td')).innerHTML = elem.deaths
        tr.appendChild(document.createElement('td')).innerHTML = elem.cases
    }
}
let allCases = () => {
    fetch(url + 'cases')
    .then((response) => {
        return response.json()
    }).then((res) => {
        cases = res
    }).catch((err) => {
        console.log(err)
    })
}

