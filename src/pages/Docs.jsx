import React, { useRef, useState } from "react";
import { FileDown, FileText } from "lucide-react";
import jsPDF from "jspdf";

const CONTENT = [
    { type: "title", text: "StudyMatch UNSTA — Documentación Frontend" },
    { type: "subtitle", text: "Proyecto Final — UNSTA Campus Yerba Buena | Abril 2026" },
    { type: "subtitle", text: "Stack: React 18 + Vite + Tailwind CSS + shadcn/ui + React Router + TanStack Query" },

    { type: "h1", text: "1. Resumen del Proyecto" },
    { type: "body", text: "StudyMatch UNSTA es una plataforma web académica para conectar estudiantes de UNSTA. Permite encontrar compañeros con materias en común, crear grupos de estudio, chatear, coordinar eventos y gestionar el perfil académico." },

    { type: "h1", text: "2. Stack Tecnológico" },
    {
        type: "table", headers: ["Tecnología", "Versión", "Uso"], rows: [
            ["React", "18.2.0", "Framework UI"],
            ["Vite", "Latest", "Build tool"],
            ["Tailwind CSS", "Latest", "Estilos utilitarios"],
            ["shadcn/ui", "Latest", "Componentes UI base"],
            ["React Router DOM", "6.26.0", "Navegación SPA"],
            ["TanStack React Query", "5.84.1", "Data fetching / cache"],
            ["Framer Motion", "11.16.4", "Animaciones"],
            ["Lucide React", "0.475.0", "Iconografía"],
            ["date-fns", "3.6.0", "Manipulación de fechas"],
        ]
    },

    { type: "h1", text: "3. Paleta de Colores (Modo Claro)" },
    {
        type: "table", headers: ["Token", "HSL", "Hex aprox.", "Uso"], rows: [
            ["--background", "220 20% 97%", "#F4F5F8", "Fondo general"],
            ["--foreground", "220 20% 10%", "#161A22", "Texto principal"],
            ["--card", "0 0% 100%", "#FFFFFF", "Tarjetas y paneles"],
            ["--primary", "220 68% 37%", "#1F4D9C", "Azul principal (CTA, activos)"],
            ["--accent", "213 94% 56%", "#2C8BF5", "Azul brillante (highlights)"],
            ["--muted", "220 15% 94%", "#EBECF0", "Fondos tenues"],
            ["--muted-foreground", "220 10% 45%", "#6B7280", "Texto secundario"],
            ["--border", "220 15% 90%", "#E1E4ED", "Bordes"],
            ["--destructive", "0 84% 60%", "#F04438", "Errores / eliminar"],
            ["--success", "160 84% 39%", "#0FAD74", "Aprobado / éxito"],
            ["--warning", "38 92% 50%", "#F79009", "Advertencias / en progreso"],
        ]
    },

    { type: "h1", text: "4. Tipografía" },
    { type: "body", text: "Fuente principal: Inter (Google Fonts) — Pesos: 300, 400, 500, 600, 700, 800, 900" },
    { type: "body", text: "Variable CSS: --font-inter: 'Inter', sans-serif | Clase Tailwind: font-inter" },
    { type: "body", text: "Aplicada globalmente: body { @apply font-inter; }" },

    { type: "h1", text: "5. Border Radius" },
    { type: "body", text: "--radius: 0.75rem (12px)  |  lg → 12px  |  md → 10px  |  sm → 8px" },

    { type: "h1", text: "6. Rutas de la Aplicación" },
    {
        type: "table", headers: ["Ruta", "Componente", "Descripción", "Auth"], rows: [
            ["/", "Landing", "Página pública de bienvenida", "No"],
            ["/login", "Landing", "Alias de login (Base44 auth)", "No"],
            ["/register", "Register", "Pantalla de registro", "No"],
            ["/onboarding", "Onboarding", "Configuración inicial del perfil", "Sí"],
            ["/dashboard", "Dashboard", "Panel con sugerencias", "Sí"],
            ["/matching", "Matching", "Buscar y conectar estudiantes", "Sí"],
            ["/groups", "Groups", "Listar y crear grupos", "Sí"],
            ["/groups/:id", "GroupDetail", "Detalle, chat y eventos del grupo", "Sí"],
            ["/profile", "Profile", "Perfil, materias y calendario", "Sí"],
        ]
    },

    { type: "h1", text: "7. Páginas — Detalle" },

    { type: "h2", text: "7.1 Landing (/)" },
    { type: "body", text: "Layout full-width sin AppLayout. Secciones: Header (logo + nav), Hero animado (Framer Motion), Features (3 cards), Footer. Floating cards animadas sobre el hero. Animaciones fadeUp staggered delay × 0.15s." },

    { type: "h2", text: "7.2 Onboarding (/onboarding)" },
    { type: "body", text: "4 pasos con barra de progreso: (1) Datos personales, (2) Año académico, (3) Materias por año con bloqueo de años superiores, (4) Intención (buscar apoyo / ayudar / ambos). Al finalizar guarda perfil y crea UserSubject en bulk." },

    { type: "h2", text: "7.3 Dashboard (/dashboard)" },
    { type: "body", text: "Layout 2 columnas desktop. Componentes: SuggestedGroups + SuggestedStudents. Banner inferior con gradiente from-primary to-accent y CTA a Matching." },

    { type: "h2", text: "7.4 Matching (/matching)" },
    { type: "body", text: "Filtros: materia, intención, estado. Cards en grid 3 col con avatar inicial, intención, materia en común, estado. Acciones: 'Mensaje' → DirectMessageModal (chat directo) | 'Grupo' → CreateGroupFromMatchModal (crea grupo y agrega a ambos)." },

    { type: "h2", text: "7.5 Groups (/groups)" },
    { type: "body", text: "Lista de grupos con badge tipo (color), cantidad miembros, materia, horario. Border superior accent. Hover: -translate-y-1 + shadow-lg. Modal CreateGroupModal." },

    { type: "h2", text: "7.6 GroupDetail (/groups/:id)" },
    { type: "body", text: "Layout 3 col (1 info + 2 chat/calendario). Panel izquierdo: info grupo, botón Unirse, integrantes. Panel derecho: GroupChat (polling 3s, burbujas estilo WhatsApp) + GroupCalendar (eventos con caja fecha visual)." },

    { type: "h2", text: "7.7 Profile (/profile)" },
    { type: "body", text: "Secciones: (1) Header avatar+badges, (2) Datos académicos editable, (3) Mis Materias por año con edición inline hover→lápiz→formulario, (4) Mi Calendario con todos los eventos de todos los grupos del usuario." },

    { type: "h1", text: "8. Componentes de Layout" },
    {
        type: "table", headers: ["Componente", "Descripción"], rows: [
            ["AppLayout", "Shell: flex h-screen. Sidebar fijo desktop + scroll en main"],
            ["Sidebar", "w-64, fondo card. Logo + nav items + logout → redirige a /"],
            ["TopBar", "Logo mobile-only + saludo + avatar con iniciales"],
            ["MobileNav", "Bottom nav, 4 ítems, ícono + label, activo en text-primary"],
        ]
    },

    { type: "h1", text: "9. Componentes UI" },
    {
        type: "table", headers: ["Componente", "Variantes / Props"], rows: [
            ["StatusBadge", "success, warning, destructive, muted, primary, accent"],
            ["Button", "default, destructive, outline, secondary, ghost, link | sm/lg/icon"],
            ["Select", "Radix UI: Trigger + Content + Item"],
            ["Dialog", "Modal accesible Radix con overlay y close button"],
            ["Input", "h-9, borde input, ring en focus"],
        ]
    },

    { type: "h1", text: "10. Entidades (Base44 Backend)" },
    {
        type: "table", headers: ["Entidad", "Campos principales"], rows: [
            ["Career", "name"],
            ["Subject", "name, career_id, year"],
            ["UserSubject", "user_id, subject_id, subject_name, status, level, intention"],
            ["StudyGroup", "name, subject_name, modality, schedule, type, member_count, max_members"],
            ["GroupMember", "group_id, user_id, user_name"],
            ["GroupMessage", "group_id, user_id, sender_name, content"],
            ["GroupEvent", "group_id, group_name, title, description, date_time, location"],
            ["DirectMessage", "from_user_id, from_user_name, to_user_id, content, subject_name"],
        ]
    },

    { type: "h1", text: "11. Patrones de UX Notables" },
    { type: "body", text: "1. Hover interactivo: hover:-translate-y-0.5 hover:shadow-md transition-all duration-200" },
    { type: "body", text: "2. Skeleton loading: animate-pulse en todas las listas durante carga" },
    { type: "body", text: "3. Estados vacíos: ícono centrado + texto + CTA en todas las secciones" },
    { type: "body", text: "4. Edición inline: lápiz visible solo en hover (opacity-0 group-hover:opacity-100)" },
    { type: "body", text: "5. Scroll automático al último mensaje en chats (scrollTop = scrollHeight)" },
    { type: "body", text: "6. Polling de mensajes cada 3 segundos en GroupChat y DirectMessageModal" },
    { type: "body", text: "7. Barra de progreso en onboarding con pasos coloreados" },
    { type: "body", text: "8. Bloqueo por año: años superiores al actual no editables en materias" },
    { type: "body", text: "9. Responsive: sidebar solo md:, nav inferior solo mobile, grids colapsan a 1 col" },

    { type: "h1", text: "12. Animaciones (Framer Motion — solo Landing)" },
    { type: "body", text: "fadeUp staggered: { hidden: opacity 0 y 30 → visible: opacity 1 y 0, delay i×0.15s, duration 0.5s }" },
    { type: "body", text: "Hero image: opacity 0 scale 0.95 → 1 scale 1, delay 0.3s, duration 0.6s" },
    { type: "body", text: "Floating cards: opacity 0 x±20 → opacity 1 x 0, delay 0.8–1.0s" },
    { type: "body", text: "Feature cards: whileInView opacity 1 y 0, viewport once: true" },

    { type: "footer", text: "StudyMatch UNSTA © 2026 — Documentación Frontend" },
];

export default function Docs() {
    const generating = useRef(false);
    const [loading, setLoading] = useState(false);

    const downloadMD = () => {
        window.open("/StudyMatch_Documentacion_Frontend.md", "_blank");
    };

    const downloadPDF = async () => {
        if (generating.current) return;
        generating.current = true;
        setLoading(true);

        const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
        const pageW = 210;
        const pageH = 297;
        const margin = 15;
        const usableW = pageW - margin * 2;
        let y = margin;

        const checkPage = (needed = 8) => {
            if (y + needed > pageH - margin) {
                doc.addPage();
                y = margin;
            }
        };

        const addText = (text, fontSize, color, isBold, maxWidth) => {
            doc.setFontSize(fontSize);
            doc.setTextColor(...color);
            if (isBold) doc.setFont("helvetica", "bold");
            else doc.setFont("helvetica", "normal");
            const lines = doc.splitTextToSize(text, maxWidth || usableW);
            checkPage(lines.length * (fontSize * 0.4));
            doc.text(lines, margin, y);
            y += lines.length * (fontSize * 0.4) + 1;
        };

        for (const block of CONTENT) {
            if (block.type === "title") {
                checkPage(20);
                // Blue header bar
                doc.setFillColor(31, 77, 156);
                doc.rect(0, 0, pageW, 28, "F");
                doc.setFontSize(16);
                doc.setFont("helvetica", "bold");
                doc.setTextColor(255, 255, 255);
                doc.text(block.text, margin, 12);
                y = 35;
            } else if (block.type === "subtitle") {
                addText(block.text, 8.5, [80, 100, 140], false);
                y += 1;
            } else if (block.type === "h1") {
                y += 5;
                checkPage(12);
                doc.setFillColor(31, 77, 156);
                doc.rect(margin, y - 4, usableW, 8, "F");
                doc.setFontSize(10);
                doc.setFont("helvetica", "bold");
                doc.setTextColor(255, 255, 255);
                doc.text(block.text, margin + 2, y + 1);
                y += 7;
            } else if (block.type === "h2") {
                y += 3;
                checkPage(8);
                doc.setFillColor(237, 242, 250);
                doc.rect(margin, y - 3, usableW, 7, "F");
                doc.setFontSize(9.5);
                doc.setFont("helvetica", "bold");
                doc.setTextColor(31, 77, 156);
                doc.text(block.text, margin + 2, y + 1.5);
                y += 7;
            } else if (block.type === "body") {
                addText("• " + block.text, 8, [40, 50, 65], false);
                y += 1;
            } else if (block.type === "table") {
                y += 3;
                const cols = block.headers.length;
                const colW = usableW / cols;
                // Header row
                checkPage(8);
                doc.setFillColor(44, 139, 245);
                doc.rect(margin, y - 3, usableW, 7, "F");
                doc.setFontSize(8);
                doc.setFont("helvetica", "bold");
                doc.setTextColor(255, 255, 255);
                block.headers.forEach((h, i) => doc.text(h, margin + i * colW + 2, y + 1));
                y += 6;
                // Data rows
                block.rows.forEach((row, ri) => {
                    checkPage(6);
                    if (ri % 2 === 0) {
                        doc.setFillColor(245, 247, 252);
                        doc.rect(margin, y - 3, usableW, 6, "F");
                    }
                    doc.setFont("helvetica", "normal");
                    doc.setTextColor(40, 50, 65);
                    row.forEach((cell, i) => {
                        const lines = doc.splitTextToSize(String(cell), colW - 3);
                        doc.text(lines[0] || "", margin + i * colW + 2, y + 1);
                    });
                    y += 6;
                });
                y += 3;
            } else if (block.type === "footer") {
                y = pageH - 12;
                doc.setDrawColor(200, 210, 230);
                doc.line(margin, y - 3, pageW - margin, y - 3);
                doc.setFontSize(7.5);
                doc.setFont("helvetica", "italic");
                doc.setTextColor(120, 130, 150);
                doc.text(block.text, margin, y + 1);
            }
        }

        // Page numbers
        const totalPages = doc.getNumberOfPages();
        for (let i = 1; i <= totalPages; i++) {
            doc.setPage(i);
            doc.setFontSize(7.5);
            doc.setFont("helvetica", "normal");
            doc.setTextColor(150, 160, 175);
            doc.text(`${i} / ${totalPages}`, pageW - margin, pageH - 8, { align: "right" });
        }

        doc.save("StudyMatch_Documentacion_Frontend.pdf");
        generating.current = false;
        setLoading(false);
    };

    return (
        <div className="min-h-full flex items-center justify-center p-6">
            <div className="bg-card rounded-2xl border border-border shadow-xl shadow-primary/5 p-10 max-w-lg w-full text-center space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                    <FileText size={32} className="text-primary" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-foreground">Documentación Frontend</h1>
                    <p className="text-muted-foreground mt-2 text-sm">
                        Descargá la documentación completa del frontend de StudyMatch UNSTA: páginas, componentes, estilos, paleta de colores, tipografía y más.
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                    <button
                        onClick={downloadPDF}
                        disabled={loading}
                        className="flex flex-col items-center gap-3 p-5 rounded-xl border-2 border-primary/20 hover:border-primary hover:bg-primary/10 transition-all duration-200 group bg-card"
                    >
                        <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center group-hover:bg-destructive/20 transition-colors">
                            <FileDown size={24} className="text-destructive" />
                        </div>
                        <div>
                            <p className="font-bold text-foreground text-sm">Descargar PDF</p>
                            <p className="text-xs text-muted-foreground">Formato imprimible</p>
                        </div>
                        {loading && <p className="text-xs text-primary animate-pulse">Generando...</p>}
                    </button>

                    <button
                        onClick={downloadMD}
                        className="flex flex-col items-center gap-3 p-5 rounded-xl border-2 border-accent/20 hover:border-accent hover:bg-accent/10 transition-all duration-200 group bg-card"
                    >
                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                            <FileText size={24} className="text-accent" />
                        </div>
                        <div>
                            <p className="font-bold text-foreground text-sm">Descargar Markdown</p>
                            <p className="text-xs text-muted-foreground">Para GitHub / Notion</p>
                        </div>
                    </button>
                </div>
                <p className="text-xs text-muted-foreground">StudyMatch UNSTA © 2026</p>
            </div>
        </div>
    );
}
