import {useState} from "react";

export const useFetch = (callback) => {
    let [error, setError] = useState('');
    let [loading, setLoading] = useState(false);

    const data = async () => {
        try {
            setLoading(true);
            await callback()
            setLoading(false)
        } catch (e) {
            setError(e.message);
            setLoading(false)
        }
        finally {
            setLoading(false)
        }
    };
    return [data, loading, error];
};
