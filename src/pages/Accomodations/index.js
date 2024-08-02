import React, { lazy, Suspense } from "react";
import Loader from "../.load";

const FamilyRoom = lazy(() => import('./FamilyRoom'));

export default class Accomordation extends React.Component {
    render() {
        return (
            <>
                <Suspense fallback={<Loader />}>
                    <FamilyRoom />
                </Suspense>
            </>
        )
    }
}