const blogTitles = ["First Blog Post", "Second Blog Post", "Anubis Development Guide", "Anubis Contributor Guide", "Anubis User Guide", 
"Student User Manual", "Faculty User Manual", "Navigation Information", "Celebrating the 20th Anniversary of Anubis", 
"Bug Fixes and Updates", "New Features and Updates", "Announcements", "2022 Look Ahead"];

function filterBlogs(filterTerm, blogTitles){
    var filteredBlogTitles = []; 
    for (var i = 0; i < blogTitles.length; i++){
        if (blogTitles[i].toLowerCase().includes(filterTerm.toLowerCase())){
            filteredBlogTitles.push(blogTitles[i]);
        }
    }
    if (filteredBlogTitles.length == 0) {
        return "No blogs found";
    }
    return filteredBlogTitles;
}

console.log(filterBlogs("Blog", blogTitles));
