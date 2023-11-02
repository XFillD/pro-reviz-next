const THIS_YEAR = new Date().getFullYear();

const Footer = () => (
    <div className="w-full relative bg-black p-6 shadow md:p-8 lg:p-10">
        <div className="flex justify-between items-center max-w-7xl text-white mx-auto flex-col gap-2 md:flex-row">
            <p>Created by moontech@gmail.com</p>
            <p>© {THIS_YEAR} PRO-REVIZ. All rights reserved.</p>
        </div>
    </div>
);

export default Footer;
