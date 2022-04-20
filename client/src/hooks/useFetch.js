import { useState, useEffect, useCallback } from "react";
import axios from "axios";

function useFetch(page) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [list, setList] = useState([]);

    const sendQuery = useCallback(async () => {
        try {
            setLoading(true);
            setError(false);
            const res = await axios.get(
                `${process.env.REACT_APP_BASE_URL}/product?page=${page}`
            );
            console.log(res.data);
            setList((prev) => [...prev, ...res.data]);
            setLoading(false);
        } catch (err) {
            setError(err);
        }
    }, [page]);

    useEffect(() => {
        sendQuery();
    }, [sendQuery, page]);

    return { loading, error, list };
}

export default useFetch;