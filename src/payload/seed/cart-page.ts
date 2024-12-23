import type { Page } from '../payload-types'

export const cartPage: Partial<Page> = {
  title: 'Cart',
  slug: 'cart',
  _status: 'published',
  meta: {
    title: 'Cart',
    description:
      'Your cart will sync to your user profile so you can continue shopping from any device.',
  },
  hero: {
    type: 'lowImpact',
    links: [],
    media: '',
    richText: [
      {
        type: 'h1',
        children: [
          {
            text: 'Cart',
          },
        ],
      },
      {
        type: 'p',
        children: [
          {
            text: 'This cart saves to local storage so you can continue shopping later. Once you authenticate with Payload, your cart will sync to your user profile so you can continue shopping from any device. This hero and the content below the cart are completely dynamic and ',
          },
          {
            type: 'link',
            linkType: 'custom',
            url: '/admin',
            children: [
              {
                text: 'configured in the admin dashboard',
              },
            ],
          },
        ],
      },
    ],
  },
  layout: [
    {
      blockType: 'content',
      columns: [
        {
          size: 'twoThirds',
          link: {
            type: 'reference',
            url: '',
            reference: null,
            label: '',
          },
          richText: [
            {
              children: [
                {
                  text: '',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      richText: [
        {
          children: [
            {
              text: 'المتابعة',
            },
          ],
          type: 'h4',
        },
        {
          children: [
            {
              text: 'هذا عبارة عن صنف من صنف المحتويات المخصص ',
            },
            {
              type: 'link',
              linkType: 'custom',
              url: '/admin',
              children: [
                {
                  text: 'configured in the admin dashboard',
                },
              ],
            },
            {
              text: '.',
            },
          ],
        },
      ],
      links: [
        {
          link: {
            type: 'reference',
            url: '',
            reference: {
              relationTo: 'pages',
              value: '{{PRODUCTS_PAGE_ID}}',
            },
            label: 'Continue shopping',
            appearance: 'primary',
          },
        },
      ],
      blockName: 'CTA',
      blockType: 'cta',
    },
  ],
}
