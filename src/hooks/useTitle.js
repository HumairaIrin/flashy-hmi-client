import { useEffect } from 'react';

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Flashy HMI`
    }, [title])
}

export default useTitle;