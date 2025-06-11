document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get("name");
    const age = params.get("age");
    const sex = params.get("sex");
    const desc = params.get("desc");
    const img = params.get("img");

    const petInfo = document.querySelector(".pet-info");
    if (name && age && sex && desc && img) {
        petInfo.innerHTML = `
            <h2>${name}</h2>
            <p>Age: ${age}</p>
            <p>Sex: ${sex}</p>
            <p>Description: ${desc}</p>
        `;

        const imageDiv = document.querySelector(".pet-image-placeholder");
        imageDiv.innerHTML = `<img src="${img}" alt="Image of ${name}" class="pet-image">`;
    } else {
        petInfo.innerHTML = `<h2>Error: Missing pet information</h2>`;
        console.error("Missing pet information in URL parameters.");
    }
});