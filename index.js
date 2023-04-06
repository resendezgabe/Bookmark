let bookmarks = [];

document.getElementById("addBookmarkButton").addEventListener("click", function() {
    let url = document.getElementById("urlInput").value;
    let name = document.getElementById("nameInput").value;
    let bookmark = {url: url, name: name};
    bookmarks.push(bookmark);
    renderBookmarks();
});

function renderBookmarks() {
    let bookmarkList = document.getElementById("bookmarkList");
    bookmarkList.innerHTML = "";

    bookmarks.map(function(bookmark) {
        let bookmarkElement = document.createElement("li");

        let nameLink = document.createElement("a");
        nameLink.setAttribute("href", bookmark.url);
        nameLink.textContent = bookmark.name;

        let removeButton = document.createElement("button");
        removeButton.className = "remove";
        removeButton.textContent = "Remove";

        removeButton.addEventListener("click", function() {
            removeBookmark(bookmark);
        });

        bookmarkElement.appendChild(nameLink);
        bookmarkElement.appendChild(removeButton);
        bookmarkList.appendChild(bookmarkElement);
    });
}

function removeBookmark(bookmark) {
    bookmarks = bookmarks.filter(function(bm) {
        return bm !== bookmark;
    });
    renderBookmarks();
}