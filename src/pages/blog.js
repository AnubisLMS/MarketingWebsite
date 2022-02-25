import React from 'react';
import Layout from '../components/Layout';
import {useState, useEffect} from 'react';

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

function filterBlogs(searchTerm, blogTitles){
  
    var filteredBlogTitles = []; 
    for (var i = 0; i < blogTitles.length; i++){
        if (blogTitles[i].toLowerCase().includes(searchTerm.toLowerCase())){
            filteredBlogTitles.push(blogTitles[i]);
        }
    }
    if (filteredBlogTitles.length == 0) {
        return "No blogs found";
    }
    return filteredBlogTitles;
}


const Blog = () => {
  
  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
  }

  const [searchInput, setSearchInput] = useState('');
  // var filteredBlogsList = filterBlogs("Anubis", blogTitles);
  console.log("ssss",searchInput);
  var filteredBlogsList = filterBlogs(searchInput, blogTitles);
  let filteredBlogs = filteredBlogsList.map((item,index)=>{
    return <li key={index}>{item}</li>
  })

  return (
    console.log("1231231",filteredBlogs),
    <Layout>
      <div className='sm:w-fit lg:w-max'>
        <div className='space-y-3 mt-52'>
          
          <h1 className='text-4xl font-semibold'>Anubis<span className='text-primary'> Blog</span> </h1>
          <p className='text-xl text-gray'>A collection of posts by our developers and maintainers.</p>
          <div class="mb-3 xl:w-96">
          <div class="input-group relative flex flex-wrap items-stretch w-full mb-4">
              <input type="Search for Blog" onChange = {(e) => { console.log(e.target); 
                searchItems(e.target.value); this.searchInput = e.target.value; console.log(searchInput)}}
                class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-black bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-black focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon3"/>
              {/* <button onClick={(e) => { console.log(e.target); 
                searchItems(e.target.value) }} class="btn inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" type="submit" id="button-addon3">Search</button> */}
            </div>
          </div>
          <ul>
            {/* need a for loop, for blog in blogList, check if searchTerm.included in blog.title */}
            {filteredBlogs}
          </ul>
        </div>
        <div className='flex flex-col items-center'>
          <div/>
        </div>
      </div>
    </Layout>
  )
}

export default Blog;