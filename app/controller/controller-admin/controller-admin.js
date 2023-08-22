export let getInfor = () => {
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let type = document.getElementById("type").value;
    let price = document.getElementById("price").value;
    let screen = document.getElementById("screen").value;
    let backCamera = document.getElementById("backCamera").value;
    let frontCamera = document.getElementById("frontCamera").value;
    let img = document.getElementById("img").value;
    let description = document.getElementById("description").value;
    return {
        id,
        name,
        type,
        price,
        screen,
        backCamera,
        frontCamera,
        img,
        description,
    };
};

export let showDataForm = (data) => {
    let { id,
        name,
        type,
        price,
        screen,
        backCamera,
        frontCamera,
        img,
        description, } = data

    document.getElementById("id").value = id
    document.getElementById("name").value = name
    document.getElementById("type").value = type
    document.getElementById("price").value = price
    document.getElementById("screen").value = screen
    document.getElementById("backCamera").value = backCamera
    document.getElementById("frontCamera").value = frontCamera
    document.getElementById("img").value = img
    document.getElementById("description").value = description
};

export let renderProductsList = (list) => {
    let contentHTML = ""
    list.reverse().forEach(({
        id,
        name,
        type,
        price,
        screen,
        backCamera,
        frontCamera,
        img,
        description,
    }) => {
        let trString =
            `<tr>
            <td>${id}</td>
            <td>${name}</td>      
            <td>${price}</td>
            <td>${screen}</td>
            <td>${backCamera}</td>
            <td>${frontCamera}</td>
            <td><img src="${img}"></td>
            <td>${description}</td>
            <td>${type} </td>
            <td>
                <button class="td_btn btn_delete"
                onclick="deleteProduct(${id})">Delete</button>
                <button class="td_btn btn_edit"
                onclick="editProduct(${id})">Edit</button>
            </td>
        </tr>`
        contentHTML += trString;
    })
    document.getElementById("tbodyProd").innerHTML = contentHTML
}


export let onSuccess = (message) => {
    Swal.fire(message, "", "success");
}

