import { FOOTER_CONTENT } from "../constants";

const Footer = () => {
  const handleNavigation = (href: string): void => {
    if (href.startsWith("#")) {
      // Scroll to section within the page
      const sectionId = href.replace("#", "");
      if (window.location.pathname !== "/") {
        // Navigate to homepage with the section hash
        window.location.href = `/#${sectionId}`;
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    } else {
      window.location.href = href;
    }
  };

  return (
    <footer className="mt-20 text-neutral-400">
      <div className="max-w-7xl mx-auto px-auto px-4 border-t border-neutral-800">
        <div className="px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {FOOTER_CONTENT.sections.map((section, index) => (
              <div key={index}>
                <h3 className="text-white font-medium mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      {link.href.startsWith("http") ? (
                        // Open external links in a new tab
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-neutral-200"
                        >
                          {link.text}
                        </a>
                      ) : (
                        // Handle internal links and smooth scroll
                        <button
                          onClick={() => handleNavigation(link.href)}
                          className="text-white hover:text-neutral-200"
                        >
                          {link.text}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="my-12 border-t border-neutral-800 pt-8 text-center text-sm text-neutral-500">
          <div className="flex align-center justify-center">
            <div className="text-xs">
              <p>{FOOTER_CONTENT.copyrightText}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
