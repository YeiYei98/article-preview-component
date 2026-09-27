const btnShere = document.querySelector(".shere")
const btnInferior = document.querySelector(".inferior")

btnShere.addEventListener("click", () => {
    btnInferior.classList.toggle("activo")
})