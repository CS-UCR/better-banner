import { useEffect, useState } from 'react';

// TODO: make a way to rerun the fetch other than refreshing the page
export default function useFetch(...args) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    // this hook only runs the first time because of the empty array dependency list
    useEffect(() => {
        // get information on user #1
        fetch(...args, {
            method: 'GET'
        })
            .then(res => {
                res.json().then(responseData => {
                    setData(responseData.data);
                    setLoading(false);
                });
            })
            // eslint-disable-next-line
            .catch(e => console.log(e));
    // eslint-disable-next-line
    }, []);

    return [loading, data];
}
