import React from 'react';
import './style.scss';
import Section from '../shared/section';
import Blog1 from '../../images/blogs/blog-thumb-1.jpg';
import Blog2 from '../../images/blogs/blog-thumb-2.jpg';
import Blog3 from '../../images/blogs/blog-thumb-3.jpg';
import BlogCard from './blog-card';

const Blogs = () => {
  return (
    <Section id='blogs' title='Blogs & Articles' background='dark'>
        <div className="blogs-content-wrapper">
            <BlogCard 
                user='John Doe' 
                date='Mar 9 2023' 
                image={Blog1} title='Lorem Ipsum Autem Vea Iure' 
                description='Lorem Ipsum is simply dummy test to see and test functions of a website'
            />
            <BlogCard 
                user='John Doe' 
                date='Mar 9 2023' 
                image={Blog2} title='Lorem Ipsum Autem Vea Iure' 
                description='Lorem Ipsum is simply dummy test to see and test functions of a website'
            />
            <BlogCard 
                user='John Doe' 
                date='Mar 9 2023' 
                image={Blog3} title='Lorem Ipsum Autem Vea Iure' 
                description='Lorem Ipsum is simply dummy test to see and test functions of a website'
            />
        </div>
    </Section>
  )
}

export default Blogs;