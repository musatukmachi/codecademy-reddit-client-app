export const getSubredditPosts = async (subreddit) => {
    return await fetch(`https://www.reddit.com${subreddit}.json`)
    .then(response => response.json())
    .then(json => json.data.children.map(post => post.data));
}

export const getSubreddits = async () => {
    return await fetch('https://www.reddit.com/subreddits.json')
    .then(response => response.json())
    .then(json => json.data.children.map(obj => obj.data));
}