import { useContext, useEffect } from 'react';
import TitleContext from '../layout/TitleContext';

export default function useTitle(title) {
    const [setTitle] = useContext(TitleContext);
    useEffect(() => {
        setTitle(title);
    });
}
