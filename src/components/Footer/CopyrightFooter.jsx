import React from 'react';

const CopyrightFooter = () => {
    return (
        <footer className="footer sm:footer-horizontal footer-center bg-[#001931] text-white p-4">
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Hero Apps</p>
            </aside>
        </footer>
    );
};

export default CopyrightFooter;