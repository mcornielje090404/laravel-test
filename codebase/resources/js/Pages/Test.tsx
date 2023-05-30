import { Link } from "@inertiajs/react";
import React from "react";

interface TestPageProps {
    testString: string;
}

const Test: React.FC<TestPageProps> = ({ testString }) => {
    return (
        <div className="h-screen w-screen">
            <div className="w-full p-4 bg-black text-white">
                <Link href="/">home</Link>
                <div className="text-3xl">{testString}</div>
            </div>
        </div>
    );
};

export default Test;
