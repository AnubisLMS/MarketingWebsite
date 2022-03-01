import React from 'react';
import Layout from '../components/Layout';
import { Link, graphql } from "gatsby"

const Blog = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout>
        <p>
         Sorry, no blogs to be found!
        </p>
      </Layout>
    )
  }
  
  return (
    <Layout>
      <div className='w-max'>
        <div className='space-y-3 mt-52'>
          <h1 className='text-4xl font-semibold'>Anubis<span className='text-primary'> Blog</span> </h1>
          <p className='text-xl text-gray'>A collection of posts by our developers and maintainers.</p>
        </div>
          <div className='flex flex-col items-center'>
            {posts.map(post => {
              const {title, date, description} = post.frontmatter
                return (
                  <div className='w-max mt-16'>
                  <h2 className='text-4xl font-bold text-primary'>
                    <Link to={`blog/${post.frontmatter.slug}`} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                      <span itemProp="date" className='text-gray'>{date}</span>
                      <p itemProp="description" className='text-xl text-gray'>{description}</p> 
                  </div>
                )
            })}     
          </div>
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