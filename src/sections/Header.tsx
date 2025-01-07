import LogoIcon from '@/assets/logo.svg';
import MenuIcon from '@/assets/icon-menu.svg';
import Button from '@/components/Button';

export const Header = () => {
  return (
    <header className='py-4 border-b border-white/15 md:border-none sticky top-0 backdrop-blur-sm  z-20'>
      <div className='container'>
        <div className='flex justify-between items-center md:border md:border-white/15 md:p-2.5 max-w-2xl mx-auto rounded-xl lg:backdrop-blur-none'>
          <div className='border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15'>
            <LogoIcon className='h-8 w-8' />
          </div>
          <div className='hidden md:block'>
            <nav className='flex items-center justify-center gap-8 text-sm'>
              <a className='transition text-white/70 hover:text-white' href='#'>
                Features
              </a>
              <a className='transition text-white/70 hover:text-white' href='#'>
                Developers
              </a>
              <a className='transition text-white/70 hover:text-white' href='#'>
                Pricing
              </a>
              <a className='transition text-white/70 hover:text-white' href='#'>
                Changelog
              </a>
            </nav>
          </div>
          <div className='flex gap-4 items-center'>
            <Button btnText='Join waitlist' />
            <MenuIcon className='h-8 w-8 md:hidden' />
          </div>
        </div>
      </div>
    </header>
  );
};
