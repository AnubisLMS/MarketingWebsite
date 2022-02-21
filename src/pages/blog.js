import React from 'react';
import Layout from '../components/Layout';

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

const Blog = () => {
  var filteredBlogsList = filterBlogs("Anubis", blogTitles);
  let filteredBlogs=filteredBlogsList.map((item,index)=>{
    return <li key={index}>{item}</li>
  })
  const BlogPost = () => {
    return (
      <div>
      </div>
    )
  }
  return (
    console.log(filteredBlogs),
    <Layout>
      <div className='sm:w-fit lg:w-max'>
        <div className='space-y-3 mt-52'>
          <h1 className='text-4xl font-semibold'>Anubis<span className='text-primary'> Blog</span> </h1>
          <p className='text-xl text-gray'>A collection of posts by our developers and maintainers.</p>
          <ul>
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