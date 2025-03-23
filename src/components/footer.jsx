import React from "react";

export default function Footer() {
    return (
        <footer className="bg-green-700 text-white py-12 rounded-t-[5rem] h-[20rem]">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-2xl font-semibold mb-4">About Wasps</h3>
                        <p className="text-sm text-gray-300">
                            Wasps are important pollinators and pest controllers. They play a key role in maintaining balance within ecosystems.
                        </p>
                    </div>
                    <div className="flex flex-col items-center md:items-center">
                        <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#about" className="text-sm hover:text-gray-300">About</a></li>
                            <li><a href="#venom" className="text-sm hover:text-gray-300">Wasp Venom</a></li>
                            <li><a href="#species" className="text-sm hover:text-gray-300">Wasp Species</a></li>
                            <li><a href="#contact" className="text-sm hover:text-gray-300">Contact</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-end">
                        <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
                        <div className="flex flex-col space-y-4 text-sm">
                            <a href="https://facebook.com" className="hover:text-gray-300">Facebook</a>
                            <a href="https://twitter.com" className="hover:text-gray-300">Twitter</a>
                            <a href="https://instagram.com" className="hover:text-gray-300">Instagram</a>
                            <a href="https://instagram.com" className="hover:text-gray-300">Youtube</a>
                        </div>
                    </div>
                </div>
                <div className="mt-12 text-center">
                    <p className="text-sm text-white font-medium">&copy; 2025 Wasp Website. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
