import { useEffect, useState } from 'react';

// TODO: make a way to rerun the fetch other than refreshing the page
export default function useFetch(url) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    // this hook only runs the first time because of the empty array dependency list
    useEffect(() => {
        // get information on user #1
        fetch(`http://localhost:3001/${url}`, {
            method: 'get'
        })
            .then(res => {
                console.log(res);
                setData(res.json().then(() => setLoading(false)));
                // setLoading(false);
            })
            // eslint-disable-next-line
            .catch(e => console.log(e));
    }, [url]);

    return [loading, data];
}
