export const Footer: React.FC = () => {
    const currentYear: number = new Date().getFullYear();
    return (
        <footer className='mx-auto flex  border-t-2 border-secondary p-4 text-secondary'>
            <p className='mx-auto'>
                Dan Jecu · {currentYear} · All rights reserved
            </p>
        </footer>
    );
};
