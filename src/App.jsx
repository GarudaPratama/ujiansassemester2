import React from 'react';

function App() {
  return (
    
    <div className="min-h-screen bg-black font-sans text-white flex flex-col justify-between antialiased selection:bg-amber-400 selection:text-black">
      
      
      <nav className="w-full max-w-5xl mx-auto px-8 py-8 flex justify-between items-center">
        
        <div className="text-sm font-bold tracking-widest text-zinc-200">
          M<span className="text-amber-400">.</span>GARUDA
        </div>
        
        
        <div className="flex space-x-6 text-xs tracking-wider text-zinc-500 font-medium">
          <a href="#work" className="hover:text-amber-400 transition-colors duration-300">WORK</a>
          <a href="#about" className="hover:text-amber-400 transition-colors duration-300">ABOUT</a>
          <a href="#contact" className="hover:text-amber-400 transition-colors duration-300">CONTACT</a>
        </div>
      </nav>

      
      <main className="flex-grow flex flex-col items-center justify-center text-center px-6 max-w-3xl mx-auto">
        
        
        <div className="w-40 h-40 md:w-44 md:h-44 bg-zinc-900 rounded-[40%_60%_70%_30%_/_40%_40%_60%_50%] overflow-hidden mb-8 transition-transform duration-500 hover:scale-105">
          <img 
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80" 
            alt="Foto Profil Alifi An" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>

        
        <span className="text-amber-400 text-xs tracking-[0.2em] uppercase font-semibold mb-4 block">
          Independent Developer
        </span>

        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
          Garuda Pratama
        </h1>

        
        <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-xl mb-10 font-normal">
          Fokus pada pembuatan produk digital yang bersih secara visual dan efisien secara kode. Membantu mengubah ide rumit menjadi antarmuka web yang intuitif menggunakan React dan Tailwind.
        </p>

        
        <div className="flex items-center gap-8">
          <button className="bg-amber-400 text-black font-semibold text-xs tracking-wider uppercase px-6 py-3 rounded-full hover:bg-amber-500 transition-all duration-300 shadow-sm">
            Explore Work
          </button>
          <a 
            href="#contact" 
            className="text-zinc-400 hover:text-white text-xs tracking-wider uppercase font-medium transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-amber-400 after:transition-all"
          >
            Get In Touch
          </a>
        </div>

      </main>

      
      <footer className="w-full text-center py-8">
        <p className="text-[10px] tracking-widest text-zinc-600 uppercase">
          © {new Date().getFullYear()} Muhammad Garuda Pratama
        </p>
      </footer>

    </div>
  );
}

export default App;