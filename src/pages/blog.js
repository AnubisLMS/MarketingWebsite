import React from 'react';
import Layout from '../components/Layout';
import {useState} from 'react';
import { Link, graphql} from "gatsby";

// Let's assume that we have a list of blog titles that are passed in 
const blogTitles = ["Anubis Development Guide", "Anubis Contributor Guide", "Anubis User Guide", 
"Student User Manual", "Faculty User Manual", "Navigation Information", "Celebrating the 20th Anniversary of Anubis", 
"Bug Fixes and Updates", "New Features and Updates", "Announcements", "2022 Look Ahead"]; 

// filterBlogs takes in a term to filter for and a list of all blogs. 
// It performs a case insensitive search on the title of the blog and returns
// a list of blogs that match the filter term. If no blogs are found, it return nothing. 

function filterBlogs(searchTerm, blogTitles){
    var filteredBlogTitles = []; 
    for (var i = 0; i < blogTitles.length; i++){
        if (blogTitles[i].toLowerCase().includes(searchTerm.toLowerCase())){
            filteredBlogTitles.push(blogTitles[i]);
        }
    }
    return filteredBlogTitles;
}


const Blog = ({data}) => {
  const posts = data.allMarkdownRemark.nodes

  const [searchInput, setSearchInput] = useState('');
  var filteredBlogsList = filterBlogs(searchInput, blogTitles);
  let filteredBlogs = filteredBlogsList.map((item,index)=>{
    return <li key={index}>{item}</li>
  })

  return (
    <Layout>
      <div className='sm:w-fit lg:w-max'>
        <div className='space-y-3 mt-52'>
          <h1 className='text-4xl font-semibold'>Anubis<span className='text-primary'> Blog</span> </h1>
          <p className='text-xl text-gray'>A collection of posts by our developers and maintainers.</p>
          <div class="mb-3 xl:w-96">
          <div class="input-group relative flex flex-wrap items-stretch w-full mb-4">
              <input type="Search for Blog" onChange = {(e) => { 
                setSearchInput(e.target.value); }}
                class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-black bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-black focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon3"/>
            </div>
          </div>
          <ul>
            {filteredBlogs}
          </ul>
        </div>
        <div className='flex flex-col items-center'> </div>
      </div>
      <div>
        <ol style = {{listStyle: 'none'}}>
          {posts.map(post => {
            const {title, date, description} = post.frontmatter
            return (
              <li key = {post.frontmatter.slug}>
                <article 
                  className = "post-list-item"
                  itemScope
                  itemType = "http://schema.org/Article">
                    <header>
                      <h2>
                        <Link to={`/blog/${post.frontmatter.slug}`} itemProp="url">
                          <span itemProp="headline">{title}</span>
                          {/* <span itemProp="headline">{date}</span>
                          <span itemProp="headline">{description}</span> */}
                        </Link>
                      </h2>
                    </header>
                </article>
              </li>
            )
          })}
        </ol>
      </div>
    </Layout>
  )
}

export default Blog;
export const pageQuery = graphql`
query MyQuery {
  allMarkdownRemark {
    nodes {
      rawMarkdownBody
      frontmatter {
        slug
        title
        date
        description
      }
    }
  }
}
`