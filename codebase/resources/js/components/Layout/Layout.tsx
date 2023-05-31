interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="h-screen w-screen overflow-hidden bg-gradient-to-b from-[#0E0E52] to-black">
            <div className="relative h-16 w-full flex items-center justify-between text-white">
                <div className="absolute w-full h-full bg-black opacity-50 backdrop-blur-lg" />
                <div className="z-50 p-4">
                    <span>Console Rating App</span>
                </div>
            </div>
            <div className="w-full h-full">{children}</div>
        </div>
    );
};
