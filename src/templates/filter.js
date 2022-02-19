// Get blog based on search criteria
// Using react-router-dom

// Adding react hooks 
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Aaron, Devin, do we need to use react for this
// const [searchInput, setSearchInput] = useState('');

// const searchBlogs = (searchKeyword) => {
//     setSearchInput(searchKeyword);
// }

// Get documents from blog ./src/blog folder. Return list of titles 
const blogFolder = "./src/blog";
const fs = require('fs');

function getBlogFromBlogFolder(){
    var blogList = []; 
    fs.readdir(blogFolder, (err, files) => {
        files.forEach(file => {
            blogList.push(file);
            console.log(file);
        });
    });
    return blogList 
}

function getAllBlogs(){
    var path = "/blogs"; // Assume all blogs are in the root directory
    return fetch(path, {
        method: 'GET',
    })
    .then((response) => {response.json();
    })
}

// Let's assume that we have a list of blog titles that are passed in 
// Create a filter and rank the ones that are most relevant by count of word 
// in the title.
const blogTitles = ["Anubis Development Guide", "Anubis Contributor Guide", "Anubis User Guide", 
"Student User Manual", "Faculty User Manual", "Navigation Information", "Celebrating the 20th Anniversary of Anubis", 
"Bug Fixes and Updates", "New Features and Updates", "Announcements", "2022 Look Ahead"]; 

// filterBlogs takes in a term to filter for and a list of all blogs. 
// It performs a case insensitive search on the title of the blog and returns
// a list of blogs that match the filter term. If no blogs are found, it returns
// "No blogs found".
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

export default getAllBlogs;
export default filterBlogs;