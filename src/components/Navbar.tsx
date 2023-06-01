import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'
import { buttonVariants } from './ui/Button'
import SignInButton from './ui/SignInButton'
import SignOutButton from './ui/SignOutButton'
import MetamaskButton from './ui/MetamaskButton'

const Navbar = async () => {
  const session = await getServerSession(authOptions)

  return (
    <div className='flex fixed top-0 right-0 left-0 z-50 justify-between items-center h-20 border-b shadow-sm backdrop-blur-sm bg-white/75 dark:bg-slate-900/75 border-slate-300 dark:border-slate-700'>
      <div className='container flex justify-between items-center mx-auto w-full max-w-7xl'>
        <Link href='/' className={buttonVariants({ variant: 'link' })}>
          YUGI
        </Link>

        <div className='md:hidden'>
          <ThemeToggle />
        </div>

        <div className='hidden gap-4 md:flex'>
          <ThemeToggle />
          <Link
            href='/documentation'
            className={buttonVariants({ variant: 'ghost' })}>
            Collelction
            
          </Link>
          <MetamaskButton/>
          {session ? (
            <>
              <Link
                className={buttonVariants({ variant: 'ghost' })}
                href='/dashboard'>
                Dashboard
              </Link>
              <MetamaskButton/>
              <SignOutButton />
            </>
          ) : (
            <SignInButton />
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar