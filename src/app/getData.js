export const getData = (subreddit) =>
    fetch(`https://www.reddit.com/r/${subreddit}.json`)
    .then(response => response.json())
    .then(json => json.data.children.map(post => post.data));
