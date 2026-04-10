import { GraduationCap } from "lucide-react";

function Footer() {
    return (
        <footer className="border-t border-border py-8 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2">
                    <GraduationCap className="text-primary" size={20} />
                    <span className="font-bold text-primary text-sm">StudyMatch UNSTA</span>
                </div>
                <p className="text-xs text-muted-foreground">© 2026 StudyMatch — UNSTA, Campus Yerba Buena

                </p>
            </div>
        </footer>
    );
}

export default Footer;