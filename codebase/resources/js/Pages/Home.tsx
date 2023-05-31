import { Layout } from "@/components/Layout/Layout";
import { Link } from "@inertiajs/react";
import {} from "@heroicons/react/24/outline";

const AppLayout = () => {
    const testing = "TESTING 123";

    return (
        <Layout>
            <div className="text-white w-full h-full flex flex-col items-center p-36 overflow-y-auto">
                <div className="w-full grid grid-cols-4 flex justify-center gap-20">
                    <div className="hover:scale-105 cursor-pointer transition duration-50 relative h-96 row-auto bg-gray-900 border border-white rounded-lg p-8 flex flex-col gap-6 justify-between">
                        <div className="w-full h-[50%] bg-gray-800" />
                        <h1>Game title!</h1>
                        <p>
                            A description of the game goes here! And trails off
                            if it gets too...
                        </p>
                        <div className="bottom-8 flex flex-col gap-2">
                            <strong>Rating:</strong>
                            <div className="flex w-full gap-2">
                                <div className="h-4 w-4 rounded-full bg-white" />
                                <div className="h-4 w-4 rounded-full bg-white" />
                                <div className="h-4 w-4 rounded-full bg-white" />
                            </div>
                        </div>
                    </div>
                    <div className="hover:scale-105 cursor-pointer transition duration-50 relative h-96 row-auto bg-gray-900 border border-white rounded-lg p-8 flex flex-col gap-6 justify-between">
                        <div className="w-full h-[50%]  bg-gray-800" />
                        <h1>Game title!</h1>
                        <p>
                            A description of the game goes here! And trails off
                            if it gets too...
                        </p>
                        <div className="bottom-8 flex flex-col gap-2">
                            <strong>Rating:</strong>
                            <div className="flex w-full gap-2">
                                <div className="h-4 w-4 rounded-full bg-white" />
                                <div className="h-4 w-4 rounded-full bg-white" />
                                <div className="h-4 w-4 rounded-full bg-white" />
                            </div>
                        </div>
                    </div>
                    <div className="hover:scale-105 cursor-pointer transition duration-50 relative h-96 row-auto bg-gray-900 border border-white rounded-lg p-8 flex flex-col gap-6 justify-between">
                        <div className="w-full h-[50%] bg-gray-800" />
                        <h1>Game title!</h1>
                        <p>
                            A description of the game goes here! And trails off
                            if it gets too...
                        </p>
                        <div className="bottom-8 flex flex-col gap-2">
                            <strong>Rating:</strong>
                            <div className="flex w-full gap-2">
                                <div className="h-4 w-4 rounded-full bg-white" />
                                <div className="h-4 w-4 rounded-full bg-white" />
                                <div className="h-4 w-4 rounded-full bg-white" />
                            </div>
                        </div>
                    </div>
                    <div className="hover:scale-105 cursor-pointer transition duration-50 relative h-96 row-auto bg-gray-900 border border-white rounded-lg p-8 flex flex-col gap-6 justify-between">
                        <div className="w-full h-[50%] bg-gray-800" />
                        <h1>Game title!</h1>
                        <p>
                            A description of the game goes here! And trails off
                            if it gets too...
                        </p>
                        <div className="bottom-8 flex flex-col gap-2">
                            <strong>Rating:</strong>
                            <div className="flex w-full gap-2">
                                <div className="h-4 w-4 rounded-full bg-white" />
                                <div className="h-4 w-4 rounded-full bg-white" />
                                <div className="h-4 w-4 rounded-full bg-white" />
                            </div>
                        </div>
                    </div>
                    <div className="hover:scale-105 cursor-pointer transition duration-50 relative h-96 row-auto bg-gray-900 border border-white rounded-lg p-8 flex flex-col gap-6 justify-between">
                        <div className="w-full h-[50%] bg-gray-800" />
                        <h1>Game title!</h1>
                        <p>
                            A description of the game goes here! And trails off
                            if it gets too...
                        </p>
                        <div className="bottom-8 flex flex-col gap-2">
                            <strong>Rating:</strong>
                            <div className="flex w-full gap-2">
                                <div className="h-4 w-4 rounded-full bg-white" />
                                <div className="h-4 w-4 rounded-full bg-white" />
                                <div className="h-4 w-4 rounded-full bg-white" />
                            </div>
                        </div>
                    </div>
                    <div className="hover:scale-105 cursor-pointer transition duration-50 relative h-96 row-auto bg-gray-900 border border-white rounded-lg p-8 flex flex-col gap-6 justify-between">
                        <div className="w-full h-[50%] bg-gray-800" />
                        <h1>Game title!</h1>
                        <p>
                            A description of the game goes here! And trails off
                            if it gets too...
                        </p>
                        <div className="bottom-8 flex flex-col gap-2">
                            <strong>Rating:</strong>
                            <div className="flex w-full gap-2">
                                <div className="h-4 w-4 rounded-full bg-white" />
                                <div className="h-4 w-4 rounded-full bg-white" />
                                <div className="h-4 w-4 rounded-full bg-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default AppLayout;
