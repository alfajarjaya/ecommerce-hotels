import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Skeleton from '@mui/material/Skeleton';
import { Avatar } from '@mui/material';

const SkeletonLoader = (props) => (
    <Skeleton
        variant="rectangular"
        width={'100%'}
        height={'100vh'}
        animation='wave'
        {...props}
    />
);

const LoaderHome = ({ children }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const [loaded, setLoaded] = useState(false);

    return (
        <div ref={ref}>
            {inView && !loaded ? <SkeletonLoader /> : null}
            <div
                style={{ display: inView ? 'block' : 'none' }}
                onLoad={() => setLoaded(true)}
            >
                {children}
            </div>
        </div>
    );
};

export default LoaderHome;

