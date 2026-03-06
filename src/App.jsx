import React, { useState, useMemo } from "react";
import {
  Book,
  Music,
  Sun,
  ChevronRight,
  Cross,
  Search,
  Home,
  Type,
  Plus,
  Minus,
  Copy,
  Check,
} from "lucide-react";

// --- DATA ---

const ORASAUN_DATA = [
  {
    id: "angelus",
    title: "Angelus",
    context: "Tempu bai-bain",
    content: `Na'i Maromak nia Anju hodi Na'i Maromak nia lian ba Maria.\nNia ko'us dau-daun tamba Espiritu Santu nia grasa.\n\nAve Maria...\n\nHa'u ne'e, Na’i Maromak nia atan deit.\nAtu halo tuir duni Ita Boot nia lian.\n\nAve Maria...\n\nMaromak Filho halo an ba mane.\nNia mai moris duni hamutuk ho ita.\n\nAve Maria...\n\nMaromak nia Inan Santa, harohan mai ami ata.\nAmi atu bele hetan Jesus Kristu nia rahun diak.\n\nOrasaun: Na'i Maromak, ami ata husu ba Ita Boot atu haraik Ita Boot nia grasa mai ami nia klamar. Tuir Anju nia lia ami hatene lolos katak Ita Boot nia Oan halo An ba Mane duni. Tan nia terus to'o mate iha krus, ami harohan ba Ita Boot, halo ami ata moris tali atu ba iha lalehan. Ami husu ne'e tanba ami nia Na'i Jesus Kristu. Amen.`,
  },
  {
    id: "regina-coeli",
    title: "Regina Coeli",
    context: "Tempu Pascoa",
    content: `Liurai Feto lalehan, Ita Boot neon kontente, aleluia!\nTanba Oan Ita Boot kous, aleluia.\n\nMoris fali nudar Nia uluk hateten, aleluia!\nHarohan Na’i Maromak mai ami, aleluia.\nOh Virjem Maria, Ita Boot bele ona kontente teb-tebes, aleluia!\nTanba ami na'i Na'i moris fali lolos, aleluia!\n\nOrasaun: Na'i Maromak, Ita boot halo ema hot-hotu kontente tanba Ita Boot nia Oan, ami Na'i Jesus Kristu, moris fali duni; tan nia Inan Virjem Maria, halo ami hetan rahun diak nafatin iha lalehan. Ami husu ne’e tanba ami Na'i Jesus Kristu. Amen.`,
  },
  {
    id: "dader",
    title: "Orasaun Dader",
    content: `Ha'u nia Maromak, ha'u adora Ita boot, ha'u hadomi Ita Boot, ho ha'u nia laran tomak. Ha'u agradese Ita Boot tanba Ita Boot mak halo ha'u moris, halo ha'u sarani, halo ha'u deskansa iha kalan ida ne'e. Buat hot-hotu ha'u halo iha loron ne'e ha'u hasa'e ba ItaBoot, Na’i Maromak halo ha’u moris ohin ne’e hodi tuir deit Ita Boot nia hakarak, hodi buka deit Ita Boot nia gloria. Dada ha’u sai hosi sala no hosi buat aat hotu. Haraik Ita Boot nia grasa ho Ita Boot nia bensa mai ha’u, ba ha’u nia parente sira no ba ema hot-hotu. Amen.`,
  },
  {
    id: "kontrisaun",
    title: "Aktu de Kontrisaun",
    content: `Ha’u nia Maromak, ha’u hanoin ho laran moras sala hot-hotu ha’u halo ona kontra Ita Boot diak liu, nebe halo diak deit mai ha’u. Ha’u hasa’e lialos ba Ita Boot, hodi Ita Boot nia grasa, lakohi sala tan. Ha’u husu barak Ita Boot perdua ha’u, tanba Ita Boot laran diak ho tanba ha’u nia Na’i Jesus Kristu terus to'o mate tanba ha’u.`,
  },
];

const KNANANUK_DATA = [
  {
    id: 1,
    category: "Entrada",
    title: "Anin Maurin",
    content:
      "Anin malirin tasi fehan,\nlaloran tasi baku ba mai.\nRai badin lian mai\nfahe hakmatek matak malirin.\n\nKristu Maksoin, fatuk karan kmanek,\nHa'u laran metin ba Ita Boot\nIta mak dalan los; Iori ha'u to'o lalehan.",
  },
  {
    id: 2,
    category: "Entrada",
    title: "Bele Tama ba Lalehan",
    content:
      "Bele tama ba lalehan, (2x)\nse halo an kiik oan, (2x)\nbasa Jesus dehan, (2x)\n“Hato'o mai Ha’u (2x)\nkiik oan sira ne'e.” (2x)",
  },
  {
    id: 3,
    category: "Entrada",
    title: "Ema Rai Hotu",
    content:
      "Ema rai hotu, ema lubun boot, ema buka diak;\nNa’i nia ema, hahi o nia Maksoin.\n\nAmi hananu Kristu, Na'i Maromak nia Oan.\nAmi hahi Na'i Maromak boot tebes nia tutor Lia.",
  },
];

// --- COMPONENTS ---

const Header = ({ title, showBack, onBack }) => (
  <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 px-4 py-3 flex items-center justify-between">
    <div className="flex items-center gap-3">
      {showBack && (
        <button
          onClick={onBack}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronRight className="w-6 h-6 rotate-180 text-gray-600" />
        </button>
      )}
      <h1 className="text-xl font-bold bg-gradient-to-r from-pink-500 to-blue-600 bg-clip-text text-transparent">
        {title}
      </h1>
    </div>
    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-400 to-blue-500 flex items-center justify-center shadow-sm">
      <Cross className="w-4 h-4 text-white" />
    </div>
  </header>
);

const Card = ({ children, onClick, className = "" }) => (
  <div
    onClick={onClick}
    className={`bg-white rounded-2xl p-4 shadow-sm border border-gray-50 active:scale-[0.98] transition-all cursor-pointer hover:border-pink-100 ${className}`}
  >
    {children}
  </div>
);

const ContentDisplay = ({ item, fontSize }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = `${item.title}\n\n${item.content}`;
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-2xl font-extrabold text-gray-800 tracking-tight">
            {item.title}
          </h2>
          {item.context && (
            <p className="text-sm font-semibold text-pink-500 mt-1">
              {item.context}
            </p>
          )}
        </div>
        <button
          onClick={handleCopy}
          className="p-2.5 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors shadow-sm"
          title="Kopia testu"
        >
          {copied ? (
            <Check className="w-5 h-5 text-green-500" />
          ) : (
            <Copy className="w-5 h-5 text-gray-400" />
          )}
        </button>
      </div>
      <div
        className="text-gray-700 leading-relaxed whitespace-pre-wrap font-serif"
        style={{ fontSize: `${fontSize}px` }}
      >
        {item.content}
      </div>
    </div>
  );
};

// --- MAIN APP ---

export default function App() {
  const [view, setView] = useState("home");
  const [selectedItem, setSelectedItem] = useState(null);
  const [fontSize, setFontSize] = useState(18);
  const [searchTerm, setSearchTerm] = useState("");

  const navigateToContent = (item, originView) => {
    setSelectedItem({ ...item, origin: originView });
    setView("content");
  };

  const goBack = () => {
    if (view === "content" && selectedItem?.origin) {
      setView(selectedItem.origin);
    } else {
      setView("home");
    }
  };

  const filteredSongs = useMemo(() => {
    return KNANANUK_DATA.filter(
      (s) =>
        s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.content.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col max-w-md mx-auto shadow-2xl relative overflow-hidden ring-1 ring-gray-100">
      {/* Decorative background blobs */}
      <div className="fixed inset-0 pointer-events-none opacity-20 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-pink-300 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -right-20 w-72 h-72 bg-blue-300 rounded-full blur-3xl" />
      </div>

      <Header
        title={
          view === "home"
            ? "Harohan ba Na'i"
            : view.charAt(0).toUpperCase() + view.slice(1)
        }
        showBack={view !== "home"}
        onBack={goBack}
      />

      <main className="flex-1 overflow-y-auto px-5 py-6 z-10 relative">
        {view === "home" && (
          <div className="space-y-8 animate-in fade-in duration-700">
            <div className="bg-gradient-to-br from-pink-500 via-pink-600 to-indigo-700 rounded-[2.5rem] p-8 text-white shadow-xl shadow-pink-200/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Cross className="w-24 h-24" />
              </div>
              <h2 className="text-lg font-medium opacity-90 mb-1">
                Dader diak, Sarani,
              </h2>
              <p className="text-2xl font-extrabold mb-6 leading-tight">
                "Na'i Maromak mak ha'u nia ksolok."
              </p>
              <button
                onClick={() =>
                  navigateToContent(
                    ORASAUN_DATA.find((p) => p.id === "dader"),
                    "home",
                  )
                }
                className="bg-white text-pink-600 px-6 py-3 rounded-2xl text-sm font-bold shadow-sm active:scale-95 transition-all"
              >
                Reza dader nian
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card
                onClick={() => setView("prayers")}
                className="flex flex-col items-center justify-center gap-3 h-36 bg-white/90"
              >
                <div className="p-4 bg-pink-50 rounded-[1.5rem] text-pink-500">
                  <Book className="w-8 h-8" />
                </div>
                <span className="font-bold text-gray-700">Orasaun</span>
              </Card>
              <Card
                onClick={() => setView("songs")}
                className="flex flex-col items-center justify-center gap-3 h-36 bg-white/90"
              >
                <div className="p-4 bg-blue-50 rounded-[1.5rem] text-blue-500">
                  <Music className="w-8 h-8" />
                </div>
                <span className="font-bold text-gray-700">Knananuk</span>
              </Card>
            </div>

            <section>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">
                  Favoritu
                </h3>
              </div>
              <div className="space-y-3">
                {ORASAUN_DATA.slice(0, 3).map((p) => (
                  <div
                    key={p.id}
                    onClick={() => navigateToContent(p, "home")}
                    className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm active:bg-gray-50 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform">
                      <ChevronRight className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-gray-700">{p.title}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {view === "prayers" && (
          <div className="space-y-3 animate-in fade-in slide-in-from-right-4 duration-300">
            {ORASAUN_DATA.map((p) => (
              <Card
                key={p.id}
                onClick={() => navigateToContent(p, "prayers")}
                className="flex items-center gap-4 py-5"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-50 to-white flex items-center justify-center text-pink-500 font-bold shadow-inner">
                  {p.title.charAt(0)}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800">{p.title}</h3>
                  <p className="text-xs text-gray-400 line-clamp-1">
                    {p.content.substring(0, 60)}...
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-300" />
              </Card>
            ))}
          </div>
        )}

        {view === "songs" && (
          <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-pink-400 transition-colors" />
              <input
                type="text"
                placeholder="Buka knananuk..."
                className="w-full bg-white border border-gray-200 rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-4 focus:ring-pink-500/10 focus:border-pink-300 transition-all text-sm font-medium"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="grid gap-3">
              {filteredSongs.map((song) => (
                <Card
                  key={song.id}
                  onClick={() => navigateToContent(song, "songs")}
                  className="flex justify-between items-center group py-5"
                >
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-500 bg-blue-50/50 px-3 py-1 rounded-full mb-2 inline-block">
                      {song.category}
                    </span>
                    <h3 className="font-bold text-gray-800 text-lg">
                      {song.title}
                    </h3>
                  </div>
                  <ChevronRight className="w-6 h-6 text-gray-200 group-hover:text-pink-400 group-hover:translate-x-1 transition-all" />
                </Card>
              ))}
            </div>
          </div>
        )}

        {view === "content" && selectedItem && (
          <ContentDisplay item={selectedItem} fontSize={fontSize} />
        )}
      </main>

      {/* Floating Font Size Controls */}
      {view === "content" && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-white/95 backdrop-blur-xl border border-gray-100 p-2.5 rounded-3xl shadow-2xl z-50 animate-in slide-in-from-bottom-10">
          <button
            onClick={() => setFontSize((prev) => Math.max(prev - 2, 12))}
            className="p-2.5 hover:bg-gray-100 rounded-2xl transition-colors active:scale-90"
          >
            <Minus className="w-5 h-5 text-gray-500" />
          </button>
          <div className="w-px h-6 bg-gray-200" />
          <div className="flex items-center gap-2 px-2">
            <Type className="w-4 h-4 text-gray-400" />
            <span className="text-xs font-black text-gray-400 w-4">
              {fontSize}
            </span>
          </div>
          <div className="w-px h-6 bg-gray-200" />
          <button
            onClick={() => setFontSize((prev) => Math.min(prev + 2, 36))}
            className="p-2.5 hover:bg-gray-100 rounded-2xl transition-colors active:scale-90"
          >
            <Plus className="w-5 h-5 text-gray-500" />
          </button>
        </div>
      )}

      {/* Navigation Bar */}
      <nav className="bg-white/80 backdrop-blur-lg border-t border-gray-100 py-3 px-8 flex justify-between items-center z-50">
        {[
          { icon: Home, label: "Oin", id: "home" },
          { icon: Book, label: "Reza", id: "prayers" },
          { icon: Music, label: "Knananuk", id: "songs" },
          { icon: Sun, label: "Rosariu", id: "rosary" },
        ].map((btn) => (
          <button
            key={btn.id}
            onClick={() => setView(btn.id)}
            className={`flex flex-col items-center gap-1.5 transition-all ${view === btn.id ? "text-pink-500 scale-110" : "text-gray-400 hover:text-gray-600"}`}
          >
            <btn.icon
              className={`w-6 h-6 ${view === btn.id ? "fill-pink-50" : ""}`}
            />
            <span className="text-[10px] font-black uppercase tracking-tighter">
              {btn.label}
            </span>
          </button>
        ))}
      </nav>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Lora:ital,wght@0,400;0,500;1,400&display=swap');
        
        body {
          font-family: 'Plus Jakarta Sans', sans-serif;
          background-color: #f1f5f9;
        }

        .font-serif {
          font-family: 'Lora', serif;
        }

        ::-webkit-scrollbar {
          width: 0px;
          background: transparent;
        }

        .animate-in {
          animation: fadeIn 0.4s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `,
        }}
      />
    </div>
  );
}
