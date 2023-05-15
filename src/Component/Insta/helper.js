require('isomorphic-fetch')

const cache = {
    lastFetch: 0, 
    posts: [],
}

function slimUpPosts(response) {
    return response.data.user.edge_owner_to_timeline_media.edges.map(edge => ({
        thumbnail: edge.node.thumbnail_src, 
        url: `https://instagram.com/p/${edge.node.shortcode}`,
        caption: edge.node.edge_media_to_caption.edges[0].node.text,
        id: edge.id
    }))
}

const getPosts = async (limit) => {
    const url = `https://www.instagram.com/graphql/query/?query_hash=e769aa130647d2354c40ea6a439bfc08&variables={%22id%22:%2244424205053%22,%22first%22:${limit}}`
    const timeSinceLastFetch = Date.now - cache.lastFetch;
    if(timeSinceLastFetch <= 3600000) {
        return cache.posts;
    }
    const data = await (await fetch(url)).then(res => res.json());
    cache.lastFetch = Date.now();
    cache.posts = slimUpPosts(data);
    return data;
}

export {getPosts};