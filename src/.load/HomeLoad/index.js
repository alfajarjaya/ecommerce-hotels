import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Skeleton from 'react-skeleton-loader';
import 'bootstrap/dist/css/bootstrap.min.css';

const SkeletonLoader = () => (
    <div className="skeleton-container" style={{ width: '100%', height: '100%' }}>
        <Skeleton width="100vw" height="100vh" widthRandomness='0' color=' #E1E1E1'/>
    </div>
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
