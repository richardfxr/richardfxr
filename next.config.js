/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: {
        loader: '@svgr/webpack',
        options: {
          svgo: false
        },
      },
      
    })

    return config
  },

  async redirects() {
    return [
      {
        source: '/esc',
        destination: 'https://v9.richardfxr.com/esc',
        permanent: true,
      },
      {
        source: '/esca',
        destination: 'https://v9.richardfxr.com/esca',
        permanent: true,
      },
      {
        source: '/escap',
        destination: 'https://v9.richardfxr.com/escap',
        permanent: true,
      },
      {
        source: '/escape',
        destination: 'https://v9.richardfxr.com/escape',
        permanent: true,
      },
      {
        source: '/escaped',
        destination: 'https://v9.richardfxr.com/escaped',
        permanent: true,
      },
      {
        source: '/archive',
        destination: '/projects/archive',
        permanent: true,
      },
      {
        source: '/versions',
        destination: 'https://v9.richardfxr.com/versions',
        permanent: false,
      },
      {
        source: '/playground',
        destination: 'https://v9.richardfxr.com/playground',
        permanent: true,
      },
      {
        source: '/projects/bitwit-old',
        destination: 'https://v9.richardfxr.com/projects/bitwit-old',
        permanent: false,
      },
      {
        source: '/projects/lumina',
        destination: 'https://v9.richardfxr.com/projects/lumina',
        permanent: true,
      },
      {
        source: '/projects/slabs',
        destination: 'https://v9.richardfxr.com/projects/slabs',
        permanent: true,
      },
      {
        source: '/projects/cyprium',
        destination: 'https://v9.richardfxr.com/projects/cyprium',
        permanent: true,
      },
      {
        source: '/projects/orbis',
        destination: 'https://v9.richardfxr.com/projects/orbis',
        permanent: true,
      },
      {
        source: '/projects/nudge',
        destination: 'https://v9.richardfxr.com/projects/nudge',
        permanent: true,
      },
      {
        source: '/projects/efs',
        destination: 'https://v9.richardfxr.com/projects/efs',
        permanent: false,
      },
      {
        source: '/projects/1200d',
        destination: '/projects/exploded1200d',
        permanent: true,
      },
      {
        source: '/projects/bitwit',
        destination: 'https://v9.richardfxr.com/projects/bitwit-old',
        permanent: true,
      },
      {
        source: '/projects/risd2',
        destination: '/projects/RISDsophomore',
        permanent: true,
      },
      {
        source: '/nudge',
        destination: 'https://v9.richardfxr.com/nudge',
        permanent: true,
      },
      {
        source: '/1416-str',
        destination: 'https://v9.richardfxr.com/1416-str',
        permanent: true,
      },
      {
        source: '/1416-fms',
        destination: 'https://v9.richardfxr.com/1416-fms',
        permanent: true,
      },
      {
        source: '/1416-pwr',
        destination: 'https://v9.richardfxr.com/1416-pwr',
        permanent: true,
      },
      {
        source: '/1416-err',
        destination: 'https://v9.richardfxr.com/1416-err',
        permanent: true,
      },
      {
        source: '/lumina',
        destination: 'https://v9.richardfxr.com/projects/lumina',
        permanent: true,
      },
      {
        source: '/1200d',
        destination: 'https://v9.richardfxr.com/projects/1200d',
        permanent: true,
      },
    ]
  },

  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
}