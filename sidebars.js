const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'EUID Overview',
      link: {
        type: 'doc',
        id: 'intro',
      },
      items: [
        'overviews/overview-publishers',
        'overviews/overview-advertisers',
        'overviews/overview-dsps',
        'overviews/overview-data-providers',
        'overviews/overview-operators-private',
      ],
    },

    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'getting-started/gs-account-setup',
        'getting-started/gs-credentials',
        'getting-started/gs-permissions',
        'getting-started/gs-auth',
        'getting-started/gs-environments',
        'getting-started/gs-encryption-decryption',
        'getting-started/gs-normalization-encoding',
        'getting-started/gs-opt-out',
        'getting-started/gs-faqs',
      ],
    },

    {
      type: 'category',
      label: 'Integration Guides',
      link: {
        type: 'doc',
        id: 'guides/summary-guides',
      },
      collapsed: true,

      items: [
        {
          type: 'category',
          label: 'Publisher Integrations',
          link: {
            type: 'generated-index',
          },
          collapsed: false,

          items: [
          {
            type: 'category',
            label: 'Web',
            link: {
              type: 'doc',
              id: 'guides/integration-options-publisher-web',
            },
            collapsed: true,
            items: [
              {
                type: 'category',
                label: 'Prebid',
                link: {
                  type: 'doc',
                  id: 'guides/integration-prebid',
                },
                collapsed: true,
                items: [
                  'guides/integration-prebid-client-side',
                  'guides/integration-prebid-client-server',
                ],
              },

              {
                type: 'category',
                label: 'JavaScript',
                link: {
                  type: 'doc',
                  id: 'guides/integration-javascript',
                },
                collapsed: true,
                items: [
                  'guides/integration-javascript-client-side',
                  'guides/integration-javascript-client-server',
                ],
              },
              'guides/integration-publisher-server-side',
            ],
          },

          {
            type: 'category',
            label: 'Mobile',
            link: {
              type: 'doc',
              id: 'guides/integration-mobile-overview',
            },
            collapsed: true,
            items: [
              'guides/integration-mobile-client-side',
              'guides/integration-mobile-client-server',
            ],
          },

          'guides/integration-ctv-guide',

            {
              type: 'category',
              label: 'Prebid',
              link: {
                type: 'doc',
                id: 'guides/integration-prebid',
              },
              collapsed: true,
              items: [
                'guides/integration-prebid-client-side',
                'guides/integration-prebid-client-server',
                'guides/integration-prebid-mobile-summary',
              ],
            },

            {
              type: 'category',
              label: 'Google Ad Manager',
              link: {
                type: 'generated-index',
              },
              collapsed: true,
              items: [
                'guides/mobile-plugin-gma-ios',
                'guides/mobile-plugin-ima-android',
                'guides/mobile-plugin-ima-ios',
              ],
            },

        ],
        },

        {
          type: 'category',
          label: 'Advertiser/Data Provider Integrations',
          link: {
            type: 'generated-index',
          },
          collapsed: true,
          items: [
            'guides/advertiser-dataprovider-guide',
          ],
        },

        'guides/dsp-guide',

        {
          type: 'category',
          label: 'Private Operator Integrations',
          link: {
            type: 'generated-index',
          },
          collapsed: true,
          items: [
            'guides/operator-guide-aws-marketplace',
          ],
        },
       ],
    },

    {
      type: 'category',
      label: 'SDKs',
      link: {
        type: 'doc',
        id: 'sdks/summary-sdks',
      },
      collapsed: true,
      items: [
        'sdks/sdk-ref-javascript',
        'sdks/sdk-ref-java',
        'sdks/sdk-ref-python',
        'sdks/sdk-ref-csharp-dotnet',
        'sdks/sdk-ref-cplusplus',
        'sdks/sdk-ref-android',
        'sdks/sdk-ref-ios',
      ],
    },

    {
      type: 'category',
      label: 'Endpoints',
      link: {
        type: 'doc',
        id: 'endpoints/summary-endpoints',
      },
      collapsed: false,
      items: [
        'endpoints/post-token-generate',
        'endpoints/post-token-validate',
        'endpoints/post-token-refresh',
        'endpoints/post-identity-buckets',
        'endpoints/post-identity-map',
        'endpoints/post-optout-status',
      ],
    },

    {
      type: 'category',
      label: 'Reference Information',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'ref-info/ref-operators-public-private',
        'ref-info/ref-server-side-token-generation',
        'ref-info/ref-integration-approaches',
        'ref-info/ref-areas-of-coverage',
        'ref-info/ref-consent-samples',
      ],
    },

    'ref-info/glossary-uid',
    'ref-info/updates-doc',

  ],
};
module.exports = sidebars;