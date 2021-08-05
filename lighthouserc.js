module.exports = {
  ci: {
    collect: {
      url: 'https://www.medibank.com.au',
      // url: 'https://retail-sit03-www.digidev.ha-medibank.com/'
    },
    upload: {
      // target: 'temporary-public-storage'
      target: 'filesystem',
      outputDir: './reports'
    },
    assert: {
      preset: 'lighthouse:no-pwa',
      includePassedAssertions: true,
      assertions: {
        "categories:performance": ["error", {"minScore": 0.3}],
        "categories:accessibility": ["error", {"minScore": 0.7}],
        "categories:best-practices": ["error", {"minScore": 0.7}],
        "categories:seo": ["error", {"minScore": 0.79}],
        'csp-xss': ["warn"],
        'robots-txt': ["warn"],
        'aria-hidden-focus': ["warn"],
        'aria-valid-attr-value': ["warn"],
        'button-name': ["warn"],
        'color-contrast': ["warn"],
        'crawlable-anchors': ["warn"],
        'external-anchors-use-rel-noopener': ["warn"],
        'font-display': ["warn"],
        'heading-order': ["warn"],
        'image-alt': ["warn"],
        'image-size-responsive': ["warn"],
        'inspector-issues': ["warn"],
        'link-name': ["warn"],
        'link-text': ["warn"],
        'no-unload-listeners': ["warn"],
        'unsized-images': ["warn"],
        'unused-css-rules': ["warn"],
        'unused-javascript': ["warn"],
        'uses-rel-preconnect': ["warn"],
        'valid-source-maps': ["warn"]
      }
    }
  },
};