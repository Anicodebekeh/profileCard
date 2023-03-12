
const profilePic = document.querySelector('#profile-pic');
const inputFile= document.querySelector('#input-file')

inputFile.addEventListener("change", function (){
    let url=URL.createObjectURL(inputFile.files[0])
    profilePic.src = url
    console.log(url)
})
