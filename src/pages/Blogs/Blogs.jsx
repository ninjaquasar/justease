import React from 'react';
import { useLoaderData } from 'react-router';
import Blog from './Blog';

const Blogs = () => {
    const blogsData = useLoaderData();
    return (
        <section id="blogs" className="space-y-12 mt-20">
            <div className="space-y-4">
                <h2 className="text-4xl font-bold text-center">Blogs</h2>
                <p className="text-lg font-medium text-center">Explore some concepts from my blogs that will stronger your Web Development fundamentals.</p>
            </div>
            <div className="flex flex-col gap-y-8">
                {
                    blogsData.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                }
            </div>
        </section>
    )
}

export default Blogs;