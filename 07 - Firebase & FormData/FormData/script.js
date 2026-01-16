const form = document.querySelector('form');

form.addEventListener('submit', event =>{
    event.preventDefault();

    const formData = new FormData(form);

    // console.log(formData.rating);
    // get kommer från FormData
    console.log(formData.get('rating'));

    const formObj = {};
    formData.forEach((value, key)=>{
        // console.log(key, value)
        formObj[key] = value;
    })

    // const json = JSON.stringify(formData);
    const json = JSON.stringify(formObj);
    console.log(formObj, json)
})