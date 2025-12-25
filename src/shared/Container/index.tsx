const Container = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return <div className='container'>{children}</div>;
};

export default Container;
