import { GitHub, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <p className="text-sm text-gray-600 mb-4 md:mb-0">© 2026 DevGroup.</p>
        <div className="flex space-x-4">
          <a href="mailto:devashish@devgroup.company" className="text-gray-600 hover:text-gray-900">
            devashish@devgroup.company
          </a>
          <a href="https://github.com/devgroup" target="_blank" rel="noopener" className="text-gray-600 hover:text-gray-900">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/company/devgroup" target="_blank" rel="noopener" className="text-gray-600 hover:text-gray-900">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
