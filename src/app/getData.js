// export const API_ROOT = 'https://www.reddit.com';

export const getData = (subreddit) => {
    fetch(`https://reddit.com/r/${subreddit}.json`,
    {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
    if(response.ok){
        return response.json();
    }
        throw new Error('Request failed!');
    }, networkError => {
    console.log(networkError.message);
    });
}



// export const getData = async (subreddit) => {
//     const response = await fetch(`${API_ROOT}${subreddit}.json`);
//     const json = await response.json();

//     return json.data.children.map((post) => post.data);