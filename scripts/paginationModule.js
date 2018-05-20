export function displayPaginationMenu(actualPage, maxPage) {
    let paginationDiv = document.getElementById("pagination");

    if(paginationDiv.firstChild) {
        while (paginationDiv.firstChild) {
            paginationDiv.removeChild(paginationDiv.firstChild);
        }
    }

    let backArrow = document.createElement("a");
    backArrow.innerHTML = "<span>&#x3c;</span>";
    backArrow.className = "arrow";
    if(actualPage > 1) {
        backArrow.className += " available";
        backArrow.href = "/?page=" + (actualPage - 1);
    }

    let actualPageInfo = document.createElement("p");
    actualPageInfo.innerText = "page " + actualPage + " out of " + maxPage;

    let forwardArrow = document.createElement("a");
    forwardArrow.innerHTML = "<span>&#x3e;</span>";
    forwardArrow.className = "arrow";
    if(maxPage && maxPage > actualPage) {
        forwardArrow.className += " available";
        forwardArrow.href = "/?page=" + (+actualPage + 1 );
    }


    paginationDiv.appendChild(backArrow);
    paginationDiv.appendChild(actualPageInfo);
    paginationDiv.appendChild(forwardArrow);
}