import { ArrowUpNarrowWide, ArrowDownNarrowWide } from 'lucide-react';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router';

export default function Blogs() {
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

const Blog = ({ blog }) => {
    const { id, thumbnail, title, description, tags } = blog;
    const [ showDescription, setShowDescription ] = useState(false);
    return (
        <div className="px-6 py-8 rounded-2xl bg-neutral-800 w-3/5 mx-auto relative">
            <div className="flex gap-x-6">
                <img src={thumbnail} alt="Thumbnail" className="w-1/2 mx-auto aspect-video rounded-2xl object-cover" loading="lazy" />
                <div className="space-y-6">
                    <h3 className="text-3xl font-bold text-neutral-400">#{id}</h3>
                    <h4 className="text-2xl font-bold">{title}</h4>
                </div>
            </div>
            <div className="space-x-2 my-6 text-wrap">
                {
                    tags.map(tag => <span key={tag} className="text-[15px] font-medium px-4 py-1 rounded-full bg-base">{tag}</span>)
                }
            </div>
            <p className={`text-lg leading-8 font-medium ${showDescription ? '' : 'hidden'}`}>{description}</p>
            <button type="button" className="p-2 text-primary absolute right-2 bottom-1 cursor-grenade" onClick={() => setShowDescription(!showDescription)}>
                { showDescription ? <ArrowUpNarrowWide size={36}></ArrowUpNarrowWide> : <ArrowDownNarrowWide size={36}></ArrowDownNarrowWide> }
            </button>
        </div>
    )
}