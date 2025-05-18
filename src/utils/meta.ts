type MetaTag = {
    name?: string;
    property?: string;
    content: string;
};

type MetaOptions = {
    title: string;
    description?: string;
    keywords?: string;
    url?: string;
    image?: string;
    type?: string; // like "website"
};

export function setMeta(options: MetaOptions) {
    document.title = options.title;

    const metas: MetaTag[] = [
        { name: 'description', content: options.description || '' },
        { name: 'keywords', content: options.keywords || '' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        {charset: 'UTF-8'} as unknown as MetaTag,

        // Open Graph
        { property: 'og:title', content: options.title },
        { property: 'og:description', content: options.description || '' },
        { property: 'og:type', content: options.type || 'website' },
        { property: 'og:url', content: options.url || window.location.href },
        { property: 'og:image', content: options.image || '' },

        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: options.title },
        { name: 'twitter:description', content: options.description || '' },
        { name: 'twitter:image', content: options.image || '' },
    ];

    // Remove old dynamic tags (if any)
    const dynamicTags = document.head.querySelectorAll('[data-dynamic-meta]');
    dynamicTags.forEach(tag => tag.remove());

    // Append new tags
    metas.forEach(meta => {
        const tag = document.createElement('meta');
        if (meta.name) tag.setAttribute('name', meta.name);
        if (meta.property) tag.setAttribute('property', meta.property);
        if ((meta as any).charset) tag.setAttribute('charset', 'UTF-8');
        tag.setAttribute('content', meta.content);
        tag.setAttribute('data-dynamic-meta', 'true'); // Mark for cleanup
        document.head.appendChild(tag);
    });
}
