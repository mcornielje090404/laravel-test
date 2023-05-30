import { Link } from "@inertiajs/react";
import React from "react";

const AppLayout = () => {
    return (
        <>
            <Link href="/test">test</Link>
        </>
    );
};

AppLayout.layout = (page: React.ReactNode) => (
    <div className="h-screen w-screen">
        <div className="w-full p-4 bg-black text-white">{page}</div>
    </div>
);

export default AppLayout;
