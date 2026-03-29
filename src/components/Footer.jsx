export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#f3f3f8] w-full py-12 border-t border-[#c4c6cf]/15">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 gap-6 max-w-7xl mx-auto">
        <div className="font-['Manrope'] font-bold text-[#001f3f]">
          Davis Ccoica
        </div>
        <div className="text-[#1a1c1f] font-['Inter'] text-sm uppercase tracking-widest">
          © {year} Davis Ccoica • Tacna, Peru
        </div>
        <div className="flex max-lg:flex-col max-lg:justify-center max-lg:items-center gap-8">
          <a
            className="text-[#43474e] hover:text-[#001f3f] transition-colors font-['Inter'] text-sm uppercase tracking-widest"
            href="mailto:brandoncq036@hotmail.com"
          >
            brandoncq036@hotmail.com
          </a>
          <a
            className="text-[#43474e] hover:text-[#001f3f] transition-colors font-['Inter'] text-sm uppercase tracking-widest"
            href="https://www.linkedin.com/in/davis-ccoica-quispe-54b344289"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            className="text-[#43474e] hover:text-[#001f3f] transition-colors font-['Inter'] text-sm uppercase tracking-widest"
            href="https://github.com/Brandoncq"
            translate="no"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </div>
      <div className="mt-10 text-center">
        <p className="text-xs text-[#6b7280] italic tracking-wide select-none">
          Proud grandson of farmers.
        </p>
      </div>
    </footer>
  );
}
