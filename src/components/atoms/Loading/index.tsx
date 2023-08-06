type LoadingProps = {
    size: "s" | "m" | "l";
};

const Loading = ({ size }: LoadingProps) => {
    const sizeLoading = {
        s: "w-4 h-4",
        m: "w-8 h-8",
        l: "w-16 h-16",
    };

    return (
        <div className="flex justify-center">
            <div
                className={`${sizeLoading[size]} rounded-full border-2 border-b-transparent animate-spin border-[inherit]`}
            />
        </div>
    );
};

export default Loading;
