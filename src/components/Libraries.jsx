import Image from 'next/image'

import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'
import logoGo from '@/images/logos/go.svg'
import logoNode from '@/images/logos/node.svg'
import logoPhp from '@/images/logos/php.svg'
import logoPython from '@/images/logos/python.svg'
import logoRuby from '@/images/logos/ruby.svg'
import logoJava from '@/images/logos/java.svg'
import logoDotnet from '@/images/logos/dotnet.svg'

const libraries = [
  {
    href: 'https://github.com/Verifiet-us/verifiet-php',
    name: 'PHP (Coming Soon)',
    description:
      'A popular general-purpose scripting language that is especially suited to web development.',
    logo: logoPhp,
  },
  {
    href: 'https://github.com/Verifiet-us/verifiet-ruby',
    name: 'Ruby (Coming Soon)',
    description:
      'A dynamic, open source programming language with a focus on simplicity and productivity.',
    logo: logoRuby,
  },
  {
    href: 'https://github.com/Verifiet-us/verifiet-node',
    name: 'Node.js (Coming Soon)',
    description:
      'Node.js® is an open-source, cross-platform JavaScript runtime environment.',
    logo: logoNode,
  },
  {
    href: 'https://github.com/Verifiet-us/verifiet-python',
    name: 'Python (Coming Soon)',
    description:
      'Python is a programming language that lets you work quickly and integrate systems more effectively.',
    logo: logoPython,
  },
  {
    href: 'https://github.com/Verifiet-us/verifiet-go',
    name: 'Go (Coming Soon)',
    description:
      'An open-source programming language supported by Google with built-in concurrency.',
    logo: logoGo,
  },
  {
    href: 'https://github.com/Verifiet-us/verifiet-dotnet',
    name: '.Net (Coming Soon)',
    description:
      'An open-source programming language supported by Google with built-in concurrency.',
    logo: logoDotnet,
  },
  {
    href: 'https://github.com/Verifiet-us/verifiet-java',
    name: 'Java (Coming Soon)',
    description:
      'An open-source programming language supported by Google with built-in concurrency.',
    logo: logoJava,
  },
]

export function Libraries() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="official-libraries">
        Official libraries
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-x-6 gap-y-10 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:max-w-none xl:grid-cols-3">
        {libraries.map((library) => (
          <div key={library.name} className="flex flex-row-reverse gap-6">
            <div className="flex-auto">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                {library.name}
              </h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {library.description}
              </p>
              <p className="mt-4">
                <Button href={library.href} variant="text" arrow="right">
                  Read more
                </Button>
              </p>
            </div>
            <Image
              src={library.logo}
              alt=""
              className="h-12 w-12"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  )
}
