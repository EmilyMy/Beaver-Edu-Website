import {useEffect, useState} from 'react'
import {getPosts} from "./helper"

import "./Insta.css"

const Insta = () => {
    const [posts, setPosts] = useState([]);
    const numPosts = 6;
    useEffect(() => {
        const fetchData = async () => {
            const response = await getPosts(numPosts);
            if (response.status === 200) {
                setPosts(response);
            }
        }
        fetchData();
    }, []);
    return (
        <div>
            {
                posts.map((postItem) => {
                    const image = postItem.node.thumbnail_resources[4].src;
                    const url = postItem.node.shortcode;
                    console.log(image);
                    return (
                        <a key={url} href={`https://instagram.com/p/${url}`}>
                        <img src={image} alt="" />
                        </a>
                    );
                })
            }
        </div>
    )

}

export default Insta;