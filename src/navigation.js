import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Videos',
      links: [
        {
          text: 'YouTube',
          href: 'https://serp.ly/@daftfm/youtube',
          target: '_blank',
        },
      ],
    },
    {
      text: 'Content',
      links: [
        {
          text: 'Blog',
          href: getBlogPermalink(),
        },
        // {
        //   text: 'Glossary',
        //   href: getPermalink('/glossary'),
        // },
      ],
    },
    // {
    //   text: '',
    //   links: [
    //     {
    //       text: 'Category',
    //       href: getPermalink('/category//'),
    //     },
    //   ],
    // },
    
   
  ],
  actions: [{ text: 'Subscribe', href: '/subscribe/', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Company',
      links: [
        { text: 'Website', href: 'https://daft.fm' },
      ],
    },
    {
      title: 'Community',
      links: [
        { text: 'Newsletter', href: '/subscribe/' },
        // { text: 'Forum', href: '/#' },
        // { text: 'Community', href: '/#' },
      ],
    },
    {
      title: 'Links',
      links: [
        // { text: 'Substack', href: '#', target: '_blank' },
      ],
    },
    {
      title: 'Boring Stuff',
      links: [
        { text: 'Privacy Policy', href: '/privacy/' },
        { text: 'Terms & Conditions', href: '/terms/' },
        { text: 'Affiliate Disclosure', href: '/affiliate-disclosure/' },
        { text: 'DMCA', href: '/dmca/' },
        { text: 'Archive', href: '/archive/' },
        { text: 'Tags', href: '/tags/' },
      ],
    },
  ],
  //   secondaryLinks: [
  //     { text: 'Free Stuff', href: 'https://stuff' },
  //   ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://serp.ly/@daftfm/twitter', target: '_blank' },
    {
      ariaLabel: 'Instagram',
      icon: 'tabler:brand-instagram',
      href: 'https://serp.ly/@daftfm/instagram',
      target: '_blank',
    },
    {
      ariaLabel: 'Facebook',
      icon: 'tabler:brand-facebook',
      href: 'https://serp.ly/@daftfm/facebook',
      target: '_blank',
    },
    {
      ariaLabel: 'YouTube',
      icon: 'tabler:brand-youtube',
      href: 'https://serp.ly/@daftfm/youtube',
      target: '_blank',
    },
    {
      ariaLabel: 'Linkedin',
      icon: 'tabler:brand-linkedin',
      href: 'https://serp.ly/@daftfm/linkedin',
      target: '_blank',
    },
    {
      ariaLabel: 'TikTok',
      icon: 'tabler:brand-tiktok',
      href: 'https://serp.ly/@daftfm/tiktok',
      target: '_blank',
    },
  ],
};
