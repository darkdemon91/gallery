import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import { motion } from "framer-motion";

const Progress = ({file, setFile }) => {
    const { url, progress } = useStorage(file);

    useEffect(() => {
        if(url) {
            setFile(null)
        }
    }, [setFile, url])


    return (
            <motion.div
                    className='progress-bar'
                    initial={{ width: 0 }}
                    animate={{ width: progress + '%' }}
            />
    )
};

export default Progress;
