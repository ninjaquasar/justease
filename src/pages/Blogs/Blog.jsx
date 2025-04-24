import React, { useState } from 'react';
import { ArrowUpNarrowWideIcon, ArrowDownNarrowWideIcon } from 'lucide-react';


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
            <p className={`mb-6 text-lg leading-8 font-medium ${showDescription ? '' : 'hidden'}`}>{description}</p>
            <button type="button" className="p-3 text-primary absolute right-1 bottom-0 cursor-grenade" onClick={() => setShowDescription(!showDescription)}>
                { showDescription ? <ArrowUpNarrowWideIcon size={36}></ArrowUpNarrowWideIcon> : <ArrowDownNarrowWideIcon size={36}></ArrowDownNarrowWideIcon> }
            </button>
        </div>
    )
}

export default Blog;