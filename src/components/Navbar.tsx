'use client';
import { usePathname } from 'next/navigation';
import { navItems, siteTitle } from '@/lib/site';

export default function Navbar() {
  const pathname = usePathname();

  function isActive(url: string): boolean {
    if (!pathname) return false;
    if (url === '/projects/') return pathname === '/projects/' || pathname === '/' || pathname.startsWith('/projects/');
    if (url === '/texts/') return pathname === '/texts/' || pathname.startsWith('/textos/');
    if (url === '/bio/') return pathname === '/bio/';
    return false;
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light" style={{ padding: '0px 0px 0px 16px' }}>
        <a className="navbar-brand" href="/">
          <h5><b>{siteTitle}</b></h5>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            {navItems.map(item => (
              <a
                key={item.url}
                className={`nav-item nav-link${isActive(item.url) ? ' active' : ''}`}
                href={item.url}
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg navbar-light" style={{ padding: '5px 0px 16px 16px' }}>
        <div>
          <div className="imgArriba" style={{ display: 'inline' }}>
            <a href="https://www.instagram.com/tomas.rawski/" target="_blank" rel="noreferrer">
              <img src="/assets/ins.png" width="30" style={{ margin: '0px 7px 0px 0px' }} alt="Instagram" />
            </a>
          </div>
          <div className="imgArriba" style={{ display: 'inline' }}>
            <a href="https://akashico.substack.com/" target="_blank" rel="noreferrer">
              <img src="/assets/flower.png" width="30" alt="Substack" />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
