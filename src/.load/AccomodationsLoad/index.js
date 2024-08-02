import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Skeleton from '@mui/material/Skeleton';
import 'bootstrap/dist/css/bootstrap.min.css';

const SkeletonLoader = () => (
    <div className="d-flex flex-column align-items-center">
        <div className="d-flex justify-content-center align-items-center w-100">
            <div className="skeleton-container d-flex flex-column w-100">
                <Skeleton width="90%" height="350px" widthRandomness='0' heightRandomness='0' />
                <Skeleton width="50%" height="20px" widthRandomness='0' heightRandomness='0' />
                <Skeleton width="80%" height="20px" widthRandomness='0' heightRandomness='0' />
            </div>
            <div className="skeleton-container d-flex flex-column w-100">
                <Skeleton width="90%" height="350px" widthRandomness='0' heightRandomness='0' />
                <Skeleton width="50%" height="20px" widthRandomness='0' heightRandomness='0' />
                <Skeleton width="80%" height="20px" widthRandomness='0' heightRandomness='0' />
            </div>
            <div className="skeleton-container d-flex flex-column w-100">
                <Skeleton width="90%" height="350px" widthRandomness='0' heightRandomness='0' />
                <Skeleton width="50%" height="20px" widthRandomness='0' heightRandomness='0' />
                <Skeleton width="80%" height="20px" widthRandomness='0' heightRandomness='0' />
            </div>
        </div>
        <div className="d-flex justify-content-center align-items-center w-100">
            <div className="skeleton-container d-flex flex-column w-100">
                <Skeleton width="90%" height="350px" widthRandomness='0' heightRandomness='0' />
                <Skeleton width="50%" height="20px" widthRandomness='0' heightRandomness='0' />
                <Skeleton width="80%" height="20px" widthRandomness='0' heightRandomness='0' />
            </div>
            <div className="skeleton-container d-flex flex-column w-100">
                <Skeleton width="90%" height="350px" widthRandomness='0' heightRandomness='0' />
                <Skeleton width="50%" height="20px" widthRandomness='0' heightRandomness='0' />
                <Skeleton width="80%" height="20px" widthRandomness='0' heightRandomness='0' />
            </div>
            <div className="skeleton-container d-flex flex-column w-100">
                <Skeleton width="90%" height="350px" widthRandomness='0' heightRandomness='0' />
                <Skeleton width="50%" height="20px" widthRandomness='0' heightRandomness='0' />
                <Skeleton width="80%" height="20px" widthRandomness='0' heightRandomness='0' />
            </div>
        </div>
    </div>
);

const LazyLoadComponent = ({ children }) => {
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

export default LazyLoadComponent;