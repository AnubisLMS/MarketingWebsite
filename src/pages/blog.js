import React from 'react';
import Layout from '../components/Layout';
import { Link, graphql } from "gatsby"

const Blog = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes
  console.log(posts)

  if (posts.length === 0) {
    return (
      <Layout>
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
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
          <div/>
        </div>
        <div>
          <ol style={{ listStyle: `none` }}>
          {posts.map(post => {
            const title = post.frontmatter.title
            const date = post.frontmatter.date
            const description = post.frontmatter.description

            return (
              <li key={post.frontmatter.path}>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h2>
                      <Link to={`/blog/${post.frontmatter.path}`} itemProp="url">
                        <span itemProp="headline">{title}</span>
                        <span itemProp="headline">{date}</span>
                        <span itemProp="headline">{description}</span>
                      </Link>
                    </h2>
                  </header>
                </article>
              </li>
            )
          })}
        </ol>
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
        path
        title
        date
        description
      }
    }
  }
}
`