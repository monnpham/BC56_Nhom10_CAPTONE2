export let getInfor = () => {
    let id = document.getElementById("id").value
    let name = document.getElementById("name").value
    let type = document.getElementById("type").value
    let price = document.getElementById("price").value
    let screen = document.getElementById("screen").value
    let backCamera = document.getElementById("backCamera").value
    let frontCamera = document.getElementById("frontCamera").value
    let img = document.getElementById("img").value
    let description = document.getElementById("description").value
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
    }
}

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
    let i = 0
    render(list)
    window.search = () => {
        var type = document.querySelector('#searchName').value
        var pro = []
        if (type === "all") {
            render(list)
        }
        if (type === "smartphone") {
            for (i = 0; i < list.length; i++) {
                if (list[i].type === "smartphone") {
                    pro.push(list[i]);
                }
            }
            render(pro)
        }
        if (type === "laptop") {
            for (i = 0; i < list.length; i++) {
                if (list[i].type === "laptop") {
                    pro.push(list[i]);
                }
            }
            render(pro)
        }
        if (type === "tablet") {
            for (i = 0; i < list.length; i++) {
                if (list[i].type === "tablet") {
                    pro.push(list[i]);
                }
            }
            render(pro)
        }
    }

    function render(proList) {
        let contentHTML = ""
        proList.reverse().forEach(({
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
}

export let onSuccess = (message) => {
    Swal.fire(message, "", "success")
}
export let onFail = (message) => {
    Swal.fire(message, "", "error")
}

// valid
export let valid_data = (data) => {
    let { id,
        name,
        price,
        screen,
        backCamera,
        frontCamera,
        img, } = data

    let noti_id = document.getElementById("noti_req_id")
    let noti_name = document.getElementById("noti_req_name")
    let noti_price = document.getElementById("noti_req_price")
    let noti_screen = document.getElementById("noti_req_screen")
    let noti_backCamera = document.getElementById("noti_req_bcam")
    let noti_frontCamera = document.getElementById("noti_req_fcam")
    let noti_img = document.getElementById("noti_req_img")

    let ret = 0
    // if (id === "") {
    //     noti_id.style.display = "block"
    //     ret = 1
    // } else { noti_id.style.display = "none" }

    if (name === "") {
        noti_name.style.display = "block"
        ret = 1
    } else { noti_name.style.display = "none" }

    if (price === "" || price < 0) {
        noti_price.style.display = "block"
        ret = 1
    } else { noti_price.style.display = "none" }

    if (screen === "") {
        noti_screen.style.display = "block"
        ret = 1
    } else { noti_screen.style.display = "none" }

    if (backCamera === "") {
        noti_backCamera.style.display = "block"
        ret = 1
    } else { noti_backCamera.style.display = "none" }

    if (frontCamera === "") {
        noti_frontCamera.style.display = "block"
        ret = 1
    } else { noti_frontCamera.style.display = "none" }

    if (img === "") {
        noti_img.style.display = "block"
        return true
    } else { noti_img.style.display = "none" }

    if (ret == 1) {
        return true
    }
    return false
}

// new data add
export let new_data = () => {
    document.querySelector("input[id='name']").value = ""
    document.querySelector("input[id='price']").value = ""
    document.querySelector("input[id='screen']").value = ""
    document.querySelector("input[id='backCamera']").value = ""
    document.querySelector("input[id='frontCamera']").value = ""
    document.querySelector("input[id='img']").value = ""
    document.querySelector("textarea[id='description']").value = ""


}

