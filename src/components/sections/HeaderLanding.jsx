import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "../ui/Button";

function HeaderLanding() {
    return (
        <header className="w-full border-b border-slate-200 bg-white/90 backdrop-blur-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-[#1D4BA0] flex items-center justify-center">
                        <GraduationCap
                            className="text-white"
                            size={22}
                        />
                    </div>

                    <div>
                        <h1 className="text-xl font-bold text-[#1D4BA0] leading-none">
                            StudyMatch
                        </h1>

                        <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-slate-500">
                            UNSTA
                        </span>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    <Link to="/login">
                        <button className="text-slate-700 font-medium hover:text-[#1D4BA0] transition">
                            Ingresar
                        </button>
                    </Link>

                    <Link to="/register">
                        <Button>
                            Registrarse
                        </Button>
                    </Link>
                </div>

            </div>
        </header>
    );
}

export default HeaderLanding;