var siteName = document.getElementById('siteName')

var siteURL = document.getElementById('siteURL')
var myBody = document.getElementById('myBody')

var productList;
if (localStorage.getItem('productList')) {
    productList = JSON.parse(localStorage.getItem('productList'))

} else {
    productList = []
}

function addProduct() {
    if (validateURL() && validateName()) {

        product = {
            name: siteName.value,
            url: siteURL.value,
        }

        productList.push(product)
        setData()
        displayProducts(productList);

    }
    else {
        window.alert(`Site Name or Url is not valid, Please follow the rules below :

    Site name must contain at least 3 characters
    Site URL must be a valid one`)
    }


}

function displayProducts(pList) {
    console.log(pList);
    var mainData = ``;
    for (i = 0; i < pList.length; i++) {
        mainData += `<tr>
       <td class="ps-5 " >${i + 1}</td>
       <td class="pe-5">${pList[i].name}</td>
       <td class="pe-5"><a href="" class="btn w-50 " style="background-color:#9eb23b;color:#fff"><i class="fa-regular fa-eye pe-3"></i>Visit</a></td>
       <td class="pe-5"><button class="btn w-50 " style="background-color:#eb1d36;color:#fff" onclick="deleteProduct(${i})">Delete</button></td>
   </tr>`

    }
    myBody.innerHTML = mainData;
    siteName.value = ''
    siteURL.value = ''
}
function deleteProduct() {
    console.log(del);
}


function deleteProduct(index) {
    productList.splice(index, 1)
    console.log(productList);
    displayProducts(productList)
}

// local storage

function setData() {
    localStorage.setItem('productList', JSON.stringify(productList))
}

var nameRegex = /^[A-z][a-z]{3,}$/
function validateName() {

    if (nameRegex.test(siteName.value)) {
        siteName.classList.add('is-valid')
        siteName.classList.remove('is-invalid')

    } else {
        siteName.classList.add('is-invalid')
        siteName.classList.remove('is-valid')
    }

}
var urlRegex = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/
function validateURL() {

    if (urlRegex.test(siteURL.value)) {
        siteURL.classList.add('is-valid')
        siteURL.classList.remove('is-invalid')

    } else {
        siteURL.classList.add('is-invalid')
        siteURL.classList.remove('is-valid')
    }

}

