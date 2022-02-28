import React from 'react';
import Layout from '../components/Layout';
import {useState} from 'react';
import { Link, graphql} from "gatsby";
// import JSONDATA from './test_data.json'

const Blog = ({data}) => {
  const posts = data.allMarkdownRemark.nodes

  const [searchInput, setSearchInput] = useState('');

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
        </div>
        <div className='flex flex-col items-center'> </div>
      </div>
      <div>
        <ol style = {{listStyle: 'none'}}>
          {posts.filter(post => post.frontmatter.title.toLowerCase().includes(searchInput.toLowerCase())).map(post => (
              <li key = {post.frontmatter.slug}>
                <article 
                  className = "post-list-item"
                  itemScope
                  itemType = "http://schema.org/Article">
                    <header>
                      <h2>
                        <Link to={`/blog/${post.frontmatter.slug}`} itemProp="url">
                          <span itemProp="headline">{post.frontmatter.title}</span>
                          {/* <span itemProp="headline">{date}</span>
                          <span itemProp="headline">{description}</span> */}
                        </Link>
                      </h2>
                    </header>
                </article>
              </li>
          ))}
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